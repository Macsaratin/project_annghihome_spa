"use client"
import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import { FaEdit, FaTrashAlt, FaPlus } from "react-icons/fa";
import CreateAboutModal from "./createmodal";
import EditAboutModal from "./editmodal";
import { useNavigate } from "react-router-dom";
const AboutList = () => {
  const [aboutItems, setAboutItems] = useState([
    {
      id: "1",
      title: "Về Chúng Tôi",
      content: "Chúng tôi là công ty tiên phong trong lĩnh vực ABC...",
      mission: "Mang lại giá trị cho khách hàng",
      vision: "Trở thành công ty hàng đầu",
      history: "Thành lập năm 2010",
      createdAt: "2025-04-01T10:00:00",
      updatedAt: "2025-04-10T12:00:00",
    },
  ]);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedAbout, setSelectedAbout] = useState(null);
  const navigate = useNavigate();

  const handleSaveAbout = (newAbout) => {
    setAboutItems((prev) => [...prev, newAbout]);
  };

  const handleUpdateAbout = (updatedItem) => {
    setAboutItems((prev) =>
      prev.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
  };

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa mục này?")) {
      setAboutItems(aboutItems.filter((item) => item.id !== id));
    }
  };

  const handleEdit = (item) => {
    setSelectedAbout(item);
    setShowEditModal(true);
  };
  const handleOpenTrash = () => {
    navigate("/admin/about/trash");
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Danh sách Giới thiệu</h3>
        <div className="d-flex gap-2">
            <Button variant="primary" onClick={() => setShowCreateModal(true)}>
            <FaPlus /> Thêm mục
            </Button>
            <Button variant="danger" onClick={handleOpenTrash}>
                <FaTrashAlt /> Thùng rác
            </Button>
        </div>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Tiêu đề</th>
            <th>Nội dung</th>
            <th>Sứ mệnh</th>
            <th>Tầm nhìn</th>
            <th>Lịch sử</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {aboutItems.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.content}</td>
              <td>{item.mission}</td>
              <td>{item.vision}</td>
              <td>{item.history}</td>
              <td className="d-flex justify-content-center align-items-center">
                <Button
                  variant="warning"
                  size="sm"
                  onClick={() => handleEdit(item)}
                  className="me-2"
                >
                  <FaEdit />
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(item.id)}
                >
                  <FaTrashAlt />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Create Modal */}
      <CreateAboutModal
        show={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onSave={handleSaveAbout}
      />

      {/* Edit Modal */}
      <EditAboutModal
        show={showEditModal}
        onClose={() => setShowEditModal(false)}
        onSave={handleUpdateAbout}
        aboutData={selectedAbout}
      />
    </div>
  );
};

export default AboutList;
