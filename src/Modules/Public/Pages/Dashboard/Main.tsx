import { MdClose } from "react-icons/md";
import ProductsPacks from "../Dashboard/Components/ProductPacks";
import { useState } from "react";
import { Link } from "react-router-dom";
import PUBROUTES from "../../PublicRoutes";

const Main = () => {
	const [siteOptions, setSiteOptions] = useState(false);

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
		<div className="w-full h-screen md:mx-2 md:py-2 flex flex-col overflow-y-scroll scrollbar-hide">
			<div className="w-full h-52 mx-auto md:ml-1 flex flex-row bg-tabGreen rounded items-center">
				<div className="m-2 w-auto h-20 md:w-44 md:h-44 rounded-full bg-white">
					<img
						src="https://res.cloudinary.com/promotion-army/image/upload/v1667245893/no%20bg%20photo%20assets/pexels-daniel-xavier-1239291-removebg-preview_dcgdke.png"
						alt=""
						className="m-0 w-full h-full rounded-full object-cover items-center "
					/>
				</div>

				<div className="m-0 p-1 w-full md:w-auto flex flex-col  ">
					<p className="m-0 p-1 text-2xl md:text-3xl text-slate-900 font-courgette font-bold">
						Welcome,
					</p>
					<h2 className="m-3 text-3xl md:text-5xl text-white font-roboto  font-bold">
						Joseph Samuel
					</h2>
				</div>
			</div>

			<div className="w-full h-full pt-5 md:pl-2 flex flex-row bg-white overflow-x-scroll scrollbar-hide">
				<div className="mx-auto w-full h-auto flex flex-col ">
					<div className=" mx-auto w-full h-96 my-2 flex flex-row bg-white rounded  ">
						<div
							className="h-24  md:h-28  md:w-32  mx-3   my-auto p-2  rounded  border-slate-200  border-2 hover:shadow-xl shadow-xl shadow-slate-300 flex flex-col bg-white  hover:bg-blue-100 items-center cursor-pointer "
							onClick={() => setSiteOptions(true)}
						>
							<p className="mx-auto text-xl md:text-4xl text-blue-600  text-center">+</p>
							<p className="mx-auto  text-sm text-center font-roboto text-slate-800 ">
								Create new website
							</p>
						</div>

						<div className="h-full py-3 mx-auto w-full flex flex-row  overflow-scroll ">
							{userWebsites ? (
								userWebsites.map((i, n) => (
									<Link
										to={PUBROUTES.MANAGE_STORE}
										className=" h-40  md:h-60 w-32 md:w-44 my-auto mx-1 md:mx-auto bg-white rounded border-2 border-slate-200  cursor-pointer  hover:shadow-slate-300 shadow-lg  "
										key={n}
									>
										<img src={i.img} alt="" className=" w-full  h-32 md:h-52 m-0 p-0 object-cover " />

										<h3 className="mx-1 py-auto truncate text-sm md:text-base break-keep text-center text-navDarkBlue font-nunito font-bold ">
											{i.name}
										</h3>
									</Link>
								))
							) : (
								<h3 className="  m-auto  text-2xl text-slate-700 "> ~ No websites yet </h3>
							)}
						</div>
					</div>

					<div className="w-full h-auto pt-6 pb-20  flex flex-row flex-wrap rounded  bg-white  ">
						{promotions &&
							promotions.map((i, n) => (
								<div
									className=" w-5/6 md:w-5/12 h-52  md:h-64 mx-auto my-5  pb-4 rounded-xl border-2 border-slate-200 cursor-pointer hover:shadow-slate-300 shadow-lg hover:shadow-xl"
									key={n}
								>
									<img src={i.img} alt="" className="w-full h-2/4 object-cover items-center" />
									<div className="w-full h-2/5 m-0 my-auto p-0 items-center">
										<h3 className="mx-4 py-1   text-xl font-dayone   text-navDarkBlue font-bold ">
											{i.name}
										</h3>
										<p className="mx-4 py-0 text-lg font-planquin text-slate-500   ">{i.condition}</p>
									</div>
								</div>
							))}
					</div>
				</div>
			</div>

			{siteOptions && (
				<div className="fixed left-0 right-0 top-10 w-full h-screen mx-auto px-4 md:px-10   overflow-y-scroll ">
					<h3
						className="absolute right-6 md:right-16  top-4 md:top-6 cursor-pointer rounded-full hover:bg-slate-200 z-10 "
						onClick={() => setSiteOptions(false)}
					>
						<MdClose size={33} className=" text-3xl md:text-4xl  text-slate-700 " />
					</h3>

					<h2 className=" mx-auto  w-full  absolute top-5 m-3 text-center text-3xl md:text-4xl text-tabGreen font-Palanquin  font-bold ">
						Select a plan
					</h2>

					<ProductsPacks />
				</div>
			)}
		</div>
	);
};

export default Main;
