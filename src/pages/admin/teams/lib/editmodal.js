import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditTeamMemberModal = ({ show, onClose, member, onUpdate }) => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState(null);  
  const [socialLinks, setSocialLinks] = useState("");

  useEffect(() => {
    if (member) {
      setName(member.name);
      setPosition(member.position);
      setBio(member.bio);
      setImage(member.image); 
      setSocialLinks(member.socialLinks);
    }
  }, [member]);
  const handleUpdate = () => {
    const updatedMember = {
      ...member,
      name,
      position,
      bio,
      image,
      socialLinks,
      updatedAt: new Date().toISOString(),
    };
    onUpdate(updatedMember); 
  };


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);  
    }
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Chỉnh sửa thành viên nhóm</Modal.Title>
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
              onChange={handleImageChange} 
            />
            {image && <div>Ảnh đã chọn: {image.name}</div>}
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
        <Button variant="primary" onClick={handleUpdate}>
          Cập nhật
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditTeamMemberModal;
