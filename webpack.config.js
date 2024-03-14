const path = require('path');
const publicFolder = 'public';
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    entry: {
        main: './src/project/index.ts'
    },
    output: {
        path: path.join(__dirname, publicFolder),
        filename: './js/[name].bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: [path.resolve(path.join(__dirname, 'node_modules'))]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader']
            }
        ]
    },
    externals: {
        "pixi.js": {
            root: 'PIXI'
        },
        "puremvc": {
            root: "puremvc"
        }
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: path.join(__dirname, 'node_modules/pixi.js/dist/pixi.js'),
                to: path.join(__dirname, publicFolder, "js")
            },
            {
                from: path.join(__dirname, 'node_modules/puremvc/lib/puremvc-1.0.1.js'),
                to: path.join(__dirname, publicFolder, "js")
            }
        ])
    ]
};