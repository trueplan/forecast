const getPresets = () => [
  [
    "@babel/preset-env",
    {
      targets: {
        ie: "11",
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
    },
  ],
  "@babel/preset-react",
  "@babel/preset-typescript",
];

const BASE_PLUGINS = [
  "macros",
  ["@babel/proposal-class-properties", { loose: true }],
  "@babel/proposal-object-rest-spread",
  ["@babel/proposal-private-methods", { loose: true }],
  ["@babel/proposal-private-property-in-object", { loose: true }],
  "@babel/plugin-transform-runtime",
  "@babel/plugin-proposal-optional-chaining",
];

module.exports = {
  env: {
    production: {
      presets: getPresets(),
      plugins: BASE_PLUGINS,
    },
    development: {
      presets: getPresets(),
      plugins: BASE_PLUGINS,
    },
  },
};
