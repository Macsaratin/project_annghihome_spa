import React, { useState, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";

const BlogEditForm = ({ initialData, onSave }) => {
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    description: "",
    author: "", // Sửa "name" thành "author" để rõ nghĩa hơn
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData((prev) => ({
        ...prev,
        image: imageUrl,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Card className="p-4 mt-4 container">
      <h3 className="mb-3">Chỉnh sửa Blog</h3>
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
              style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }}
            />
          )}
        </Form.Group>

        {/* Nhóm: Thông tin cơ bản */}
        <Form.Group className="mb-3">
          <Form.Label>Tiêu đề</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Nhập tiêu đề"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Mô tả</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            placeholder="Nhập mô tả"
            rows={4}
            value={formData.description}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Tác giả</Form.Label>
          <Form.Control
            type="text"
            name="author" // Sửa "name" thành "author"
            placeholder="Nhập tên tác giả"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Nút submit */}
        <Button type="submit" variant="primary">
          Lưu thay đổi
        </Button>
      </Form>
    </Card>
  );
};

export default BlogEditForm;
