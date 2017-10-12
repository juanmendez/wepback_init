var path = require("path");
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: path.resolve("js"),
    //we don't need to write the ts file extensions
    entry: {app:"./app"},
    output:{
        /**
         * we are not creating the bundle file on the disk!
         */
        path: path.resolve("build/"),
        publicPath:"/public/assets",
        filename: "[name].js"
    },
    devServer:{
        //we serve from public
      contentBase:"public",
        inline:true,
        port: 8008
    },
    watch: true,
    plugins: [new webpack.optimize.CommonsChunkPlugin('vendor.js'), new ExtractTextPlugin("styles.css")],
    module:{
        loaders:[
            {
                test: /\.tsx?$/,
                exclude: ['node_modules','typings'],
                loader: "ts-loader"
            }, {
                test: /\.js$/,
                exclude: [/node_modules/,/typings/],
                loader: 'jshint-loader',
                enforce:"pre"
            },{
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            }, {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
            }
        ]
    },
    resolve:{
        extensions:['', '.js', '.ts' ]
    }
}