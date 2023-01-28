import { useState } from "react";
import Footer from "../../Components/Footer";
import PublicPagesNav from "../../Components/PublicPagesNav";
import { MdEmail, MdWifiTethering } from "react-icons/md";
import { InternetIcon } from "../LandingPage/SubscriptionPacks";

const BuyPack = () => {
	const [payInput, setPayInput] = useState(false);
	return (
		<>
			<PublicPagesNav />
			<div className="w-full h-auto m-0 p-0 bg-white">
				{/* <hr className="w-full mt-24 h-0.5 font-bold bg-slate-300"></hr> */}

				<div className="w-full h-auto m-0 my-10 p-0 flex flex-col items-center">
					<div className="mx-auto my-10 px-5 w-96 h-auto m-0 p-0">
						<div className="w-full md:w-96 h-auto mx-auto md:mx-auto bg-gray-50 hover:bg-slate-100 border-2 border-slate-400 my-10 p-5 py-3   rounded-xl shadow-xl ">
							<h3 className="text-2xl mb-4 text-sky-500 font-bold font-dayone">Starter Pack</h3>

							<li className="ml-5 text-lg py-1 text-navDarkBlue font-roboto list-none flex flex-row items-center ">
								<span className=" m-0 mr-4 ">{InternetIcon}</span>
								One Website
							</li>
							<li className="ml-5 text-lg py-1 text-navDarkBlue font-roboto   list-none flex flex-row items-center  ">
								<span className=" m-0 mr-4 ">
									<MdEmail size={23} color="#006CE3" />
								</span>
								+ 2 Email Addresses
							</li>
							<li className="ml-5 text-lg py-1 text-navDarkBlue font-roboto list-none flex flex-row items-center  ">
								<span className=" m-0 mr-4 ">
									<MdWifiTethering size={23} color="#006CE3" />
								</span>
								+ 1 Year Free Hosting
							</li>

							<p className="text-lg mt-5 text-slate-700 font-roboto font-bold ">Price: $200</p>
						</div>

						{!payInput && (
							<button
								name="continue"
								className="w-full md:w-96 mx-auto md:mx-auto  mt-2 py-3 text-white text-lg  font-roboto bg-blue-700 rounded-md hover:bg-blue-600"
								onClick={() => {
									setPayInput(true);
									setTimeout(() => {
										window.location.replace("#payInput");
									}, 300);
								}}
							>
								Continue
							</button>
						)}
					</div>

					{payInput && (
						<div id="payInput" className="mx-auto my-10 px-5  w-96 h-auto m-0 p-0">
							<h3 className="mx-1 pb-5 text-xl text-slate-900">Card Details</h3>

							<div className="mx-auto px-1 w-full md:w-96 h-12 border-2 border-slate-500 rounded-md flex flex-row hover:border-blue-600 items-center ">
								<input
									className="mx-1 pl-1 w-40 h-auto outline-none float-left text-slate-800 text-md font-roboto "
									type="text"
									placeholder="Card number"
									maxLength={19}
								/>
								<input
									className="mx-auto ml-1 w-28 h-auto outline-none text-slate-800 text-sm font-roboto "
									type="date"
									placeholder="Exp Date"
									maxLength={6}
								/>
								<input
									className="mx-auto w-8 h-auto ml-1 outline-none text-slate-800 text-sm font-roboto "
									type="text"
									placeholder="CVV"
									maxLength={3}
								/>

								<img
									src="/pagify.png"
									alt=""
									className="mx-auto w-6 h-auto mr-0.5 object-cover items-center "
								/>
							</div>
							<p className=" mx-1 my-2  text-sm text-red-600 font-roboto">field can not be empty</p>

							<p className="w-full md:w-96 text-center mx-auto mt-4 py-3 text-white text-lg  font-roboto cursor-pointer bg-slate-900 rounded-md hover:bg-slate-800">
								Pay $200
							</p>
						</div>
					)}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default BuyPack;
