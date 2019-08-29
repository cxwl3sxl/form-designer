module.exports = {
    // 修改 src 为 examples
    pages: {
        index: {
            entry: "examples/main.js",
            template: "public/index.html",
            filename: "index.html"
        }
    },
    // 扩展 webpack 配置，使 packages 加入编译
    chainWebpack: config => {
        config.module
            .rule('js')
            .include
            .add('/packages/')
            .end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                // 修改它的选项...
                return options
            })
    },
    /*发布时，请将下面的注释打开，排除element-ui和font-awesome已减少包体积 */
    configureWebpack: {
        externals: {
            'element-ui': 'element-ui',
            'font-awesome': 'font-awesome',
        }
    }
}