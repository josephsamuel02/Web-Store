import { Outlet } from "react-router-dom";
import { useState } from "react";

import SideNav from "./SideNav";
import { sidenavIcon } from "../LandingPage/SubscriptionPacks";
const Dashboard = () => {
	const [showSideNave, setShowSideNave] = useState(false);
	return (
		<div className="w-full h-full flex flex-row bg-gray-200">
			<div
				className=" flex md:hidden absolute top-1 right-4 p-1 h-auto w-auto z-50"
				onClick={() => setShowSideNave(!showSideNave)}
			>
				{sidenavIcon}
			</div>
			{showSideNave && (
				<div className=" md:hidden fixed top-0 transition-all  h-screen pl-3 w-3/6 flex-col bg-tabGreen  z-50">
					<SideNav />
				</div>
			)}

			<div className=" hidden md:flex  h-screen pl-3 w-72 flex-col bg-tabGreen ">
				<SideNav />
			</div>

			<Outlet />
		</div>
	);
};

export default Dashboard;
