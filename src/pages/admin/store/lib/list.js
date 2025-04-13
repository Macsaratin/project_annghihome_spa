import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import { FaEdit, FaTrashAlt, FaPlus } from "react-icons/fa";
import EditStoreModal from "./editmodal";  // Import modal chỉnh sửa
import CreateStoreModal from "./createmodal"; // Import modal thêm mới
import { useNavigate } from "react-router-dom";

const StoreList = () => {
  const [stores, setStores] = useState([
    {
      id: "1",
      name: "Cửa hàng chính",
      description: "Cửa hàng tại trung tâm TP",
      address: "123 Đường ABC",
      city: "Hà Nội",
      province: "Hà Nội",
      postalCode: "100000",
      phone: "0123456789",
      email: "cuahang@example.com",
      openingHours: "8:00 - 20:00",
      socialLinks: "https://facebook.com/store",
      metaTitle: "Cửa hàng chính",
      metaDescription: "Mô tả SEO cho cửa hàng",
      metaKeywords: "store, cửa hàng",
      googleMapsUrl: "https://maps.google.com/...",
      latitude: 21.0285,
      longitude: 105.8542,
      createdAt: "2025-04-01T08:00:00",
      updatedAt: "2025-04-10T10:00:00",
    },
  ]);

  const [showEditModal, setShowEditModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [currentStore, setCurrentStore] = useState(null);
  const navigate = useNavigate();


  const handleEdit = (store) => {
    setCurrentStore(store);  // Lưu cửa hàng hiện tại để chỉnh sửa
    setShowEditModal(true);  // Hiện modal chỉnh sửa
  };

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc muốn xóa cửa hàng này không?")) {
      setStores(stores.filter((store) => store.id !== id));
    }
  };
  const handleOpenTrash = () => {
    navigate('/admin/store/trash')
}

  const handleAdd = () => {
    setShowCreateModal(true);  // Hiện modal thêm mới
  };

  const handleSaveStore = (newStore) => {
    setStores((prevStores) => [...prevStores, newStore]);
  };

  const handleUpdateStore = (updatedStore) => {
    setStores((prevStores) =>
      prevStores.map((store) =>
        store.id === updatedStore.id ? updatedStore : store
      )
    );
    setShowEditModal(false); // Đóng modal sau khi lưu thay đổi
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Danh sách cửa hàng</h3>
        <div className="d-flex gap-2">
            <Button variant="primary" onClick={handleAdd}>
            <FaPlus /> Thêm cửa hàng
            </Button>
            <Button variant="danger" onClick={handleOpenTrash}>
            <FaTrashAlt /> thùng rác
            </Button>
        </div>
      </div>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Tên</th>
            <th>Địa chỉ</th>
            <th>Thành phố</th>
            <th>Tỉnh</th>
            <th>Điện thoại</th>
            <th>Email</th>
            <th>Giờ mở cửa</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {stores.map((store) => (
            <tr key={store.id}>
              <td>{store.name}</td>
              <td>{store.address}</td>
              <td>{store.city}</td>
              <td>{store.province}</td>
              <td>{store.phone}</td>
              <td>{store.email}</td>
              <td>{store.openingHours}</td>
              <td className="d-flex justify-content-center">
                <Button
                  variant="warning"
                  size="sm"
                  onClick={() => handleEdit(store)}
                  className="me-2"
                >
                  <FaEdit />
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(store.id)}
                >
                  <FaTrashAlt />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal Thêm cửa hàng */}
      <CreateStoreModal
        show={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onSave={handleSaveStore}
      />

      {/* Modal Chỉnh sửa cửa hàng */}
      {currentStore && (
        <EditStoreModal
          show={showEditModal}
          onClose={() => setShowEditModal(false)}
          storeData={currentStore}
          onSave={handleUpdateStore}
        />
      )}
    </div>
  );
};

export default StoreList;
