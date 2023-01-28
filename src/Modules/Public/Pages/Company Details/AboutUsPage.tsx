import Footer from "../../Components/Footer";
import PublicPagesNav from "../../Components/PublicPagesNav";

const AboutUs = () => {
	return (
		<section>
			<PublicPagesNav />

			<div className="w-full h-auto flex flex-col md:flex-row items-center">
				<div className="mx-4 py-5 px-5  md:px-20 my-20 w-11/12 md:w-3/5 rounded shadow-lg  ">
					<h1 className="text-4xl mx-5 md:mx-auto text-blue-600 py-5 font-bold text-left">About Us</h1>

					<p className="z-10 mb-3 mx-auto  text-lg">
						We design, build and manage engaging websites. We help businesses to easily create and manage beautiful, modern
						websites to help build their business.
					</p>

					<p className="z-10 mb-3 mx-auto  text-lg">
						We provide services such as website management, business registration and business promotion for our clients.
					</p>

					<p className="z-10 mb-3 mx-auto  text-lg">
						We make finding the right Website for your business easy and simple. We are one of the fastest-growing web development
						company.
					</p>

					<p className="z-10 mb-3 mx-auto  text-lg">
						Our Aim Is To Be A Leader In Website Design, Development And Management; To become the best technology company in
						Nigeria and one of the top in the globe, whilst utilising a highly motivated team to offer innovative services that
						drive sales and positively change our client's digital presence.
					</p>
				</div>

				<img src=" img/undraw_pitching_re_fpgk.svg" alt="" className="hidden md:flex w-2/5 h-auto   " />
			</div>

			<Footer />
		</section>
	);
};

export default AboutUs;
