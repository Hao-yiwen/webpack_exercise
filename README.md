# webpack 学习笔记

![类型](https://img.shields.io/badge/类型-学习笔记-2f6f9f)
![Webpack](https://img.shields.io/badge/Webpack-5.x-8DD6F9)

按章节拆开的 Webpack 配置练习。对照各目录里的 `webpack.config.js` 和源码，看资源怎么打包、开发 / 生产环境怎么配、常见优化项写在哪。

这不是一个可部署的应用。根目录没有 `package.json`，也没有统一的安装或启动脚本。每个子目录是一份独立示例，说明主要写在配置注释里。不少目录已经提交了当时的打包结果（`build/` 或 `dist/`）。

## 内容目录

| 目录 | 在练什么 |
| --- | --- |
| [`1.webpack基本使用`](./1.webpack基本使用) | 不经过 Webpack 的静态页，以及一条命令打包 JS / JSON |
| [`2.webpack开发环境配置`](./2.webpack开发环境配置) | 样式、HTML、图片、字体，以及 `devServer` |
| [`3.webpack生产配置`](./3.webpack生产配置) | 抽出并压缩 CSS、ESLint、Babel 兼容、压缩 JS / HTML，以及一份生产配置汇总 |
| [`4.webpack优化配置`](./4.webpack优化配置) | HMR、source-map、`oneOf`、缓存、Tree Shaking、代码分割、懒加载、PWA、externals、DLL |
| [`5.webpack配置详解`](./5.webpack配置详解) | `entry`、`output`、`module`、`resolve`、`devServer`、`optimization` 各字段 |
| [`6.webpack5`](./6.webpack5) | 同一份 ES Module 示例的两份最小配置（目录名是 webpack4 / webpack5） |

### 1. webpack 基本使用

| 子目录 | 内容 |
| --- | --- |
| `01.webpack简介` | `index.html`、`index.js`、`index.less`。页面用 `<script>` / `<link>` 直接引用，没有 Webpack 配置。`index.js` 使用 `import $ from 'jquery'`，浏览器不能直接执行这句。 |
| `02.webpack体验` | 入口 `src/index.js` 引入 `src/data.json`，CSS 的 `import` 被注释掉。注释里的结论是：Webpack 能处理 JS 和 JSON，这条示例不处理 CSS / 图片；`production` 会压缩 JS。带 `package.json` 与 `package-lock.json`。 |

### 2. webpack 开发环境配置

| 子目录 | 内容 |
| --- | --- |
| `03.打包样式资源` | `style-loader`、`css-loader`、`less-loader` 处理 CSS / Less。 |
| `04.打包html资源` | `html-webpack-plugin`，用 `src/index.html` 做模板。 |
| `05.打包图片资源` | `url-loader`（`esModule: false`）配合 `html-loader` 处理图片。 |
| `06.打包其他资源` | `file-loader` 处理图标字体等非 CSS / JS / HTML 文件，并配置了 `devServer`（端口 3000，开启 gzip）。 |
| `07.devServe` | 与 `06` 类似的样式和 `file-loader` 配置。当前 `webpack.config.js` **没有** `devServer` 字段。 |
| `08.开发环境配置` | 把样式、图片、HTML、字体和 `devServer` 合在一起：`hot`、`open`、`proxy`（把 `/api` 转到 `http://localhost:3000`）。 |

### 3. webpack 生产配置

| 子目录 | 内容 |
| --- | --- |
| `09.提取css成单独文件` | `mini-css-extract-plugin` 抽出 CSS，并用 `postcss-loader` + `postcss-preset-env`。 |
| `11.压缩css` | 在抽出 CSS 的基础上使用 `optimize-css-assets-webpack-plugin`。`postcss-loader` 在配置里被注释。该目录有一份只声明了这一个插件的 `package.json`。 |
| `12.js语法检查` | `eslint-loader`（`fix: true`）。注释要求自行准备 `eslint`、`eslint-config-airbnb-base`、`eslint-plugin-import`，仓库里没有对应的 `package.json` 或 ESLint 配置。 |
| `13.js兼容性处理` | `babel-loader` + `@babel/preset-env`，注释说明 `useBuiltIns: 'usage'` 与 `core-js` 3，目标写了 Chrome / Firefox 60 和 IE 9。 |
| `14.js压缩` | `mode: 'production'`，注释说明生产模式会压缩 JS。loader 规则为空。 |
| `15.html压缩` | `html-webpack-plugin` 的 `minify`：去掉空格和注释。 |
| `16.生产环境配置` | 试图把 CSS 提取、压缩、PostCSS、ESLint、Babel、图片和 HTML 写进同一份配置。目录里只有 `webpack.config.js`，没有 `src`。文件开头是 `require("core-js/fn/promise")`，`file-loader` 规则的字段写成了 `exclue`，按现在的文件无法直接构建。 |

编号从 09 跳到 11，仓库里没有 `10.*`。

### 4. webpack 优化配置

| 子目录 | 内容 |
| --- | --- |
| `17.优化配置` | 只有笔记 [`README.MD`](./4.webpack优化配置/17.优化配置/README.MD)，列出开发环境（HMR、source-map）和生产环境优化项，没有配置和源码。 |
| `18.HMR` | `devServer.hot: true`。注释说明样式可由 `style-loader` 热更新；入口额外放了 `index.html`，用来让 HTML 改动触发更新。 |
| `19.source-map` | `devtool: 'eval-source-map'`。文件末尾用注释比较了 `source-map`、`inline-`、`hidden-`、`eval-`、`nosources-`、`cheap-` 等写法。 |
| `20.oneof` | 用 `oneOf` 让同一类文件只走一条 loader 链，并启用 ESLint、Babel、PostCSS。目录里只有 `webpack.config.js`，没有 `src`。和 `16.生产环境配置` 一样，`resolve` 从 `core-js/fn/promise` 引入，`exclude` 写成了 `exclue`。 |
| `21.缓存` | `babel-loader` 的 `cacheDirectory: true`，输出文件名使用 `[contenthash:10]`。注释对比了 hash、chunkhash、contenthash。 |
| `22.tree-sharking` | 目录名是仓库里的拼写。配置注释说明 Tree Shaking 需要 ES Module 和 `production`，并提到可在 `package.json` 里设置 `sideEffects`。当前入口实际调用了 `mul`，该目录也没有这份 `package.json`。 |
| `23.code.split` | 父级 `webpack.config.js` 打开了 `optimization.splitChunks.chunks: 'all'`。`demo01` 同步引入 jQuery；`demo02` 用动态 `import()` 拆出 `test.js`，并带一个用 Express 托管 `build/` 的 `server.js`（`maxAge` 为一小时，监听 3000）。两个 demo 自己没有 `webpack.config.js`。 |
| `24.lazyloading` | 点击按钮后 `import()` 加载 `./test.js`，注释里写了 `webpackPrefetch: true`。 |
| `25.pwa` | `workbox-webpack-plugin` 的 `GenerateSW`（`clientsClaim`、`skipWaiting`）生成 Service Worker；JS 规则里用 `thread-loader`（`workers: 2`）包住 `babel-loader`。`server.js` 整文件被注释掉。 |
| `26.多进程打包` | 目录名是多进程打包，当前配置里没有 `thread-loader`。它和 `25.pwa` 一样使用了 `workbox-webpack-plugin` 生成 Service Worker。多进程那段 loader 写在 `25.pwa`。 |
| `27.externals` | `externals: { jquery: 'jQuery' }`，打包时不把 jQuery 打进去。 |
| `28.dll` | `webpack.dll.js` 用 `DllPlugin` 单独打包 jQuery；`webpack.config.js` 用 `DllReferencePlugin` 读 `dll/mainfest.json`（文件名就是这个拼写），并用 `add-asset-html-webpack-plugin` 把 `dll/jquery.js` 插进 HTML。 |

### 5. webpack 配置详解

| 子目录 | 内容 |
| --- | --- |
| `29.entry` | 对象形式多入口：`index` 是数组（`index.js` 与 `b.js` 合成一个 chunk），`a` 单独一个入口。输出 `[name].js`。 |
| `30.output` | 演示 `filename`、`include`、`enforce: 'pre'` 的 `eslint-loader`，以及空的 `oneOf`。 |
| `31.module` | 演示 `publicPath`、`chunkFilename`、`library`、`libraryTarget: 'commonjs'`。`module.rules` 为空。 |
| `32.resolve` | `alias`（`$css`）、`extensions`，以及 `modules`（先找仓库根上两级的 `node_modules`，再找当前目录的 `node_modules`）。根目录目前没有 `node_modules`。 |
| `33.dev_server` | 与 `08` 同类的样式 / 图片 / 字体规则，`devServer` 为 `contentBase`、`compress`、`port: 3000`、`open: true`。 |
| `34.optimization` | `splitChunks`、`runtimeChunk`，以及 `TerserWebpackPlugin`（`cache`、`parallel`、`sourceMap`）。 |

`29` 到 `32` 开头的大段注释是同一份入口说明，和该文件实际演示的字段并不一一对应，以 `module.exports` 为准。

### 6. webpack5

`webpack4/` 与 `webpack5/` 的源码相同：`src/a.js` 导出 `name`、`age`，`src/b.js` 再导出命名空间，`src/index.js` 打印 `b.a.name`。

| 子目录 | 配置差异 | 依赖声明 |
| --- | --- | --- |
| `webpack4` | 显式 `entry`，输出到 `build/[name].js` | `webpack` `^5.9.0`，`webpack-cli` `^4.2.0`。没有 lockfile，也没有声明 Webpack 4 |
| `webpack5` | 只设置 `mode: 'development'`，入口和输出用 Webpack 默认值（`dist/main.js`） | 与上一行相同 |

## 技术栈与依赖

练习围绕 **Webpack 5** 和 **webpack-cli 4**，用 CommonJS 写配置，源码是 ES Module。

仓库里写明版本的只有这几处：

| 位置 | 声明 |
| --- | --- |
| `1.webpack基本使用/02.webpack体验` | `webpack` `^5.9.0`，`webpack-cli` `^4.2.0`。lockfile 锁定 **5.9.0** 和 **4.2.0**（lockfile 里的 tarball 地址是 `npm.6tiantian.com`） |
| `6.webpack5/webpack4`、`6.webpack5/webpack5` | 同样是 `webpack` `^5.9.0`、`webpack-cli` `^4.2.0`，没有 lockfile |
| `3.webpack生产配置/11.压缩css` | 只有 `optimize-css-assets-webpack-plugin` `^5.0.4` |

其余示例没有 `package.json`。配置里出现过、需要自行安装的包包括：

- 构建：`webpack`、`webpack-cli`、`webpack-dev-server`、`html-webpack-plugin`
- 样式：`style-loader`、`css-loader`、`less-loader`、`mini-css-extract-plugin`、`optimize-css-assets-webpack-plugin`、`postcss-loader`、`postcss-preset-env`
- 文件：`url-loader`、`file-loader`、`html-loader`
- JS：`babel-loader`、`@babel/preset-env`、`core-js`、`eslint`、`eslint-loader`、`eslint-config-airbnb-base`、`eslint-plugin-import`、`terser-webpack-plugin`、`thread-loader`
- 其他：`workbox-webpack-plugin`、`add-asset-html-webpack-plugin`、`jquery`、`express`

这些包除上表外没有锁定版本。

## 环境要求

- Node.js 与 npm。下面「已验证」一节使用的是 **Node.js v22.23.4**、**npm 10.9.9**。
- 带 `devServer.open: true` 的示例会尝试打开系统浏览器，无图形界面时可能只打出警告，服务本身仍可在配置的端口访问。本次没有启动 dev server。

## 安装与运行

在对应示例目录里执行，不要在仓库根目录执行 `npm install`。

### 已在本环境验证

**`02.webpack体验`（按 lockfile 安装 webpack 5.9.0）**

```bash
cd "1.webpack基本使用/02.webpack体验"
npm install
export NODE_OPTIONS=--openssl-legacy-provider
npx webpack ./src/index.js -o ./build/built.js --mode=development
npx webpack ./src/index.js -o ./build/built.prod.js --mode=production
```

`npm install` 可以完成。在 Node.js 22 上直接打包会失败，错误是 `error:0308010C:digital envelope routines::unsupported`（`ERR_OSSL_EVP_UNSUPPORTED`）。加上 `NODE_OPTIONS=--openssl-legacy-provider` 后，上面两条命令都成功。

`-o ./build/built.js` 会被 webpack-cli 当成**输出目录**，产物是 `build/built.js/main.js`，与仓库里已有的 `main.js` 位置一致。这个示例没有 `html-webpack-plugin`，命令不会生成 HTML。

**`6.webpack5`（没有 lockfile，安装到范围内的较新版本）**

```bash
cd "6.webpack5/webpack5"
npm install
npx webpack
```

```bash
cd "6.webpack5/webpack4"
npm install
npx webpack
```

本次解析到 **webpack 5.112.2**、**webpack-cli 4.10.0**。两条 `npx webpack` 都成功，且不需要 `--openssl-legacy-provider`。`webpack5` 写出 `dist/main.js`，`webpack4` 写出 `build/main.js`。

### 其他示例

这些目录多数只有 `webpack.config.js` 和源码。在该目录安装本文件 `require()` 到的依赖后，再执行：

```bash
npx webpack
```

使用 `devServer` 的目录（`06`、`08`、`18.HMR`、`19.source-map`、`33.dev_server`）还需要安装 `webpack-dev-server`。配置注释里写的启动命令是 `webpack-dev-server`；webpack-cli 4 更常见的写法是：

```bash
npx webpack serve
```

`23.code.split/demo02/server.js` 在构建出 `build/` 之后用 Express 托管静态文件：

```bash
node server.js
```

`28.dll` 若要重新生成 DLL，按 `webpack.dll.js` 顶部注释：

```bash
npx webpack --config webpack.dll.js
npx webpack
```

以上命令本次没有逐个安装依赖再跑。`16.生产环境配置` 和 `20.oneof` 缺少源码，并且 `require("core-js/fn/promise")` 不能代替 Node 的 `path.resolve`，不要指望它们能直接编过。

## 备注

- 构建产物已经进了版本库。重新打包会改写对应的 `build/` 或 `dist/`。
- `22.tree-sharking`、`dll/mainfest.json` 是目录和文件的实际名字。
- `25.pwa` 里才有 `thread-loader`；`26.多进程打包` 当前配置生成的是 Service Worker。
- `07.devServe` 的目录名和文件内容不一致：热更新和代理在 `08.开发环境配置`，一份更短的 `devServer` 在 `06.打包其他资源`。
- 示例用的图片和图标字体（如 `bg.jpg`、`iconfont.svg`）是打包素材，不是界面截图。
- `4.webpack优化配置/17.优化配置/README.MD` 是原始的优化项提纲，条目比各子目录的配置更粗，细节以对应的 `webpack.config.js` 为准。
