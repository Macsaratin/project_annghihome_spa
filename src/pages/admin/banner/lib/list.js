import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import CreateSliderModal from "./createmodal"; // Đảm bảo bạn import đúng modal
import EditSliderModal from "./editmodal"; // Đảm bảo bạn import đúng modal
import { useNavigate } from "react-router-dom";

const SliderList = () => {
  const [sliders, setSliders] = useState([
    {
      id: "1",
      title: "Slider 1",
      subtitle: "Subtitle 1",
      url: "https://via.placeholder.com/1000x500",
      link: "#",
      isActive: true,
      order: 1,
      buttonText: "Learn More",
      mobileUrl: "https://via.placeholder.com/500x250",
      description: "Description for Slider 1",
      createdAt: "2025-04-12T10:00:00",
      updatedAt: "2025-04-12T10:00:00",
    },
    {
      id: "2",
      title: "Slider 2",
      subtitle: "Subtitle 2",
      url: "https://via.placeholder.com/1000x500",
      link: "#",
      isActive: false,
      order: 2,
      buttonText: "Buy Now",
      mobileUrl: "https://via.placeholder.com/500x250",
      description: "Description for Slider 2",
      createdAt: "2025-04-12T10:00:00",
      updatedAt: "2025-04-12T10:00:00",
    },
    {
      id: "3",
      title: "Slider 3",
      subtitle: "Subtitle 3",
      url: "https://via.placeholder.com/1000x500",
      link: "#",
      isActive: true,
      order: 3,
      buttonText: "Read More",
      mobileUrl: "https://via.placeholder.com/500x250",
      description: "Description for Slider 3",
      createdAt: "2025-04-12T10:00:00",
      updatedAt: "2025-04-12T10:00:00",
    },
  ]);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedSlider, setSelectedSlider] = useState(null);
  const navigate = useNavigate();

  const handleOpenTrash = () => {
    navigate("/admin/slider/trash");
  }

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this slider?")) {
      const updatedSliders = sliders.filter((slider) => slider.id !== id);
      setSliders(updatedSliders);
    }
  };


  const handleEdit = (slider) => {
    setSelectedSlider(slider);  // Lưu slider đã chọn vào state
    setShowEditModal(true);     // Mở modal chỉnh sửa
  };

  const handleSave = (newSlider) => {
    const newId = (sliders.length + 1).toString(); // Generate new ID
    const sliderWithId = { id: newId, ...newSlider };
    setSliders((prevSliders) => [...prevSliders, sliderWithId]);
  };

  const handleSaveEdit = (updatedSlider) => {
    const updatedSliders = sliders.map((slider) =>
      slider.id === updatedSlider.id ? updatedSlider : slider
    );
    setSliders(updatedSliders);
    setShowEditModal(false);  // Đóng modal sau khi lưu thay đổi
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Slider List</h3>
        <div className="d-flex gap-2">
        <Button variant="success" onClick={() => setShowCreateModal(true)}>
          Add Slider
        </Button>
        <Button variant="danger" onClick={handleOpenTrash}>
            Trash
        </Button>
        </div>
      </div>

      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Title</th>
            <th>Subtitle</th>
            <th>URL</th>
            <th>Status</th>
            <th>Order</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sliders.map((slider) => (
            <tr key={slider.id}>
              <td>{slider.title}</td>
              <td>{slider.subtitle}</td>
              <td>
                <a href={slider.url} target="_blank" rel="noopener noreferrer">
                  {slider.url}
                </a>
              </td>
              <td>{slider.isActive ? "Active" : "Inactive"}</td>
              <td>{slider.order}</td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  onClick={() => handleEdit(slider)}
                >
                  <FaEdit />
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(slider.id)}
                >
                  <FaTrashAlt />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* CreateSliderModal */}
      <CreateSliderModal
        show={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onSave={handleSave}
      />

      {/* EditSliderModal */}
      <EditSliderModal
        show={showEditModal}
        onClose={() => setShowEditModal(false)}
        onSave={handleSaveEdit}
        sliderData={selectedSlider}
      />
    </div>
  );
};

export default SliderList;
