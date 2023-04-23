import { CgProfile } from "react-icons/cg";
import { GoDashboard } from "react-icons/go";

import { MdOutlineDashboardCustomize, MdLogout } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";

import PUBROUTES from "../../PublicRoutes";

const SideNav = () => {
	const Services = [
		{
			icon: <GoDashboard size={23} color="white" />,
			name: " Dashboard",
			url: PUBROUTES.MAINMENUE,
		},

		{
			icon: <MdOutlineDashboardCustomize size={23} color="white" />,
			name: " Add-ons",
			url: PUBROUTES.CLIENTS_ADD_ONS,
		},

		{
			icon: <RiCustomerService2Line size={25} color="white" />,
			name: "  Customer Care",
			url: PUBROUTES.CUSTOMERCARE,
		},
		{
			icon: <CgProfile size={25} color="white" />,
			name: "   User Account",
			url: PUBROUTES.ACCOUNTPROFILE,
		},
		{
			icon: <GoDashboard size={23} color="white" />,
			name: " Invites",
			url: PUBROUTES.INVITES,
		},
		{
			icon: <MdLogout size={25} color="white" />,
			name: "Log out",
			url: "#",
		},
	];

	return (
		<>
			<div className="mx-auto items-center py-3 md:pt-12 ">
				<a href={`${PUBROUTES.DASHBOARD}/menue`}>
					<img src="/pagify.png" alt="" className=" w-16 md:w-24 h-auto self-center" />
				</a>
			</div>
			<div className="h-auto w-full mx-auto px-0 md:px-1 py-3 border-sm border-t-2 border-slate-100">
				{Services &&
					Services.map((i, n) => (
						<a
							href={i.url}
							className="mx-auto py-2 my-3 items-center text-slate-200 text-base md:text-xl font-extralight font-nunito flex flex-row hover:bg-green-500 rounded cursor-pointer "
							key={n}
						>
							<span className="mx-2 md:mx-3">{i.icon}</span>
							{i.name}
						</a>
					))}
			</div>
		</>
	);
};

export default SideNav;
