/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "./base.js",
    require.resolve("@vercel/style-guide/eslint/browser"),
    require.resolve("@vercel/style-guide/eslint/react"),
  ],
  globals: {
    JSX: true,
    React: true,
  },
};
