const autoprefixer = require("autoprefixer");
const postcssPresetEnv = require("postcss-preset-env");
// const purgecss = require("@fullhuman/postcss-purgecss");
// const postcssUncss = require("postcss-uncss");

if (process.env.NODE_ENV === "production") {
  module.exports = {
    plugins: [
      postcssPresetEnv({
        stage: 0,
        // minimumVendorImplementations: 0,
        features: {
          'custom-media-queries': {
            importFrom: 'src/styles/breakpoints.css'
          }
        },
        autoprefixer: true,
      }),

      // purgecss({
      //   content: ['./public/**/*', 
      //   './src/**/*.{astro,js,jsx,ts,tsx,vue}'],
      //   safelist: {
      //     standard: [],
      //     deep: [/class$/],
      //     greedy: [],
      //     keyframes: [],
      //     variables: [],
      // },
      // defaultExtractor: content => content.match(/[\w-/:%@]+(?<!:)/g) || []
      // }),
      // postcssUncss({
      //   html: ["**/*.astro", "*.vue"],
      // }),
      // require("autoprefixer"),
    ],
  };
}

if (process.env.NODE_ENV === "development") {
  module.exports = {
    plugins: [
      postcssPresetEnv({
        stage: 0,
        // minimumVendorImplementations: 0,
        features: {
          'custom-media-queries': {
            importFrom: 'src/styles/breakpoints.css'
          }
        },
        autoprefixer: true,
      }),
      //   postcssUncss({
      //   html: ['**/*.astro']
      // }),
      // require("autoprefixer"),
    ],
  };
}
