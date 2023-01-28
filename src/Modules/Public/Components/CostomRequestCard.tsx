const CustomerequestCard = () => {
	return (
		<div className="m-auto my-3 md:mx-auto p-3 md:p-6 w-11/12 md:w-3/5 flex flex-col bg-white shadow-xl hover:shadow-2xl rounded-md self-center">
			<img src="img/undraw_preferences_re_49in.svg" className="mx-auto w-56 my-3 object-cover items-center" />
			<h1 className="mx-3 p-2 py-1 text-lg md:text-xl text-center text-purple-600 font-courgette font-bold">
				Custome made websites
			</h1>
			<div className="mx-1 p-1 flex flex-row items-center">
				<div className=" m-0 p-3 w-9/12 ">
					<p className="text-base md:text-xl text-slate-700 fonth-thin font-dayone">
						Request for a website made according to your specifications.
					</p>
				</div>

				<a
					href="#"
					className="m-auto px-6 py-2 w-auto  mx-auto text-center text-white  text-sm font-roboto  rounded bg-sky-400 hover:bg-purple-600 bg-gradient-to-r from-purple-600 hover:from-sky-400 transition-colors shadow-lg"
				>
					Request
				</a>
			</div>
		</div>
	);
};

export default CustomerequestCard;
