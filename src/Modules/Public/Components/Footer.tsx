import PUBROUTES from "../PublicRoutes";

const Footer = () => {
	return (
		<div className="w-full h-auto py-10 bg-green-700 items-center">
			<div className="w-full-h-auto flex flex-col md:flex-row">
				<div className=" m-auto px-10 md:w-1/3  items-center">
					<p className="m-auto p-1  text-base font-thin text-white ">
						Be Notified of our latest offers and promotions.
					</p>
					<div className=" m-0 flex flex-row">
						<input
							type="text"
							placeholder="e-mail"
							className="m-1 mr-0 py-1.5 px-3 rounded text-base text-slate-700 outline-0"
						/>
						<span className="m-1 px-3 py-2 text-base font-bold text-slate-700  bg-slate-300 hover:bg-green-200 rounded-sm cursor-pointer">
							Request
						</span>
					</div>
				</div>

				<div className=" m-auto mx-10 md:mx-auto  md:w-2/3 h-auto flex flex-row">
					<ul className=" m-auto  list-none  p-3 flex flex-col">
						<p className="m-1 p-1  text-base font-bold text-white ">Links </p>
						<a
							href={PUBROUTES.ABOUTUS}
							className="text-base font-thin text-white cursor-pointer decoration-none"
						>
							About Us
						</a>
						<a
							href={PUBROUTES.CONTACTUS}
							className="text-base font-thin text-white cursor-pointer decoration-none"
						>
							Contact Us
						</a>
						<a
							href={PUBROUTES.SIGNUP}
							className="text-base font-thin text-white cursor-pointer decoration-none"
						>
							Sign Up
						</a>
						<a
							href={PUBROUTES.LOGIN}
							className="text-base font-thin text-white cursor-pointer decoration-none"
						>
							Login
						</a>
					</ul>

					<ul className="m-auto list-none  p-3 flex flex-col">
						<p className="m-1 p-1  text-base font-bold text-white ">Services </p>

						<a
							href={PUBROUTES.WEBSITESAMPLES}
							className="text- font-thin text-white cursor-pointer decoration-none"
						>
							Website Samples
						</a>
						<a
							href={PUBROUTES.PRODUCTS}
							className="text- font-thin text-white cursor-pointer decoration-none"
						>
							Available Websites Features
						</a>
						<a href={"#"} className="text- font-thin text-white cursor-pointer decoration-none">
							Business Registration
						</a>
					</ul>
				</div>
			</div>
			<div className="w-full mx-auto px-5 h-auto mt-10 flex flex-row">
				<a
					href={PUBROUTES.TERMSANDCONS}
					className="m-10 mb-2 p-1  text-sm font-thin text-white cursor-pointer decoration-none "
				>
					Terms | Privacy and Policy
				</a>
				<p className="m-10 mb-2 p-1  text-sm font-thin text-white cursor-pointer decoration-none ">
					© 2016-2021 Pagify. All Rights Reserved
				</p>
			</div>
		</div>
	);
};

export default Footer;
// Footer URLS
// About Us Page
// Contact Us Page
// Terms and conditions Page web sheet or paper
// Login
// Sign up page
