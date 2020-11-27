module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
  },
  env: {
    browser: true,
  },
}
