module.exports = {
  presets: [
    "@babel/preset-react",
    [
      "@babel/preset-env",
      {
        targets: {
          node: "8.10"
        }
      }
    ],
    "@babel/preset-typescript"
  ],
  plugins: [
    "babel-plugin-dev-expression",
    "react-hot-loader/babel",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread",
    ["babel-plugin-styled-components", { uglifyPure: true }]
  ]
};
