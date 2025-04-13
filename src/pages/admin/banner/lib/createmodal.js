import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

const CreateSliderModal = ({ show, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    url: "",
    link: "",
    isActive: true,
    order: 0,
    buttonText: "",
    mobileUrl: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSave(formData);
    onClose(); // Close modal after saving
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      title: "",
      subtitle: "",
      url: "",
      link: "",
      isActive: true,
      order: 0,
      buttonText: "",
      mobileUrl: "",
      description: "",
    });
  };

  return (
    <Modal show={show} onHide={onClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Thêm Mới Slider</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {/* Tiêu đề và Phụ đề */}
          <Row className="mb-3">
            <Col md={6}>
              <Form.Label>Tiêu đề</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập tiêu đề slider"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </Col>
            <Col md={6}>
              <Form.Label>Phụ đề</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập phụ đề slider"
                name="subtitle"
                value={formData.subtitle}
                onChange={handleChange}
              />
            </Col>
          </Row>

          {/* URL Ảnh và Link */}
          <Row className="mb-3">
            <Col md={6}>
              <Form.Label>URL Ảnh</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập URL ảnh slider"
                name="url"
                value={formData.url}
                onChange={handleChange}
              />
            </Col>
            <Col md={6}>
              <Form.Label>Link</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập link dẫn đến slider"
                name="link"
                value={formData.link}
                onChange={handleChange}
              />
            </Col>
          </Row>

          {/* Thứ tự và Văn bản nút */}
          <Row className="mb-3">
            <Col md={6}>
              <Form.Label>Thứ tự</Form.Label>
              <Form.Control
                type="number"
                name="order"
                value={formData.order}
                onChange={handleChange}
              />
            </Col>
            <Col md={6}>
              <Form.Label>Văn bản nút</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập văn bản cho nút"
                name="buttonText"
                value={formData.buttonText}
                onChange={handleChange}
              />
            </Col>
          </Row>

          {/* URL Ảnh Di động */}
          <Row className="mb-3">
            <Col md={6}>
              <Form.Label>URL Ảnh Di động</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập URL ảnh cho di động"
                name="mobileUrl"
                value={formData.mobileUrl}
                onChange={handleChange}
              />
            </Col>
          </Row>

          {/* Mô tả */}
          <Form.Group className="mb-3">
            <Form.Label>Mô tả</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Đóng
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Lưu Slider
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateSliderModal;
