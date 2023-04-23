import PublicPagesNav from "../../Components/PublicPagesNav";
import PUBROUTES from "../../PublicRoutes";
import Footer from "../../Components/Footer";

const SignUp = () => {
	return (
		<div className="w-full h-auto ">
			<PublicPagesNav />
			<div className="w-full h-auto mt-10 pt-5 flex flex-col md:flex-row items-center bg-green-300  ">
				<div className=" mx-auto py-16 h-auto w-auto md:w-1/2">
					<form
						action=""
						className="mx-6 p-10 md:w-96 flex flex-col bg-white rounded-md shadow-xl "
					>
						<h2 className="mx-1 my-1 text-3xl font-bold text-slate-600">Sign Up</h2>

						<div className=" mx-auto h-auto w-auto flex flex-row ">
							<input
								type="text"
								placeholder="Surname"
								className=" w-full my-3 mr-1 h-auto py-2 px-4 text-lg  text-slate-800 rounded-md outline-none border-2 border-slate-400 focus:border-green-600"
							/>
							<input
								type="text"
								placeholder="Name"
								className=" w-full my-3 ml-1 h-auto py-2 px-4 text-lg  text-slate-800 rounded-md outline-none border-2 border-slate-400 focus:border-green-600"
							/>
						</div>
						<input
							type="text"
							placeholder="email"
							className=" w-full my-3  h-auto py-2 px-4 text-lg  text-slate-800 rounded-md outline-none border-2 border-slate-400 focus:border-green-600"
						/>

						<input
							type="tel"
							pattern="[789][0-9]{9}"
							placeholder="phone number"
							className=" w-full my-3  h-auto py-2 px-4 text-lg  text-slate-800 rounded-md outline-none border-2 border-slate-400 focus:border-green-600"
						/>
						<input
							type="password"
							placeholder="password"
							className=" w-full my-3  h-auto py-2 px-4 text-lg  text-slate-800 rounded-md outline-none border-2 border-slate-400 focus:border-green-600"
						/>

						<input
							type="password"
							placeholder="confirm password"
							className=" w-full my-3  h-auto py-2 px-4 text-lg  text-slate-800 rounded-md outline-none border-2 border-slate-400 focus:border-green-600"
						/>

						<button
							type="submit"
							className="w-full mx-auto px-6 py-2 my-4 text-center text-white  text-xl font-nunito  rounded bg-green-400 hover:bg-tabGreen bg-gradient-to-r from-tabGreen hover:from-green-400 transition-colors shadow-md"
						>
							Register
						</button>

						<p className="mx-auto  my-3 text-base text-thin text-slate-700">
							Already have an account?
							<a href={PUBROUTES.LOGIN} className="mx-auto px-2  text-base text-blue-800">
								Login
							</a>
						</p>
					</form>
				</div>
				<div className=" m-auto pb-28 mx-auto h-auto w-1/2 items-center ">
					<img src="img/undraw_blooming_re_2kc4.svg" alt="" className=" m-auto " />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default SignUp;
