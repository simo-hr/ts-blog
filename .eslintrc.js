module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:@typescript-eslint/recommended',
    '@nuxtjs/eslint-config-typescript'
  ],
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-console': 'off',
    semi: [2, 'never'],
    'no-undef': 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'always',
        imports: 'always',
        exports: 'always',
        functions: 'never',
      }
    ],
    'vue/no-v-model-argument': 'off',
    'vue/no-v-for-template-key': 'off',
    'vue/max-attributes-per-line': 'off',
    'no-unused-vars': 'off', // 使っていない変数を許可
    'vue/html-self-closing': 'off', // 空タグを許可する
  },
}
