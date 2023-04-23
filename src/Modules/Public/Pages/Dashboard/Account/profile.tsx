import { FiEdit } from "react-icons/fi";
import EditAccount from "./editAccount";
import { useState } from "react";

const Profile = () => {
	const [editInfo, setEditInfo] = useState(false);
	const User = [
		{
			first_name: "Samuel",
			last_name: "Joseph",
			other_name: "dami",
			email: "mrsam@gmail.com",
			phone: "09073077717",
			birth_date: "2023-01-01",
			profrssion: " Data analyst",
		},
	];

	return (
		<div className="w-full h-auto m-0 md:py-1 px-0 md:px-5 border-2 border-slate-200">
			<div className="w-full h-auto m-0 md:py-2 my-0 md:my-5  border-2 border-slate-200 rounded-md">
				<h1 className="md:mx-3 text-xl p-4  font-roboto text-tabGreen  font-bold">Profile info</h1>
				{User &&
					User.map((i, n) => (
						<ul className="w-full m-0 p-5" key={n}>
							<li className=" mx-auto p-0 py-3  flex flex-row items-center">
								<h3 className="mx-2 p-1 text-md md:text-lg text-slate-700 font-roboto font-bold">
									Name:
								</h3>
								<span className=" p-1 text-md md:text-xl text-slate-700">
									{i.first_name} {i.last_name} {i.last_name}
								</span>
							</li>
							<li className=" mx-auto p-0 py-3 flex flex-row items-center">
								<h3 className="mx-2 p-1 text-md md:text-lg text-slate-700 font-roboto font-bold">
									Email:
								</h3>
								<span className=" p-1 text-md md:text-xl text-slate-700">{i.email}</span>
							</li>

							<li className=" mx-auto p-0 py-3 flex flex-row items-center">
								<h3 className="mx-2 p-1 text-md md:text-lg text-slate-700 font-roboto font-bold">
									Phone:
								</h3>
								<span className=" p-1 text-md md:text-xl text-slate-700">{i.phone}</span>
							</li>
							<li className=" mx-auto p-0 py-3 flex flex-row items-center">
								<h3 className="mx-2 p-1 text-md md:text-lg text-slate-700 font-roboto font-bold">
									Profession:
								</h3>
								<span className=" p-1 text-md md:text-xl text-slate-700">{i.profrssion}</span>
							</li>
							<li className=" mx-auto p-0 py-3 flex flex-row items-center">
								<h3 className="mx-2 p-1 text-md md:text-lg text-slate-700 font-roboto font-bold">
									Birth Date:
								</h3>
								<span className=" p-1 text-md md:text-xl text-slate-700">{i.birth_date}</span>
							</li>
						</ul>
					))}
				{editInfo && <EditAccount setEditInfo={setEditInfo} User={User} />}
			</div>

			<h1
				className="p-4 absolute bottom-14 right-14 bg-white rounded-full hover:bg-blue-100 shadow-lg shadow-slate-400 items-center cursor-pointer"
				onClick={() => setEditInfo(true)}
			>
				<FiEdit size={30} color="green" />
			</h1>
		</div>
	);
};

export default Profile;
