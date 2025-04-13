import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const CreateAboutModal = ({ show, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    mission: "",
    vision: "",
    history: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const newItem = {
      ...formData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    onSave(newItem);
    onClose(); // đóng modal
    setFormData({
      title: "",
      content: "",
      mission: "",
      vision: "",
      history: "",
    });
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Thêm mục Giới thiệu</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="title" className="mb-3">
            <Form.Label>Tiêu đề</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Nhập tiêu đề"
            />
          </Form.Group>
          <Form.Group controlId="content" className="mb-3">
            <Form.Label>Nội dung</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Nhập nội dung chính"
            />
          </Form.Group>
          <Form.Group controlId="mission" className="mb-3">
            <Form.Label>Sứ mệnh</Form.Label>
            <Form.Control
              type="text"
              name="mission"
              value={formData.mission}
              onChange={handleChange}
              placeholder="Nhập sứ mệnh"
            />
          </Form.Group>
          <Form.Group controlId="vision" className="mb-3">
            <Form.Label>Tầm nhìn</Form.Label>
            <Form.Control
              type="text"
              name="vision"
              value={formData.vision}
              onChange={handleChange}
              placeholder="Nhập tầm nhìn"
            />
          </Form.Group>
          <Form.Group controlId="history" className="mb-3">
            <Form.Label>Lịch sử</Form.Label>
            <Form.Control
              type="text"
              name="history"
              value={formData.history}
              onChange={handleChange}
              placeholder="Nhập lịch sử phát triển"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Đóng
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Lưu
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateAboutModal;
