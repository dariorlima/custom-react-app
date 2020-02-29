const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    devServer: {
        open: true,
        overlay: true,
        hot: true,
        progress: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: [
                    'babel-loader',
                    'eslint-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, "./public", 'index.html'),
            filename: "./index.html"
        })
    ]
};