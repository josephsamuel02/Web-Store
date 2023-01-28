const ClientsProducts = () => {
	const MyWebsites = [
		{
			id: "010AB",
			imag:
				"https://res.cloudinary.com/promotion-army/image/upload/v1669311452/WBSITE%20SALES/ew_aunvm0.png",
			site_name: "Reno Adams Website",
			date: "2 Mar 2020",
			isOnline: true,
			pack_level: "Bus",
		},
		{
			id: "015AB",
			imag:
				"https://res.cloudinary.com/promotion-army/image/upload/v1669311452/WBSITE%20SALES/ew_aunvm0.png",
			site_name: "Visual Monkey Website",
			date: "2 Sept 2020",
			isOnline: false,
			pack_level: "Sta",
		},
		{
			id: "013AB",
			imag:
				"https://res.cloudinary.com/promotion-army/image/upload/v1669311452/WBSITE%20SALES/ew_aunvm0.png",
			site_name: "Mr Yinka's Website",
			date: "2 June 2020",
			isOnline: true,
			pack_level: "Pre",
		},
	];

	return (
		<div className="w-full h-full mx-1 bg-white ">
			<h1 className="w-full mx-3 p-3 text-3xl text-blue-700 font-bold font-courgette ">
				My Websites
			</h1>
			<div className=" h-auto mx-auto p-0 flex flex-col md:flex-row border-b-2 border-slate-300">
				{MyWebsites &&
					MyWebsites.map((m, i) => (
						<div
							key={i}
							className=" w-4/5 md:w-1/4 h-auto mx-auto my-8 bg-white rounded-xl shadow-gl hover:shadow-xl border-2  border-slate-100"
						>
							<div className="w-full h-auto my-1 px-2 text-slate-400 font-roboto">{m.id}</div>
							<img src={m.imag} alt="" className="w-full h-auto m-0 p-0 object-cover" />

							<div className="w-full h-autom-0 p-0  ">
								<h3 className="mx-2 py-2 text-base text-navDarkBlue font-nunito font-bold">
									{m.site_name}
								</h3>

								<div className="w-full h-auto my-2 py-1 flex flex-row flex-wrap">
									<h4 className="mx-auto text-sm text-slate-500  ">{m.date}</h4>
									<h4 className="mx-auto text-sm text-slate-500  ">{m.pack_level}</h4>
									<h4 className="mx-auto text-sm text-slate-500  flex flex-row items-center  ">
										online:
										<span
											className="mx-1 mt-1 p-1.5 w-1 h-1 rounded-full "
											style={{
												backgroundColor: m.isOnline ? "#01b90d" : "red",
											}}
										></span>
									</h4>
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default ClientsProducts;
