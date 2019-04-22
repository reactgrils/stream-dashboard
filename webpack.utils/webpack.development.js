const { join } = require("path");

module.exports = env => ({
  mode: env,
  devtool: env === "development" ? "source-map" : "",
  devServer: {
    contentBase: join(__dirname, "dist"),
    historyApiFallback: true,
    proxy: {
      "/v1": "http://[::1]:5000"
    }
  }
});
