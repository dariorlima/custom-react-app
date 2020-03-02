const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    devServer: {
        open: true,
        overlay: true,
        hot: true,
        progress: true
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', 'sass'],
        alias: {
            '@atoms': path.resolve(__dirname, 'src/lib','components/atoms'),
            '@molecules': path.resolve(__dirname, 'src/lib/components/molecules'),
            '@organisms': path.resolve(__dirname, 'src/lib/components/organisms'),
            '@pages': path.resolve(__dirname, 'src/lib/components/pages'),
            '@templates': path.resolve(__dirname, 'src/lib/components/templates'),
            '@app': path.resolve(__dirname, 'src/lib/components/app'),
            '@styles': path.resolve(__dirname, 'src','styles'),
            '@root/constants': path.resolve(__dirname, 'src/lib/constants'),
            '@redux/constants': path.resolve(__dirname, 'src/lib/redux/constants'),
            '@redux/actions': path.resolve(__dirname, 'src/lib/redux/actions'),
            '@redux/reducer': path.resolve(__dirname, 'src/lib/redux/reducers'),
            '@redux': path.resolve(__dirname, 'src/lib/redux'),
            '@root': path.resolve(__dirname, 'src')
        }
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