import { GoBookmark } from "react-icons/go";
import { MdStore, MdOutlineInsertChart, MdWifiTethering, MdSms } from "react-icons/md";
import { SiWhatsapp, SiGmail } from "react-icons/si";
import { TbCurrencyNaira } from "react-icons/tb";
import PUBROUTES from "../../../PublicRoutes";

const ProductsPacks = () => {
	return (
		<div className="m-0 pb-12 w-full h-auto bg-white bg-gradient-to-t from-green-200 rounded-3xl">
			<div className="mx-auto py-24 p-5 w-full h-auto flex flex-col lg:flex-row">
				<div className="w-full mx-auto flex flex-col md:flex-row flex-wrap items-center">
					<a
						className="cursor-pointer mx-auto my-10 p-1 w-64 md:w-56 h-auto flex flex-col bg-white  border-y-8 border-y-green-300 rounded-lg shadow  hover:shadow-lg hover:shadow-slate-300"
						href={`${PUBROUTES.BUY_PACK}/0`}
					>
						<h3 className="mx-auto my-3 text-center text-xl text-slate-600 font-courgette font-bold">
							Mini Pack
						</h3>
						<ul className="mx-0 my-3 p-2">
							<li className="py-1 text-base font-nunito text-slate-600  flex flex-row">
								<span className=" m-0 mx-2 text-green-500 ">
									<MdStore size={27} />
								</span>
								1 Store
							</li>

							<li className="py-1 text-base font-nunito text-slate-600  flex flex-row">
								<span className=" m-0 mx-2   text-green-500 ">
									<MdOutlineInsertChart size={25} />
								</span>
								15 Store Items
							</li>

							<li className="py-1 text-base font-nunito text-slate-600  flex flex-row">
								<span className=" m-0 mx-2 text-green-500  ">
									<SiWhatsapp size={21} />
								</span>
								WhatsApp chat
							</li>

							<li className="py-1 text-base font-nunito text-slate-600  flex flex-row">
								<span className=" m-0 mx-2  text-green-500 ">
									<MdWifiTethering size={21} />
								</span>
								1 Month Hosting
							</li>
						</ul>

						<p className="mx-auto my-2  text-center  text-xl text-slate-700 font-roboto font-bold flex flex-row items-center">
							<span className=" m-0  ">
								<TbCurrencyNaira size={27} color="#444544" />
							</span>
							5,000
						</p>
					</a>
					<a
						className="cursor-pointer mx-auto my-10 p-1 w-64 md:w-60 h-auto flex flex-col bg-white  border-y-8 border-y-green-500 rounded-lg shadow  hover:shadow-lg hover:shadow-slate-300"
						href={`${PUBROUTES.BUY_PACK}/1`}
					>
						<h3 className="mx-auto my-3 text-center text-xl text-slate-600 font-courgette font-bold">
							Starter Pack
						</h3>
						<ul className="mx-0 my-3 p-2">
							<li className="py-1 text-base font-nunito text-slate-600  flex flex-row">
								<span className=" m-0 mx-2 text-green-600 ">
									<MdStore size={27} />
								</span>
								1 Store
							</li>

							<li className="py-1 text-base font-nunito text-slate-600  flex flex-row">
								<span className=" m-0 mx-2 text-green-600 ">
									<MdOutlineInsertChart size={23} />
								</span>
								30 Store Items
							</li>
							<li className="py-1 text-base font-nunito text-slate-600  flex flex-row">
								<span className=" m-0 mx-2 text-green-600 ">
									<SiGmail size={23} />
								</span>
								Email notifications
							</li>
							<li className="py-1 text-base font-nunito text-slate-600  flex flex-row">
								<span className=" m-0 mx-2 text-green-600 ">
									<SiWhatsapp size={23} />
								</span>
								WhatsApp chat
							</li>

							<li className="py-1 text-base font-nunito text-slate-600  flex flex-row">
								<span className=" m-0 mx-2 text-green-600 ">
									<MdWifiTethering size={23} />
								</span>
								3 Month Hosting
							</li>
						</ul>

						<p className="mx-auto my-2  text-center  text-xl text-slate-700 font-roboto font-bold flex flex-row items-center">
							<span className=" m-0  ">
								<TbCurrencyNaira size={27} color="#444544" />
							</span>
							10,000
						</p>
					</a>

					<a
						className="cursor-pointer mx-auto my-10 p-1 w-64 md:w-60 h-auto flex flex-col bg-white  border-y-8 border-y-tabGreen rounded-lg shadow  hover:shadow-lg hover:shadow-slate-300"
						href={`${PUBROUTES.BUY_PACK}/2`}
					>
						<h3 className="mx-auto my-3 text-center text-xl text-slate-600 flex flex-row font-courgette font-bold items-center">
							Business Pack
							<span className="mx-1">
								<GoBookmark size={26} color="#00AB08" />
							</span>
						</h3>
						<ul className="mx-0 my-3 p-2">
							<li className="py-1 text-base font-nunito text-slate-600  flex flex-row">
								<span className=" m-0 mx-2 text-tabGreen ">
									<MdStore size={27} />
								</span>
								2 Stores
							</li>

							<li className="py-1 text-base font-nunito text-slate-600  flex flex-row">
								<span className=" m-0 mx-2 text-tabGreen ">
									<MdOutlineInsertChart size={23} />
								</span>
								60 Store Items
							</li>
							<li className="py-1 text-base font-nunito text-slate-600  flex flex-row">
								<span className=" m-0 mx-2 text-tabGreen ">
									<SiGmail size={23} />
								</span>
								Email notifications
							</li>
							<li className="py-1 text-base font-nunito text-slate-600  flex flex-row">
								<span className=" m-0 mx-2 text-tabGreen ">
									<SiWhatsapp size={23} />
								</span>
								WhatsApp chat
							</li>
							<li className="py-1 text-base font-nunito text-slate-600   flex flex-row">
								<span className=" m-0 mx-2 text-tabGreen ">
									<MdSms size={23} />
								</span>
								SMS alerts
							</li>
							<li className="py-1 text-base font-nunito text-slate-600  flex flex-row">
								<span className=" m-0 mx-2 text-tabGreen ">
									<MdWifiTethering size={23} />
								</span>
								6 Month Hosting
							</li>
						</ul>

						<p className="mx-auto my-2  text-center  text-xl text-slate-700 font-roboto font-bold flex flex-row items-center">
							<span className=" m-0  ">
								<TbCurrencyNaira size={27} color="#023B04" />
							</span>
							40,000
						</p>
					</a>

					<a
						className="cursor-pointer mx-auto my-10 p-1 w-64 md:w-60 h-auto flex flex-col bg-white  border-y-8 border-y-yellow-400 rounded-lg shadow  hover:shadow-lg hover:shadow-slate-300"
						href={`${PUBROUTES.BUY_PACK}/3`}
					>
						<h3 className="mx-auto my-3 text-center text-xl text-slate-600 flex flex-row font-courgette font-bold items-center">
							Premium Pack
						</h3>
						<ul className="mx-0 my-3 p-2">
							<li className="py-1 text-base font-nunito text-slate-600  flex flex-row">
								<span className=" m-0 mx-2 text-yellow-600 ">
									<MdStore size={27} />
								</span>
								2 Stores
							</li>

							<li className="py-1 text-base font-nunito text-slate-600  flex flex-row">
								<span className=" m-0 mx-2 text-yellow-600 ">
									<MdOutlineInsertChart size={23} />
								</span>
								100 Store Items
							</li>
							<li className="py-1 text-base font-nunito text-slate-600  flex flex-row">
								<span className=" m-0 mx-2 text-yellow-600 ">
									<SiGmail size={23} />
								</span>
								Email notifications
							</li>
							<li className="py-1 text-base font-nunito text-slate-600  flex flex-row">
								<span className=" m-0 mx-2 text-yellow-600 ">
									<SiWhatsapp size={23} />
								</span>
								WhatsApp chat
							</li>
							<li className="py-1 text-base font-nunito text-slate-600   flex flex-row">
								<span className=" m-0 mx-2 text-yellow-600 ">
									<MdSms size={23} />
								</span>
								SMS alerts
							</li>
							<li className="py-1 text-base font-nunito text-slate-600  flex flex-row">
								<span className=" m-0 mx-2 text-yellow-600 ">
									<MdWifiTethering size={23} />
								</span>
								1 Year Hosting
							</li>
						</ul>

						<p className="mx-auto my-2  text-center  text-xl text-slate-700 font-roboto font-bold flex flex-row items-center">
							<span className=" m-0  ">
								<TbCurrencyNaira size={27} color="#023B04" />
							</span>
							70,000
						</p>
					</a>
				</div>
			</div>
			{/* <CustomerequestCard /> */}
		</div>
	);
};
export default ProductsPacks;
