import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormBlog from "./FormBlog"; // Đảm bảo đường dẫn đúng

const BlogList = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      image: "https://via.placeholder.com/100",
      title: "5 cách để trang trí nội thất hiệu quả",
      description: "Khám phá những mẹo đơn giản giúp không gian sống trở nên ấn tượng hơn...",
      name: "Nguyễn Văn A",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/100",
      title: "Xu hướng nội thất 2025",
      description: "Tổng hợp những xu hướng thiết kế nổi bật sẽ thống trị trong năm tới.",
      name: "Trần Thị B",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/100",
      title: "Mẹo chọn đồ gỗ bền đẹp",
      description: "Bí quyết lựa chọn đồ nội thất bằng gỗ vừa đẹp vừa bền theo thời gian.",
      name: "Lê Văn C",
    },
  ]);

  const handleOpenTrash = () => {
    navigate("/admin/blog/trash");
  };
  const handleOpenEdit = () => {
    navigate("/admin/blog/edit");
  };

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleSave = (data) => {
    const newBlog = {
      ...data,
      id: blogs.length + 1,
    };
    setBlogs([...blogs, newBlog]);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="mb-0">Blog</h2>
        <div className="d-flex gap-2">
          <button className="btn btn-primary" onClick={handleOpen}>
            <i className="bi bi-plus-circle me-2"></i>Thêm mới
          </button>
          <button className="btn btn-danger" onClick={handleOpenTrash}>
            <i className="bi bi-trash me-2"></i>Thùng rác
          </button>
        </div>
      </div>

      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>Hình ảnh</th>
            <th>Tiêu đề</th>
            <th>Mô tả</th>
            <th>Tác giả</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog.id}>
              <td>
                <img
                  src={blog.image}
                  alt="Blog"
                  width="100"
                  height="100"
                  style={{ objectFit: "cover" }}
                />
              </td>
              <td>{blog.title}</td>
              <td>{blog.description}</td>
              <td>{blog.name}</td>
              <td className="d-flex gap-2">
                <button className="btn btn-warning btn-sm">
                  <i className="bi bi-pencil-square" onClick={handleOpenEdit}></i>
                </button>
                <button className="btn btn-danger btn-sm">
                  <i className="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal thêm blog */}
      <FormBlog show={showModal} handleClose={handleClose} handleSave={handleSave} />
    </div>
  );
};

export default BlogList;
