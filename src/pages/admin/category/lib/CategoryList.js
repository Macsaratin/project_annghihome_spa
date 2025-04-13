import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryModal from "./CategoryModal"; // Import CategoryModal

const CategoryList = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Dịch vụ khám tổng quát",
      status: 1,
      thumbnail: "https://via.placeholder.com/80",
    },
    {
      id: 2,
      name: "Dịch vụ tiêm chủng",
      status: 0,
      thumbnail: "https://via.placeholder.com/80",
    },
  ]);
  const [showModal, setShowModal] = useState(false);  // Trạng thái để hiển thị modal
  const [searchTerm, setSearchTerm] = useState("");  // Trạng thái cho tìm kiếm danh mục

  const handleOpenTrash = () => {
    navigate("/admin/category/trash");
  };

  const handleOpenEdit = (id) => {
    navigate(`/admin/category/edit/${id}`);
  };

  const handleDeleteCategory = (id) => {
    const updatedCategories = categories.filter((cat) => cat.id !== id);
    setCategories(updatedCategories);
  };

  const handleSaveCategory = (newCategory) => {
    setCategories([
      ...categories,
      { ...newCategory, id: categories.length + 1 },
    ]);
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
            onClick={() => setShowModal(true)} // Mở modal khi nhấn nút "Thêm danh mục"
          >
            <i className="bi bi-plus"></i> Thêm danh mục
          </button>
          <button className="btn btn-danger m-2" onClick={handleOpenTrash}>
            <i className="bi bi-trash"></i> Thùng rác
          </button>
        </div>
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
                    src={item.thumbnail}
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

      {/* Modal Thêm danh mục */}
      <CategoryModal
        show={showModal}
        handleClose={() => setShowModal(false)}  // Đóng modal
        handleSave={handleSaveCategory}  // Lưu danh mục mới
        parentOptions={categories}  // Truyền các danh mục hiện tại làm danh mục cha (nếu có)
      />
    </div>
  );
};

export default CategoryList;
