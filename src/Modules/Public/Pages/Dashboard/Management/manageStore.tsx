import { useState } from "react";
import Orders from "./Orders";
import StoreSettings from "./storeSettings";
import UploadProduct from "./uploadProduct";

const ManageStore = () => {
	const [displayComponent, setDisplayComponent] = useState("orders");

	return (
		<>
			<div className=" w-full h-screen flex flex-col bg-tabGreen overflow-y-scroll ">
				<h3 className="mx-5 my-6 text-3xl md:text-4xl text-white font-dayone font-bold">
					Manage Store
				</h3>
				<div className="w-full h-auto  flex flex-row border-2 border-slate-300  bg-slate-200">
					<p
						className="w-1/3 text-sm md:text-lg text-center text-slate-700 font-bold font-roboto  py-2  my-0.5 rounded-sm  cursor-pointer  hover:text-slate-500"
						style={{ backgroundColor: displayComponent == "orders" ? "white" : "" }}
						onClick={() => setDisplayComponent("orders")}
					>
						Orders
					</p>
					<p
						className="w-1/3 text-sm md:text-lg text-center text-slate-700 font-bold font-roboto mx-1 md:mx-3 py-2  my-0.5 rounded-sm  cursor-pointer  hover:text-slate-500"
						style={{ backgroundColor: displayComponent == "upload" ? "white" : "" }}
						onClick={() => setDisplayComponent("upload")}
					>
						Upload Product
					</p>

					<p
						className="w-1/3 text-sm md:text-lg text-center text-slate-700 font-bold font-roboto mx-1 md:mx-3 py-2  my-0.5 rounded-sm  cursor-pointer  hover:text-slate-500"
						style={{ backgroundColor: displayComponent == "settings" ? "white" : "" }}
						onClick={() => setDisplayComponent("settings")}
					>
						Settings
					</p>
				</div>

				<div className="w-full h-auto p-2 flex flex-row bg-white">
					{displayComponent == "orders" && <Orders />}
					{displayComponent == "upload" && <UploadProduct />}
					{displayComponent == "settings" && <StoreSettings />}
				</div>
			</div>
		</>
	);
};

export default ManageStore;
