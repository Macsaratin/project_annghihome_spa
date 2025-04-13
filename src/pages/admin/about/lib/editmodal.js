import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditAboutModal = ({ show, onClose, onSave, aboutData }) => {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    content: "",
    mission: "",
    vision: "",
    history: "",
    createdAt: "",
    updatedAt: "",
  });

  useEffect(() => {
    if (aboutData) {
      setFormData({ ...aboutData });
    }
  }, [aboutData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const updatedData = {
      ...formData,
      updatedAt: new Date().toISOString(),
    };
    onSave(updatedData);
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Chỉnh sửa Giới thiệu</Modal.Title>
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
            />
          </Form.Group>
          <Form.Group controlId="mission" className="mb-3">
            <Form.Label>Sứ mệnh</Form.Label>
            <Form.Control
              type="text"
              name="mission"
              value={formData.mission}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="vision" className="mb-3">
            <Form.Label>Tầm nhìn</Form.Label>
            <Form.Control
              type="text"
              name="vision"
              value={formData.vision}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="history" className="mb-3">
            <Form.Label>Lịch sử</Form.Label>
            <Form.Control
              type="text"
              name="history"
              value={formData.history}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Hủy
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Cập nhật
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditAboutModal;
