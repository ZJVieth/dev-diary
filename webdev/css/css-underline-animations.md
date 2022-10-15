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

### Coontinuous Underline Animations
```css
.continuous-1 {
  background: 
      linear-gradient(currentColor 0 0) 
      var(--d, 201%) 100% /200% 3px 
      no-repeat;
  transition:0.5s;
}
.continuous-1:hover {
  --d: -101%;
}

.continuous-2 {
  background:
    repeating-linear-gradient(90deg, transparent 0 calc(25% - 10px), currentColor 0 calc(25% + 10px), transparent 0 50%) 
    bottom right /200% 3px 
    no-repeat;
  transition:0.5s;
}
.continuous-2:hover {
  background-position: bottom left;
}

.continuous-3 {
  background: 
     linear-gradient(90deg, currentColor calc(100%/3), transparent 0 calc(200%/3), currentColor 0) 
     var(--d, 0%) 100% /300% 3px 
    no-repeat;
  transition:0.5s;
}
.continuous-3:hover {
  --d: 100%;
}

.continuous-4 {
  background: 
     linear-gradient(90deg, transparent calc(100%/4), currentColor 0 calc(300%/4), transparent 0) 
     var(--d,100%) 100% /200% 3px 
    repeat-x;
  transition:0.5s;
}
.continuous-4:hover {
  --d: -100%;
}

.continuous-5 {
  background: 
     linear-gradient(currentColor 0 0) 
     var(--d, 201%) 100% /200% 3px 
     no-repeat;
}
.continuous-5:hover {
  --d: -101%;
  transition: 0.5s
}

.continuous-6 {
  background:
    repeating-linear-gradient(90deg, transparent 0 calc(25% - 10px), currentColor 0 calc(25% + 10px), transparent 0 50%) 
    bottom right /200% 3px 
    no-repeat;
}
.continuous-6:hover {
  background-position: bottom left;
  transition: 0.3s
}

.continuous-7 {
  background: 
     linear-gradient(90deg, currentColor calc(100%/3), transparent 0 calc(200%/3), currentColor 0) 
    var(--d, 0%) 100% /300% 3px 
    no-repeat;
}
.continuous-7:hover {
  --d: 100%;
  transition: 0.5s
}

.continuous-8 {
  background: 
     linear-gradient(90deg, transparent calc(100%/4), currentColor 0 calc(300%/4), transparent 0) 
     var(--d,100%) 100% /200% 3px 
     repeat-x;
}
.continuous-8:hover {
  --d: -100%;
  transition: 0.5s
}
```

### 
```css

```
