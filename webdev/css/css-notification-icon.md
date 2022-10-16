# Notification Icon on Div Container
<[css
<[notification
<[html-attr
<[icon
<[social

<°Little red notification count in top corner of div container using ::after and html attributes.°>

Html / JSX Part:
```html
<div notifCount="5" className="notif-icon-container">
    <image href="anyimage.png" />
</div>
```

Adjusting value via javascript:
```js
const notifContainerElement = document.querySelector(".notif-icon-container")
notifContainerElement.setAttribute("notifCount", 7)
```

CSS
```css
.notif-icon-container {
    position: relative;
}

.notif-icon-container::after {
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 50%;
    background-color: red;
    color: white;
    content: attr(notifCount);
}
```
