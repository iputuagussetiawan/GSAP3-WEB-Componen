const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

// JS Directory path.
const JS_DIR = path.resolve(__dirname, "src/js");
const IMG_DIR = path.resolve(__dirname, "src/img");
const LIB_DIR = path.resolve(__dirname, "src/library");
const BUILD_DIR = path.resolve(__dirname, "build");

// Declaration Entry Assets
const entry = {
	app: JS_DIR + "/app.js",
	home: JS_DIR + "/pages/home.js",
	scroll_triger: JS_DIR + "/pages/scroll_triger.js",
	scroll_triger_timeline: JS_DIR + "/pages/scroll_triger_timeline.js",
	case1: JS_DIR + "/pages/case1.js",
	case1clone: JS_DIR + "/pages/case1clone.js",
	navigation1: JS_DIR + "/pages/navigation1.js",
	navigation2: JS_DIR + "/pages/navigation2.js",
	burgermenu: JS_DIR + "/pages/burgermenu.js",
	burgermenu1: JS_DIR + "/pages/burgermenu1.js",
	burgermenu2: JS_DIR + "/pages/burgermenu2.js",
	swifergsap3: JS_DIR + "/pages/swifergsap3.js",
	swiferparallax: JS_DIR + "/pages/swiferparallax.js",

	GSAP_loco_scrolltriger_barba: JS_DIR + "/pages/GSAP_loco_scrolltriger_barba.js",
	GSAP_ScrollTriger_Sections_Falling_Back:JS_DIR + "/pages/GSAP_ScrollTriger_Sections_Falling_Back.js",
	GSAP_ScrollTriger_Footer:JS_DIR + "/pages/GSAP_ScrollTriger_Footer.js",
	GSAP_barba: JS_DIR + "/pages/GSAP_barba.js",
	//editor: JS_DIR + '/editor.js',
};
// Declaration Output Assets
const output = {
	path: BUILD_DIR,
	filename: "[name].js",
};
const rules = [
	{
		test: /\.js$/,
		exclude: /node_modules/,
		use: {
			// without additional settings, this will reference .babelrc
			loader: "babel-loader",
		},
	},
	{
		test: /\.(png|jpg|svg|jpeg|gif|ico)$/,
		use: {
			loader: "file-loader",
			options: {
				name: "images/[name].[ext]",
			},
		},
	},
	{
		test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
		exclude: [IMG_DIR, /node_modules/],
		use: {
			loader: "file-loader",
			options: {
				name: "webfonts/[name].[ext]",
			},
		},
	},
	{
		test: /\.(s[ac]|c)ss$/i,
		use: [
			// could replace the next line with "style-loader" here for inline css
			MiniCssExtractPlugin.loader,
			"css-loader",
			"postcss-loader",
			// according to the docs, sass-loader should be at the bottom, which
			// loads it first to avoid prefixes in your sourcemaps and other issues.
			"sass-loader",
		],
	},
];
const mode = process.env.NODE_ENV || "development";
// Temporary workaround for 'browserslist' bug that is being patched in the near future
const target = process.env.NODE_ENV === "production" ? "browserslist" : "web";

module.exports = {
	// mode defaults to 'production' if not set
	mode: mode,
	entry: entry,
	output: output,
	// entry not required if using `src/index.js` default
	// output not required if using `dist/main.js` default
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css",
		}),
		// Uncomment this if you want to use CSS Live reload

		// new BrowserSyncPlugin(
		// 	{
		// 		proxy: localDomain,
		// 		files: [outputPath + "/*.css"],
		// 		injectCss: true,
		// 	},
		// 	{ reload: false }
		// ),
	],
	module: {
		rules: rules,
	},
	// defaults to "web", so only required for webpack-dev-server bug
	target: target,
	devtool: "source-map",
	// required if using webpack-dev-server
};
