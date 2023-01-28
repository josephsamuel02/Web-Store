import { MdEmail, MdManageAccounts, MdWifiTethering } from "react-icons/md";

import { FaRegistered } from "react-icons/fa";
import { SiGooglechat, SiNamecheap } from "react-icons/si";
import { TbCurrencyNaira } from "react-icons/tb";
import { GoBookmark } from "react-icons/go";
import { logoDesignIcon, InternetIcon, uxlogo } from "./SubscriptionPacks";
// import CustomerequestCard from "../../Components/CostomRequestCard";
import PUBROUTES from "../../PublicRoutes";

const ProductsPacks = () => {
	return (
		<div className="m-0 pb-12 w-full h-auto bg-white bg-gradient-to-t from-blue-200">
			<div className="mx-auto py-24 p-5 w-full h-auto flex flex-col lg:flex-row">
				<div className="w-full mx-auto flex flex-col md:flex-row flex-wrap items-center">
					<a
						className="cursor-pointer mx-auto my-10 p-1 w-auto h-auto flex flex-col bg-white  border-y-8 border-y-cyan-300 rounded-lg shadow  hover:shadow-lg hover:shadow-slate-300"
						href={PUBROUTES.BUY_PACK}
					>
						<h3 className="mx-auto my-3 text-center text-xl text-slate-600 font-courgette font-bold">
							Starter Pack
						</h3>
						<ul className="mx-0 my-3 p-2">
							<li className="py-1 text-base font-nunito text-slate-600  flex flex-row">
								<span className=" m-0 mx-2 ">{InternetIcon}</span>
								Landing Website
							</li>

							<li className="py-1 text-base font-nunito text-slate-600  flex flex-row">
								<span className=" m-0 mx-2 ">
									<MdEmail size={23} color="#006CE3" />
								</span>
								2 custom website Emails
							</li>
							<li className="py-1 text-base font-nunito text-slate-600  flex flex-row">
								<span className=" m-0 mx-2 ">
									<MdWifiTethering size={23} color="#006CE3" />
								</span>
								1 year Free Hosting
							</li>
							{/* <li className="py-1 text-base font-nunito text-slate-600  flex flex-row">
							<span className=" m-0 mx-2 ">
								<GoMegaphone size={23} color="#006CE3" />
							</span>
							1 month free business promotion
						</li> */}
						</ul>

						<p className="mx-auto my-2  text-center  text-xl text-slate-700 font-roboto font-bold flex flex-row items-center">
							<span className=" m-0  ">
								<TbCurrencyNaira size={27} color="#444544" />
							</span>
							45,000
						</p>
					</a>
					<a
						className="cursor-pointer mx-auto my-10 p-1 w-auto h-auto flex flex-col bg-white  border-y-8 border-y-blue-500 rounded-lg shadow  hover:shadow-lg hover:shadow-slate-300"
						href={PUBROUTES.BUY_PACK}
					>
						<h3 className="mx-auto my-3 text-center text-xl text-slate-600 flex flex-row font-courgette font-bold items-center">
							Super Starter Pack
							<span className="mx-1">
								<GoBookmark size={26} color="#00AB08" />
							</span>
						</h3>
						<ul className="mx-0 my-3 p-2">
							<li className="py-1 text-base font-nunito text-slate-600  flex flex-row">
								<span className=" m-0 mx-2 ">{InternetIcon}</span>
								Business Website
							</li>

							<li className="py-1 text-base font-nunito text-slate-600 flex flex-row">
								<span className=" m-0 mx-2 ">
									<FaRegistered size={23} color="#006CE3" />
								</span>
								Business Rergistration
							</li>

							<li className="py-1 text-base font-nunito text-slate-600 flex flex-row">
								<span className=" m-0 mx-2 ">
									<MdEmail size={23} color="#006CE3" />
								</span>
								4 custom website Emails
							</li>
							<li className="py-1 text-base font-nunito text-slate-600   flex flex-row">
								<span className=" m-0 mx-2 ">
									<MdWifiTethering size={23} color="#006CE3" />
								</span>
								1 year Free Hosting
							</li>
							{/* <li className="py-1 text-base font-nunito text-slate-600  flex flex-row">
							<span className=" m-0 mx-2 ">
								<GoMegaphone size={23} color="#006CE3" />
							</span>
							2 months free business promotion
						</li> */}
							<li className="py-1 text-base font-nunito text-slate-600   flex flex-row">
								<span className=" m-0 mx-2 ">{logoDesignIcon} </span>
								Free Logo Dessign
							</li>
						</ul>
						{/* <p className="mx-auto text-center">$200</p> */}
						<p className="mx-auto my-2  text-center  text-xl text-slate-700 font-roboto font-bold flex flex-row items-center">
							<span className=" m-0  ">
								<TbCurrencyNaira size={27} color="#023B04" />
							</span>
							60,000
						</p>
					</a>
					<a
						className="cursor-pointer mx-auto my-10 p-1 w-auto h-auto flex flex-col bg-white  border-y-8 border-y-purple-600 rounded-lg shadow  hover:shadow-lg hover:shadow-slate-300"
						href={PUBROUTES.BUY_PACK}
					>
						<h3 className="mx-auto my-3 text-center text-xl text-slate-600 font-courgette font-bold">
							Business Pack
						</h3>
						<ul className="mx-0 my-3 p-2">
							<li className="py-1 text-base font-nunito text-slate-600  flex flex-row">
								<span className=" m-0 mx-2 ">{InternetIcon}</span>
								Business Website
							</li>

							<li className="py-1 text-base font-nunito text-slate-600  flex flex-row">
								<span className=" m-0 mx-2 ">
									<MdEmail size={23} color="#006CE3" />
								</span>
								Unlimited website Emails
							</li>
							<li className="py-1 text-base font-nunito text-slate-600  flex flex-row">
								<span className=" m-0 mx-2 ">
									<MdWifiTethering size={23} color="#006CE3" />
								</span>
								1 year Free Hosting
							</li>
							{/* <li className="py-1 text-base font-nunito text-slate-600  flex flex-row">
							<span className=" m-0 mx-2 ">
								<GoMegaphone size={23} color="#006CE3" />
							</span>
							4 month free business promotion
						</li> */}

							<li className="py-1 text-base font-nunito text-slate-600  flex flex-row">
								<span className=" m-0 mx-2 ">
									<SiGooglechat size={23} color="#006CE3" />
								</span>
								Live Chat Intergration
							</li>
							<li className="py-1 text-base font-nunito text-slate-600  flex flex-row">
								<span className=" m-0 mx-2 ">{logoDesignIcon}</span>
								free Logo design
							</li>
							<li className="py-1 text-base font-nunito text-slate-600  flex flex-row">
								<span className=" m-0 mx-2 ">
									<SiNamecheap size={23} color="#006CE3" />
								</span>
								free domain name
							</li>
						</ul>

						<p className="mx-auto my-2  text-center  text-xl text-slate-700 font-roboto font-bold flex flex-row items-center">
							<span className=" m-0  ">
								<TbCurrencyNaira size={27} color="#023B04" />
							</span>
							100,000
						</p>
					</a>
				</div>
			</div>
			{/* <CustomerequestCard /> */}
		</div>
	);
};

export default ProductsPacks;
