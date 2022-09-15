import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../../Pages/Dashboard";
import { Profile } from "../../Pages/Profie";

export const MainRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    )
}