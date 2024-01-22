import React, { useEffect } from "react";
import Form from "./components/Form";
import Users from "./components/Users";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/register" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
