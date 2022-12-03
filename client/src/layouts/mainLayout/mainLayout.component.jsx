import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header.component";

const MainLayout = () => {
  return (
    <div className="w-screen h-screen flex flex-col bg-background">
      <Header />
      <div className="w-screen flex-1 p-10 overflow-y-auto overflow-x-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
