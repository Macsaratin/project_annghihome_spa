import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const CreateStoreInfoModal = ({ show, onClose, onCreate }) => {
  const [form, setForm] = useState({
    name: "",
    logo: "",
    favicon: "",
    hotline: "",
    footer: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onCreate({ ...form, id: Date.now().toString(), createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() });
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Thêm thông tin cửa hàng</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Tên</Form.Label>
            <Form.Control name="name" value={form.name} onChange={handleChange} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Logo</Form.Label>
            <Form.Control name="logo" value={form.logo} onChange={handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Favicon</Form.Label>
            <Form.Control name="favicon" value={form.favicon} onChange={handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Hotline</Form.Label>
            <Form.Control name="hotline" value={form.hotline} onChange={handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Footer</Form.Label>
            <Form.Control name="footer" value={form.footer} onChange={handleChange} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Đóng</Button>
        <Button variant="primary" onClick={handleSubmit}>Tạo mới</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateStoreInfoModal;
