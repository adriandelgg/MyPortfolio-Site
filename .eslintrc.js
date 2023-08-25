module.exports = {
  extends: [
    "plugin:react/recommended",
    "next/core-web-vitals",
    "next",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier"
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    // Other rules
    "@next/next/no-img-element": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-unsafe-assignment": "warn",
    "@typescript-eslint/no-floating-promises": ["error", { ignoreIIFE: true }]
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname
  }
};
