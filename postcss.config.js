module.exports = ctx => ({
  map: ctx.env === 'development' ? {} : false,
  plugins: {
    'postcss-import': {},
    'postcss-custom-properties': {},
    'postcss-nested': {},
    'autoprefixer': {},
    'cssnano': ctx.env === 'development' ? false : {}
  }
})