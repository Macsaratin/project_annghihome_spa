import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import DescriptionEditor from "../../lib/DescriptionEditor"; // Giả sử bạn có một component Editor

const EditAboutModal = ({ show, onClose, onSave, aboutData }) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    mission: "",
    vision: "",
    history: "",
  });

  // Dữ liệu được truyền vào modal để chỉnh sửa
  useEffect(() => {
    if (aboutData) {
      setFormData({
        ...aboutData,
      });
    }
  }, [aboutData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditorChange = (content) => {
    setFormData((prev) => ({
      ...prev,
      content: content,
    }));
  };

  const handleSubmit = () => {
    const updatedItem = {
      ...formData,
      updatedAt: new Date().toISOString(),
    };
    onSave(updatedItem);
    onClose(); // đóng modal
  };

  return (
    <Modal show={show} onHide={onClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Chỉnh sửa mục Giới thiệu</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            {/* Cột 1 */}
            <Col md={6}>
              <Form.Group controlId="title" className="mb-3">
                <Form.Label>Tiêu đề</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Nhập tiêu đề"
                />
              </Form.Group>
              <Form.Group controlId="mission" className="mb-3">
                <Form.Label>Sứ mệnh</Form.Label>
                <Form.Control
                  type="text"
                  name="mission"
                  value={formData.mission}
                  onChange={handleChange}
                  placeholder="Nhập sứ mệnh"
                />
              </Form.Group>
              <Form.Group controlId="vision" className="mb-3">
                <Form.Label>Tầm nhìn</Form.Label>
                <Form.Control
                  type="text"
                  name="vision"
                  value={formData.vision}
                  onChange={handleChange}
                  placeholder="Nhập tầm nhìn"
                />
              </Form.Group>
              <Form.Group controlId="history" className="mb-3">
                <Form.Label>Lịch sử</Form.Label>
                <Form.Control
                  type="text"
                  name="history"
                  value={formData.history}
                  onChange={handleChange}
                  placeholder="Nhập lịch sử phát triển"
                />
              </Form.Group>
            </Col>

            {/* Cột 2 (Mô tả) */}
            <Col md={6}>
              <Form.Group controlId="content" className="mb-3">
                <Form.Label>Nội dung</Form.Label>
                <DescriptionEditor
                  value={formData.content}
                  onChange={handleEditorChange}
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Đóng
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Lưu thay đổi
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditAboutModal;
