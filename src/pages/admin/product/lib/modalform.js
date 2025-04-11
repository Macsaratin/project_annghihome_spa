import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ProductModal = ({ show, handleClose, handleSave }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    status: 1,
    thumbnail: "",
    images: [],
    contents: [""],
  });

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

  const handleContentChange = (index, value) => {
    const newContents = [...formData.contents];
    newContents[index] = value;
    setFormData((prev) => ({ ...prev, contents: newContents }));
  };

  const handleAddContent = () => {
    setFormData((prev) => ({ ...prev, contents: [...prev.contents, ""] }));
  };

  const handleRemoveContent = (index) => {
    const newContents = [...formData.contents];
    newContents.splice(index, 1);
    setFormData((prev) => ({ ...prev, contents: newContents }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave(formData);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Thêm sản phẩm mới</Modal.Title>
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
                style={{ width: "100px", height: "auto" }}
              />
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Ảnh bổ sung</Form.Label>
            <Form.Control type="file" multiple accept="image/*" onChange={handleImagesUpload} />
            <div className="mt-2 d-flex flex-wrap gap-2">
              {formData.images.map((img, index) => (
                <img key={index} src={img} alt={`Extra ${index}`} style={{ width: "80px" }} />
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

          <Form.Group className="mb-3">
            <Form.Label>Nội dung bài viết</Form.Label>
            {formData.contents.map((content, index) => (
              <div key={index} className="mb-2 d-flex gap-2 align-items-start">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder={`Bài viết ${index + 1}`}
                  value={content}
                  onChange={(e) => handleContentChange(index, e.target.value)}
                />
                {formData.contents.length > 1 && (
                  <Button
                    variant="outline-danger"
                    onClick={() => handleRemoveContent(index)}
                  >
                    Xoá
                  </Button>
                )}
              </div>
            ))}
            <Button variant="outline-primary" size="sm" onClick={handleAddContent}>
              + Thêm bài viết
            </Button>
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

export default ProductModal;
