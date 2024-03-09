const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.eslint.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: {
    node: true,
  },
  extends: [
    require.resolve("@vercel/style-guide/eslint/node"),
    require.resolve("@vercel/style-guide/eslint/typescript"),
    "eslint-config-turbo",
    "plugin:perfectionist/recommended-natural",
  ],
  globals: {
    JSX: true,
    React: true,
  },
  ignorePatterns: ["node_modules/", "dist/"],
  plugins: ["only-warn", "perfectionist"],
  rules: {
    "import/no-default-export": "off",
    "import/order": "off",
    "no-unused-vars": "off",
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
};
