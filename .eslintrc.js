module.exports = {
  root: true,
  env: {
    node: true
  },
  "extends": ["plugin:vue/recommended", "@vue/prettier"],
  "rules": {
    "vue/attributes-order": "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
