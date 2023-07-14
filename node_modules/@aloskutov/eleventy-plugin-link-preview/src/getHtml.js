'use strict';

/**
 * Get property string
 * @param {string} property string
 * @return {string}
 */
const getProperty = (property) => (property ? property : '');

/**
 * Get image string
 * @param {string} image
 * @return {string}
 */
const getImage = (image) => (image ? `<div class="link-preview__image" style="background-image: url(${image});"></div>` : '');

/**
 * Get html code
 * @param {object} data
 * @return {string}
 */
const getHtml = (data = {}) => `<div class="link-preview">
  <a class="link-preview__link" href='${getProperty(data.url)}'>
    <div class="link-preview__wrapper">
      <div class="link-preview__content">
        <div class="link-preview__title">${getProperty(data.title)}</div>
        <div class="link-preview__description">${getProperty(data.description)}</div>
        <div class="link-preview__domain">${getProperty(data.domain)}</div>
      </div>${getImage(data.image)}
    </div>
  </a>
</div>`;

module.exports = getHtml;
