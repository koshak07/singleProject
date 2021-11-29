import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContextProvider from "./contexts/UserContext";
import MainPage from "./pages/MainPage";

const MyRoutes = () => {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
};

export default MyRoutes;
