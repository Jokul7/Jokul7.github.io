module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: [
        'Android 4.1',
        'iOS 7.1',
        'Chrome > 31',
        'ff > 31',
        'ie >= 8',
        'last 10 versions'
      ],
      grid: true
    },
    'postcss-pxtorem': {
      rootValue: 37.5, // 375px 即100%宽度，写px会自动rem处理
      // border 保留px
      propList: ['*', '!border'],
      unitPrecision: 5,
      // 组件库样式保留px
      selectorBlackList: ['.norem-', 'vant-'] // 过滤掉vant- .norem-开头的class，不进行rem转换
    }
  }
}
