# eleventy-plugin-link-preview

![npm (scoped)](https://img.shields.io/npm/v/@aloskutov/eleventy-plugin-link-preview)
[![DeepSource](https://deepsource.io/gh/aloskutov/eleventy-plugin-link-preview.svg/?label=active+issues&show_trend=true&token=MiKmciFiZJm1PqDB7dEmhZP3)](https://deepsource.io/gh/aloskutov/eleventy-plugin-link-preview/?ref=repository-badge)
[![DeepSource](https://deepsource.io/gh/aloskutov/eleventy-plugin-link-preview.svg/?label=resolved+issues&show_trend=true&token=MiKmciFiZJm1PqDB7dEmhZP3)](https://deepsource.io/gh/aloskutov/eleventy-plugin-link-preview/?ref=repository-badge)
[![DeepScan grade](https://deepscan.io/api/teams/16410/projects/20009/branches/531306/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=16410&pid=20009&bid=531306)
![npms.io (quality)](https://img.shields.io/npms-io/quality-score/@aloskutov/eleventy-plugin-link-preview)

Eleventy link preview plugin. Creates an responsive link block and, if necessary, inline css code.

[Codepen preview](https://codepen.io/aloskutov/pen/GROKobB)

## Usage

Support for Nunjucks and Liquid templates only.

### Install via npm

```shell
npm install -D @aloskutov/eleventy-plugin-link-preview
```

### Load plugin in .eleventy.js

```javascript
const linkPreview = require('@aloskutov/eleventy-plugin-link-preview');

module.exports = (eleventyConfig) => {
    eleventyConfig.addPlugin(linkPreview);
};
```

### Insert inline css

Nunjucks

```nunjucks
{% linkPreviewCss %}
```

Liquid

```liquid
{% linkPreviewCss %}
```

### Insert link

Insert link to 'https://dev.to'

Nunjucks

```nunjucks
{% linkPreview "https://dev.to" %}
```

Liquid

```liquid
{% linkPreview "https://dev.to" %}
```

You will get the following HTML code

```html
<div class="link-preview">
  <a class="link-preview__link" href='https://dev.to/'>
    <div class="link-preview__wrapper">
      <div class="link-preview__content">
        <div class="link-preview__title">DEV Community</div>
        <div class="link-preview__description">A constructive and inclusive social network for software developers. With you every step of your journey.</div>
        <div class="link-preview__domain">dev.to</div>
      </div>
      <div class="link-preview__image" style='background-image: url(https://thepracticaldev.s3.amazonaws.com/i/6hqmcjaxbgbon8ydw93z.png);'></div>
    </div>
  </a>
</div>
```

## Custom css

You can use your css based on below code.

```css
.link-preview {
  margin: 0 auto;
  max-width: 1200px;
  padding: 0;
  box-shadow: inset 0 0 0 1px rgb(230 230 230);
}
.link-preview__link {
  text-decoration: none;
}
.link-preview__wrapper {
  display: flex;
  flex-wrap: wrap;
}
.link-preview__content {
  box-sizing: border-box;
  padding: 8px;
  flex: 1 1 270px;
  min-width: 270px;
  height: 168px;
  display: flex;
  align-content: flex-end;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
}
.link-preview__title {
  font-weight: 600;
  line-height: 24px;
  max-height: 50px;
  font-size: 20px;
  color: hsl(219, 25%, 25%);
  font-family: "PT Serif", serif;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
}
.link-preview__description {
  margin-top: 8px;
  color: hsl(220, 15%, 30%);
  line-height: 20px;
  font-weight: 400;
  min-width: 240px;
  max-height: 40px;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  font-size: 16px;
  font-family: "Open Sans", sans-serif;
}
.link-preview__domain {
  margin-top: 12px;
  font-family: monospace;
  color: hsl(221, 10%, 40%);
}
.link-preview__image {
  display: block;
  padding: 0;
  margin: 0;
  flex: 0 0 clamp(260px, (606px - 100%) * 1000, 100%);
  height: auto;
  background-position: 50% 50%;
  background-size: cover;
  background-origin: border-box;
  aspect-ratio: 2;
  box-shadow: inset 0 0 0 1px rgb(230 230 230);
}
```
