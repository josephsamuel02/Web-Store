const Invites = () => {
	const InvitedUsers = [
		{ img: " /pagify.png", name: "Adams Adewale", incentive: "20" },
		{ img: " /pagify.png", name: "Kareem Kehinde Adewale", incentive: "13" },
		{ img: " /pagify.png", name: "Adams Adewale", incentive: "12" },
		{ img: " /pagify.png", name: "John Ann", incentive: "17" },
		{ img: " /pagify.png", name: "Joshua akin", incentive: "20" },
		{ img: " /pagify.png", name: "Fela Aduabgemi", incentive: "20" },
	];

	return (
		<div className="w-full h-screen m-0 md:ml-2 md:p-1 bg-white overflow-y-scroll scrollbar-hide">
			<div className="w-12/12 h-auto mx-auto p-2 my-0   bg-tabGreen flex flex-row rounded-sm shadow-md items-center">
				<img
					src="/2.png"
					alt="user image"
					className="w-24 h-24 rounded-full object-cover items-center"
				/>
				<h2 className="text-2xl md:text-4xl text-white font-Palanquin font-bold">My Invites</h2>
			</div>

			<div className="w-full h-auto m-3 p-5 my-5 flex flex-row flex-wrap  items-center border-l-4 border-slate-400 ">
				{InvitedUsers &&
					InvitedUsers.map((i, n) => (
						<div
							className="w-52 h-auto mx-auto my-5  flex flex-col border-2 border-slate-100 items-center cursor-pointer"
							key={n}
						>
							<img
								src={i.img}
								alt="user image"
								className="w-28 h-28 rounded-full   object-cover items-center"
							/>

							<div className="w-full m-0 p-2 py-3 bg-white rounded-sm shadow-lg hover:shadow-lg">
								<h2 className="text-md  truncate text-slate-800 font-roboto">{i.name}</h2>
								<h2 className="text-md  text-slate-700 font-roboto">
									<span className="font-bold">Inc:</span> ${i.incentive}
								</h2>
							</div>
						</div>
					))}
			</div>

			<div className="w-full h-20 md:h-24 p-4 py-3 fixed bottom-0 flex flex-row border-t-2 border-slate-200 items-center  bg-white">
				<h2 className="text-3xl md:text-4xl text-slate-800 font-roboto ">Total: $500</h2>
			</div>
		</div>
	);
};

export default Invites;
