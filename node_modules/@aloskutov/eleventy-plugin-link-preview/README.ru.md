# eleventy-plugin-link-preview

Плагин генерирует html-код виджета ссылки. При необходимости можно использовать inline css код.

[Codepen пример виджета генерируемого плагином](https://codepen.io/aloskutov/pen/GROKobB)

## Использование

Поддержка только шаблонов Nunjucks и Liquid.

### Вставка css кода

Генерируется inline-css блок, который можно разместить в html-коде страницы.

Nunjucks

```nunjucks
{% linkPreviewCss %}
```

Liquid

```liquid
{% linkPreviewCss %}
```

### Вставка виджета ссылки

Для примера вставим ссылку на https://dev.to

Nunjucks

```nunjucks
{% linkPreview "https://dev.to" %}
```

Liquid

```liquid
{% linkPreview "https://dev.to" %}
```

Будет сгенерирован следующий html-код:

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

## Пользовательский css

Вы можете использовать свой стиль для виджета, взяв за основу следующий css код или написать свой собственный:

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
