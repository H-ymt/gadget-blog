module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-recess-order'],
  plugins: ['stylelint-prettier'],
  overrides: [
    {
      files: ['**/*.{astro,html}'],
      customSyntax: 'postcss-html'
    },
    {
      files: ['src/**/*.{scss,css}'],
      customSyntax: 'postcss-scss'
    }
  ],
  rules: {
    'selector-class-pattern': null,
    'prettier/prettier': true
  },
  ignoreFiles: ['node_modules/*']
}
