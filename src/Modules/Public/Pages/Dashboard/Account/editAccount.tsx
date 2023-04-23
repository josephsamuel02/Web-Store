import { useState } from "react";

interface Props {
	setEditInfo: React.Dispatch<React.SetStateAction<boolean>>;
	User: Array<any>;
}

const EditAccount = ({ setEditInfo, User }: Props) => {
	const [userData, setUserData] = useState(User[0]);
	const { first_name, last_name, other_name, email, phone, birth_date, profrssion } = userData;

	return (
		<div className="w-full h-full z-20 bg-opacity-60 bg-black fixed top-0 left-0 right-0 bottom-0 ">
			<div className="mx-auto  absolute top-8  left-3 right-3 md:left-48 md:right-48 bottom-16 w-auto h-full flex flex-col   ">
				<form
					onSubmit={(e) => e.preventDefault()}
					className="mx-auto pb-10 pt-4  w-full md:px-10 md:w-auto h-auto flex flex-col bg-white rounded-3xl"
				>
					<h3
						className=" mx-auto pb-9    text-xl  md:text-2xl text-red-800 font-Palanquin font-bold cursor-pointer hover:text-black"
						onClick={() => {
							setEditInfo(false);
						}}
					>
						Close
					</h3>

					<h3 className=" mx-7 md:mx-2 pb-1 text-3xl text-tabGreen font-Palanquin font-bold">
						Edit
					</h3>

					<div className="mx-auto py-2 px-2 w-11/12 md:w-96 h-auto ">
						<p className=" mx-auto py-1 text-xl text-slate-700 font-roboto ">Name</p>
						<input
							type="text"
							name=""
							id=""
							placeholder={`${first_name} ${last_name} ${other_name}`}
							onChange={(e) => {
								const names = e.target.value.split(" ");
								setUserData({
									...userData,
									first_name: `${names[0]}`,
									last_name: `${names[1]}`,
									other_name: `${names[2]}`,
								});
							}}
							className="mx-auto py-2 px-2 w-full h-auto border-2 outline-none rounded-md hover:border-tabGreen"
						/>
					</div>

					<div className="mx-auto py-2 px-2 w-11/12 md:w-96 h-auto ">
						<p className=" mx-auto py-1 text-xl text-slate-700 font-roboto ">Email</p>

						<input
							type="email"
							name=""
							id=""
							placeholder={email}
							onChange={(e) => {
								setUserData({ ...userData, email: e.target.value });
							}}
							className="mx-auto py-2 px-2 w-full h-auto border-2 outline-none rounded-md hover:border-tabGreen"
						/>
					</div>

					<div className="mx-auto py-2 px-2 w-11/12 md:w-96 h-auto ">
						<p className=" mx-auto py-1 text-xl text-slate-700 font-roboto ">Phone line</p>

						<input
							type="tel"
							name=""
							id=""
							placeholder={phone}
							onChange={(e) => {
								setUserData({ ...userData, phone: e.target.value });
							}}
							className="mx-auto py-2 px-2 w-full h-auto border-2 outline-none rounded-md hover:border-tabGreen"
						/>
					</div>

					<div className="mx-auto py-2 px-2 w-11/12 md:w-96 h-auto ">
						<p className=" mx-auto py-1 text-xl text-slate-700 font-roboto ">Profession</p>

						<input
							type="text"
							name=""
							id=""
							placeholder={profrssion}
							onChange={(e) => {
								setUserData({ ...userData, profrssion: e.target.value });
							}}
							className="mx-auto py-2 px-2 w-full h-auto border-2 outline-none rounded-md hover:border-tabGreen"
						/>
					</div>
					<div className="mx-auto py-2 px-2 w-11/12 md:w-96 h-auto ">
						<p className=" mx-auto py-1 text-xl text-slate-700 font-roboto ">Birth Date:</p>

						<input
							type="date"
							name=""
							id=""
							defaultValue={birth_date}
							onChange={(e) => {
								setUserData({ ...userData, birth_date: e.target.value });

								//	console.log(e.target.value);
							}}
							className="mx-auto py-2 px-2 w-full h-auto border-2 outline-none rounded-md hover:border-tabGreen"
						/>
					</div>

					<div className="mx-auto py-4 px-2 w-11/12 md:w-96 h-auto ">
						<input
							type="submit"
							name="save"
							value={"Save"}
							id=""
							className="mx-auto py-2 px-2 w-full h-auto  outline-none text-center text-2xl text-white rounded-md bg-tabGreen hover:bg-green-500"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default EditAccount;
