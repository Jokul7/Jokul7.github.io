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
    'vue/no-multiple-template-root': 0, // 多根节点
    'vue/no-v-model-argument': 'off', // v-model:xxx 的写法
    // no-param-reassign 白名单
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state', 'config']
      }
    ],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }] // ++ 写法
    // 这个是解决不写后缀报错的问题
    // 'import/extensions': [
    //   'error',
    //   'ignorePackages',
    //   {
    //     js: 'never',
    //     jsx: 'never',
    //     ts: 'never',
    //     tsx: 'never',
    //     json: 'never'
    //   }
    // ]
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.ts', '.js', '.jsx', '.tsx'] // 可忽略的后缀名
      }
    }
    //   // 这个是解决引入时没后缀查不到的问题
    //   'import/resolver': {
    //     node: {
    //       extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
    //     }
    //   }
  }
}
