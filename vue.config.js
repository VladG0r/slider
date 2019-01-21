module.exports = {
  pluginOptions: {
    quasar: {
      theme: 'ios',
      importAll: true
    }
  },
  transpileDependencies: [
    /[\\/]node_modules[\\/]quasar-framework[\\/]/
  ],
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/'
}
