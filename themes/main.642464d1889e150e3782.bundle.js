(self.webpackChunkthemes=self.webpackChunkthemes||[]).push([[179],{8396:(e,n,t)=>{"use strict";t.r(n),t.d(n,{backgrounds:()=>k,default:()=>v,fragmentSteps:()=>g,fusumaProps:()=>f,slides:()=>h});var a=t(5032),s=t(3077),r=(t(3606),t(7077)),o=t(1447),i=t(3355),p=t(7257),l=t(6552),u=t.n(l);t(5791),t(2101),t(8262);function c(){return new URL(window.location.href).searchParams}setTimeout(u().highlightAll);location.search.includes("presenter=host")||location.search.includes("presenter=view"),function(){const e=new URL(window.location.href).hash.match(/^#slide-(.+?)$/);null!==e&&e[1]}();const d=[r.Z,o.Z];c().has("pagination")?"false"!==c().get("pagination")&&(d.push(i.Z),t.e(652).then(t.bind(t,4652))):(d.push(i.Z),t.e(652).then(t.bind(t,4652))),p.Z.use(d);function m(){return(m=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}const h=[e=>(0,s.kt)(a.Fragment,null,(0,s.kt)("h1",null,"Themes 🧏‍♀️")),e=>(0,s.kt)(a.Fragment,null,(0,s.kt)("h2",null,"default"),(0,s.kt)("p",null,"site: ",(0,s.kt)("a",{parentName:"p",href:"https://hiroppy.github.io/fusuma"},"https://hiroppy.github.io/fusuma"))),e=>(0,s.kt)(a.Fragment,null,(0,s.kt)("h2",null,"pop"),(0,s.kt)("p",null,"site: ",(0,s.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"https://nodejs.org/en/")),(0,s.kt)("div",{className:"grid"},(0,s.kt)("div",{className:"column"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},"meta:\n  url: https://hiroppy.github.io/fusuma/themes\n  title: introducing themes\n  description: fusuma provides some themes\n  siteName: hiroppy.me\n  sns: ['twitter']\nslide:\n  loop: false\n  ui:\n    sidebar: true\n    pagination: bullets\n  code:\n    plugins: []\n    theme: default\n"))),(0,s.kt)("div",{className:"column left"},(0,s.kt)("p",null,"Fusuma is an open-source, created by ",(0,s.kt)("a",{parentName:"p",href:"https://twitter.com/about_hiroppy"},"@hiroppy"),". Fusuma provides development, production, presentation mode, and so on. Users code only Markdown and styles if needed. The purpose is to focus on creating slides, so Fusuma supports optimization and improvement SEO. And also Fusuma has a presenter mode, and practice mode which users can record voice and actions. Have a fun time!"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://hiroppy.github.io/fusuma/"},"Fusuma"))))),e=>(0,s.kt)(a.Fragment,null,(0,s.kt)("h2",null,"webpack"),(0,s.kt)("p",null,"site: ",(0,s.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"https://webpack.js.org/")),(0,s.kt)("div",{className:"grid"},(0,s.kt)("div",{className:"column"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  output: {\n    filename: '[name].bundle.js',\n  },\n  resolve: {\n    modules: ['node_modules'],\n    extensions: ['.ts', '.tsx', '.js'],\n  },\n  module: {\n    rules: [\n      {\n        test: /\\.tsx?$/,\n        use: {\n          loader: 'babel-loader',\n        },\n      },\n    ],\n  },\n  plugins: [new webpack.NamedModulesPlugin()],\n};\n"))),(0,s.kt)("div",{className:"column left"},(0,s.kt)("p",null,"webpack is an open-source JavaScript module bundler. It is made primarily for JavaScript, but it can transform front-end assets such as HTML, CSS, and images if the corresponding loaders are included. webpack takes modules with dependencies and generates static assets representing those modules. Webpack takes the dependencies and generates a dependency graph allowing web developers to use a modular approach for their web application development purposes. It can be used from the command line, or can be configured using a config file which is named webpack.config.js. This file is used to define rules, plugins, etc., for a project."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Webpack"},"wikipedia/webpack"))))),e=>(0,s.kt)(a.Fragment,null,(0,s.kt)("h2",null,"babel"),(0,s.kt)("p",null,"site: ",(0,s.kt)("a",{parentName:"p",href:"https://babeljs.io/"},"https://babeljs.io/")),(0,s.kt)("div",{className:"grid"},(0,s.kt)("div",{className:"column"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = (api) => {\n  api.cache(true);\n\n  const presets = ['@babel/preset-env'];\n  const plugins = ['macros'];\n\n  return {\n    presets,\n    plugins,\n  };\n};\n"))),(0,s.kt)("div",{className:"column left"},(0,s.kt)("p",null,"Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ (ES6+) code into a backwards compatible version of JavaScript that can be run by older JavaScript engines. Babel is a popular tool for using the newest features of the JavaScript programming language. Developers can use new JavaScript language features by using Babel to convert their source code into versions of JavaScript that evolving browsers are able to process. The core version of Babel was downloaded 5 million times a month as of 2016, increasing to 16 million times per week as of 2019."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Babel_(transcompiler)"},"wikipedia/Babel (transcompiler)"))))),e=>(0,s.kt)(a.Fragment,null,(0,s.kt)("h2",null,"node"),(0,s.kt)("p",null,"site: ",(0,s.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"https://nodejs.org/en/")),(0,s.kt)("div",{className:"grid"},(0,s.kt)("div",{className:"column"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const http = require('http');\n\nconst hostname = '127.0.0.1';\nconst port = 3000;\n\nconst server = http.createServer((req, res) => {\n  res.statusCode = 200;\n  res.setHeader('Content-Type', 'text/plain');\n  res.end('Hello, World!\\n');\n});\n\nserver.listen(port, hostname, () => {\n  console.log(`Server running at http://${hostname}:${port}/`);\n});\n"))),(0,s.kt)("div",{className:"column left"},(0,s.kt)("p",null,'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the Chrome V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user\'s web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm, unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts.'),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Node.js"},"wikipedia/Node.js")))))],k=[0,0,0,0,0,0],g=[0,0,0,0,0,0],f=[{},{},{classes:"pop"},{classes:"webpack"},{classes:"babel"},{classes:"node"}],b={};function v({components:e,...n}){return(0,s.kt)("wrapper",m({},b,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",null,"Themes 🧏‍♀️"),(0,s.kt)("hr",null),(0,s.kt)("h2",null,"default"),(0,s.kt)("p",null,"site: ",(0,s.kt)("a",{parentName:"p",href:"https://hiroppy.github.io/fusuma"},"https://hiroppy.github.io/fusuma")),(0,s.kt)("hr",null),(0,s.kt)("h2",null,"pop"),(0,s.kt)("p",null,"site: ",(0,s.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"https://nodejs.org/en/")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},"meta:\n  url: https://hiroppy.github.io/fusuma/themes\n  title: introducing themes\n  description: fusuma provides some themes\n  siteName: hiroppy.me\n  sns: ['twitter']\nslide:\n  loop: false\n  ui:\n    sidebar: true\n    pagination: bullets\n  code:\n    plugins: []\n    theme: default\n")),(0,s.kt)("p",null,"Fusuma is an open-source, created by ",(0,s.kt)("a",{parentName:"p",href:"https://twitter.com/about_hiroppy"},"@hiroppy"),". Fusuma provides development, production, presentation mode, and so on. Users code only Markdown and styles if needed. The purpose is to focus on creating slides, so Fusuma supports optimization and improvement SEO. And also Fusuma has a presenter mode, and practice mode which users can record voice and actions. Have a fun time!"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://hiroppy.github.io/fusuma/"},"Fusuma")),(0,s.kt)("hr",null),(0,s.kt)("h2",null,"webpack"),(0,s.kt)("p",null,"site: ",(0,s.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"https://webpack.js.org/")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  output: {\n    filename: '[name].bundle.js',\n  },\n  resolve: {\n    modules: ['node_modules'],\n    extensions: ['.ts', '.tsx', '.js'],\n  },\n  module: {\n    rules: [\n      {\n        test: /\\.tsx?$/,\n        use: {\n          loader: 'babel-loader',\n        },\n      },\n    ],\n  },\n  plugins: [new webpack.NamedModulesPlugin()],\n};\n")),(0,s.kt)("p",null,"webpack is an open-source JavaScript module bundler. It is made primarily for JavaScript, but it can transform front-end assets such as HTML, CSS, and images if the corresponding loaders are included. webpack takes modules with dependencies and generates static assets representing those modules. Webpack takes the dependencies and generates a dependency graph allowing web developers to use a modular approach for their web application development purposes. It can be used from the command line, or can be configured using a config file which is named webpack.config.js. This file is used to define rules, plugins, etc., for a project."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Webpack"},"wikipedia/webpack")),(0,s.kt)("hr",null),(0,s.kt)("h2",null,"babel"),(0,s.kt)("p",null,"site: ",(0,s.kt)("a",{parentName:"p",href:"https://babeljs.io/"},"https://babeljs.io/")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = (api) => {\n  api.cache(true);\n\n  const presets = ['@babel/preset-env'];\n  const plugins = ['macros'];\n\n  return {\n    presets,\n    plugins,\n  };\n};\n")),(0,s.kt)("p",null,"Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ (ES6+) code into a backwards compatible version of JavaScript that can be run by older JavaScript engines. Babel is a popular tool for using the newest features of the JavaScript programming language. Developers can use new JavaScript language features by using Babel to convert their source code into versions of JavaScript that evolving browsers are able to process. The core version of Babel was downloaded 5 million times a month as of 2016, increasing to 16 million times per week as of 2019."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Babel_(transcompiler)"},"wikipedia/Babel (transcompiler)")),(0,s.kt)("hr",null),(0,s.kt)("h2",null,"node"),(0,s.kt)("p",null,"site: ",(0,s.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"https://nodejs.org/en/")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const http = require('http');\n\nconst hostname = '127.0.0.1';\nconst port = 3000;\n\nconst server = http.createServer((req, res) => {\n  res.statusCode = 200;\n  res.setHeader('Content-Type', 'text/plain');\n  res.end('Hello, World!\\n');\n});\n\nserver.listen(port, hostname, () => {\n  console.log(`Server running at http://${hostname}:${port}/`);\n});\n")),(0,s.kt)("p",null,'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the Chrome V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user\'s web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm, unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts.'),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Node.js"},"wikipedia/Node.js")))}v.isMDXComponent=!0},5031:(e,n,t)=>{"use strict";t.r(n)},3447:(e,n,t)=>{var a={"./slides.mdx":8396};function s(e){var n=r(e);return t(n)}function r(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=r,e.exports=s,s.id=3447}},function(e){"use strict";var n;n=e.x,e.x=()=>{var t=n();return[393,300,757].map(e.E),t}},[[757,666,736],[4546,666,736],[4138,666,736]]]);