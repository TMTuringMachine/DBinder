import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header.component";
import WriterHeader from "../../components/WriterHeader/writerHeader.component";

const WriterLayout = () => {
  return (
    <div className="w-screen h-screen flex flex-col bg-background">
      <WriterHeader />
      <div className="w-screen flex-1 p-10 overflow-y-auto overflow-x-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default WriterLayout;
