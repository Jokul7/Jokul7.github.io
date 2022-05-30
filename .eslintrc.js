module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'plugin:prettier/recommended' // 添加 prettier 插件
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    'import/no-unresolved': 'off', // 配置目录别名Eslint找不到资源
    'import/no-extraneous-dependencies': 'off', // 引入Path内置模块报错
    'vue/multi-word-component-names': 0,
    // no-param-reassign 白名单
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state', 'config']
      }
    ]
  }
}
