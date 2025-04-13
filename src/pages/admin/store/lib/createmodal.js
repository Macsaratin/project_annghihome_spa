import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const CreateStoreModal = ({ show, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
    phone: "",
    email: "",
    openingHours: "",
    socialLinks: "",
    metaTitle: "",
    metaDescription: "",
    metaKeywords: "",
    googleMapsUrl: "",
    latitude: "",
    longitude: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSave({ ...formData, id: Date.now().toString() });
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Thêm cửa hàng mới</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Tên cửa hàng</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Mô tả</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              rows={2}
              value={formData.description}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="address">
            <Form.Label>Địa chỉ</Form.Label>
            <Form.Control
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="city">
            <Form.Label>Thành phố</Form.Label>
            <Form.Control
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="province">
            <Form.Label>Tỉnh</Form.Label>
            <Form.Control
              type="text"
              name="province"
              value={formData.province}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="postalCode">
            <Form.Label>Mã bưu điện</Form.Label>
            <Form.Control
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="phone">
            <Form.Label>Số điện thoại</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="openingHours">
            <Form.Label>Giờ mở cửa</Form.Label>
            <Form.Control
              type="text"
              name="openingHours"
              value={formData.openingHours}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="socialLinks">
            <Form.Label>Liên kết mạng xã hội</Form.Label>
            <Form.Control
              type="text"
              name="socialLinks"
              value={formData.socialLinks}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="metaTitle">
            <Form.Label>Meta Title</Form.Label>
            <Form.Control
              type="text"
              name="metaTitle"
              value={formData.metaTitle}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="metaDescription">
            <Form.Label>Meta Description</Form.Label>
            <Form.Control
              type="text"
              name="metaDescription"
              value={formData.metaDescription}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="metaKeywords">
            <Form.Label>Meta Keywords</Form.Label>
            <Form.Control
              type="text"
              name="metaKeywords"
              value={formData.metaKeywords}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="googleMapsUrl">
            <Form.Label>Google Maps URL</Form.Label>
            <Form.Control
              type="text"
              name="googleMapsUrl"
              value={formData.googleMapsUrl}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="latitude">
            <Form.Label>Vĩ độ (Latitude)</Form.Label>
            <Form.Control
              type="number"
              name="latitude"
              value={formData.latitude}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="longitude">
            <Form.Label>Kinh độ (Longitude)</Form.Label>
            <Form.Control
              type="number"
              name="longitude"
              value={formData.longitude}
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
          Lưu cửa hàng
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateStoreModal;
