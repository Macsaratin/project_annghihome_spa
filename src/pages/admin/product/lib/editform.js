import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditForm = ({ show, handleClose, handleUpdate, data }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    status: 1,
    thumbnail: "",
    images: [],
  });

  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleThumbnailUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFormData((prev) => ({ ...prev, thumbnail: url }));
    }
  };

  const handleImagesUpload = (e) => {
    const files = Array.from(e.target.files);
    const urls = files.map((file) => URL.createObjectURL(file));
    setFormData((prev) => ({ ...prev, images: urls }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate(formData);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Cập nhật sản phẩm</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Tên sản phẩm</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Giá</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Ảnh đại diện</Form.Label>
            <Form.Control type="file" accept="image/*" onChange={handleThumbnailUpload} />
            {formData.thumbnail && (
              <img
                src={formData.thumbnail}
                alt="Thumbnail"
                className="mt-2"
                style={{ width: "100px" }}
              />
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Ảnh bổ sung</Form.Label>
            <Form.Control type="file" multiple accept="image/*" onChange={handleImagesUpload} />
            <div className="mt-2 d-flex gap-2 flex-wrap">
              {formData.images &&
                formData.images.map((img, idx) => (
                  <img key={idx} src={img} alt={`img-${idx}`} width="80" />
                ))}
            </div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Trạng thái</Form.Label>
            <Form.Select name="status" value={formData.status} onChange={handleChange}>
              <option value={1}>Hiển thị</option>
              <option value={0}>Ẩn</option>
            </Form.Select>
          </Form.Group>

          <div className="text-end">
            <Button variant="secondary" onClick={handleClose} className="me-2">
              Hủy
            </Button>
            <Button type="submit" variant="primary">
              Cập nhật
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditForm;
