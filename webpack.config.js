module.exports = {
    entry: "./src/index.js",
    devtool: "source-map",
    output: {
        path: __dirname,
        filename: "crocinole.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
};