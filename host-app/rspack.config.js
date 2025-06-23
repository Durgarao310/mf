const path = require("path");
const HtmlRspackPlugin = require("html-rspack-plugin");
const ReactRefreshPlugin = require("@rspack/plugin-react-refresh");

module.exports = {
  entry: "./src/main.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/", // ensure assets load correctly in client-side routing
    clean: true,
  },
  plugins: [
    new HtmlRspackPlugin({
      template: "./index.html",
    }),
    new ReactRefreshPlugin(), // Enables React Fast Refresh (HMR)
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "builtin:swc-loader", // Use Rspack's built-in SWC loader for TS/TSX
          options: {
            jsc: {
              parser: {
                syntax: "typescript",
                tsx: true,
              },
              transform: {
                react: {
                  runtime: "automatic", // Use React 17+ JSX transform
                  refresh: true, // Enable React Fast Refresh support
                },
              },
            },
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",  // Injects CSS into DOM
          "css-loader",    // Resolves CSS imports
          "postcss-loader" // Processes CSS with PostCSS plugins
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  
  devServer: {
    port: 3000,
    hot: true,
    open: true, // Automatically open in browser
    historyApiFallback: true, // For SPA routing (React Router)
  },  
  mode: "development", // or "production" depending on your environment
};
