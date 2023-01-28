import { useState } from "react";
import Profile from "./components/profile";
import Projects from "./components/projects";
import Services from "./components/services";
import Admin from "./components/admin";
const AccountProfile = () => {
	const [isActive, setIsActive] = useState("Profile");

	const navLabels = ["Profile", "Projects", "Services", "Admin"];

	return (
		<>
			<div className=" w-full h-screen ml-2 flex flex-col bg-white overflow-y-scroll">
				<div className="w-full h-96 my-1 mx-auto  bg-white flex flex-col  relative">
					<div className="  w-full h-2/5 bg-blue-600 rounded-t-md"></div>
					<div className="w-full h-3/5 bg-white rounded-b-2xl border-b-2 border-slate-300">
						<div className=" w-auto h-72 relative top-6 left-64 z-0">
							<h1 className="text-5xl pb-3 font-roboto font-bold text-navDarkBlue">Joseph Samuel</h1>
							<p className="text-xl font-roboto text-slate-500">@mrsamd02@gmail.com</p>
							<div className="w-auto h-auto my-2 flex flex-row  items-center ">
								<h3 className="mx-1  p-0 flex flex-row">
									<span className="fi fi-ng w-6"></span>
									<span className="mx-2 text-base text-slate-500 font-roboto">Nigeria</span>
								</h3>
								<h3 className="mx-1  p-0 flex flex-row">
									<span className="m-0 p-3 h-0 rounded-full bg-yellow-500 "></span>
									<span className="mx-2 text-base text-slate-500 font-roboto">Corporate</span>
								</h3>
							</div>
						</div>
						<div className="absolute top-16 ml-10  w-48 h-48 bg-white rounded-full">
							<img
								src="https://res.cloudinary.com/promotion-army/image/upload/v1667245893/no%20bg%20photo%20assets/pexels-daniel-xavier-1239291-removebg-preview_dcgdke.png"
								alt=""
								className="m-0 w-full h-full rounded-full object-cover items-center "
							/>
						</div>
					</div>
				</div>

				<div className="w-full h-auto my-1 px-2 flex flex-col items-center bg-white z-20">
					<div className="w-full mx-auto my-2 px-1 py-1 flex flex-row  bg-slate-200 rounded">
						{navLabels &&
							navLabels.map((i, n) => (
								<p
									className="text-md text-slate-600 flex-auto  mx-auto py-2 px-auto  text-center font-roboto cursor-pointer  rounded"
									style={{
										backgroundColor: isActive == i ? "white" : "",
										color: isActive == i ? "black" : "",
									}}
									key={n}
									onClick={() => {
										setIsActive(i);
									}}
								>
									{i}
								</p>
							))}
					</div>

					{isActive == "Profile" ? <Profile /> : ""}
					{isActive == "Projects" ? <Projects /> : ""}
					{isActive == "Services" ? <Services /> : ""}
					{isActive == "Admin" ? <Admin /> : ""}
				</div>
			</div>
		</>
	);
};

export default AccountProfile;
