import PublicPagesNav from "../../Components/PublicPagesNav";

const Services = () => {
	const Services = [
		{
			img: "/img/undraw_everyday_life_re_1lfb.svg",
			name: " Web Hosting",
			detail: " Get fast hosting for your websites",
			url: "#",
		},
		{
			img: "/img/undraw_everyday_life_re_1lfb.svg",
			name: " UI/UX Design ",
			detail: " lets create an awsome UI for your projct ",
			url: "#",
		},
		{
			img: "/img/undraw_everyday_life_re_1lfb.svg",
			name: "   Website Templates ",
			detail: "chose from over 500 templates ",
			url: "#",
		},
		{
			img: "/img/undraw_everyday_life_re_1lfb.svg",
			name: "  Website Management ",
			detail: "  no down time with our management service ",
			url: "#",
		},
		{
			img: "/img/undraw_everyday_life_re_1lfb.svg",
			name: "       Build Custom Web Aplications ",
			detail: " Build complex web aplications ",
			url: "#",
		},
		{
			img: "/img/undraw_everyday_life_re_1lfb.svg",
			name: " Bulk Email Service ",
			detail: " Get fast hosting for your websites ",
			url: "#",
		},
		{
			img: "/img/undraw_everyday_life_re_1lfb.svg",
			name: " Bulk SMS",
			detail: " Get fast hosting for your websites",
			url: "#",
		},
		{
			img: "/img/undraw_everyday_life_re_1lfb.svg",
			name: " Advatise ",
			detail: " we can help you promote your business ",
			url: "#",
		},
		{
			img: "/img/undraw_everyday_life_re_1lfb.svg",
			name: "     Bulk Data",
			detail: "  ",
			url: "#",
		},
	];

	return (
		<>
			<PublicPagesNav />
			<div className=" w-full h-full   flex flex-col bg-white  ">
				<h3 className="mx-5 mt-16 text-4xl text-blue-700 font-dayone font-bold">Services</h3>

				<div className="w-full h-auto my-2 m-0 px-3 ">
					<div className="w-full h-auto m-0 py-10 flex flex-row flex-wrap">
						{Services &&
							Services.map((i, n) => (
								<a
									className="w-80 h-auto mx-auto my-12 pb-3 bg-white shadow-md rounded hover:shadow-lg"
									href={i.url}
									key={n}
								>
									<img src={i.img} alt="" className="w-80 h-32 items-center object-cover" />
									<h3 className="mx-3 py-2 text-2xl text-navDarkBlue  font-bold font-roboto">
										{i.name}
									</h3>
									<p className="mx-3 py-0 text-md text-slate-600 font-roboto">{i.detail}</p>
								</a>
							))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Services;
