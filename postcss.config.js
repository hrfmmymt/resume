module.exports = ctx => ({
  map: ctx.options.map,
  plugins: {
    'postcss-import': {},
    'postcss-custom-properties': {},
    'postcss-nested': {},
    'autoprefixer': {}
  }
})