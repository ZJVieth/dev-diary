# Hide Scrollbar using CSS
<[css
<[scrollbar
<[hide

<°CSS snippet for hiding the scrollbar on an element or html document.°>

### Hiding Scrollbar on Element
<[div
```css
/* For webkit */
.withoutScrollbar::-webkit-scrollbar {
    display: none;
    /* or */
    width: 0 !important;
}

.withoutScrollbar {
    /* For IE/Edge */
    -ms-overflow-style: none;
    
    /* For Firefox */
    scrollbar-width: none;
    /* or */
    overflow: -moz-scrollbars-none;
}
```

### Hiding Scrollbar on Body
<[body
```css
/* For webkit */
body::-webkit-scrollbar {
    display: none;
    /* or */
    width: 0 !important;
}

/* For IE/Edge */
body {
    -ms-overflow-style: none;
}

/* For Firefox */
html {
    scrollbar-width: none;
}
```