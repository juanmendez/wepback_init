module.exports = {
    entry: [ "./app.js", "./utils.js"],
    output:{
        filename: 'bundle.js'
    },
    watch:true,
    module:{
        loaders:[
            {
                test: /\.js/,
                exclude: 'node_modules',
                loader: 'jshint-loader',
                enforce: "pre"
            },
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    resolve:{
        extensions:['', '.js', '.es6' ]
    }
}