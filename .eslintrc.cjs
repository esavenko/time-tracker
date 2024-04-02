/* global module */
const WARN = "warn";
const ERROR = "error";

module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
  ],
  "overrides": [
    {
      "env": {
        "node": true,
      },
      "files": [
        ".eslintrc.{js,cjs}",
      ],
      "parserOptions": {
        "sourceType": "script",
      },
    },
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
  },
  "plugins": [
    "vue",
  ],
  "rules": {
    "vue/multi-word-component-names": WARN,
    "vue/max-attributes-per-line": [WARN, {
      "singleline": {
        "max": 1,
      },
      "multiline": {
        "max": 1,
      },
    }],
    "vue/no-child-content": [ERROR, {
      "additionalDirectives": ["foo"],
    }],
    "quotes": [2, "double", { "avoidEscape": true }],
  },
};
