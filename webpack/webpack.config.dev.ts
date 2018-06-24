import HtmlWebpackPlugin from "html-webpack-plugin";
import config from "./webpack.config";

config.entry = require.resolve("../src/dev.tsx");

config.mode = "development";

config.devtool = "cheap-module-eval-source-map";

config.output!.publicPath = "http://localhost:8080/";

config.plugins!.push(new HtmlWebpackPlugin());

config.serve = {
  dev: {
    publicPath: "/",
    headers: { "access-control-allow-origin": "*" }
  }
};

export default config;
