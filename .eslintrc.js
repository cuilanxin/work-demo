module.exports = {
  extends: ['alloy', 'alloy/react'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'warn',
    'react/no-unstable-nested-components': 'off',
    'no-invalid-this': 'off',
    'no-console': 'warn',
    'no-unused-vars': 'warn',
  },
};
