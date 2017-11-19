# webpack
> 1 . 创建一个目录，安装nodeJs，初始化npm：
>
> > npm init -y
> >
> > ![初始化](https://github.com/zshsats/webpack/blob/master/img/01.png "初始化")
>
> 2.本地安装webpack
>
> > npm install --save-dev webpack
> >
> > 安装指定版本：npm install --save-dev webpack@<version>
> >
> > * 对于大多数项目，我们建议本地安装。这可以使我们在引入破坏式变更(breaking change)的依赖时，更容易分别升级项目。通常，webpack 通过运行一个或多个 npm scripts，会在本地 node\_modules 目录中查找安装的 webpack：
>
> 3.配置webpack.config.js文件
>
> ```
> const path = require('path');
>
> module.exports = {
>
>     entry : "./src/main.js", //入口文件
>     output: {
>         filename:'[name].js', //打包文件
>         path:path.resolve(__dirname,"dist")
>     }
>
> }
>
> ```
>
> 4.打包
>
> > 执行*node\_modules\.bin\webpack*(win环境)或者npm run build方式
>
> 5.管理输出
>
> >HtmlWebpackPlugin 还是会默认生成 index.html 文件。这就是说，它会用新生成的 index.html 文件，把我们的原来的替换。
> >查看html-webpack-plugin属性参数：https://github.com/jantimon/html-webpack-plugin
> >
> >![热加载](https://github.com/zshsats/webpack/blob/master/img/0.3.png '热加载')
> >
> >(1)安装插件plugin：npm install --save-dev html-webpack-plugin
> >
> >(2)进行配置在webpack.config.js
>
> ```
> module.exports = {
>
>     entry : "./src/main.js",
>     output: {
>         filename:'[name].js',
>         path:path.resolve(\_\_dirname,"dist")
>     },
>     plugins:[
>         new htmlWebpackPlugin({
>             template:"./src/main.html",
>             filename:"main.html"
>         })
>     ]
>
> }
>
>  
>
> 	
> ```























