import React, { useState } from "react";
import ProductModal from "./modalform";
import {  useNavigate } from "react-router-dom";
const ProductList = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate= useNavigate();
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Sản phẩm A",
      price: 100000,
      thumbnail: "https://via.placeholder.com/80",
      status: 1,
    },
    {
      id: 2,
      name: "Sản phẩm B",
      price: 200000,
      thumbnail: "https://via.placeholder.com/80",
      status: 1,
    },
  ]);
  const handleOpenTrash = () => {
    navigate("/admin/product/trash");
  };
  const handleOpenEdit =()=>{
    navigate("/admin/footer/edit");

  }

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleSaveProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Danh sách sản phẩm</h2>
        <div className="d-flex gap-2">
            <button className="btn btn-primary m-2" onClick={handleOpenModal}>
            <i className=" bi bi-plus">thêm sản phẩm</i>
            </button>
            <button className="btn btn-danger m-2" onClick={handleOpenTrash}>
            <i className=" bi bi-trash"> thùng rác</i>
            </button>
        </div>
      </div>

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>Ảnh đại diện</th>
            <th>Tên</th>
            <th>Giá</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>
                <img
                  src={item.thumbnail}
                  alt={item.name}
                  width="80"
                  className="rounded"
                />
              </td>
              <td>{item.name}</td>
              <td>{item.price.toLocaleString()} ₫</td>
              <td>{item.status === 1 ? "Hiển thị" : "Ẩn"}</td>
              <td>
                <div className="d-flex gap-2">
                  <button className="btn btn-sm btn-warning">
                    <i className="bi bi-pencil-square"></i>
                  </button>
                  <button className="btn btn-sm btn-danger">
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ProductModal
        show={showModal}
        handleClose={handleCloseModal}
        handleSave={handleSaveProduct}
      />
    </div>
  );
};

export default ProductList;
