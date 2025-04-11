import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Image } from "react-bootstrap";

const EditCategoryModal = ({ show, handleClose, handleSave, category }) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState(1);
  const [contents, setContents] = useState([""]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (category) {
      setName(category.name || "");
      setStatus(category.status ?? 1);
      setContents(category.contents || [""]);
      setImages(
        (category.images || []).map((fileOrUrl) => ({
          file: null,
          preview: typeof fileOrUrl === "string" ? fileOrUrl : URL.createObjectURL(fileOrUrl),
        }))
      );
    }
  }, [category]);

  const handleAddImage = () => setImages([...images, null]);

  const handleRemoveImage = (index) => {
    const updated = [...images];
    updated.splice(index, 1);
    setImages(updated);
  };

  const handleImageChange = (index, file) => {
    const updated = [...images];
    updated[index] = {
      file,
      preview: URL.createObjectURL(file),
    };
    setImages(updated);
  };

  const handleContentChange = (index, value) => {
    const updated = [...contents];
    updated[index] = value;
    setContents(updated);
  };

  const handleAddContent = () => setContents([...contents, ""]);

  const handleRemoveContent = (index) => {
    const updated = [...contents];
    updated.splice(index, 1);
    setContents(updated);
  };

  const handleSubmit = () => {
    const updatedCategory = {
      ...category,
      name,
      status,
      contents,
      thumbnail: images[0]?.file || images[0]?.preview || null,
      images: images.map((img) => img?.file || img?.preview).filter(Boolean),
    };

    handleSave(updatedCategory);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Sửa danh mục dịch vụ</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Tên danh mục</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập tên danh mục"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Ảnh (ảnh đầu tiên là ảnh đại diện)</Form.Label>
            {images.map((img, index) => (
              <div key={index} className="d-flex align-items-center mb-2 gap-2">
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) handleImageChange(index, file);
                  }}
                />
                {img?.preview && (
                  <Image
                    src={img.preview}
                    height={40}
                    rounded
                    alt={`preview-${index}`}
                    style={{ width: "100px", height: "auto", objectFit: "cover" }}
                  />
                )}
                {images.length > 1 && (
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => handleRemoveImage(index)}
                  >
                    Xoá
                  </Button>
                )}
              </div>
            ))}
            <Button variant="outline-primary" size="sm" onClick={handleAddImage}>
              + Thêm ảnh
            </Button>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Bài viết</Form.Label>
            {contents.map((content, index) => (
              <div key={index} className="mb-2 d-flex gap-2 align-items-start">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder={`Bài viết ${index + 1}`}
                  value={content}
                  onChange={(e) => handleContentChange(index, e.target.value)}
                />
                {contents.length > 1 && (
                  <Button
                    variant="outline-danger"
                    size="sm"
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

          <Form.Group className="mb-3">
            <Form.Label>Trạng thái</Form.Label>
            <Form.Select value={status} onChange={(e) => setStatus(+e.target.value)}>
              <option value={1}>Hiển thị</option>
              <option value={0}>Ẩn</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Hủy
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Lưu thay đổi
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditCategoryModal;
