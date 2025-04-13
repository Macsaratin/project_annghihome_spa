import React, { useState } from "react";

const CreatePolicyModal = ({ show, onClose, onCreate }) => {
  const [newPolicy, setNewPolicy] = useState({
    title: "",
    slug: "",
    content: "",
    excerpt: "",
    isPublished: true,
    isActive: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPolicy((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(newPolicy); // Gửi chính sách mới lên list
  };

  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Thêm Chính Sách Mới</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Tiêu đề</label>
            <input
              type="text"
              name="title"
              value={newPolicy.title}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Slug</label>
            <input
              type="text"
              name="slug"
              value={newPolicy.slug}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Nội dung</label>
            <textarea
              name="content"
              value={newPolicy.content}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Tóm tắt</label>
            <input
              type="text"
              name="excerpt"
              value={newPolicy.excerpt}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Hoạt động</label>
            <input
              type="checkbox"
              name="isActive"
              checked={newPolicy.isActive}
              onChange={() =>
                setNewPolicy((prev) => ({
                  ...prev,
                  isActive: !prev.isActive,
                }))
              }
            />
          </div>
          <div className="form-group">
            <label>Đã xuất bản</label>
            <input
              type="checkbox"
              name="isPublished"
              checked={newPolicy.isPublished}
              onChange={() =>
                setNewPolicy((prev) => ({
                  ...prev,
                  isPublished: !prev.isPublished,
                }))
              }
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Thêm
          </button>
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Đóng
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePolicyModal;
