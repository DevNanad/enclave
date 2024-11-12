import { Route, Routes } from "react-router-dom"

import Dashboard from "~views/auth/Dashboard"

import { About } from "./about"
import { Home } from "./home"

export const Routing = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
)