module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'plugin:jest/recommended',
  ],
  plugins: [
    'import',
    'jest',
    'jsx-a11y',
    'react',
  ],
  env: {
    browser: true,
    'jest/globals': true,
  },
  rules: {
    'no-underscore-dangle': ['off'],
    'class-methods-use-this': ['off'],
    'jsx-quotes': ['off'],
    'react/prefer-stateless-function': [0],
    'jsx-a11y/no-autofocus': ['off'],
    'camelcase': ["off"],
    'react/no-array-index-key': [0],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: false,
      optionalDependencies: false,
    }],
    'jsx-a11y/media-has-caption': [ 0, {
      audio: [ 'Audio' ],
      video: [ 'Video' ],
    }],
    'no-unused-expressions': 0,
    'react/forbid-prop-types': 0,
    'react/no-did-update-set-state': 0,
    'react/jsx-wrap-multilines': 0,
    'react/destructuring-assignment': 0,
    'jsx-a11y/label-has-for': [ 2, {
      'components': [ 'Label' ],
      'required': {
          'some': [ 'nesting', 'id' ]
      },
      'allowChildren': false,
    }],
    'jsx-a11y/label-has-associated-control': [ 2, {
      'labelComponents': ['CustomLabel'],
      'labelAttributes': ['inputLabel'],
      'controlComponents': ['CustomInput'],
      'depth': 3,
    }],
    'no-multiple-empty-lines': ["error", { "max": 2, "maxEOF": 1 }],
    'anchor-is-valid': 0,
    'operator-linebreak': 0,
    'object-curly-newline': 0,
    'prefer-destructuring': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
  },
};
