var path = require('path');

module.exports = {
    context: path.resolve( 'js' ),
    entry: [ "./app.js", "./utils.js"],
    output:{
        filename: 'bundle.js',
        path: path.resolve( '/public/build/js/'),
        publicPath: '/public/assets/js/'
    },

    devServer:{
      contentBase:'public'
    },

    module:{
        preLoaders:[
            {
                test: /\.js/,
                exclude: 'node_modules',
                loader: 'jshint-loader'
            }
        ],
        loaders:[
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: "ts-loader"
            }
        ]
    },
    resolve:{
        extensions:['', '.js', '.es6', '.ts' ]
    }

}