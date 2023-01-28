import Footer from "../../Components/Footer";
import Head from "./Head";
import Manifesto from "./Manifesto";
import ProductsPacks from "./ProductsPacks";

const LandingPage = () => {
	return (
		<div className="w-full h-screen">
			<Head />
			<Manifesto />
			<ProductsPacks />
			<Footer />
		</div>
	);
};

export default LandingPage;
