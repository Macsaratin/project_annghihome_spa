import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const CreateTeamMemberModal = ({ show, onClose, onSave }) => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState("");
  const [socialLinks, setSocialLinks] = useState("");

  const handleSave = () => {
    const newMember = {
      id: Date.now().toString(),
      name,
      position,
      bio,
      image,
      socialLinks,
      order: 0,
      isActive: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    onSave(newMember);
    setName("");
    setPosition("");
    setBio("");
    setImage("");
    setSocialLinks("");
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Thêm thành viên nhóm</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Họ tên</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="position">
            <Form.Label>Chức vụ</Form.Label>
            <Form.Control
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="bio">
            <Form.Label>Bio</Form.Label>
            <Form.Control
              type="text"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="image">
            <Form.Label>Ảnh</Form.Label>
            <Form.Control
              type="file"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="socialLinks">
            <Form.Label>Liên kết xã hội</Form.Label>
            <Form.Control
              type="text"
              value={socialLinks}
              onChange={(e) => setSocialLinks(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Đóng
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Lưu
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateTeamMemberModal;
