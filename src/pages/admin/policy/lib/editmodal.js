import React, { useState, useEffect } from "react";

const EditPolicyModal = ({ show, onClose, policyData, onSave }) => {
  const [editedPolicyData, setEditedPolicyData] = useState(policyData);

  useEffect(() => {
    setEditedPolicyData(policyData);
  }, [policyData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedPolicyData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedPolicyData);
  };

  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Policy</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={editedPolicyData.title}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Slug</label>
            <input
              type="text"
              name="slug"
              value={editedPolicyData.slug}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Content</label>
            <textarea
              name="content"
              value={editedPolicyData.content}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Excerpt</label>
            <textarea
              name="excerpt"
              value={editedPolicyData.excerpt}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Published</label>
            <input
              type="checkbox"
              name="isPublished"
              checked={editedPolicyData.isPublished}
              onChange={() =>
                setEditedPolicyData((prev) => ({ ...prev, isPublished: !prev.isPublished }))
              }
            />
          </div>
          <div className="form-group">
            <label>Active</label>
            <input
              type="checkbox"
              name="isActive"
              checked={editedPolicyData.isActive}
              onChange={() =>
                setEditedPolicyData((prev) => ({ ...prev, isActive: !prev.isActive }))
              }
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPolicyModal;
