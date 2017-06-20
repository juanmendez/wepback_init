module.exports = {
    entry: [ "./app.ts", "./utils.ts"],
    output:{
        filename: 'bundle.js'
    },
    watch: true,

    module:{
        loaders:[
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "ts-loader"
            },
            {
                test: /\.js/,
                exclude: 'node_modules',
                loader: 'jshint-loader',
                enforce:"pre"
            }
        ]
    },
    resolve:{
        extensions:['', '.js', '.ts' ]
    }
}