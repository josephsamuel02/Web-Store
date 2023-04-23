import { useState } from "react";
import { MdClose } from "react-icons/md";
const CustomerCare = () => {
	const [selectComplaint, setSelectComplaint] = useState({ id: -0, text: "" });
	const [selected, setSelected] = useState<boolean>(false);
	const [closeChatAlart, setCloseChatAlart] = useState<boolean>(false);
	const [clearChatHistory, setClearChatHistory] = useState<boolean>(false);
	const complaintsType = [
		{ complaint_id: 1, complaint: "	Web Hosting and Management" },
		{ complaint_id: 2, complaint: "	Templates and UI Designs" },
		{ complaint_id: 3, complaint: "User Account" },
		{ complaint_id: 4, complaint: "	Finance and Payments" },
		{ complaint_id: 5, complaint: "	Promotions and Gifts" },
		{ complaint_id: 6, complaint: "	other..." },
	];

	return (
		<div className="w-full bg-green-200 h-screen ml-2  overflow-y-scroll ">
			<img
				src="/2.png"
				alt="customer care"
				className="w-full h-32 mx-auto m-4 my-0 object-cover items-center"
			/>

			<div className="w-full h-full ">
				{!selected && (
					<div id="1" className="w-11/12 md:w-96 h-auto mx-auto mt-1 p-5   rounded-lg">
						<h1 className="mx-auto p-1 text-2xl text-tabGreen font-bold font-dayone">
							How can we help you
						</h1>

						{selected == false ? (
							<>
								<p className="mx-auto p-1 my-4   text-lg text-slate-600 break-words font-bold  font-roboto">
									chose a complaint category...
								</p>
								{complaintsType &&
									complaintsType.map((i, n) => (
										<a
											className="w-full h-20 mx-auto my-2 p-0  border-2 border-green-500 hover:shadow-md hover:bg-blue-50 flex items-center rounded-md cursor-pointer "
											style={{ backgroundColor: selectComplaint.id == i.complaint_id ? "green" : "" }}
											key={n}
											onClick={() => {
												setSelectComplaint({ id: i.complaint_id, text: `${i.complaint}` });
												setSelected(true);
											}}
											href="#2"
										>
											<p
												className="mx-5 p-1 text-left text-xl text-slate-700 break-words font-roboto"
												style={{
													color: selectComplaint.id == i.complaint_id ? "white" : "",
												}}
											>
												{i.complaint}
											</p>
										</a>
									))}
							</>
						) : (
							""
						)}
					</div>
				)}

				{selected && (
					<div
						id="2"
						className="w-11/12 md:w-96 h-auto mx-auto my-10 p-2 md:p-5 py-0 border-2 bg-slate-200 rounded-lg"
					>
						{closeChatAlart && (
							<div className="mx-auto w-full h-24 py-3 relative top-1 rounded-lg bg-yellow-100  shadow-md">
								<h1 className="mx-auto px-3 pb-1 text-sm md:text-md text-center text-slate-700  font-roboto">
									Are you sure you want to close this thread?
								</h1>
								<h1 className="mx-auto  text-center px-3 text-sm md:text-md  text-orange-700  font-roboto">
									Previous conversations will be cleard.
								</h1>

								<p
									className="m-2 py-0.5 px-2 text-sm text-slate-800  float-left bg-slate-200 hover:bg-slate-400 rounded-sm cursor-pointer z-10"
									onClick={() => {
										setCloseChatAlart(false);
									}}
								>
									Cancel
								</p>

								<p
									className="m-2 py-0.5 px-4 text-sm text-white  float-right bg-slate-700 hover:bg-slate-500 rounded-sm cursor-pointer z-10"
									onClick={() => {
										setClearChatHistory(true);
										setCloseChatAlart(false);
										setSelected(false);
									}}
								>
									Yes
								</p>
							</div>
						)}

						{!clearChatHistory && (
							<>
								{selectComplaint.text && (
									<div className="mx-auto my-4 p-3 py-5 flex flex-row border-2 bg-blue-100 border-green-300 rounded-md items-center">
										<h1 className="w-11/12 text-xl truncate text-slate-600 font-roboto ">
											{selectComplaint.text}
										</h1>

										<span
											className="  m-auto float-right cursor-pointer "
											onClick={() => setCloseChatAlart(true)}
										>
											<MdClose size={24} className=" text-slate-600 hover:text-red-600" />
										</span>
									</div>
								)}
							</>
						)}
						<div className="w-full h-80  my-2 border-2 bg-slate-100 rounded-lg overflow-y-scroll scrollbar-hide">
							<p className=" my-3 mx-3 p-3  mr-10 break-words text-base text-black text-left float-left  bg-green-300 border rounded-md">
								Kindly drop your request below
							</p>
							<p className=" flex my-3 mx-3 ml-10 p-3   break-words text-base text-white   float-right bg-green-600 border rounded-md">
								messages...
							</p>
						</div>

						<div className="m-0 h-auto flex flex-row position relative bottom-0 items-center bg-white border-2 border-slate-400 hover:border-blue-500 rounded-md">
							<textarea
								className=" w-11/12 h-12 mx-1 px-0  outline-none break-words text-md text-slate-700 scrollbar-hide border-white rounded-md"
								name="message"
								id=""
								placeholder="message..."
							></textarea>
							<span className=" text-center text-white text-sm items-center font-roboto mx-1 px-3 py-2 rounded-sm bg-green-700 hover:bg-green-600 cursor-pointer">
								Send
							</span>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default CustomerCare;
