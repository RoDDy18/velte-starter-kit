const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const loader = require('file-loader');

let htmlPageNames = []; //put your html file names here (array)
let multipleHtmlPlugins = htmlPageNames.map(name => {
  return new HtmlWebpackPlugin({
    filename: `${name}.html`,
    template: `./${name}.html`, // relative path to the HTML files
    chunks: [`${name}`], // respective JS files
    inject: true
  })
});

module.exports = {
    devtool: 'eval-cheap-module-source-map',
    entry: {
        //create new object property with source to the main js file
        main:'./app/App.js'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
          },
          compress: true,
          port: 3000,
    },
    resolve: {
        fallback:{
            fs: false
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.(gif|png|jpe?g)$/,
                use:[
                    {
                        loader: 'file-loader',
                        options:{
                            name:'[name].[ext]',
                            outputPath:'assets/images/'
                        }
                    }
                ]
            },
            {
                test:/\.css$/i,
                use:["style-loader", "css-loader"]
            },
            {
                test:/\.s[ac]ss$/i,
                use:["style-loader","css-loader","sass-loader"]
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            chunks:['main'],
            inject: true
        })
    ].concat(multipleHtmlPlugins)
};
