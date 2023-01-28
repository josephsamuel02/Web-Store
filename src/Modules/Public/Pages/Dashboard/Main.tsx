const Main = () => {
	const userWebsites = [
		{
			name: "   Mr Akin's personal Website",
			img: "https://res.cloudinary.com/promotion-army/image/upload/v1669311452/WBSITE%20SALES/ew_aunvm0.png",
		},
		{
			name: " Constantinople Avenue",
			img: "https://res.cloudinary.com/promotion-army/image/upload/v1669311452/WBSITE%20SALES/ew_aunvm0.png",
		},
		{
			name: "  Melody studios",
			img: "https://res.cloudinary.com/promotion-army/image/upload/v1669311452/WBSITE%20SALES/ew_aunvm0.png",
		},
	];

	const promotions = [
		{
			img: "/img/undraw_contract_re_ves9.svg",
			name: " Get a free hosting when you buy two websites",
			condition: "Only available on weekends",
		},
		{
			img: "/img/undraw_biking_kc-4-f.svg",
			name: " Invite someone and get a free template",
			condition: "When new invite buys a website",
		},
		{
			img: "/img/undraw_contract_re_ves9.svg",
			name: " Get a free hosting when you buy two websites",
			condition: "Only available on weekends",
		},
		{
			img: "/img/undraw_biking_kc-4-f.svg",
			name: "Lowest web hosting price ",
			condition: "we have the best price in Nigeria",
		},
	];
	return (
		<div className="w-full h-screen mx-2 py-2 flex flex-col overflow-y-scroll scrollbar-hide">
			<div className="w-full h-52 mx-auto ml-1 flex flex-row bg-white rounded items-center">
				<div className="m-2 w-44 h-44 rounded-full bg-white">
					<img
						src="https://res.cloudinary.com/promotion-army/image/upload/v1667245893/no%20bg%20photo%20assets/pexels-daniel-xavier-1239291-removebg-preview_dcgdke.png"
						alt=""
						className="m-0 w-full h-full rounded-full object-cover items-center "
					/>
				</div>

				<div className="m-0 p-1 flex flex-col bg-white ">
					<p className="m-0 p-1 text-3xl text-navDarkBlue font-nunito font-bold">Welcome,</p>
					<h2 className="m-3 text-5xl text-blue-700  font-bold">Joseph Samuel</h2>
				</div>
			</div>

			<div className="w-full h-full pl-2 flex flex-row bg-white">
				<div className="mx-1 w-full h-auto flex flex-col ">
					<div className="w-full h-96 my-2 flex flex-row bg-white rounded  ">
						<div className="h-24 w-28  mx-3  ml-4 my-auto p-2  rounded   border-2 hover:shadow-xl shadow-xl shadow-slate-300 flex flex-col bg-white  hover:bg-blue-100 items-center cursor-pointer ">
							<p className="mx-auto text-4xl text-blue-600  text-center">+</p>
							<p className="mx-auto text-sm text-center font-roboto text-slate-800 ">
								Create new website
							</p>
						</div>

						<div className="h-full mx-0 w-8/12 flex flex-row justify-center">
							{userWebsites ? (
								userWebsites.map((i, n) => (
									<div
										className="h-full md:h-60 w-52 my-auto  mx-2 bg-white rounded border-2 border-slate-200 overflow-hidden cursor-pointer  hover:shadow-slate-300 shadow-lg hover:shadow-xl"
										key={n}
									>
										<img src={i.img} alt="" className="w-full  h-40 md:h-52 m-0 p-0 " />

										<h3 className="mx-1 py-auto truncate text-base break-keep text-center text-navDarkBlue font-nunito font-bold ">
											{i.name}
										</h3>
									</div>
								))
							) : (
								<h3 className="  m-auto  text-2xl text-slate-700 "> ~ No websites yet </h3>
							)}
						</div>

						<div className="mx-0 mr-0 my-2 mb-0 w-1/5 bg-white rounded">
							<h3 className="m-3 text-xl text-blue-700 font-roboto font-bold">Updates --</h3>
							<div className="w-full mx-3 my-4 ">
								<h4 className="text-base text-slate-700 font-roboto">Mr Jonas website</h4>
								<p className="text-sm text-slate-400 font-nunito">Aug 2 2020</p>
							</div>
							<div className="w-full mx-3 my-4 ">
								<h4 className="text-base text-slate-700 font-roboto">Mr Jonas website</h4>
								<p className="text-sm text-slate-400 font-nunito">Aug 2 2020</p>
							</div>
							<div className="w-full mx-3 my-4 ">
								<h4 className="text-base text-slate-700 font-roboto">Mr Jonas website</h4>
								<p className="text-sm text-slate-400 font-nunito">Aug 2 2020</p>
							</div>
							<div className="w-full mx-3 my-4 ">
								<h4 className="text-base text-slate-700 font-roboto">Mr Jonas website</h4>
								<p className="text-sm text-slate-400 font-nunito">Aug 2 2020</p>
							</div>
							<div className="w-full mx-3 my-4 ">
								<h4 className="text-base text-slate-700 font-roboto">Mr Jonas website</h4>
								<p className="text-sm text-slate-400 font-nunito">Aug 2 2020</p>
							</div>
						</div>
					</div>

					<div className="w-full h-auto pb-20  flex flex-row flex-wrap rounded  bg-white  ">
						{promotions &&
							promotions.map((i, n) => (
								<div
									className="w-5/12  h-64 mx-auto my-5  pb-4 rounded-xl border-2 border-slate-200 cursor-pointer hover:shadow-slate-300 shadow-lg hover:shadow-xl"
									key={n}
								>
									<img src={i.img} alt="" className="w-full h-2/4 object-cover items-center" />
									<div className="w-full h-2/5 m-0 my-auto p-0 items-center">
										<h3 className="mx-4 py-1   text-xl font-dayone   text-navDarkBlue font-bold ">
											{i.name}
										</h3>
										<p className="mx-4 py-0 text-lg font-planquin   text-slate-500   ">{i.condition}</p>
									</div>
								</div>
							))}
					</div>
				</div>

				{/* <div className="mx-1 mr-0 my-2 mb-0 w-1/5 bg-white rounded">
          <h3 className="m-3 text-xl text-blue-700 font-roboto font-bold">Updates --</h3>
          <div className="w-full mx-3 my-4 ">
            <h4 className="text-base text-slate-700 font-roboto">Mr Jonas website</h4>
            <p className="text-sm text-slate-400 font-nunito">Aug 2 2020</p>
          </div>
          <div className="w-full mx-3 my-4 ">
            <h4 className="text-base text-slate-700 font-roboto">Mr Jonas website</h4>
            <p className="text-sm text-slate-400 font-nunito">Aug 2 2020</p>
          </div>
          <div className="w-full mx-3 my-4 ">
            <h4 className="text-base text-slate-700 font-roboto">Mr Jonas website</h4>
            <p className="text-sm text-slate-400 font-nunito">Aug 2 2020</p>
          </div>
          <div className="w-full mx-3 my-4 ">
            <h4 className="text-base text-slate-700 font-roboto">Mr Jonas website</h4>
            <p className="text-sm text-slate-400 font-nunito">Aug 2 2020</p>
          </div>
          <div className="w-full mx-3 my-4 ">
            <h4 className="text-base text-slate-700 font-roboto">Mr Jonas website</h4>
            <p className="text-sm text-slate-400 font-nunito">Aug 2 2020</p>
          </div>
        </div> */}
			</div>
		</div>
	);
};

{
	/* <div className="h-full w-full ">
              <iframe
                src="https://giphy.com/embed/1jY7CpwS16K2qyJgrY"
                width="100%"
                height="100%"
                className="h-full w-full"
                allowFullScreen
              ></iframe>
            </div>  */
}

export default Main;
