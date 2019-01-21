module.exports = {
  pluginOptions: {
    quasar: {
      theme: 'ios',
    }
  },
  transpileDependencies: [
    /[\\/]node_modules[\\/]quasar-framework[\\/]/
  ],
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/'
}
