var ET=require("extract-text-webpack-plugin");
module.exports={
	/*入口*/
	entry: "./src/scripts/app.js",
	/*出口*/
	output:{
		path:__dirname+"/prd/",
		filename:"bundle.js"
	},
	/*启动webserver*/
	devServer:{
		contentBase:__dirname+"/",
		port:80
	},
	/*模块开发*/
	module:{
		loaders:[
		{
			test:/\.js$/,
			loader:"babel-loader"
		},
		{
			test:/\.css$/,
			loader:"style-loader!css-loader"
		},
		{
			test:/\.scss$/,
			//loader:ET.extract("style-loader","css-loader!sass-loader")
			//抽离css文件 
		use: ET.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader', 'sass-loader']
        })
		},
		{
			test:/\.string$/,
			loader:"string-loader"
		}
		
		]
		/* loaders: [
            {test: /\.js$/, loader: "babel"},
            {test: /\.css$/, loader: "style!css"},
            {test: /\.(jpg|png)$/, loader: "url?limit=8192"},
            {test: /\.scss$/, loader: "style!css!sass"}
        ]*/
	},
	
	plugins:[
		new ET("bundle.css")
	
	]
	
}
