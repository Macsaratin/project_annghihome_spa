import React ,{ useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const CreatePartnerModal = ({ show, onClose, onCreate }) => {
  const [formData, setFormData] = useState({
    name: "",
    logo: "",
    website: "",
    isActive: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onCreate(formData); // Gọi onCreate khi submit form
    onClose(); // Đóng modal
  };

  return (
    <Modal show={show} onHide={onClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Thêm đối tác mới</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="name" className="mb-3">
            <Form.Label>Tên đối tác</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nhập tên đối tác"
            />
          </Form.Group>
          <Form.Group controlId="logo" className="mb-3">
            <Form.Label>Logo</Form.Label>
            <Form.Control
              type="text"
              name="logo"
              value={formData.logo}
              onChange={handleChange}
              placeholder="Nhập đường dẫn logo"
            />
          </Form.Group>
          <Form.Group controlId="website" className="mb-3">
            <Form.Label>Website</Form.Label>
            <Form.Control
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="Nhập website"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Đóng
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Lưu
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreatePartnerModal;
