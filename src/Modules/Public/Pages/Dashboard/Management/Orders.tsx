import { useState } from "react";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";

const Orders = () => {
	const [closeWarning, setCloseWarning] = useState(false);
	const [warningData, setWarningData] = useState({ message: "are you sure", key: "" });
	const [confirmDelete, setConfirmDelete] = useState({ message: "", key: "delete" });
	const [confirmProcessing, setConfirmProcessing] = useState(false);
	const [confirmCompleted, setConfirmCompleted] = useState(false);

	const orderList = [
		{
			product: " HP pavellion 2034 ",
			img: "/img/00.png",

			customer_name: "Allison Famus Ford",
			cudtomer_phone: "09073077717",
			customer_whatsapp: "09066089917",
			customer_emil: "myemail@gmail.com",
			address: "3, eleganza plazo, zone 2, epe",
			message:
				" I need this in less than 3hours, Can it be deliverd before the time. I'll appreciate it",
			time: " 2 days ago",

			quantity: 3,
			price: "2,000",
			total_price: "6,000",

			order_state: "pending",
		},
		{
			product: " HP pavellion 2034 ",
			img: "/img/00.png",
			customer_name: "Allison Famus Ford",
			cudtomer_phone: "09073077717",
			customer_whatsapp: "09066089917",
			customer_emil: "myemail@gmail.com",
			address: "3, eleganza plazo, zone 2, epe",
			message:
				" I need this in less than 3hours, Can it be deliverd before the time. I'll appreciate it",

			time: " 2 days ago",

			quantity: 3,
			price: "2,000",
			total_price: "6,000",
			order_state: "processing",
		},
		{
			product: " HP pavellion 2034 ",
			img: "/img/00.png",
			img: "/img/00.png",
			customer_name: "Allison Famus Ford",
			cudtomer_phone: "09073077717",
			customer_whatsapp: "09066089917",
			customer_emil: "myemail@gmail.com",
			address: "3, eleganza plazo, zone 2, epe",
			message:
				" I need this in less than 3hours, Can it be deliverd before the time. I'll appreciate it",

			time: " 2 days ago",

			quantity: 3,
			price: "2,000",
			total_price: "6,000",
			order_state: "completed",
		},
	];

	const Warning = (setwarn: React.Dispatch<React.SetStateAction<string>>) => {
		setwarn("true");
	};
	const ChangeStage = (keyword: string) => {
		keyword == "pending" ? "dispatchPending" : "";
		keyword == "processing" ? "dispatchProcessing" : "";
		keyword == "complete" ? "dispatchComplete" : "";
		keyword == "delete" ? "dispatchDelete" : "";
	};
	return (
		<div className="w-full h-screen py-5 pb-8 bg-white    ">
			<div className="w-full h-full  flex flex-shrink flex-wrap   overflow-y-scroll scrollbar-hide">
				{orderList &&
					orderList.map((i, n) => (
						<div className="mx-auto mb-16  w-96 h-auto rounded-md shadow-md hover:shadow-xl" key={n}>
							<img
								src={i.img}
								alt="product image"
								className="w-full h-44 m-0 object-cover items-center rounded-sm"
							/>
							<h3 className="mx-auto my-3 pl-4 text-xl text-slate-900 font-dayone font-bold   list-none">
								{i.product}
							</h3>
							<ul className="w-full h-auto mt-3">
								<li className="text-md text-slate-600 pb-2 font-roboto font-md mx-4 list-none">
									Customer :
									<span className="text-lg text-slate-900 font-nunito font-normal mx-3">
										{i.customer_name}
									</span>
								</li>
								<li className="text-md text-slate-600 pb-2 font-roboto font-md mx-4 list-none">
									Phone:
									<span className="text-lg text-slate-900 font-nunito font-normal mx-3">
										{i.cudtomer_phone}
									</span>
								</li>
								<li className="text-md text-slate-600 pb-2 font-roboto font-md mx-4 list-none">
									WhatsApp:
									<span className="text-lg text-slate-900 font-nunito font-normal mx-3">
										{i.customer_whatsapp}
									</span>
								</li>
								<li className="text-md text-slate-600 pb-2 font-roboto font-md mx-4 list-none">
									Emil:
									<span className="text-lg text-slate-900 font-nunito font-normal mx-3">
										{i.customer_emil}
									</span>
								</li>
								<li className="text-md text-slate-600 pb-2 font-roboto font-md mx-4 list-none">
									Address:
									<span className="text-lg text-slate-900 font-nunito font-normal mx-3">
										{i.address}
									</span>
								</li>
								<li className="text-md my-6 text-slate-700 pb-2 font-roboto font-bold mx-4 list-none">
									Message:
									<span className="text-lg text-slate-900 font-nunito font-normal mx-3">
										{i.message}
									</span>
								</li>

								<div className="w-full m-auto p-0 flex flex-row flex-wrap">
									<li className="text-md text-slate-600 pb-2 font-roboto font-md mx-auto list-none">
										Price:
										<span className="text-lg text-slate-900 font-nunito font-normal mx-3">
											{i.price}
										</span>
									</li>
									<li className="text-md text-slate-600 pb-2 font-roboto font-md mx-auto list-none">
										Quantity:
										<span className="text-lg text-slate-900 font-nunito font-normal mx-3">
											{i.quantity}
										</span>
									</li>
									<li className="text-lg text-slate-600 pb-2 font-roboto font-bold mx-auto px-10 py-4 list-none">
										Total price:
										<span className="text-lg text-slate-600 font-nunito font-bold px-1 ">
											{i.total_price}
										</span>
									</li>
								</div>
							</ul>

							<ul className="w-full mx-auto items-center h-auto mt-3 flex flex-row">
								<span className=" mx-auto flex flex-col   ">
									<FaWhatsapp size={30} className=" mx-auto text-tabGreen   " /> Chat
								</span>

								<span className=" mx-auto flex flex-col ">
									<FaPhone size={25} className=" mx-auto text-blue-600   " /> Call
								</span>
								<span className=" mx-auto flex flex-col ">
									<MdOutgoingMail size={33} className=" mx-auto text-red-700   " /> Mail
								</span>
							</ul>

							<ul className="w-full mt-10 h-auto mb-3 flex flex-row">
								<input
									className=" mx-auto px-3 py-1 text-sm  text-center text-slate-50  rounded-sm hover:shadow-md border-2"
									type="button"
									value="Pending"
									style={{
										backgroundColor: i.order_state == "pending" ? "orange" : "",
										color: i.order_state != "pending" ? "gray" : "",
										border: i.order_state == "pending" ? "none" : "",
									}}
									onClick={() => {
										setWarningData({
											message: "Do you want to change order stage to PENDIND?",
											key: "delete",
										});

										setCloseWarning(true);
									}}
								/>
								<input
									className=" mx-auto px-2 py-1  text-center text-slate-50 rounded-sm hover:shadow-md border-2 "
									type="button"
									value="Processing"
									style={{
										backgroundColor: i.order_state == "processing" ? "royalblue" : "",
										color: i.order_state != "processing" ? "gray" : "",
										border: i.order_state == "processing" ? "none" : "",
									}}
									onClick={() => {
										setWarningData({
											message: "Do you want to change order stage to PROCESSING?",
											key: "processing",
										});

										setCloseWarning(true);
									}}
								/>
								<input
									className=" mx-auto px-2 py-1  text-center text-slate-50   rounded-sm hover:shadow-md border-2 "
									type="button"
									value="Completed"
									style={{
										backgroundColor: i.order_state == "completed" ? "#0F9C0F" : "",
										color: i.order_state != "completed" ? "gray" : "",
										border: i.order_state == "completed" ? "none" : "",
									}}
									onClick={() => {
										setWarningData({
											message: "Do you want to change order stage to COMPLETED?",
											key: "completed",
										});

										setCloseWarning(true);
									}}
								/>
								<input
									type="button"
									value="Delete"
									className=" mx-auto px-2 py-1  text-center text-red-500   rounded-sm hover:shadow-md border-2 border-red-500 "
									onClick={() => {
										setWarningData({
											message: "Are you sure you want to DELETE this order",
											key: "delete",
										});
										setCloseWarning(true);
									}}
								/>
							</ul>
						</div>
					))}
			</div>

			{closeWarning && (
				<div className=" fixed w-full h-full left-0 right-0 top-60 bottom-0  items-center justify-center">
					<div className="w-9/12 mx-auto  md:w-96 md:h-36 absolute left-0 md:left-20 right-0 top:52 justify-center items-center h-auto my-3 py-3 flex flex-col bg-green-50 border-2 rounded-md">
						<p className="text-md py-2 px-4 text-center text-slate-700 font-md font-roboto">
							{warningData.message}
						</p>

						<div className="w-full pt-2 mx-auto items-center h-auto  flex flex-row">
							<p
								className="mx-auto   text-md text-center px-4 bg-green-600  hover:bg-green-600 text-slate-50 font-md font-roboto rounded-sm cursor-pointer"
								onClick={() => {
									ChangeStage(warningData.key);
									setCloseWarning(false);
								}}
							>
								yes
							</p>
							<p
								className="mx-auto   text-md text-center px-2 bg-slate-200 hover:bg-slate-500 text-slate-700 font-md font-roboto rounded-sm cursor-pointer"
								onClick={() => {
									setCloseWarning(false);
								}}
							>
								cancel
							</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Orders;
