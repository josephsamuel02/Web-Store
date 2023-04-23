import PublicPagesNav from "../../Components/PublicPagesNav";
import PUBROUTES from "../../PublicRoutes";
import Footer from "../../Components/Footer";

const Login = () => {
	return (
		<section>
			<PublicPagesNav />
			<div className="w-full h-full mt-16 py-16 flex flex-col md:flex-row items-center bg-green-300">
				<div className="form mx-auto w-full md:w-1/2 h-auto">
					<form
						action=""
						className="mx-10 p-10 md:w-96  flex flex-col bg-white rounded-md items-center"
					>
						<div className=" w-full md:w-1/2  h-auto items-center">
							<img
								src="img/undraw_everyday_life_re_1lfb.svg"
								alt=""
								className=" mx-auto my-4 w-32  md:w-42 h-auto rounded-full"
							/>
						</div>
						<input
							type="text"
							placeholder="email"
							className=" w-full my-3  h-auto py-2 px-4 text-lg text-slate-800 rounded-md outline-none border-2 border-slate-400 focus:border-green-600"
						/>
						<input
							type="password"
							placeholder="password"
							className="w-full my-3 h-auto py-2 px-4 text-lg text-slate-800 rounded-md outline-none border-2 border-slate-400 focus:border-green-600"
						/>
						<div className=" mx-auto w-auto h-auto flex flex-row items-center">
							<input type="checkbox" name="remember me" id="" className="my-3 h-auto" />
							<p className="px-1 text-base text-slate-900">Remember me</p>
						</div>
						<button
							type="submit"
							className="w-full mx-auto px-6 py-2 my-4 text-center text-white  text-xl font-nunito  rounded bg-green-400 hover:bg-tabGreen bg-gradient-to-r from-tabGreen hover:from-green-400 transition-colors shadow-md"
						>
							Login
						</button>
						<p className="mx-auto    text-base text-thin text-slate-700">
							<a href={"#"} className="mx-auto px-2  text-sm text-blue-800">
								Forget password
							</a>
						</p>
						<p className="mx-auto my-3 text-base text-thin text-slate-700">
							Don't have an account?
							<a href={PUBROUTES.SIGNUP} className="mx-auto px-2 text-base  text-blue-800">
								Sign Up
							</a>
						</p>
					</form>
				</div>
				<div className=" w-full md:w-1/2  h-auto items-center">
					<img src="img/undraw_biking_kc-4-f.svg" alt="" className=" mx-auto w-4/5 h-auto" />
				</div>
			</div>
			<Footer />
		</section>
	);
};

export default Login;
