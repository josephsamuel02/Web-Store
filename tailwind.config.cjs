/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1536px",
			},
			scale: {
				"-100": "-1",
			},
			fontFamily: {
				nunito: ["Nunito", " sans-serif"],
				roboto: ["Roboto", "sans-serif"],
				courgette: ["Courgette", "cursive"],
				dayone: ["Days One", "sans-serif"],
				Palanquin: ["Palanquin Dark", "sans-serif"],
				RubikDistressed: ["Rubik Distressed", "cursive"],
				TitanOne: ["Titan One", "cursive"],
			},
			colors: {
				navDarkBlue: "#010656",
				tabGreen: "#0F9C0F",
			},
		},
	},
	plugins: [],
};
