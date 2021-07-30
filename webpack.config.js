const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (_, argv) => {
  return {
    mode: argv.mode || "development",
    devtool:
      argv.mode === "production" ? "source-map" : "eval-cheap-source-map",
    target: "web",
    entry: {
      main: path.join(__dirname, "src/main.ts"),
    },
    output: {
      path: path.join(__dirname, "dist"),
      filename: "main.js",
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx", ".wasm"],
    },
    experiments: { asyncWebAssembly: true },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          options: {
            transpileOnly: true,
          },
        },
        {
          test: /\.worker\.js$/,
          use: { loader: "worker-loader" },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "src/html/index.html"),
      }),
      new WasmPackPlugin({
        crateDirectory: path.join(__dirname, "."),
      }),
    ],
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      port: 8001,
      compress: true,
      hot: true,
    },
  };
};
