import { Outlet } from "react-router-dom";

import SideNav from "./SideNav";

const Dashboard = () => {
  return (
    <div className="w-full h-full flex flex-row bg-gray-200">
      <SideNav />
      <Outlet />
    </div>
  );
};

export default Dashboard;
