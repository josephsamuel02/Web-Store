const AddOns = () => {
	const AddOns = [
		{
			img: " /img/er.png",
			tittle: " Add a new page",
			more: " Add a new page to your website",
		},
		{
			img: " /img/er.png",
			tittle: " Live Chat",
			more: " Add live chat to your wbsite",
		},
		{
			img: " /img/er.png",
			tittle: " Add a pup-up",
			more: " Add a new page to your website",
		},
		{
			img: " /img/er.png",
			tittle: " Add Wahatsapp chat",
			more: " Add a new page to your website",
		},
		{
			img: " /img/er.png",
			tittle: " Collect emails & phone numbers",
			more: "Add a form on your website to request emails & phone numbers",
		},
	];

	return (
		<>
			<div className=" w-full h-screen md:ml-2  flex flex-col bg-tabGreen overflow-y-scroll">
				<h3 className="mx-5 my-5 text-4xl text-white font-Palanquin font-bold ">Add-ons</h3>
				<div className="w-full h-auto md:mx-2 py-6 bg-white flex flex-row flex-wrap">
					{AddOns &&
						AddOns.map((i, n) => (
							<div
								className="w-80  h-auto mx-auto my-12 pb-3 bg-white shadow-md rounded hover:shadow-lg"
								key={n}
							>
								<img src={i.img} alt="" className="m-0 w-80 h-40 object-cover object-center" />
								<h3 className="mx-3 py-3 text-xl text-navDarkBlue font-bold font-roboto">
									{i.tittle}
								</h3>
								<p className="mx-3 py-1 text-base text-slate-800 font-roboto">{i.more} </p>
							</div>
						))}
				</div>
			</div>
		</>
	);
};

export default AddOns;
