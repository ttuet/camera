const { ESLINT_MODES } = require('@craco/craco');
module.exports = {
  eslint: {
    mode: ESLINT_MODES.file,
  },
  style: {
    // postcss: {
    //   plugins: [autoprefixer, tailwind],
    // },
    sass: {
      loaderOptions: {
        /* Any sass-loader configuration options: https://github.com/webpack-contrib/sass-loader. */
      },
      loaderOptions: (sassLoaderOptions, { env, paths }) => {
        return sassLoaderOptions;
      },
    },
  },
};
