import { useState } from "react";

const Services = () => {
	const [Services, setService] = useState([
		{
			img: "/img/undraw_biking_kc-4-f.svg",
			project_name: "Bulk email",
			project_id: " A0062",
			url: "#",
		},
		{
			img: "/img/undraw_biking_kc-4-f.svg",
			project_name: " Ui for alpha tech",
			project_id: " A0062",
			url: "#",
		},
		{
			img: "/img/undraw_biking_kc-4-f.svg",
			project_name: "manage akins website",
			project_id: " A0062",
			url: "#",
		},
	]);
	return (
		<div className="w-full h-auto m-0 py-1 px-1  ">
			<div className="w-full h-auto m-auto py-10 flex flex-row flex-wrap">
				{Services &&
					Services.map((i, n) => (
						<a
							className="w-56 h-auto mx-auto my-12 pb-2 bg-white shadow-md rounded hover:shadow-lg"
							href={i.url}
							key={n}
						>
							<img
								src={i.img}
								alt=""
								className="w-52 h-auto mx-auto rounded-full items-center object-cover"
							/>
							<h3 className="mx-3 py-2 text-md text-navDarkBlue font-bold font-roboto">
								{i.project_name}
							</h3>
							<p className="mx-3 py-1 text-sm text-slate-600 font-roboto">ID: {i.project_id}</p>
						</a>
					))}
			</div>
		</div>
	);
};

export default Services;
