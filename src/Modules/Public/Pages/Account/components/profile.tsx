import { FiEdit } from "react-icons/fi";

const Profile = () => {
	const User = [
		{
			first_name: "Samuel",
			last_name: "Joseph",
			other_name: "dami",
			email: "mrsam@gmail.com",
			phone: "09073077717",
			birth_date: " 2 jun 1998",
			profrssion: " Data analyst",
		},
	];

	const coporate = [
		{
			company_name: "Vnox Incoporated",
			country: "Nigeria",
			state: "Lagos",
			LGA: "Ikeja",
			company_address: "3,adefolu drive, allen, ikeja",
			company_type: " Software company",
			role_held: "HR Officer",
		},
	];

	return (
		<div className="w-full h-auto m-0 py-1 px-5 border-2 border-slate-200">
			<div className="w-full h-auto m-0 py-2 my-5  border-2 border-slate-200 rounded-md">
				<h1 className="mx-3 text-xl p-4  font-roboto text-blue-900 font-bold">Basic info</h1>
				{User &&
					User.map((i, n) => (
						<ul className="w-full m-0 p-5" key={n}>
							<li className=" mx-auto p-0 py-3  flex flex-row items-center">
								<h3 className="mx-2 p-1 text-lg text-slate-700 font-roboto font-bold">Name:</h3>
								<span className=" p-1 text-xl text-slate-700">
									{i.first_name} {i.last_name} {i.last_name}
								</span>
							</li>
							<li className=" mx-auto p-0 py-3 flex flex-row items-center">
								<h3 className="mx-2 p-1 text-lg text-slate-700 font-roboto font-bold">Email:</h3>
								<span className=" p-1 text-xl text-slate-700">{i.email}</span>
							</li>

							<li className=" mx-auto p-0 py-3 flex flex-row items-center">
								<h3 className="mx-2 p-1 text-lg text-slate-700 font-roboto font-bold">Phone:</h3>
								<span className=" p-1 text-xl text-slate-700">{i.phone}</span>
							</li>
							<li className=" mx-auto p-0 py-3 flex flex-row items-center">
								<h3 className="mx-2 p-1 text-lg text-slate-700 font-roboto font-bold">Profession:</h3>
								<span className=" p-1 text-xl text-slate-700">{i.profrssion}</span>
							</li>
							<li className=" mx-auto p-0 py-3 flex flex-row items-center">
								<h3 className="mx-2 p-1 text-lg text-slate-700 font-roboto font-bold">Birth Date:</h3>
								<span className=" p-1 text-xl text-slate-700">{i.birth_date}</span>
							</li>
						</ul>
					))}
			</div>

			<div className="w-full h-auto m-0 my-5 py-2  border-2 border-slate-200 rounded-md">
				<h1 className="mx-3 text-xl p-4 font-roboto text-blue-900 font-bold">Corporate info</h1>
				{coporate &&
					coporate.map((i, n) => (
						<ul className="w-full m-0 p-5" key={n}>
							<li className=" mx-auto p-0 py-3  flex flex-row items-center">
								<h3 className="mx-2 p-1 text-lg text-slate-700 font-roboto font-bold">
									Company Name:
								</h3>
								<span className=" p-1 text-xl text-slate-700">{i.company_name}</span>
							</li>
							<li className=" mx-auto p-0 py-3 flex flex-row items-center">
								<h3 className="mx-2 p-1 text-lg text-slate-700 font-roboto font-bold">Type:</h3>
								<span className=" p-1 text-xl text-slate-700">{i.company_type}</span>
							</li>

							<li className=" mx-auto p-0 py-3 flex flex-row items-center">
								<h3 className="mx-2 p-1 text-lg text-slate-700 font-roboto font-bold">Location:</h3>
								<span className=" p-1 text-xl text-slate-700">
									{i.LGA}, {i.state}, {i.country}
								</span>
							</li>
							<li className=" mx-auto p-0 py-3 flex flex-row items-center">
								<h3 className="mx-2 p-1 text-lg text-slate-700 font-roboto font-bold">Address:</h3>
								<span className=" p-1 text-xl text-slate-700">{i.company_address}</span>
							</li>
							<li className=" mx-auto p-0 py-3 flex flex-row items-center">
								<h3 className="mx-2 p-1 text-lg text-slate-700 font-roboto font-bold">Role Held: </h3>
								<span className=" p-1 text-xl text-slate-700">{i.role_held}</span>
							</li>
						</ul>
					))}
			</div>
			<h1 className="p-4 absolute bottom-14 right-14 bg-white rounded-full hover:bg-blue-100 shadow-lg shadow-slate-400 items-center cursor-pointer">
				<FiEdit size={30} color="darkblue" />
			</h1>
		</div>
	);
};

export default Profile;
