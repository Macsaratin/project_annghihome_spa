import React, { useState } from "react";
import authService from "../../functionservice/authService";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginForm() {
    const [fullName, setFullname] = useState(""); // Đổi email thành fullname
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/auth/admin/login", {
                fullName,
                password,
            });

            const token = res.data.token;
            authService().login(token);

            navigate("/admin");
        } catch (err) {
            console.error(err);
            setError("Tên người dùng hoặc mật khẩu không đúng");
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
            <form
                onSubmit={handleLogin}
                className="p-4 border rounded shadow bg-white"
                style={{ width: 400 }}
            >
                <h2 className="mb-4 text-center">Đăng nhập Admin</h2>

                <div className="mb-3">
                    <label htmlFor="fullname" className="form-label">Họ và tên:</label>
                    <input
                        type="text"
                        id="fullname"
                        className="form-control"
                        value={fullName}
                        onChange={(e) => setFullname(e.target.value)} // Cập nhật fullname thay vì email
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Mật khẩu:</label>
                    <input
                        type="password"
                        id="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                {error && <div className="alert alert-danger py-1">{error}</div>}

                <button type="submit" className="btn btn-primary w-100">
                    Đăng nhập
                </button>
            </form>
        </div>
    );
}
