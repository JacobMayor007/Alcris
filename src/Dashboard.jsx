import React from "react";
import { Route, useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[url('/wallpaper.jpg')] h-screen bg-right-top">
      <nav className="bg-[#333333] h-20 flex flex-row items-center gap-4 px-5 z-[-1]">
        <div className="text-white text-2xl bg-green-500 h-full flex items-center px-5">
          Dashboard
        </div>
        <button
          className="text-white text-2xl h-full flex items-center "
          onClick={() => navigate("/")}
        >
          Logout
        </button>
      </nav>
      <nav className="h-full w-30 bg-white z-[1] fixed flex flex-col gap-5 py-5 px-4">
        <div className="text-2xl text-black font-sans font-semibold">Users</div>
        <div className="text-2xl text-black font-sans font-semibold">
          Products
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;
