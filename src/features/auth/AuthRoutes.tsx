import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./views/Login";

export function AuthRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
    );
}
