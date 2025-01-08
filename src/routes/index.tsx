import { Route, Routes } from "react-router-dom"

import Dashboard from "~views/auth/Dashboard"

import { Login } from "./login"
import { Register } from "./register"

export const Routing = () => (
    <Routes>
        <Route path="/" element={<Dashboard />} /> //put back the Register
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
)