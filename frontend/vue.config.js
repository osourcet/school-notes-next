/* eslint-disable */

const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const packageJson = fs.readFileSync('./package.json');
const version = JSON.parse(packageJson).version || '?';

module.exports = {
    transpileDependencies: ['vuetify'],
    chainWebpack: (config) => {
        config.resolve.alias.set('@a', path.resolve(__dirname, 'src/assets/'));

        config.resolve.alias.set('~', path.resolve(__dirname, 'node_modules'));

        config.resolve.alias.set(
            '@c',
            path.resolve(__dirname, 'src/components/'),
        );

        config.module.rule('svg').uses.clear();

        // config.module.rule('svg').use('url-loader').loader('url-loader');

        config.module
            .rule('svg')
            .use('vue-svg-loader')
            .loader('vue-svg-loader')
            .end();

        config.module
            .rule('md')
            .test(/\.md$/)
            .use('raw-loader')
            .loader('raw-loader')
            .end();

        // config.optimization.minimize(false);
    },
    configureWebpack: {
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    VUE_APP_VERSION: `${version}`,
                },
            }),
        ],
    },
};
