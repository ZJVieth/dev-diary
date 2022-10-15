# Background Styles for Html Containers
<[css 
<[div
<[background

### Radial gradient fade container mask
<[radial
<[gradient
<[mask
<[star
<[space

<~Masking container to fade out towards it edges with highest opacity in center.~>
```css
.radialEdgeFade {
    background: rgba(200, 200, 200, 0.8);
    mask-image: radial-gradient(closest-side, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.01));
}
```
![example image](./images/css-radial-gradient-bg-fade.png)