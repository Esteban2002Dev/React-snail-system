import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthRoutes } from "./features/auth/AuthRoutes";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth/*" element={<AuthRoutes />} />

                <Route path="*" element={<Navigate to="/auth/login" replace />} />
            </Routes>
        </BrowserRouter>
    );
}
