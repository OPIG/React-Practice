 
   .
   +-- app                              // 开发的文件夹，组件放在这个文件夹中
   │   +-- components                   // 项目的组件
   │       +-- App.js                   // 最外层包含下面组件的总组件
   │   │   +-- AppFooter.js             // App的三个筛选按钮的组件
   │   │   +-- AppForm.js               // 添加list的form
   │   │   +-- AppList.js               // 显示list数据的智能组件
   │   │   +-- AppTodos.js              // 显示list的木偶组件
   +-- css                              // 放css文件的地方。
   │   +-- semantic.css                 // 我们的文件用到了semantic.css,
   +-- node_modules                     // 第三方的依赖
   +-- .babelrc                         // babel配置文件
   +-- .gitignore                       // git上传时忽略的文件
   +-- bundle.js                        // webpack build之后的文件
   +-- index.html                       // 项目的模版文件
   +-- main.js                          // 项目的入口文件
   +-- webpack.config.js                // webpack配置文件
   +-- README.md                        // readme文件
   +-- package.json                     // 当前整一个项目的依赖
   
from : https://www.jianshu.com/p/211ecf8ed34e


   首先安装Babel，Babel 是一个 JavaScript 编译器，他可以将es6或者es7的语法转化为浏览器能识别的javascript
   `npm install babel-cli babel-core --save-dev`

   安装我们的主角，react
   `npm install react react-dom --save-dev`

   安装webpack，打包工具；和webpack-dev-server，用于来给我们开启一个服务的。
   `npm install webpack webpack-dev-server --save-dev`

   安装loader打包，通过使用不同的loader，webpack有能力调用外部的脚本或工具，实现对不同格式的文件的处理，比如说分析转换scss为css，或者把下一代的JS文件（ES6，ES7)转换为现代浏览器兼容的JS文件，对React的开发而言，合适的Loaders可以把React的中用到的JSX文件转换为JS文件。
    `npm install css-loader babel-loader style-loader --save-dev`

   要让我们的 babel 能在 react中生效，同时支持es6，我们需要安装下面的插件
   `npm install babel-preset-es2015 babel-preset-react babel-preset-stage-0 --save-dev`

   为了当我们每次添加list的时候有一个唯一的id，我们使用uuid
   `npm install uuid --save-dev`
