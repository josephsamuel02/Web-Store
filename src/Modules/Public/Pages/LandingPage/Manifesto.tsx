import PUBROUTES from "../../PublicRoutes";
// import SwiperComp from "./Swiper";
import InteractiveSite from "../../Components/interactiveSite";
const Manifesto = () => {
	return (
		<div className=" max-w-full px-2 md:px-10 h-auto pt-1 md:pt-24 py-24 flex flex-col">
			<InteractiveSite />

			<div className="w-full h-auto m-0 my-5 flex flex-col md:flex-row bg-white items-center">
				<div className=" h-auto md:w-2/5">
					<img
						src="https://res.cloudinary.com/promotion-army/image/upload/v1668475021/no%20bg%20photo%20assets/Pa_1_to8hea.png"
						alt=""
						className="m-auto w-60 md:w-72 h-auto "
					/>
				</div>
				<div className="mx-auto mt-10 md:mt-auto h-auto md:w-3/5 ">
					<h1 className="mx-3 text-5xl md:text-6xl font-bold md:text-left text-tabGreen">
						We keep it simple and easy
					</h1>

					<h1 className="mx-3 py-6 text-3xl font-bold font-dayone md:text-left text-slate-800">
						We do all the hard work so you can focus on growing your business.
					</h1>
				</div>
			</div>

			<a
				href={PUBROUTES.SIGNUP}
				className="mx-4 px-6 py-3 my-5 md:mt-auto md:w-52 text-center text-white  text-2xl font-nunito  rounded bg-green-400 hover:bg-tabGreen bg-gradient-to-r from-tabGreen hover:from-green-400 transition-colors shadow-md"
			>
				Get Started
			</a>
			<div className="w-full h-auto mt-40 mb-10 flex flex-col md:flex-row">
				<div className="mx-auto my-8 p-3 w-48 h-48 bg-green-100 flex flex-col rounded-sm items-center shadow-lg border border-green-400">
					<img src="img/icons8-web.png" alt="icon" />
					<p className="text-sm text-center font-bold font-roboto color-slate-600">
						Smartly designd webpages that fits to mobile, tablets and desktop screens.
					</p>
				</div>
				<div className="mx-auto my-8 p-3 w-48 h-48 bg-green-100 flex flex-col rounded-sm items-center shadow-lg border border-green-400">
					<img src="img/icons8-hosting.png" alt="icon" />
					<p className="text-sm text-center font-bold font-roboto   color-slate-600">
						No hassle for our clients. we provide everything they need.
					</p>
				</div>
				<div className="mx-auto my-8 p-3 pt-0 w-48 h-48 bg-green-100 flex flex-col rounded-sm items-center shadow-lg  border border-green-400">
					<img src="img/icons8-hand-drag.png" alt="icon" />
					<p className="text-sm text-center font-bold font-roboto  color-slate-600">
						Add more features to your website as you grow. live-chat, payments and more.
					</p>
				</div>
				<div className="mx-auto my-8 p-3 w-48 h-48 bg-green-100 flex flex-col rounded-sm items-center shadow-lg border border-green-400">
					<img src="img/icons8-salary-profit.png" alt="icon" />
					<p className="text-sm mt-5 text-center font-bold font-roboto  color-slate-600">
						We provide the cheapest web services online
					</p>
				</div>
			</div>

			{/* <SwiperComp /> */}

			<img src="img/h.png" alt="manifesto" className="mx-auto my-9 md:h-auto w-auto" />

			<a
				href={PUBROUTES.SIGNUP}
				className="mx-4 px-6 py-3 my-5 md:mt-auto md:w-52 text-center text-white  text-2xl font-nunito  rounded bg-green-400 hover:bg-tabGreen bg-gradient-to-r from-tabGreen hover:from-green-400 transition-colors shadow-md"
			>
				Get Started
			</a>
		</div>
	);
};

export default Manifesto;
