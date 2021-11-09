module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
    jest: {
      version: require("jest/package.json").version,
    },
    "import/parsers": {
      [require.resolve("@typescript-eslint/parser")]: [".ts", ".tsx", ".d.ts"],
    },
    "import/resolver": {
      [require.resolve("eslint-import-resolver-node")]: {
        extensions: [],
      },
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:eslint-comments/recommended",
    "plugin:promise/recommended",
    "plugin:import/recommended",
    "plugin:unicorn/recommended",
    "plugin:sonarjs/recommended",
  ],
  rules: {
    // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
    "no-prototype-builtins": "off",
    eqeqeq: ["error", "smart"],
    "consistent-return": "off",
    "array-callback-return": ["error", { allowImplicit: true }],
    // Common abbreviations are known and readable
    "unicorn/prevent-abbreviations": "off",
    // We don't really have a filename style yet.  To be discussed
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/filename-case.md
    "unicorn/filename-case": "off",
    "unicorn/no-null": "off",
    "unicorn/no-array-reduce": "off",
    "unicorn/prefer-node-protocol": "off",
    // conflicts with react hooks
    "unicorn/no-useless-undefined": "off",
    // weirdly specific
    "unicorn/import-style": "off",
    // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
    "import/prefer-default-export": "off",
    "import/no-default-export": "error",
    "import/order": [
      "warn",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
      },
    ],
  },
  overrides: [
    {
      files: ["*.{ts,tsx}"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
      },
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
      ],
      rules: {
        // This rule tells people to do something (import foo = require('foo')) which doesn't work
        // with babel compiled typescript.
        "@typescript-eslint/no-var-requires": "off",
        // Warn about incorrect type imports
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-imports.md
        "@typescript-eslint/consistent-type-imports": "warn",
        "@typescript-eslint/ban-types": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-empty-interface": "error",
        "@typescript-eslint/no-inferrable-types": "error",
        "@typescript-eslint/no-empty-function": "error",
        "@typescript-eslint/explicit-module-boundary-types": "error",
        "@typescript-eslint/ban-ts-comment": "warn",
        "@typescript-eslint/no-shadow": [
          "error",
          { ignoreFunctionTypeParameterNameValueShadow: true },
        ],
        // Makes no sense to allow type inferrence for expression parameters, but require typing the response
        "@typescript-eslint/explicit-function-return-type": [
          "error",
          {
            allowExpressions: true,
            allowTypedFunctionExpressions: true,
          },
        ],
        "@typescript-eslint/no-use-before-define": [
          "error",
          {
            functions: false,
            classes: true,
            variables: true,
            typedefs: true,
          },
        ],
      },
    },
    {
      files: ["*.{js,cjs}"],
      parser: "babel-eslint",
      rules: {
        "unicorn/prefer-module": "off",
      },
    },
    {
      files: ["*.{tsx,jsx}"],
      extends: [
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
      ],
      rules: {
        // no-onchange rule is deprecated:
        // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-onchange.md
        "jsx-a11y/no-onchange": "off",
        // PropTypes are useless with typescript
        "react/prop-types": "off",
        "react/no-unescaped-entities": "off",
      },
    },
    {
      files: ["*.{test,spec}.{ts,tsx,js}"],
      env: {
        jest: true,
      },
      extends: [
        "plugin:jest/recommended",
        "plugin:jest-formatting/recommended",
        "plugin:testing-library/react",
      ],
      rules: {
        "@typescript-eslint/no-empty-function": "off",
        "import/no-default-export": "off",
        "react/display-name": "off",
      },
    },
    {
      files: ["*.{ts,tsx,js,jsx,cjs}"],
      extends: ["prettier"],
    },
  ],
};
