import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import { FaEdit, FaTrashAlt, FaPlus } from "react-icons/fa";
import CreatePartnerModal from "./createmodal";
import EditPartnerModal from "./editmodal";
import { useNavigate } from "react-router-dom";

const PartnerList = () => {
  const [partners, setPartners] = useState([
    {
      id: "1",
      name: "Đối tác 1",
      logo: "logo1.png",
      website: "https://example.com",
      isActive: true,
    },
    {
      id: "2",
      name: "Đối tác 2",
      logo: "logo2.png",
      website: "https://example2.com",
      isActive: true,
    },
  ]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState(null);
  const navigate = useNavigate();

  const handleCreatePartner = (newPartner) => {
    setPartners([...partners, newPartner]);
    setShowCreateModal(false);
  };

  const handleEditPartner = (updatedPartner) => {
    setPartners(
      partners.map((partner) =>
        partner.id === updatedPartner.id ? updatedPartner : partner
      )
    );
    setShowEditModal(false);
  };

  const handleDeletePartner = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa đối tác này?")) {
      setPartners(partners.filter((partner) => partner.id !== id));
    }
  };

  const handleOnTrash = () => {
    navigate("/admin/partner/trash");
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Danh sách đối tác</h3>
        <div className="d-flex gap-2 mt-4 mb-3">
          <Button variant="primary" onClick={() => setShowCreateModal(true)}>
            <FaPlus /> Thêm đối tác
          </Button>
          <Button variant="danger" onClick={handleOnTrash}>
            <FaTrashAlt /> Thùng rác
          </Button>
        </div>
      </div>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Tên</th>
            <th>Logo</th>
            <th>Website</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {partners.map((partner) => (
            <tr key={partner.id}>
              <td>{partner.name}</td>
              <td>
                <img src={partner.logo} alt={partner.name} width="50" />
              </td>
              <td>{partner.website}</td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  onClick={() => {
                    setSelectedPartner(partner);
                    setShowEditModal(true);
                  }}
                  className="me-2"
                >
                  <FaEdit /> Chỉnh sửa
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDeletePartner(partner.id)}
                >
                  <FaTrashAlt /> Xóa
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal tạo đối tác */}
      <CreatePartnerModal
        show={showCreateModal} // Hiển thị modal khi show là true
        onClose={() => setShowCreateModal(false)} // Đóng modal khi onClose được gọi
        onCreate={handleCreatePartner} // Gọi handleCreatePartner khi lưu đối tác mới
      />
      {/* Modal chỉnh sửa đối tác */}
      <EditPartnerModal
        show={showEditModal}
        onClose={() => setShowEditModal(false)}
        partner={selectedPartner}
        onUpdate={handleEditPartner}
      />
    </div>
  );
};

export default PartnerList;
