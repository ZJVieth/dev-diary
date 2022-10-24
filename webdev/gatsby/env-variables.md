# Environment Variable Files for gatsby
<[react
<[gatsby
<[env
<[dev
<[apikeys

<°File names and code snippets for using environment variables in React with gatsby.°>

[https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/]

### Environment File Names
`.env.development` for `gatsby develop`

`.env.production` for `gatsby build`

### Environment File Example

```env
GATSBY_API_URL=https://dev.example.com/api
API_KEY=927349872349798
```

### Loading Environment Variables in Gatsby Config
Necessary if you want to use environment variable in gatsby-*.js files.
```js
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
```

#### Example Use Case
```js
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-custom`,
      options: {
        apiKey: process.env.API_KEY,
      },
    },
  ],
}
```

### Add .env files to .gitignore
```.gitignore
.env*
```

### Reserved Environment Variables
`NODE_ENV` `PUBLIC_DIR`