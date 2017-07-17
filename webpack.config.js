var path = require("path");

module.exports = {
    context: path.resolve("js"),
    //we don't need to write the ts file extensions
    entry: [ "./app", "./utils"],
    output:{
        /**
         * we are not creating the bundle file on the disk!
         */
        path:path.resolve("build/js/"),
        publicPath:"/public/assets/js",
        filename: 'bundle.js'
    },
    devServer:{
        //we serve from public
      contentBase:"public"
    },
    watch: true,

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