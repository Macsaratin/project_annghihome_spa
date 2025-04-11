import React, { useState } from "react";
import CategoryModal from "./CategoryModal"; 
import { useNavigate } from "react-router-dom";

const CategoryList = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
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

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleOpenTrash = () => {
    navigate("/admin/category/trash");
  };
  const handleOpenEdit =()=>{
    navigate("/admin/footer/edit");

  }

  const handleSaveCategory = (newCategory) => {
    setCategories([
      ...categories,
      { ...newCategory, id: categories.length + 1 },
    ]);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Danh sách danh mục dịch vụ</h2>
        <div className="d-flex gap-2">
          <button className="btn btn-primary m-2" onClick={handleOpenModal}>
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
          {categories.map((item) => (
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
                  <button className="btn btn-sm btn-warning">
                    <i className="bi bi-pencil-square"></i>
                  </button>
                  <button className="btn btn-sm btn-danger">
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <CategoryModal
        show={showModal}
        handleClose={handleCloseModal}
        handleSave={handleSaveCategory}
      />
    </div>
  );
};

export default CategoryList;
