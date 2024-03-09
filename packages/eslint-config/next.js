/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "./base.js",
    require.resolve("@vercel/style-guide/eslint/browser"),
    require.resolve("@vercel/style-guide/eslint/react"),
    require.resolve("@vercel/style-guide/eslint/next"),
  ],
  globals: {
    JSX: true,
    React: true,
  },
  rules: {
    "import/no-default-export": "off",
    "import/order": "off",
  },
};
