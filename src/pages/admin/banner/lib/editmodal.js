import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditSliderModal = ({ show, onClose, onSave, sliderData }) => {
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

  useEffect(() => {
    if (sliderData) {
      setFormData(sliderData);
    }
  }, [sliderData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSave(formData);  // Call the onSave function to save the edited slider
    onClose(); // Close the modal after saving
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Chỉnh Sửa Slider</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="title">
            <Form.Label>Tiêu đề</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập tiêu đề slider"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="subtitle">
            <Form.Label>Phụ đề</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập phụ đề slider"
              name="subtitle"
              value={formData.subtitle}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="url">
            <Form.Label>URL Ảnh</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập URL ảnh slider"
              name="url"
              value={formData.url}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="link">
            <Form.Label>Link</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập link dẫn đến slider"
              name="link"
              value={formData.link}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="order">
            <Form.Label>Thứ tự</Form.Label>
            <Form.Control
              type="number"
              name="order"
              value={formData.order}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="buttonText">
            <Form.Label>Văn bản nút</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập văn bản cho nút"
              name="buttonText"
              value={formData.buttonText}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="mobileUrl">
            <Form.Label>URL Ảnh Di động</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập URL ảnh cho di động"
              name="mobileUrl"
              value={formData.mobileUrl}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="description">
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
          Lưu Thay Đổi
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditSliderModal;
