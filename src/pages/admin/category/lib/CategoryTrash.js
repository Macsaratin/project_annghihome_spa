import React, { useState } from "react";
import { Button, Table, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const TrashServiceList = () => {
  const navigate = useNavigate();
  const [trashServices, setTrashServices] = useState([
    {
      id: 1,
      name: "Dịch vụ khám tổng quát",
      thumbnail: "https://via.placeholder.com/80",
      status: 0,
    },
    {
      id: 2,
      name: "Tư vấn dinh dưỡng cho mẹ bầu",
      thumbnail: "https://via.placeholder.com/80",
      status: 0,
    },
  ]);

  const handleRestore = (id) => {
    setTrashServices(trashServices.filter((item) => item.id !== id));
    // Thêm logic gọi API khôi phục nếu cần
  };

  const handleDeletePermanently = (id) => {
    if (window.confirm("Bạn có chắc muốn xoá vĩnh viễn không?")) {
      setTrashServices(trashServices.filter((item) => item.id !== id));
      // Thêm logic gọi API xoá vĩnh viễn nếu cần
    }
  };

  const handleBack = () => {
    navigate("/admin/service"); // quay lại danh sách chính
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Thùng rác dịch vụ</h2>
        <Button variant="secondary" onClick={handleBack}>
          Quay lại
        </Button>
      </div>

      <Table striped bordered hover>
        <thead className="table-dark">
          <tr>
            <th>Ảnh đại diện</th>
            <th>Tên dịch vụ</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {trashServices.map((item) => (
            <tr key={item.id}>
              <td>
                <Image src={item.thumbnail} width={80} rounded />
              </td>
              <td>{item.name}</td>
              <td>{item.status === 1 ? "Hiển thị" : "Ẩn"}</td>
              <td>
                <div className="d-flex gap-2">
                  <Button variant="success" size="sm" onClick={() => handleRestore(item.id)}>
                    Khôi phục
                  </Button>
                  <Button variant="danger" size="sm" onClick={() => handleDeletePermanently(item.id)}>
                    Xoá vĩnh viễn
                  </Button>
                </div>
              </td>
            </tr>
          ))}
          {trashServices.length === 0 && (
            <tr>
              <td colSpan={4} className="text-center text-muted">
                Không có dịch vụ nào trong thùng rác.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default TrashServiceList;
