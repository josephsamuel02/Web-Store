import { CgTemplate, CgProfile } from "react-icons/cg";
import { GoDashboard } from "react-icons/go";

import { ImInsertTemplate } from "react-icons/im";
import { BsBriefcaseFill } from "react-icons/bs";
import {
	MdOutlineMonetizationOn,
	MdOutlineDashboardCustomize,
	MdLogout,
} from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";

import PUBROUTES from "../../PublicRoutes";
const SideNav = () => {
	const Services = [
		{
			icon: <GoDashboard size={23} color="#006CE3" />,
			name: " Dashboard",
			url: PUBROUTES.MAINMENUE,
		},
		{
			icon: <CgTemplate size={24} color="#006CE3" />,
			name: "   My Websites",
			url: PUBROUTES.CLIENTSPRODUCTPAGE,
		},
		{
			icon: <ImInsertTemplate size={21} color="#006CE3" />,
			name: " Templates",
			url: PUBROUTES.CLIENTS_WEBSITETEMPLATES,
		},
		{
			icon: <MdOutlineDashboardCustomize size={23} color="#006CE3" />,
			name: " Add-ons",
			url: PUBROUTES.CLIENTS_ADD_ONS,
		},
		{
			icon: <BsBriefcaseFill size={23} color="#006CE3" />,
			name: "  Services",
			url: PUBROUTES.CLIENT_SERVICES,
		},
		{
			icon: <MdOutlineMonetizationOn size={28} color="#006CE3" />,
			name: " Finance",
			url: PUBROUTES.PAYMENTS,
		},
		{
			icon: <RiCustomerService2Line size={25} color="#006CE3" />,
			name: "  Customer Care",
			url: PUBROUTES.CUSTOMERCARE,
		},
		{
			icon: <CgProfile size={25} color="#006CE3" />,
			name: "   User Account",
			url: PUBROUTES.ACCOUNTPROFILE,
		},
		{
			icon: <GoDashboard size={23} color="#006CE3" />,
			name: " Invites",
			url: PUBROUTES.INVITES,
		},
		{
			icon: <MdLogout size={25} color="#006CE3" />,
			name: "Log out",
			url: "#",
		},
	];

	return (
		<div className=" hidden md:flex h-screen pl-3 w-72 flex-col bg-navDarkBlue ">
			<div className="mx-auto items-center py-3  ">
				<a href={`${PUBROUTES.DASHBOARD}/menue`}>
					<img src="/pagify.png" alt="" className="w-20 h-auto self-center" />
				</a>
			</div>
			<div className="h-auto w-full mx-auto px-1 py-3 border-sm border-t-2 border-blue-900">
				{Services &&
					Services.map((i, n) => (
						<a
							href={i.url}
							className="mx-auto py-2 my-2 items-center text-slate-200 text-xl font-extralight font-nunito flex flex-row hover:bg-blue-900 rounded cursor-pointer "
							key={n}
						>
							<span className="mx-3">{i.icon}</span>
							{i.name}
						</a>
					))}
			</div>
		</div>
	);
};

export default SideNav;
