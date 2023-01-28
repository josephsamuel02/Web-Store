import PublicPagesNav from "../../Components/PublicPagesNav";
import PUBROUTES from "../../PublicRoutes";
import PUBURLS from "../../utils/pub.urls";

const Head = () => {
	return (
		<div className="w-full h-auto md:h-full m-0 p-0  bg-white bg-gradient-to-b from-green-200">
			<PublicPagesNav />
			<div className="w-full h-full pt-24 md:pt-10 flex flex-col md:flex-row items-center">
				<div className="left mx-1 md:mx-0  md:pl-5 md:w-3/5 h-auto flex flex-col bg-transparent md:items-start">
					<h1 className="mx-0 md:mx-3 mt-1  md:mt-auto p-2 md:p-0 py-3 md:py-0  md:text-7xl font-RubikDistressed  text-7xl  md:text-left text-slate-900">
						Need an Online Store?
					</h1>

					<h1 className="mx-0 p-3 pt-7  md:py-0 text-6xl md:text-6xl md:mt-3 font-Palanquin text-left md:text-left text-tabGreen">
						We’ve got this.
					</h1>

					<h1 className="mx-3  py-10  md:py-0 text-3xl md:text-5xl mb-0 md:my-12 md:mb-24 font-bold font-dayone text-center md:text-left text-slate-800">
						Create Your Online Store and Start Selling Immediately.
					</h1>

					<a
						href={PUBROUTES.SIGNUP}
						className="mx-4 px-6 py-3 my-5 md:mt-auto md:w-52 text-center text-white  text-2xl font-nunito  rounded bg-green-400 hover:bg-tabGreen bg-gradient-to-r from-tabGreen hover:from-green-400 transition-colors shadow-md"
					>
						Get Started
					</a>
				</div>
				<div className=" hidden md:flex right  mx-auto md:w-2/5 h-full flex-col">
					<img
						//  src="img/er.png"
						src={PUBURLS.homeimage}
						alt="poster image"
						className=" m-auto  h-11/12 md:w-auto w-auto object-cover items-center "
					/>
				</div>
			</div>
		</div>
	);
};

export default Head;
