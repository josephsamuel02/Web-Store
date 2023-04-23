import { Route, Routes } from "react-router-dom";
import Page404 from "./Modules/Public/Pages/404_Page";
import AboutUs from "./Modules/Public/Pages/Company Details/AboutUsPage";
import AccountProfile from "./Modules/Public/Pages/Dashboard/Account/AccountProfilepage";
import ContactUs from "./Modules/Public/Pages/Company Details/ContactUsPage";
import Dashboard from "./Modules/Public/Pages/Dashboard/Dashboard";
import LandingPage from "./Modules/Public/Pages/LandingPage/LandingPage";
import Products from "./Modules/Public/Pages/PreferenceRequest/ProductsPage";

import TermsAndCons from "./Modules/Public/Pages/Company Details/TermsAndConditions";
import WebsiteSamples from "./Modules/Public/Pages/WebsiteSamples/WebsiteSamples";
import PUBROUTES from "./Modules/Public/PublicRoutes";
import Main from "./Modules/Public/Pages/Dashboard/Main";
import AddOns from "./Modules/Public/Pages/Dashboard/ClientsProductPage/AddOns";

import CustomerCare from "./Modules/Public/Pages/Dashboard/Customer Care";
import Invites from "./Modules/Public/Pages/Dashboard/Invites/Invites";
import BuyPack from "./Modules/Public/Pages/Dashboard/Transactions/BuyPack";
import Login from "./Modules/Public/Pages/Auth/Login";
import SignUp from "./Modules/Public/Pages/Auth/SignUp";
import ManageStore from "./Modules/Public/Pages/Dashboard/Management/manageStore";

const App = () => {
	return (
		<>
			<Routes>
				<Route index path={PUBROUTES.LANDINGPAGE} element={<LandingPage />} />

				<Route path={PUBROUTES.LOGIN} element={<Login />} />
				<Route path={PUBROUTES.SIGNUP} element={<SignUp />} />

				<Route path={PUBROUTES.DASHBOARD} element={<Dashboard />}>
					<Route path={PUBROUTES.MAINMENUE} element={<Main />} />
					<Route path={`${PUBROUTES.BUY_PACK}/:id`} element={<BuyPack />} />
					<Route path={PUBROUTES.CLIENTS_ADD_ONS} element={<AddOns />} />
					<Route path={PUBROUTES.ACCOUNTPROFILE} element={<AccountProfile />} />
					<Route path={PUBROUTES.CUSTOMERCARE} element={<CustomerCare />} />
					<Route path={PUBROUTES.MANAGE_STORE} element={<ManageStore />} />
					<Route path={PUBROUTES.INVITES} element={<Invites />} />
				</Route>

				<Route path={PUBROUTES.WEBSITESAMPLES} element={<WebsiteSamples />} />
				<Route path={PUBROUTES.PRODUCTS} element={<Products />} />

				<Route path={PUBROUTES.ABOUTUS} element={<AboutUs />} />
				<Route path={PUBROUTES.CONTACTUS} element={<ContactUs />} />
				<Route path={PUBROUTES.TERMSANDCONS} element={<TermsAndCons />} />

				<Route path={"*"} element={<Page404 />} />
			</Routes>
		</>
	);
};

export default App;
