const linkPreview = require('@aloskutov/eleventy-plugin-link-preview');
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(linkPreview);
  eleventyConfig.addPlugin(pluginRss, {
    posthtmlRenderOptions: {
      closingSingleTag: "default" // opt-out of <img/>-style XHTML single tags
    }
  });
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };

  let markdownLibrary = markdownIt(options).use(markdownItAnchor);

  eleventyConfig.setLibrary("md", markdownLibrary);
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("css/fonts");
  eleventyConfig.addPassthroughCopy("_redirects");

  return {
    dir: {
      includes: "_includes",
      layouts: "_layouts"
    }
  }
};
