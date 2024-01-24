import React from "react";
import Form from "./components/Form";
import Users from "./components/Users";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/register" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
