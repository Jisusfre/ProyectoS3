const path = require("path")

const HtmlWebPackPluging = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    entry: {
        home: path.resolve(__dirname, './src/js/index.js')
    },
    output:{
        path: path.resolve(__dirname, "dist"),
        filename: "output.bundle.js"
    },
    devServer: {
        hot: true,
        open: true,
        port: 5050
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebPackPluging({
            inject: true,
            template: "./public/index.html", //De donde lo toma
            filename: "./index.html" //Lo pega en el dist con ese nombre
        })
    ]
}