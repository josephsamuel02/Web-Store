import { useState } from "react";

const Projects = () => {
	const [Services, setService] = useState([
		{
			img: "https://res.cloudinary.com/promotion-army/image/upload/v1669311452/WBSITE%20SALES/ew_aunvm0.png",
			project_name: "Alpha Technologies Website",
			project_id: " A0062",
			url: "#",
		},
		{
			img: "https://res.cloudinary.com/promotion-army/image/upload/v1669311452/WBSITE%20SALES/ew_aunvm0.png",
			project_name: "Alpha Technologies Website",
			project_id: " A0062",
			url: "#",
		},
		{
			img: "https://res.cloudinary.com/promotion-army/image/upload/v1669311452/WBSITE%20SALES/ew_aunvm0.png",
			project_name: "Alpha Technologies Website",
			project_id: " A0062",
			url: "#",
		},
	]);

	return (
		<div className="w-full h-auto m-0 py-1 px-5  ">
			<div className="w-full h-auto m-auto py-5 flex flex-row flex-wrap">
				{Services &&
					Services.map((i, n) => (
						<a
							className="w-60 h-auto mx-auto my-12 pb-2 bg-white shadow-md rounded hover:shadow-lg"
							href={i.url}
							key={n}
						>
							<img src={i.img} alt="" className="w-60 h-auto items-center object-cover" />
							<h3 className="mx-3 py-2 text-xl text-navDarkBlue font-bold font-roboto">
								{i.project_name}
							</h3>
							<p className="mx-3 py-1 text-sm text-slate-600 font-roboto">ID: {i.project_id}</p>
						</a>
					))}
			</div>
		</div>
	);
};

export default Projects;
