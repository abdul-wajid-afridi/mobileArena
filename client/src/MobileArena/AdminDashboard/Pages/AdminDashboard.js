import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";

const AdminDashboard = () => {
  const Navigation = useNavigate();
  let token = localStorage.getItem("user");
  useEffect(() => {
    if (!token) {
      Navigation("/login");
    } else {
      Navigation("/dashboard");
    }
  }, []);
  return (
    <section className="flex ">
      <div>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
    </section>
  );
};

export default AdminDashboard;
