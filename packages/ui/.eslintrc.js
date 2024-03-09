/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@repo/eslint-config/react-internal.js"],
  ignorePatterns: ["turbo"],
  parserOptions: { project: true },
  root: true,
};
