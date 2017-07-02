var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + "/app/index.html",
	filename: "index.html",
	inject: "body"
});

module.exports = {
	entry: __dirname + "/app/index.js",

  	output: {
  		filename: "bundle.js",
    	path: __dirname + "/build"
  	},

	module: {
	  	rules: [
	  		{
		        test: /\.js$/,
		        use: "babel-loader", 
		        exclude: /node_modules/	
	    	},
	      	{
      			test: /\.css$/,
      			use: [
        			"style-loader",
         			"css-loader"
       			]	
   			}
	  	]
  	},

  	plugins: [HTMLWebpackPluginConfig]
};