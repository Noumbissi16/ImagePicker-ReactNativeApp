module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    /* @info Add the plugins array and inside it, add the plugins.*/
    plugins: [
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin",
    ],
  };
};
