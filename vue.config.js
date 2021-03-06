const path = require('path');
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);
const webpack = require('webpack');
function resolve(dir) {
    return path.join(__dirname, dir);
}

const assetsCDN = {
    // webpack build externals
    externals: {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        vuex: 'Vuex',
        axios: 'axios'
    },
    css: [],
    // https://unpkg.com/browse/vue@2.6.10/
    js: [
        '//cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js',
        '//cdn.jsdelivr.net/npm/vue-router@3.2.0/dist/vue-router.min.js',
        '//cdn.jsdelivr.net/npm/vuex@3.4.0/dist/vuex.min.js',
        '//cdn.jsdelivr.net/npm/axios@0.19.0/dist/axios.min.js'
    ]
};

module.exports = {
    publicPath: './',
    // indexPath: 'index.html',
    // outputDir: process.env.outputDir,
    assetsDir: 'static',
    runtimeCompiler: true,
    // lintOnSave：{ type:Boolean default:true } 问你是否使用eslint
    lintOnSave: !IS_PROD,
    // disable source map in production
    productionSourceMap: false,
    devServer: {
        port: 8020,
        https: false,
        open: false,
        host: '0.0.0.0',
        overlay: {
            warnings: false,
            errors: false
        }
    },
    configureWebpack: {
        plugins: [
            new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
            /* new webpack.HtmlPlugin({
                template: path.resolve(__dirname, 'index.html')
            }) */
        ],
        externals: IS_PROD ? assetsCDN.externals : {}
    },
    chainWebpack: config => {
        config.resolve.alias.set('@$', resolve('src'));

        const svgRule = config.module.rule('svg');
        svgRule.uses.clear();
        svgRule
            .oneOf('inline')
            .resourceQuery(/inline/)
            .use('vue-svg-icon-loader')
            .loader('vue-svg-icon-loader')
            .end()
            .end()
            .oneOf('external')
            .use('file-loader')
            .loader('file-loader')
            .options({
                name: 'assets/[name].[hash:8].[ext]'
            });
        // set svg-sprite-loader
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end();
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end();
        // if prod is on
        // assets require on cdn
        if (IS_PROD) {
            config.plugin('html').tap(args => {
                args[0].cdn = assetsCDN;
                return args;
            });
        }
    },
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    // less vars，customize ant design theme

                    // 'primary-color': '#F5222D',
                    // 'link-color': '#F5222D',
                    'border-radius-base': '2px'
                },
                // DO NOT REMOVE THIS LINE
                javascriptEnabled: true
            }
        }
    }
};
