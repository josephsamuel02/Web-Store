const InteractiveSite = () => {
	const storeItems = [
		[
			{ img: "/2.png", name: "Red hand bag", price: "15,000" },
			{ img: "/2.png", name: "Leather shoe", price: "5,000" },
			{ img: "/2.png", name: " Jacket", price: "8,000" },
		],

		[
			{ img: "/2.png", name: " HP laptop", price: "150,000" },
			{ img: "/2.png", name: "Smart phone", price: "83,000" },
			{ img: "/2.png", name: " Office Desk", price: "20,000" },
		],
	];

	return (
		<div className="w-full mx-auto h-auto m-0 my-5 mt-20 md:my-0 flex flex-col md:flex-row  bg-white  items-center ">
			<div className="  h-auto w-auto md:w-96   mx-auto self-center items-center ">
				<h1 className="mx-auto pb-10 text-5xl md:text-6xl text-center font-RubikDistressed   text-tabGreen">
					Be Online Present in Few Clicks
				</h1>
			</div>

			<div className=" h-96 mx-auto pb-1 md:mx-10 w-full  md:w-auto   border-2 border-slate-50  flex flex-col  items-center shadow-2xl overflow-x-hidden  overflow-y-scroll  ">
				<div className=" h-auto w-full  mx-auto   flex flex-row  bg-tabGreen ">
					<h3 className=" mx-3 py-2 text-white text-xl font-courgette font-bold rounded-sm">
						Store
					</h3>

					{/* <ul className="mx-auto ml-44 md:ml-56 float-right items-center flex flex-row list-none">
						<li className="mx-2 my-1 px-2 py-1 text-base text-white font-dayone cursor-pointer hover:bg-green-500 rounded-sm">
							Contact
						</li>
						<li className="mx-2 my-1 px-2 py-1 text-base text-white font-dayone cursor-pointer hover:bg-green-500 rounded-sm">
							About
						</li>
					 <li className="mx-2 text-base text-white font-dayone cursor-pointer">About </li>  
					</ul> */}
				</div>

				<>
					<div className=" h-auto w-full  mx-auto   flex flex-row  items-center ">
						{storeItems &&
							storeItems[0].map((i, n) => (
								<div
									className="mx-auto md:mx-1 h-40 w-32 md:h-52  md:w-36 mt-2 border-5 bg-white flex flex-col rounded-sm shadow-md hover:shadow-lg "
									key={n}
								>
									<img src={i.img} alt="" className="w-auto h-3/5 mx-auto object-cover items-center " />

									<p className="w-11/12 mb-1 md:mt-5 px-2  truncate text-sm md:text-base  font-nunito font-bold text-slate-700 text-center  ">
										{i.name}
									</p>
									<h4 className="  w-11/12 py-1 mx-auto bg-tabGreen text-sm text-white text-center rounded-sm hover:bg-green-600 cursor-pointer">
										{i.price}
									</h4>
								</div>
							))}

						<div className="mx-auto hidden md:mx-1 h-40 w-32 md:h-52  md:w-36 mt-2 border-5 bg-white md:flex flex-col rounded-sm shadow-md hover:shadow-lg ">
							<img src="/2.png" alt="" className="w-auto h-3/5 mx-auto object-cover items-center " />

							<p className="w-11/12 mb-1 md:mt-5 px-2  truncate text-sm md:text-base  font-nunito font-bold text-slate-700 text-center  ">
								"Red hand bag"
							</p>
							<h4 className="  w-11/12 py-1 mx-auto bg-tabGreen text-sm text-white text-center rounded-sm hover:bg-green-600 cursor-pointer">
								"15,000"
							</h4>
						</div>
					</div>
					<div className=" h-auto w-full  mx-auto flex flex-row  items-center">
						{storeItems &&
							storeItems[1].map((i, n) => (
								<div
									className="mx-auto md:mx-1 h-40 w-32 md:h-52  md:w-36 mt-2 border-5 bg-white flex flex-col rounded-sm shadow-md hover:shadow-lg "
									key={n}
								>
									<img src={i.img} alt="" className="w-auto h-3/5 mx-auto object-cover items-center " />

									<p className="w-11/12 mb-1 md:mt-5 px-2  truncate text-sm md:text-base  font-nunito font-bold text-slate-700 text-center  ">
										{i.name}
									</p>
									<h4 className="  w-11/12 py-1 mx-auto bg-tabGreen text-sm text-white text-center rounded-sm hover:bg-green-600  cursor-pointer ">
										{i.price}
									</h4>
								</div>
							))}

						<div className="mx-auto hidden md:mx-1 h-40 w-32 md:h-52  md:w-36 mt-2 border-5 bg-white md:flex flex-col rounded-sm shadow-md hover:shadow-lg ">
							<img src="/2.png" alt="" className="w-auto h-3/5 mx-auto object-cover items-center " />

							<p className="w-11/12 mb-1 md:mt-5 px-2  truncate text-sm md:text-base  font-nunito font-bold text-slate-700 text-center  ">
								"Red hand bag"
							</p>
							<h4 className="  w-11/12 py-1 mx-auto bg-tabGreen text-sm text-white text-center rounded-sm hover:bg-green-600 cursor-pointer">
								"15,000"
							</h4>
						</div>
					</div>
				</>
			</div>
		</div>
	);
};

export default InteractiveSite;
