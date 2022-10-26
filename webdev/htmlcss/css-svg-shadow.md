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

### List of available SVG filter effects
```svg
<feGaussianBlur>
<feDropShadow>
<feMorphology>
<feDisplacementMap>
<feBlend>
<feColorMatrix>
<feConvolveMatrix>
<feComponentTransfer>
<feSpecularLighting>
<feDiffuseLighting>
<feFlood>
<feTurbulence>
<feImage>
<feTile>
<feOffset>
<feComposite>
<feMerge>
```

### SVG Inset Shadow
<[inset
```svg
<filter id='inset-shadow'>
  <!-- Shadow offset -->
  <feOffset
    dx='0'
    dy='0'
  />

  <!-- Shadow blur -->
  <feGaussianBlur
    stdDeviation='1'
    result='offset-blur'
  />

  <!-- Invert drop shadow to make an inset shadow -->
  <feComposite
    operator='out'
    in='SourceGraphic'
    in2='offset-blur'
    result='inverse'
  />
  
  <!-- Cut color inside shadow -->
  <feFlood
    flood-color='black'
    flood-opacity='.95'
    result='color'
  />
  <feComposite
    operator='in'
    in='color'
    in2='inverse'
    result='shadow'
  />

  <!-- Placing shadow over element -->
  <feComposite
    operator='over'
    in='shadow'
    in2='SourceGraphic'
  />
</filter>
```

![example image](./images/A2C1BE2D-593D-4616-96D4-DB8229B0B912.jpeg)
