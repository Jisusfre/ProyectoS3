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
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                    loader: 'image-webpack-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                    }
            ]},
            {
                test: /.\js?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
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