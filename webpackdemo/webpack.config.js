const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry : "./src/main.js",
    output: {
        filename:'[name].js',
        path:path.resolve(__dirname,"dist")
    },
    plugins:[
        new htmlWebpackPlugin({
            template:"./src/main.html",
            filename:"main.html"
        })
    ],
    watchOptions:{
        ignored: /node_modules/,
    },
    watch:true

}