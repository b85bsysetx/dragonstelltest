const { defineConfig } = require('@vue/cli-service')
const isProduction = process.env.NODE_ENV === 'production'
const time = new Date()
const timeStamp = time.getTime()
const titleVersion =
  process.env.VUE_APP_NAME === 'PRODUCTION'
    ? ''
    : ` (${time.getMonth()}/${time.getDate()} ${time.getHours()}:${time.getMinutes()})`

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.VUE_APP_BASE_URL,
  configureWebpack: {
    resolve: {
      alias: {
        '@as': '@/assets',
        '@c': '@/components',
        '@v': '@/views',
        '@img': '@/assets/img',
        '@fonts': '@/assets/fonts',
        '@css': '@/assets/css',
        '@api': '@/api',
        '@router': '@/router',
        '@mock': '@/mock',
      },
    },
    optimization: isProduction
      ? {
          runtimeChunk: 'single',
          splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 20000,
            cacheGroups: {
              vendor: {
                test: /[\\/]node_modules[\\/]/,
                name(module) {
                  const packageName = module.context.match(
                    /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                  )[1]
                  return `npm.${packageName.replace('@', '')}`
                },
              },
            },
          },
        }
      : {},
  },
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = process.env.VUE_APP_TITLE + titleVersion
      return args
    })
    if (isProduction) {
      // 给js和css配置版本号
      config.output.filename('js/[name].[chunkhash].' + timeStamp + '.js').end()
      config.output
        .chunkFilename('js/[name].[chunkhash].' + timeStamp + '.js')
        .end()
    }
  },
  css: {
    extract: false,
    loaderOptions: {
      sass: {
        additionalData: '@import "app-plugin/assets/css/base/_variable"',
      },
    },
  },
  productionSourceMap: false,
})
