/** @type {import('prettier').Config} */
module.exports = {
  singleQuote: true,
  arrowParens: 'always',
  trailingComma: 'none',
  printWidth: 100,
  tabWidth: 2,
  tailwindFunctions: ['clsx', 'cva'],
  plugins: ['prettier-plugin-tailwindcss']
};
