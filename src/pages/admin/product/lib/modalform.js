import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import DescriptionEditor from "../../lib/DescriptionEditor";

const ProductModal = ({ show, handleClose, handleSave, categories = [] }) => {
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    description: "",
    longDescription: "",
    price: "",
    salePrice: "",
    inStock: true,
    featured: false,
    isActive: true,
    categoryId: "",
    specs: "",
    metaTitle: "",
    metaDescription: "",
    metaKeywords: "",
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
          <Row className="mb-3">
            <Col sm={6}>
              <Form.Label>Tên sản phẩm</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Col>
            <Col sm={6}>
              <Form.Label>Slug</Form.Label>
              <Form.Control
                type="text"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                required
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col sm={6}>
              <Form.Label>Mô tả ngắn</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </Col>
            <Col sm={6}>
              <Form.Label>Giá</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col sm={6}>
              <Form.Label>Giá giảm (nếu có)</Form.Label>
              <Form.Control
                type="number"
                name="salePrice"
                value={formData.salePrice}
                onChange={handleChange}
              />
            </Col>
            <Col sm={6}>
              <Form.Label>Danh mục</Form.Label>
              <Form.Select
                name="categoryId"
                value={formData.categoryId}
                onChange={handleChange}
              >
                <option value="">-- Chọn danh mục --</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </Form.Select>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Mô tả chi tiết</Form.Label>
            <DescriptionEditor
              value={formData.longDescription}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, longDescription: value }))
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Thông số kỹ thuật</Form.Label>
            <DescriptionEditor
              value={formData.specs}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, specs: value }))
              }
            />
          </Form.Group>

          <Row className="mb-3">
            <Col sm={4}>
              <Form.Check
                type="checkbox"
                label="Còn hàng"
                name="inStock"
                checked={formData.inStock}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    inStock: e.target.checked,
                  }))
                }
              />
            </Col>
            <Col sm={4}>
              <Form.Check
                type="checkbox"
                label="Nổi bật"
                name="featured"
                checked={formData.featured}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    featured: e.target.checked,
                  }))
                }
              />
            </Col>
            <Col sm={4}>
              <Form.Check
                type="checkbox"
                label="Hiển thị"
                name="isActive"
                checked={formData.isActive}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    isActive: e.target.checked,
                  }))
                }
              />
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Ảnh đại diện</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={handleThumbnailUpload}
            />
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
            <Form.Control
              type="file"
              multiple
              accept="image/*"
              onChange={handleImagesUpload}
            />
            <div className="mt-2 d-flex flex-wrap gap-2">
              {formData.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Extra ${index}`}
                  style={{ width: "80px" }}
                />
              ))}
            </div>
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
                  onChange={(e) =>
                    handleContentChange(index, e.target.value)
                  }
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
            <Button
              variant="outline-primary"
              size="sm"
              onClick={handleAddContent}
            >
              + Thêm bài viết
            </Button>
          </Form.Group>
          <fieldset className="border p-3 mt-4">
          <legend className="w-auto px-2">Thông Tin SEO</legend>
          <Row className="mb-3">
            <Col sm={4}>
              <Form.Label>Meta Title</Form.Label>
              <Form.Control
                type="text"
                name="metaTitle"
                value={formData.metaTitle}
                onChange={handleChange}
              />
            </Col>
            <Col sm={4}>
              <Form.Label>Meta Description</Form.Label>
              <Form.Control
                type="text"
                name="metaDescription"
                value={formData.metaDescription}
                onChange={handleChange}
              />
            </Col>
            <Col sm={4}>
              <Form.Label>Meta Keywords</Form.Label>
              <Form.Control
                type="text"
                name="metaKeywords"
                value={formData.metaKeywords}
                onChange={handleChange}
              />
            </Col>
          </Row>
        </fieldset>


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
