import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const CreatePartnerModal = ({ show, onClose, onCreate }) => {
  const [name, setName] = useState("");
  const [logo, setLogo] = useState("");
  const [website, setWebsite] = useState("");

  const handleSubmit = () => {
    const newPartner = {
      id: Date.now().toString(),
      name,
      logo,
      website,
      isActive: true,
    };
    onCreate(newPartner);
    setName("");
    setLogo("");
    setWebsite("");
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Thêm đối tác mới</Modal.Title>
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
          Thêm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreatePartnerModal;
