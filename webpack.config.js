const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    // set entry point for the app
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        // set output for the webpack build
        path: path.resolve(__dirname, 'dist'),
        // filename of the JS bundle
        filename: 'scripts.js'
    },
    module: {
        rules: [
            {
                // for any file with a suffix of js or jsx
                test: /\.jsx?$/,
                // ignore transpiling JavaScript from node_modules
                exclude: /node_modules/,
                // use the babel-loader for transpiling JavaScript
                loader: 'babel-loader',
                options: {
                    // attach the presets to the loader
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            }
        ]
    },
    // use index.html as template
    plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') })]
};