# Changing Favicon of Gatsby Project
<[gatsby
<[icon
<[meta

<°Workflow for changing the favicon of a gatsby project.°>
[https://www.codeconcisely.com/posts/how-to-add-a-favicon-to-a-gatsby-site/]

```bash
npm install gatsby-plugin-manifest
```

Add to gatsby config:
```js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/icon.png',
      },
    },
  ],
};
```

Then run:
```bash
gatsby develop
gatsby build
```