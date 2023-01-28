import { Route, Routes } from "react-router-dom";
import Page404 from "./Modules/Public/Pages/404_Page";
import AboutUs from "./Modules/Public/Pages/Company Details/AboutUsPage";
import AccountProfile from "./Modules/Public/Pages/Account/AccountProfilepage";
import ClientsProducts from "./Modules/Public/Pages/ClientsProductPage/ClientsProductsPage";
import ContactUs from "./Modules/Public/Pages/Company Details/ContactUsPage";
import Dashboard from "./Modules/Public/Pages/Dashboard/Dashboard";
import LandingPage from "./Modules/Public/Pages/LandingPage/LandingPage";
import PreferenceRequest from "./Modules/Public/Pages/PreferenceRequest/PreferenceRequest";
import Products from "./Modules/Public/Pages/PreferenceRequest/ProductsPage";
import Services from "./Modules/Public/Pages/Services/Services";
import Login from "./Modules/Public/Pages/Auth/LogInPage";
import SignUp from "./Modules/Public/Pages/Auth/SignUpPage";
import TermsAndCons from "./Modules/Public/Pages/Company Details/TermsAndConditions";
import WebsiteSamples from "./Modules/Public/Pages/WebsiteSamples/WebsiteSamples";
import PUBROUTES from "./Modules/Public/PublicRoutes";
import Main from "./Modules/Public/Pages/Dashboard/Main";
import ClientTemplates from "./Modules/Public/Pages/ClientsProductPage/ClientTemplates";
import AddOns from "./Modules/Public/Pages/ClientsProductPage/AddOns";
import ClientsServices from "./Modules/Public/Pages/ClientsProductPage/ClientsServices";
import CustomerCare from "./Modules/Public/Pages/Customer Care";
import Invites from "./Modules/Public/Pages/Invites/Invites";
import BuyPack from "./Modules/Public/Pages/Transactions/BuyPack";

const App = () => {
	return (
		<>
			<Routes>
				<Route index path={PUBROUTES.LANDINGPAGE} element={<LandingPage />} />

				<Route path={PUBROUTES.LOGIN} element={<Login />} />
				<Route path={PUBROUTES.SIGNUP} element={<SignUp />} />

				<Route path={PUBROUTES.DASHBOARD} element={<Dashboard />}>
					<Route path={PUBROUTES.MAINMENUE} element={<Main />} />
					<Route path={PUBROUTES.CLIENTS_WEBSITETEMPLATES} element={<ClientTemplates />} />
					<Route path={PUBROUTES.CLIENTSPRODUCTPAGE} element={<ClientsProducts />} />
					<Route path={PUBROUTES.CLIENTS_ADD_ONS} element={<AddOns />} />
					<Route path={PUBROUTES.CLIENT_SERVICES} element={<ClientsServices />} />
					<Route path={PUBROUTES.PREFERENCEREQUEST} element={<PreferenceRequest />} />
					<Route path={PUBROUTES.ACCOUNTPROFILE} element={<AccountProfile />} />
					<Route path={PUBROUTES.CUSTOMERCARE} element={<CustomerCare />} />
					<Route path={PUBROUTES.INVITES} element={<Invites />} />
				</Route>

				<Route path={PUBROUTES.SERVICES} element={<Services />} />
				<Route path={PUBROUTES.BUY_PACK} element={<BuyPack />} />

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
