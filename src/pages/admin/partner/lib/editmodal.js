import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditPartnerModal = ({ show, onClose, partner, onUpdate }) => {
  const [name, setName] = useState("");
  const [logo, setLogo] = useState("");
  const [website, setWebsite] = useState("");

  useEffect(() => {
    if (partner) {
      setName(partner.name);
      setLogo(partner.logo);
      setWebsite(partner.website);
    }
  }, [partner]);

  const handleSubmit = () => {
    const updatedPartner = {
      ...partner,
      name,
      logo,
      website,
      updatedAt: new Date().toISOString(),
    };
    onUpdate(updatedPartner);
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Chỉnh sửa đối tác</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Tên đối tác</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập tên đối tác"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="logo">
            <Form.Label>Logo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập đường dẫn logo"
              value={logo}
              onChange={(e) => setLogo(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="website">
            <Form.Label>Website</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Đóng
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Cập nhật
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default EditPartnerModal;
