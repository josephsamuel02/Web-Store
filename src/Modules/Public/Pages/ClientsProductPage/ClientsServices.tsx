import { useState } from "react";
import { MdArrowDownward, MdArrowForward } from "react-icons/md";

const ClientsServices = () => {
	const [showMyServices, setShowMyServices] = useState(false);

	const [showServices, setShowServices] = useState(true);
	const [Services, setService] = useState([
		{
			img: "/img/undraw_everyday_life_re_1lfb.svg",
			name: " Web Hosting",
			detail: " Get fast hosting for your websites",
			url: "#",
		},
		{
			img: "/img/undraw_everyday_life_re_1lfb.svg",
			name: " UI/UX Design ",
			detail: " lets create an awsome UI for your projct ",
			url: "#",
		},
		{
			img: "/img/undraw_everyday_life_re_1lfb.svg",
			name: "   Website Templates ",
			detail: "chose from over 500 templates ",
			url: "#",
		},
		{
			img: "/img/undraw_everyday_life_re_1lfb.svg",
			name: "  Website Management ",
			detail: "  no down time with our management service ",
			url: "#",
		},
		{
			img: "/img/undraw_everyday_life_re_1lfb.svg",
			name: "       Build Custom Web Aplications ",
			detail: " Build complex web aplications ",
			url: "#",
		},
		{
			img: "/img/undraw_everyday_life_re_1lfb.svg",
			name: " Bulk Email Service ",
			detail: " Get fast hosting for your websites ",
			url: "#",
		},
		{
			img: "/img/undraw_everyday_life_re_1lfb.svg",
			name: " Bulk SMS",
			detail: " Get fast hosting for your websites",
			url: "#",
		},
		{
			img: "/img/undraw_everyday_life_re_1lfb.svg",
			name: " Advatise ",
			detail: " we can help you promote your business ",
			url: "#",
		},
		{
			img: "/img/undraw_everyday_life_re_1lfb.svg",
			name: "     Bulk Data",
			detail: "  ",
			url: "#",
		},
	]);

	const myServices = [
		{
			img: "/img/undraw_biking_kc-4-f.svg ",
			name: " SMS service for mr jare website  ",
			id: "A0010",
			type: " sms",
		},
		{
			img: "/img/undraw_biking_kc-4-f.svg ",
			name: "UI design for  Venox website",
			id: "A0010",
			type: " ui",
		},
		{
			img: "/img/undraw_biking_kc-4-f.svg ",
			name: "Web Hosting foe mr jare website",
			id: "A0010",
			type: " hosting",
		},
		{
			img: "/img/undraw_biking_kc-4-f.svg ",
			name: " website management",
			id: "A0010",
			type: " website management",
		},
	];

	return (
		<>
			<div className=" w-full h-screen ml-2  flex flex-col bg-white overflow-y-scroll">
				<h3 className="mx-5 my-5 text-4xl text-navDarkBlue font-dayone font-bold ">Services</h3>

				<div className="w-full h-auto my-2 m-0 px-3 ">
					<div className="w-full mx-auto px-4 py-1 flex flex-row  bg-white border-2 border-slate-300 rounded items-center  ">
						<div
							className="w-12 h-12 mx-4   flex  rounded-full  items-center border-2  border-slate-100 shadow-md shadow-slate-300 hover:shadow-slate-400 cursor-pointer"
							onClick={() => setShowMyServices(!showMyServices)}
						>
							<span className="text-base m-auto py-3  flex items-center">
								{showMyServices ? <MdArrowDownward size={25} /> : <MdArrowForward size={25} />}
							</span>
						</div>
						<h3 className="mx-4 p-1 text-2xl text-blue-800 font-dayone">My Services</h3>
					</div>

					{showMyServices ? (
						<div className="w-full h-auto m-0 py-0 flex flex-row flex-wrap">
							{myServices &&
								myServices.map((i, n) => (
									<a
										className="w-80 h-auto mx-auto my-12 pb-2 bg-white shadow-md rounded hover:shadow-lg"
										href={i.type}
										key={n}
									>
										<img src={i.img} alt="" className="w-80 h-32 items-center object-cover" />
										<h3 className="mx-3 py-3 text-2xl truncate text-navDarkBlue font-bold font-roboto">
											{i.name}
										</h3>
										<p className="mx-3 py-1 text-sm text-slate-600 font-roboto">{i.id}</p>
									</a>
								))}
						</div>
					) : (
						""
					)}

					{!myServices && showMyServices && (
						<h3 className="text-2xl py-10 text-slate-600 font-roboto font-bold text-center">
							~ You don't have any service runing
						</h3>
					)}
				</div>

				<div className="w-full h-auto my-2  m-0 px-3 ">
					<div className="w-full mx-auto px-4  flex flex-row  bg-white border-2 border-slate-300 rounded items-center  ">
						<div
							className="w-12 h-12 mx-4 my-1 flex  rounded-full  items-center border-2  border-slate-100 shadow-md shadow-slate-300 hover:shadow-slate-400 cursor-pointer"
							onClick={() => setShowServices(!showServices)}
						>
							<span className="text-base m-auto py-3  flex items-center">
								{showServices ? <MdArrowDownward size={25} /> : <MdArrowForward size={25} />}
							</span>
						</div>
						<h3 className="mx-4 p-1 text-2xl text-blue-800 font-dayone">Available Services</h3>
					</div>

					{showServices && (
						<div className="w-full h-auto m-0 py-10 flex flex-row flex-wrap">
							{Services &&
								Services.map((i, n) => (
									<a
										className="w-80 h-auto mx-auto my-12 pb-3 bg-white shadow-md rounded hover:shadow-lg"
										href={i.url}
										key={n}
									>
										<img src={i.img} alt="" className="w-80 h-32 items-center object-cover" />
										<h3 className="mx-3 py-5 text-2xl text-navDarkBlue  font-bold font-roboto">
											{i.name}
										</h3>
										<p className="mx-3 py-1 text-sm text-slate-600 font-roboto">{i.detail}</p>
									</a>
								))}
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default ClientsServices;
