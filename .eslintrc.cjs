module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "plugin:react/jsx-runtime",
    "plugin:jest/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "prettier"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', "react", "jest", "react-hooks", "import"],
  "settings": {
    "react": {
      "version": "detect"
    },
  },
  "overrides": [
    {
      "files": [".eslintrc.js", ".prettierrc.js"],
      "env": {
        "node": true
      }
    },
    {
      "files": ["*.test.js"],
      "env": {
        "jest": true
      }
    }
  ],
  "rules": {
    "no-console": 1,
    "react/prop-types": 0,
    "react/display-name": "off",
    "eqeqeq": ["error", "always", { "null": "ignore" }],
    "key-spacing": ["warn", { "beforeColon": false, "afterColon": true }],
    "max-len": [
      "error",
      140,
      2,
      {
        "ignoreUrls": true,
        "ignoreRegExpLiterals": true,
        "ignorePattern": "^import .*"
      }
    ],
    "new-cap": ["error", { "newIsCap": true, "capIsNew": false }],
    "new-parens": "error",
    "no-empty-character-class": "error",
    "no-empty-pattern": "error",
    "no-debugger": "error",
    "import/no-duplicates": "error",
    "no-multiple-empty-lines": ["warn", { "max": 1 }],
    "no-useless-return": "error",
    "no-invalid-regexp": "error",
    "no-trailing-spaces": "error",
    "no-undef": "error",
    "no-undef-init": "error",
    "no-unexpected-multiline": "error",
    "prefer-const": "error",
    "jsx-quotes": ["error", "prefer-double"],
    "react/jsx-boolean-value": "error",
    "react/jsx-curly-spacing": ["error", "never"],
    "react/jsx-equals-spacing": ["error", "never"],
    "react/jsx-indent": ["error", 2],
    "react/jsx-indent-props": ["error", 2],
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-undef": "error",
    "react/jsx-tag-spacing": ["error", { "beforeSelfClosing": "always" }],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/self-closing-comp": "error",
    'react-refresh/only-export-components': 'warn',
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "args": "all",
        "ignoreRestSiblings": true,
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "caughtErrorsIgnorePattern": "^_"
      }
    ],
    "@typescript-eslint/no-empty-function": "warn",
    "import/first": "error",
    "import/no-unresolved": ["error", { "caseSensitive": false }],
    "import/newline-after-import": "error",
    "import/order": [
      "error",
      {
        "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
        "pathGroups": [
          {
            "pattern": "@common/**",
            "group": "external",
            "position": "after"
          },
          {
            "pattern": "{.,..}/*.scss",
            "patternOptions": { "dot": true, "nocomment": true },
            "group": "index",
            "position": "after"
          }
        ],
        "newlines-between": "always",
        "warnOnUnassignedImports": true
      }
    ]
  }
}
