import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

const FormBlog = ({ show, handleClose, handleSave, defaultData = {}, categories = [] }) => {
  const [formData, setFormData] = useState({
    image: defaultData.image || "",
    title: defaultData.title || "",
    slug: defaultData.slug || "",
    excerpt: defaultData.excerpt || "",
    content: defaultData.content || "",
    author: defaultData.author || "",
    publishDate: defaultData.publishDate || new Date().toISOString(),
    featured: defaultData.featured || false,
    isPublished: defaultData.isPublished || true,
    isActive: defaultData.isActive || true,
    categoryId: defaultData.categoryId || "",
    tags: defaultData.tags || "",
    metaTitle: defaultData.metaTitle || "",
    metaDescription: defaultData.metaDescription || "",
    metaKeywords: defaultData.metaKeywords || "",
  });

  useEffect(() => {
    if (defaultData) {
      setFormData(defaultData);
    }
  }, [defaultData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData((prev) => ({ ...prev, image: imageUrl }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave(formData);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{defaultData.id ? "Cập nhật bài viết" : "Thêm bài viết"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {/* Nhóm: Hình ảnh */}
          <Form.Group className="mb-3">
            <Form.Label>Hình ảnh</Form.Label>
            <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
            {formData.image && (
              <img
                src={formData.image}
                alt="preview"
                className="mt-2"
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            )}
          </Form.Group>

          {/* Nhóm: Thông tin cơ bản */}
          <Form.Group className="mb-3">
            <Form.Label>Tiêu đề</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập tiêu đề"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Slug</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập slug"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Mô tả ngắn</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập đoạn mô tả ngắn"
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
            />
          </Form.Group>

          {/* Nhóm: Nội dung */}
          <Form.Group className="mb-3">
            <Form.Label>Nội dung bài viết</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Nhập nội dung"
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Tác giả</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập tên tác giả"
              name="author"
              value={formData.author}
              onChange={handleChange}
            />
          </Form.Group>

          {/* Nhóm: Danh mục và Tags */}
          <Form.Group className="mb-3">
            <Form.Label>Danh mục</Form.Label>
            <Form.Select
              name="categoryId"
              value={formData.categoryId}
              onChange={handleChange}
            >
              <option value="">Chọn danh mục</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Tags</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập tags, cách nhau bằng dấu phẩy"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
            />
          </Form.Group>

          {/* Nhóm: SEO */}
          <Form.Group className="mb-3">
            <Form.Label>Tiêu đề Meta</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập Tiêu đề Meta"
              name="metaTitle"
              value={formData.metaTitle}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Mô tả Meta</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập Mô tả Meta"
              name="metaDescription"
              value={formData.metaDescription}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Từ khóa Meta</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập Từ khóa Meta"
              name="metaKeywords"
              value={formData.metaKeywords}
              onChange={handleChange}
            />
          </Form.Group>

          {/* Nhóm: Các trạng thái */}
          <Row>
            <Col sm={4}>
              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  label="Nổi bật"
                  name="featured"
                  checked={formData.featured}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col sm={4}>
              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  label="Đã xuất bản"
                  name="isPublished"
                  checked={formData.isPublished}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col sm={4}>
              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  label="Hoạt động"
                  name="isActive"
                  checked={formData.isActive}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Nút Submit */}
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

export default FormBlog;
