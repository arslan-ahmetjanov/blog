const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  // Подключаем Markdown
  let md = new markdownIt();
  eleventyConfig.setLibrary("md", md);

  // Добавляем коллекцию постов
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("./src/posts/*.md");
  });

  // Отслеживаем изменения в файлах
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addWatchTarget("./src/js/");

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};