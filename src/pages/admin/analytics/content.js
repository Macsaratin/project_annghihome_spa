import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Table } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const AnalyticsForm = () => {
  const [analyticsData, setAnalyticsData] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const fetchAnalytics = async () => {
    // Giả sử bạn có API hoặc một phương thức để lấy dữ liệu từ cơ sở dữ liệu
    // Đây là ví dụ với dữ liệu giả lập
    const data = [
      {
        id: "1",
        date: "2025-04-10",
        pageViews: 1200,
        uniqueVisitors: 350,
        createdAt: "2025-04-01T09:00:00",
        updatedAt: "2025-04-10T10:00:00",
      },
      {
        id: "2",
        date: "2025-04-09",
        pageViews: 950,
        uniqueVisitors: 300,
        createdAt: "2025-04-01T09:00:00",
        updatedAt: "2025-04-09T10:00:00",
      },
    ];

    setAnalyticsData(data);
  };

  const handleSearch = () => {
    // Thực hiện tìm kiếm theo ngày hoặc các tiêu chí khác.
    // Ở đây sẽ là lọc dữ liệu dựa trên startDate và endDate
    const filteredData = analyticsData.filter(
      (data) =>
        (!startDate || data.date >= startDate) &&
        (!endDate || data.date <= endDate)
    );
    setAnalyticsData(filteredData);
  };

  useEffect(() => {
    fetchAnalytics();
  }, []);

  return (
    <div>
      <h3>Thống kê </h3>
      <Form className="mb-3">
        <Row>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Ngày bắt đầu</Form.Label>
              <Form.Control
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Ngày kết thúc</Form.Label>
              <Form.Control
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Button
              variant="primary"
              className="mt-4"
              onClick={handleSearch}
            >
              <FaSearch /> Tìm kiếm
            </Button>
          </Col>
        </Row>
      </Form>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Ngày</th>
            <th>Lượt xem trang</th>
            <th>Lượt khách duy nhất</th>
          </tr>
        </thead>
        <tbody>
          {analyticsData.length === 0 ? (
            <tr>
              <td colSpan="3" className="text-center">
                Không có dữ liệu
              </td>
            </tr>
          ) : (
            analyticsData.map((data) => (
              <tr key={data.id}>
                <td>{data.date}</td>
                <td>{data.pageViews}</td>
                <td>{data.uniqueVisitors}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default AnalyticsForm;
