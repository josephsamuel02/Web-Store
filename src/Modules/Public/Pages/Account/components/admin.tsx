import { useState } from "react";

const Admin = () => {
	const [admins, setAdmins] = useState([
		{
			project_name: "Avalanch Media Group",
			pack_level: "bus",
			isOnline: true,
			sub_admins: ["wale ayola", "tunde edwards", "olaniyan"],
		},
		{
			project_name: "Avalanch Media Group",
			pack_level: "sta",
			isOnline: true,
			sub_admins: ["wale ayola", "tunde edwards", "olaniyan"],
		},
		{
			project_name: "Avalanch Media Group",
			pack_level: "pre",
			isOnline: false,
			sub_admins: ["wale ayola", "tunde edwards", "olaniyan"],
		},
	]);

	return (
		<div className="w-full h-auto mx-auto px-5 py-10 border-2 flex flex-row flex-wrap">
			{admins &&
				admins.map((m, i) => (
					<div
						className="w-11/12 md:w-80 h-auto mx-auto my-3 px-5 py-3 border-2 rounded-lg shadow-md hover:shadow-lg"
						key={i}
					>
						<h1 className="m-0 p-2 text-2xl  font-dayone truncate text-blue-700">
							{m.project_name}
						</h1>
						<p className=" p-2 text-lg font-bold text-black">Sub-admins</p>
						{m.sub_admins.map((v, i) => (
							<div className="w-full m-0 p-1" key={i}>
								<li className="text-md font-roboto text-gray-600">{v}</li>
							</div>
						))}

						<div className="w-full m-0 p-2 flex flex-row flex-wrap">
							<p className="mx-auto p-2 text-sm font-roboto text-black flex flex-row">
								online
								<span
									className="mx-1 mt-1 p-1.5 w-1 h-1 rounded-full "
									style={{
										backgroundColor: m.isOnline ? "#01b90d" : "red",
									}}
								></span>
							</p>
							<p className="mx-auto p-2 text-sm font-roboto text-black flex flex-row">
								pre
								<span
									className="mx-1 mt-1 p-1.5 w-1 h-1 rounded-full "
									style={{
										backgroundColor: "rebeccapurple",
									}}
								></span>
							</p>
						</div>
					</div>
				))}
		</div>
	);
};

export default Admin;
