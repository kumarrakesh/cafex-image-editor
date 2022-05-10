import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ImageEdit } from "components/ImageEdit/ImageEdit";
import "./app.css";
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ImageEdit />} />
      </Routes>
    </BrowserRouter>
  );
};
