import { Configuration } from "webpack";

const config: Configuration = {
  entry: require.resolve("../src/index.tsx"),
  output: { filename: "[name].[hash:8].js" },
  resolve: { extensions: [".tsx", ".ts", ".js", ".jsx"] },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" }
      }
    ]
  },
  plugins: []
};

export default config;
