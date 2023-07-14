'use strict';

const { JSDOM } = require('jsdom');
const parseURL = require('./parseURL.js');

/**
 * Get page title
 * @param {object} document
 * @return {string}
 */
const getPageTitle = (document) => {
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    return ogTitle.content;
  }
  const twTitle = document.querySelector('meta[name="twitter:title"]');
  if (twTitle) {
    return twTitle.content;
  }
  const pgTitle = document.title;
  if (pgTitle) {
    return pgTitle;
  }

  return '';
};

/**
 * Get page description
 * @param {object} document
 * @return {string}
 */
const getPageDescription = (document) => {
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    return ogDescription.content;
  }
  const twDescription = document.querySelector('meta[name="twitter:description"]');
  if (twDescription) {
    return twDescription.content;
  }
  const pgDescription = document.querySelector('meta[name="description"]');
  if (pgDescription) {
    return pgDescription.content;
  }

  return '';
};

/**
 * Get page url
 * @param {object} document
 * @return {string}
 */
const getPageUrl = (document) => {
  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) {
    return ogUrl.content;
  }
  const pgUrl = document.querySelector('link[rel="canonical"]');
  if (pgUrl) {
    return pgUrl.href;
  }

  return '';
};

/**
 * Get page image
 * @param {object} document
 * @return {string}
 */
const getPageImage = (document) => {
  const ogImage = document.querySelector('meta[property="og:image"]');
  if (ogImage) {
    return ogImage.content;
  }
  const twImage = document.querySelector('meta[name="twitter:image:src"]');
  if (twImage) {
    return twImage.content;
  }
  const pgImage = document.querySelector('link[rel="img_src"]');
  if (pgImage) {
    return pgImage.href;
  }

  return '';
};

/**
 * Delete empty properties
 * @param {object} data
 * @return {object}
 */
const cleanData = (data) => {
  for (const key in data) {
    if (data[key] === '') {
      delete data[key];
    }
  }
  return data;
};

/**
 * Get Page data
 * @param {string} content
 * @param {string} url
 * @return {object}
 */
const getPageData = (content, url) => {
  const safeUrl = url ? url : '';

  const result = {};
  const dom = new JSDOM(content);
  const document = Object.assign(dom.window.document);

  result.title = getPageTitle(document);
  result.description = getPageDescription(document);
  result.url = getPageUrl(document) ? getPageUrl(document) : safeUrl;
  result.image = getPageImage(document);
  result.domain = parseURL(result.url).groups.hostname ? parseURL(result.url).groups.hostname : '';

  return cleanData(result);
};

module.exports = getPageData;
