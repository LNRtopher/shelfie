const path = require ('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // mode: process.env.NODE_ENV,
    entry: './client/index.js',
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'bundle.js',
        // clean: true
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './client/index.html'
        })
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'build'),
            publicPath: '/build/'
        },
        proxy: {
            '/api': 'http://localhost:3000'
        },
        open: true,
        compress: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
              },
              {
                test: /\.(s(a|c)ss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
              },
              {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: ['file-loader', 'url-loader']
              },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    }
}