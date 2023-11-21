import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";

export default function ProtectedRoute({ element: Element, isLoggedIn, ...props }) {
  return (
    <Routes>
    <Route
      {...props}
      element={isLoggedIn ? <Element {...props} /> : <Navigate to="/sign-in" />}
    />
    </Routes>
  );
}
