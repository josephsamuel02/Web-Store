import Profile from "./profile";

const AccountProfile = () => {
	return (
		<>
			<div className=" w-full h-screen md:ml-2 flex flex-col bg-white overflow-y-scroll">
				<div className="w-full h-72 md:h-96 md:my-1 mx-auto  bg-white flex flex-col  relative">
					<div className="  w-full h-2/5 bg-tabGreen md:rounded-t-md"></div>

					<div className="w-full h-3/5 md:h-3/5 bg-white rounded-b-2xl border-b-2 border-slate-300">
						<div className=" w-auto h-auto md:h-72 relative top-6 left-32 md:left-64 z-0  ">
							<h1 className=" text-2xl md:text-5xl pb-3 font-roboto font-bold text-tabGreen">
								Joseph Samuel
							</h1>
							<p className="text-md md:text-xl font-roboto text-slate-600">@mrsamd02@gmail.com</p>
							<div className="w-auto h-auto my-2 flex flex-row  items-center ">
								<h3 className="mx-1  p-0 flex flex-row">
									<span className="fi fi-ng w-6"></span>
									<span className="mx-2 text-base text-slate-600 font-roboto">Nigeria</span>
								</h3>
							</div>
						</div>
						<div className="absolute top-16 ml-4 md:ml-10 w-28 h-28  md:w-48 md:h-48 bg-white rounded-full">
							<img
								src="https://res.cloudinary.com/promotion-army/image/upload/v1667245893/no%20bg%20photo%20assets/pexels-daniel-xavier-1239291-removebg-preview_dcgdke.png"
								alt=""
								className="m-0 w-full h-full rounded-full object-cover items-center "
							/>
						</div>
					</div>
				</div>

				<div className="w-full h-auto my-1 px-2 flex flex-col items-center bg-white z-20">
					<Profile />
				</div>
			</div>
		</>
	);
};

export default AccountProfile;
