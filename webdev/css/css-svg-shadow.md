# SVG Path Shadows
<[css
<[svg
<[shadow
<[filter

[https://css-tricks.com/adding-shadows-to-svg-icons-with-css-and-svg-filters/]


### SVG Inline Filter Syntax
<[html
```html
<svg>
    <filter id="shadow1">
      <feDropShadow 
          dx="-0.8"
          dy="-0.8" 
          stdDeviation="0" // determines blur
          flood-color="pink" 
          flood-opacity="0.5"
      />
    </filter>
</svg>
```

### SVG CSS Filter Syntax
```css
.withDropShadow {
  filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
  /* (dx dy stdDev floodColor) */
}

.withSVGFilter {
  filter: url(#shadow1);
  /* as defined in above html snippet */
}
```


![example image](./images/9E8447B5-6F27-4689-ABB8-F75CB02CBD1C.jpeg)
