'use strict';

const axios = require('axios');

/**
 * Get remote page content
 * @param {string} url
 * @return {string}
 */
const getRemotePage = async (url) => {
  const result = await axios.get(url).then((response) => response.data);
  return result;
};

module.exports = getRemotePage;
