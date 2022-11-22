# HTML Forms and their CSS
<[html
<[css
<[form
<[input

<°Code snippets and examples for different form functionalities.°>

## Form Methods
<[php


## Numeric Inputs
<[number

```html
<form>
    <label for=“field1”>Any number:</label>
    <input type=“number” id=“field1” />

    <label for=“field2”>Values between one and ten:</label>
    <input type=“number” id=“field2” min=“1” max=“10” />
</form>
```

```css
input:in-range {
    background-color: rgba(0, 255, 0, 0.25);
}

input:out-of-range {
    background-color: rgba(255, 0, 0, 0.25);
}
```
