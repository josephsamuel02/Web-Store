import { useEffect, useState } from "react";

import {
	MdAddBusiness,
	MdApps,
	MdClose,
	MdCreditCard,
	MdOutlineInsertChart,
	MdSms,
	MdStore,
	MdWifiTethering,
} from "react-icons/md";

import { SiGmail, SiWhatsapp } from "react-icons/si";
import { useSelector, useDispatch } from "react-redux";
import { add_AddOn, remove_AddOn } from "../../../../../Redux/Reducers/PackAddOns";
import { useParams } from "react-router-dom";
const BuyPack = () => {
	const dispatch = useDispatch();

	const { id } = useParams();

	// const packNum = `${0}`;

	const pack = useSelector((state: any) => state.PacksSlice.value[id]);
	const [subPackage, setSubPackage] = useState<object[]>();

	useEffect(() => setSubPackage(pack), []);

	const addOnsList = [
		{
			id: 1,
			icon: <MdCreditCard size={23} />,
			name: "Online Payments",
			price: "200",
		},
		{
			id: 2,
			icon: <MdSms size={23} />,
			name: "SMS alerts",
			price: "200",
		},
		{
			id: 3,
			icon: <MdAddBusiness size={23} />,
			name: "Promote Online",
			price: "200",
		},
		{
			id: 4,
			icon: <MdApps size={23} />,
			name: "Logo Design",
			price: "200",
		},
	];

	const [addOns, setAddOns] = useState([...addOnsList]);

	// const added = useSelector((state: any) => state.PackAddOns.value);

	const addedAddOns = useSelector((state: any) => state.PackAddOns.value);

	const [addOnsPrice, setAddOnsPrice] = useState(0);
	const [payInput, setPayInput] = useState(false);

	return (
		<>
			<div className="w-full h-screen pb-10 bg-white items-center mx-auto overflow-y-scroll">
				<div className="mx-auto w-full pt-2 md:pt-7  h-16 md:h-28 py-3 bg-tabGreen items-center ">
					<p className=" mx-5 md:mx-10   text-3xl md:text-4xl  text-slate-50 font-Palanquin ">
						Purchase
					</p>
				</div>

				<div className="mx-auto mt-12 my-10  md:px-5 w-full md:w-96 h-auto ">
					{subPackage && (
						<div className="w-11/12  md:w-96 h-auto mx-auto bg-white hover:shadow-xl border-2 border-slate-50 my-10 p-5 py-3 rounded-xl shadow-lg ">
							<h3 className="text-2xl mb-4 text-black font-bold font-dayone">
								{subPackage.pack_type}
							</h3>

							<li className="ml-5 text-lg py-1 text-slate-700 font-roboto font-bold list-none  flex flex-row items-center ">
								<span className=" m-0 mr-4 text-tabGreen ">
									<MdStore size={27} />
								</span>
								{subPackage.num_of_stores} Store
							</li>

							<li className="ml-5 text-lg py-1 text-slate-700 font-roboto font-bold list-none flex flex-row items-center  ">
								<span className=" m-0 mr-4 text-tabGreen ">
									<MdOutlineInsertChart size={23} />
								</span>
								{subPackage.store_items} Store Items
							</li>
							{subPackage.email_notifications && (
								<li className="ml-5 text-lg py-1 text-slate-700 font-roboto font-bold list-none flex flex-row items-center  ">
									<span className=" m-0 mr-4 text-tabGreen ">
										<SiGmail size={23} />
									</span>
									Email notifications
								</li>
							)}
							{subPackage.WhatsApp && (
								<li className="ml-5 text-lg py-1 text-slate-700 font-roboto font-bold list-none flex flex-row items-center  ">
									<span className=" m-0 mr-4 text-tabGreen ">
										<SiWhatsapp size={23} />
									</span>
									WhatsApp chat
								</li>
							)}
							{subPackage.sms && (
								<li className="ml-5 text-lg py-1 text-slate-700 font-roboto font-bold list-none flex flex-row items-center  ">
									<span className=" m-0 mr-4 text-tabGreen ">
										<MdSms size={23} />
									</span>
									SMS alerts
								</li>
							)}

							{
								<li className="ml-5 text-lg py-1 text-slate-700 font-roboto font-bold list-none flex flex-row items-center  ">
									<span className=" m-0 mr-4 text-tabGreen ">
										<MdWifiTethering size={23} />
									</span>
									{subPackage.hosting_months} Month Hosting
								</li>
							}

							<p className="text-lg mt-5 text-slate-700 font-roboto font-bold ">
								Price: N {subPackage.price}
							</p>
						</div>
					)}
				</div>

				{addedAddOns.length != 0 && (
					<div className="mx-auto mt-12 my-10  md:px-5 w-full md:w-96 h-auto">
						<div className="w-11/12  md:w-96 h-auto mx-auto bg-white hover:shadow-xl border-2 border-slate-50 my-10 p-5 py-3 rounded-xl shadow-lg ">
							<h3 className="text-5xl mb-2 text-black font-bold font-dayone">+</h3>

							{addedAddOns &&
								addedAddOns.map((i: any, n: number) => (
									<li
										className="ml-5 text-lg py-1 text-slate-700 font-roboto font-bold list-none flex flex-row items-center"
										key={n}
									>
										<span className=" m-0 mr-4 text-tabGreen">
											{i.id == 1 && <MdCreditCard size={23} />}
											{i.id == 2 && <MdSms size={23} />}
											{i.id == 3 && <MdAddBusiness size={23} />}
											{i.id == 4 && <MdApps size={23} />}
										</span>
										{i.name}
										<span className=" mx-auto float-right m-0 mr-4 text-black"> ${i.price}</span>

										<span
											className="float-right m-0 mx-1 py-2 px-1 text-red-800 cursor-pointer hover:bg-slate-200 rounded-r-md"
											onClick={() => {
												dispatch(remove_AddOn(i.id));
												setAddOnsPrice(addOnsPrice - Number(i.price));
												setAddOns((prev) => [...prev, i]);
											}}
										>
											<MdClose size={20} />
										</span>
									</li>
								))}
							<p className="text-lg mt-5 text-slate-700 font-roboto font-bold">Sum: ${addOnsPrice}</p>
						</div>
					</div>
				)}

				<div className="w-10/12 md:w-96 mx-auto h-auto flex flex-row flex-wrap items-center bg-white">
					{addOns &&
						addOns.map((i, n) => (
							<div
								className="mx-auto my-2 w-auto h-auto py-2 rounded-md shadow-lg hover:bg-slate-100 cursor-pointer"
								key={n}
								onClick={() => {
									dispatch(add_AddOn({ id: i.id, name: i.name, price: i.price }));
									setAddOns((prev) => prev.filter((item) => item.id !== i.id));

									setAddOnsPrice(addOnsPrice + Number(i.price));
								}}
							>
								<p className=" px-4 text-center text-lg text-slate-700 font-roboto cursor-pointer flex flex-row items-center ">
									<span className=" m-0 mr-2 text-tabGreen ">{i.icon}</span>
									{i.name}
								</p>
							</div>
						))}
				</div>

				{!payInput && (
					<p
						className="w-10/12 md:w-96 mx-auto text-center  mt-2 py-3 text-green-800 text-xl  font-roboto bg-white border-2 border-green-700 rounded-md hover:bg-green-700 hover:text-white cursor-pointer"
						onClick={() => {
							setPayInput(true);
							setTimeout(() => {
								window.location.replace("#payInput");
							}, 300);
						}}
					>
						Continue
					</p>
				)}

				{payInput && (
					<div id="payInput" className="mx-auto my-10 px-3 md:px-5 w-full md:w-96 h-auto m-0 p-0">
						<p className=" mx-1 text-lg mt-5 mb-10 text-slate-700 font-roboto font-bold   ">
							Total: N {subPackage.price + addOnsPrice}
						</p>
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

						<p className=" w-full   md:w-96 text-center mx-auto mt-4 py-3 text-white text-lg  font-roboto cursor-pointer bg-slate-900 rounded-md hover:bg-slate-800">
							N {subPackage.price + addOnsPrice}
						</p>
					</div>
				)}
			</div>
		</>
	);
};

export default BuyPack;
