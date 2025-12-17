import vuetify from 'eslint-config-vuetify'
import prettier from 'eslint-plugin-prettier';
import vue from 'eslint-plugin-vue';

export default {
  ...vuetify(),
  files: ['*.ts', '*.vue'],
  plugins: {vue, prettier},
  rules: {
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'vue/max-attributes-per-line': ['error', { singleline: 1, multiline: 1 }],
    'prettier/prettier': 'error'
  }
}
