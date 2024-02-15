# AdonisJS v6 API Starter Kit

"AdonisJS v6 API Starter Kit" is a minimal and ready-to-use api starter kit built with AdonisJS v6.

This starter kit is using access tokens and comes with pre-configured features such as user login, registration, email verification, and password management (forgot and reset password). It is designed to help you kickstart your AdonisJS projects, allowing you to focus on what makes your application unique.

This kit is designed to be a backend solution that can be seamlessly integrated with any frontend framework or library of your choice. Whether you're building a web application with React or Vue, or a mobile application with React Native or Flutter, this API starter kit provides the necessary backend functionalities to support your development. Its token-based authentication system and pre-configured features make it a versatile choice for any project, allowing you to focus on crafting the frontend experience while the API handles the backend logic.

Please refer to the "How to use" section for detailed setup instructions.

## Frontend frameworks

-   NextJS: https://github.com/sbthemes/nextjs-starter-kit

## How to use

-   Clone this repo
-   copy .env.example to .env
-   Run command: `npm install`
-   Run command: `node ace generate:key`. This command will replace AP_KEY value in .env file.
<!-- -   Edit `ecosystem.config.js` file and change name to domain name or something unique on server. -->

## Features

-   Login
-   Registration
-   Email verification
-   Middleware for email verified users only
-   Forgot password
-   Reset password
-   MJML for mail templates

## Deploy script

```
cd /path/to/your/project/folder

git pull origin main
# Laravel Forge Users: git pull origin $FORGE_SITE_BRANCH

npm install --no-save

npm run build

ENV_PATH=/path/to/env pm2 restart ecosystem.config.js

node ace migration:run --force --disable-locks
```

## Important Note

Please be aware that this is a very minimal starter kit. While it provides basic functionalities such as user login, registration, email verification, and password management, it does not include advanced security features like rate limiting. For instance, there is no built-in mechanism to prevent unlimited password reset email calls. If you anticipate high traffic or potential abuse, you might need to add a rate limiter or similar security measures to protect your application.
