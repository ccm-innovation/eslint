module.exports = {
  extends: ["eslint-config-airbnb"].map(require.resolve),
  env: {
    "browser": "true",
    "node": "true"
  },
  rules: {
    "import/no-extraneous-dependencies": 1,
    "eqeqeq": 1,
    "max-len": 0,
    "global-require": 1,
    "guard-for-in": 1,
    "no-plusplus": 0,
    "no-param-reassign": 0,
    "no-prototype-builtins": 0,
    "no-restricted-syntax": 0,
    "no-underscore-dangle": 0,
    "jsx-a11y/label-has-for": 0,
    "react/jsx-boolean-value": 0,
    "react/forbid-prop-types": [1, { "type": ["object"] }],
    "react/jsx-filename-extension": [0, { "extensions": [".js", ".jsx"] }],
  },
}