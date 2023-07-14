'use strict';

const linkPreview = require('./src/linkPreview');
const getStyle = require('./src/getStyle');

module.exports = (eleventyConfig) => {
  eleventyConfig.addNunjucksAsyncShortcode('linkPreview', async (url) => {
    const result = await linkPreview(url);
    return result;
  });
  eleventyConfig.addLiquidShortcode('linkPreview', async (url) => {
    const result = await linkPreview(url);
    return result;
  });
  eleventyConfig.addShortcode('linkPreviewCss', () => {
    return getStyle();
  });
};
