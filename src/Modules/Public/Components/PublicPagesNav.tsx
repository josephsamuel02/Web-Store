import { useState } from "react";

import { sidenavIcon } from "../Pages/LandingPage/SubscriptionPacks";
import PUBROUTES from "../PublicRoutes";
import { Button1 } from "./Button";

const PublicPagesNav = () => {
	const navLinks = [
		{ name: "Contact Us", link: "" },
		{ name: "About", link: "" },
	];

	const [sideNav, setSideNav] = useState(false);
	return (
		<section className="w-full h-auto py-3 fixed top-0 left-0 right-0 bg-tabGreen flex flex-row items-center">
			<h1 className="mx-6 items-center py-1">
				<a href={PUBROUTES.LANDINGPAGE}>
					<img src="/pagify.png" alt="" className="w-20 h-auto self-center" />
				</a>
			</h1>

			<nav className=" hidden md:flex flex-row m-0 mx-6  px-3 py-1 w-auto h-auto absolute right-3  items-center z-20">
				<ul className="mx-6 px-6  py-1 w-auto h-auto flex flex-row-items-center ">
					{navLinks.map((name, i) => (
						<a
							href={name.link}
							className="mx-auto px-6 py-3 text-center text-xl text-slate-100 hover:text-blue-600 font-courgette font-bold cursor-pointer "
							key={i}
						>
							{name.name}
						</a>
					))}
				</ul>

				<div className="m-auto   h-auto w-auto ">
					<Button1 Route={PUBROUTES.LOGIN} Text={"Log in"} />
				</div>
			</nav>

			{sideNav && (
				<ul
					className={
						" fixed top-16 left-0 right-0 z-40  py-6 px-3 w-auto h-68 flex flex-col transition-all items-center bg-white bg-gradient-to-b from-tabGreen  "
					}
				>
					{navLinks.map((name, i) => (
						<a
							href={name.link}
							className="mx-auto px-6 py-3 text-center text-xl text-slate-700 hover:text-white font-dayone font-bold cursor-pointer "
							key={i}
						>
							{name.name}
						</a>
					))}

					<div className="w-full m-0 my-5 p-1 h-auto flex flex-row ">
						<a
							href={PUBROUTES.LOGIN}
							className="mx-auto px-8 py-2 text-center text-white  text-md font-nunito font-bold  rounded bg-green-400 hover:bg-tabGreen bg-gradient-to-r from-tabGreen hover:from-green-400 transition-colors shadow-md"
						>
							Login
						</a>
						<a
							href={PUBROUTES.SIGNUP}
							className="mx-auto px-7 py-2 text-center text-white  text-md font-nunito font-bold  rounded bg-green-400 hover:bg-tabGreen bg-gradient-to-r from-tabGreen hover:from-green-400 transition-colors shadow-md"
						>
							Sign Up
						</a>
					</div>
				</ul>
			)}
			<div
				className=" flex md:hidden absolute top-3 right-5 p-1 h-auto w-auto "
				onClick={() => setSideNav(!sideNav)}
			>
				{sidenavIcon}
			</div>
		</section>
	);
};

export default PublicPagesNav;
