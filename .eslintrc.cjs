module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
	],
	overrides: [],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "@typescript-eslint"],
	rules: {
		indent: 0,
		"linebreak-style": 1,
		quotes: 1,
		semi: 1,
		"react/react-in-jsx-scope": 0,
		"no-undef": 0,
		"react/no-unescaped-entities": 0,
		2339: 0,
	},
};
