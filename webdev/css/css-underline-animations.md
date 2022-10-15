# Underline Animations for CSS
<[css
<[underline
<[animation

<~Multiple CSS animations for underlining text on hover for example.~>

[https://dev.to/afif/100-underline-overlay-animation-the-ultimate-css-collection-4p40]

### Basic Underline Animations
```css
.basic-0 {
  background: 
      linear-gradient(currentColor 0 0) 
      0 100% /var(--d, 0) 3px 
      no-repeat;
}
.basic-0:hover {
  --d: 100%;
}

.basic-1 {
  background: 
      linear-gradient(currentColor 0 0) 
      0 100% /var(--d, 0) 3px 
    no-repeat;
  transition:0.5s;
}
.basic-1:hover {
  --d: 100%;
}

.basic-2 {
  background: 
      linear-gradient(currentColor 0 0) 
      100% 100% /var(--d, 0) 3px 
      no-repeat;
  transition:0.5s;
}
.basic-2:hover {
  --d: 100%;
}

.basic-3 {
  background: 
      linear-gradient(currentColor 0 0) 
      bottom /var(--d, 0) 3px 
      no-repeat;
  transition:0.5s;
}
.basic-3:hover {
  --d: 100%;
}

.basic-4 {
  background: 
      linear-gradient(currentColor 0 0) 
      var(--p, 0) 100% /var(--d, 0) 3px 
      no-repeat;
  transition: 0.3s, background-position 0s 0.3s;
}
.basic-4:hover {
  --d: 100%;
  --p: 100%;
}

.basic-5 {
  background: 
      linear-gradient(currentColor 0 0) 
      var(--p, 100%) 100% /var(--d, 0) 3px 
      no-repeat;
  transition: 0.3s, background-position 0s 0.3s;
}
.basic-5:hover {
  --d: 100%;
  --p: 0%;
}

.basic-6 {
  background: 
      linear-gradient(currentColor 0 0) 
      bottom /var(--d, 20%) 3px 
      no-repeat;
  transition:0.5s;
}
.basic-6:hover {
  --d: 80%;
}
```


```css

```
