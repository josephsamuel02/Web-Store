const Button1 = ({ Route, Text }: { Route: string; Text: string }) => {
	return (
		<a
			href={Route}
			className="mx-4 px-6 py-2  text-center text-white  text-xl font-nunito border-2 border-slate-200 rounded bg-transparent hover:bg-slate-200 hover:text-tabGreen  shadow-md"
		>
			{Text}
		</a>
	);
};

const Button2 = ({ Route, Text }: { Route: string; Text: string }) => {
	return (
		<a
			href={Route}
			className="mx-4 px-6 py-2  text-center text-white  text-xl font-nunito  rounded bg-sky-400 hover:bg-purple-600 bg-gradient-to-r from-purple-600 hover:from-sky-400 transition-colors shadow-md"
		>
			{Text}
		</a>
	);
};

export { Button1, Button2 };
