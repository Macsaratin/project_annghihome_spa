import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CategoryModal from "./CategoryModal"; // Import CategoryModal
import categoryService from "../../../functionservice/categoryService"; // Import categoryService

const CategoryList = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await categoryService.getAllCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleOpenTrash = () => {
    navigate("/admin/category/trash");
  };

  const handleOpenEdit = (id) => {
    navigate(`/admin/category/edit/${id}`);
  };

  const handleDeleteCategory = async (id) => {
    try {
      await categoryService.deleteCategory(id);
      setCategories(categories.filter((cat) => cat.id !== id));
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  const handleSaveCategory = (newCategory) => {
    setCategories([...categories, { ...newCategory, id: categories.length + 1 }]);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Danh sách danh mục dịch vụ</h2>
        <div className="d-flex gap-2">
          <button
            className="btn btn-primary m-2"
            onClick={() => setShowModal(true)} // Show modal when clicking "Add Category"
          >
            <i className="bi bi-plus"></i> Thêm danh mục
          </button>
          <button className="btn btn-danger m-2" onClick={handleOpenTrash}>
            <i className="bi bi-trash"></i> Thùng rác
          </button>
        </div>
      </div>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Tìm kiếm danh mục"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>Ảnh</th>
            <th>Tên danh mục</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {filteredCategories.length > 0 ? (
            filteredCategories.map((item) => (
              <tr key={item.id}>
                <td>
                  <img
                    src={item.imageUrl || "default-image-url.jpg"} // Fallback image URL if none provided
                    alt={item.name}
                    width="80"
                    className="rounded"
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.status === 1 ? "Hiển thị" : "Ẩn"}</td>
                <td>
                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-sm btn-warning"
                      onClick={() => handleOpenEdit(item.id)}
                    >
                      <i className="bi bi-pencil-square"></i>
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDeleteCategory(item.id)}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                Không có danh mục nào phù hợp với tìm kiếm
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Category Modal for adding new category */}
      <CategoryModal
        show={showModal}
        handleClose={() => setShowModal(false)} // Close modal
        handleSave={handleSaveCategory} // Save new category
        parentOptions={categories} // Pass existing categories as parent options (if needed)
      />
    </div>
  );
};

export default CategoryList;
