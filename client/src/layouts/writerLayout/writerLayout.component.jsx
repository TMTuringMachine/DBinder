import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header.component";
import WriterHeader from "../../components/WriterHeader/writerHeader.component";

const WriterLayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { user, isLoggedIn } = useSelector((state) => state.auth);

  

  React.useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    } else {
      if (pathname === "/") {
        if (user.isAuthor) {
          navigate("/writer/home");
        } else {
          navigate("/reader/home");
        }
      } else {
        navigate(pathname);
      }
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (!user || user.isAuthor) {
      navigate("/");
    }
  }, [user]);
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
