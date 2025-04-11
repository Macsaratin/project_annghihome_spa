import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const FormBlog = ({ show, handleClose, handleSave, defaultData = {} }) => {
  const [formData, setFormData] = useState({
    image: defaultData.image || "",
    title: defaultData.title || "",
    description: defaultData.description || "",
    name: defaultData.name || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData((prev) => ({
        ...prev,
        image: imageUrl,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave(formData);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Blog Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {/* Upload hình ảnh */}
          <Form.Group className="mb-3">
            <Form.Label>Hình ảnh</Form.Label>
            <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
            {formData.image && (
              <img
                src={formData.image}
                alt="preview"
                className="mt-2"
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Tiêu đề</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập tiêu đề"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Mô tả</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Nhập mô tả"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Tác giả</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập tên tác giả"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <div className="text-end">
            <Button variant="secondary" onClick={handleClose} className="me-2">
              Hủy
            </Button>
            <Button type="submit" variant="primary">
              Lưu
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormBlog;
