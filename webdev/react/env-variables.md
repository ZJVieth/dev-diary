# Environment Variable Files for create-react-app
<[react
<[env
<[dev
<[apikeys
<[create-react-app

<°File names and code snippets for using environment variables in React with create-react-app.°>

[https://create-react-app.dev/docs/adding-custom-environment-variables/]

### Naming Convention
Every environment variable used with create-react-app should start with "REACT_APP_".

### Temporary Environment Variables in Shell
<[cmd
#### Windows cmd.exe
```bash
set "REACT_APP_NOT_SECRET_CODE=abcdef" && npm start
```

#### Windows Powershell
```shell
($env:REACT_APP_NOT_SECRET_CODE = "abcdef") -and (npm start)
```

#### Linux/macOS Bash
```bash
REACT_APP_NOT_SECRET_CODE=abcdef npm start
```


### Permanent Environment Variables in Workspace
Create ".env" file in root of project workspace. Changing .env files requires a dev-server restart. 
```env
REACT_APP_NOT_SECRET_CODE=abcdef

REACT_APP_VERSION=$npm_package_version

DOMAIN=www.example.com
REACT_APP_FOO=$DOMAIN/foo
```

#### Usable env file names
`.env` (Default)

`.env.local` (Local overrides)

`.env.development`
`.env.test`
`.env.production`

`.env.development.local`
`.env.test.local`
`.env.production.local`

Local environment variables always have higher priorities.
The corresponding dev/test/production environment files have higher priority in the respective scripts (`npm start`, `npm test`, and `npm run build`).


### Referencing Environment Variables in HTML
<[html

In public/index.html: (Injected at build time)
```Html
<title>%REACT_APP_WEBSITE_NAME%</title>
```
