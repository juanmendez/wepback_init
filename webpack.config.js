var path = require("path");
var webpack = require('webpack');

module.exports = {
    context: path.resolve("js"),
    //we don't need to write the ts file extensions
    entry: {app:"./app", utils:"./utils"},
    output:{
        /**
         * we are not creating the bundle file on the disk!
         */
        path: path.resolve('build/js/'),
        publicPath:"/public/assets/js",
        filename: "[name].js"
    },
    devServer:{
        //we serve from public
      contentBase:"public"
    },
    watch: true,
    plugins: [new webpack.optimize.CommonsChunkPlugin('vendor.js')],
    module:{
        loaders:[
            {
                test: /\.tsx?$/,
                exclude: ['node_modules','typings'],
                loader: "ts-loader"
            },
            {
                test: /\.js/,
                exclude: ['node_modules','typings'],
                loader: 'jshint-loader',
                enforce:"pre"
            }
        ]
    },
    resolve:{
        extensions:['', '.js', '.ts' ]
    }
}