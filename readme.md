# Template For Node JS Projects

## Table of Contents

- [Tech Stack](#techstack)
- [Configuration](#configuration)
- [Installation](#installation)

---

## Tech Stack

The template created with using these technologies:

- Express JS
- Mongo DB
- Yarn
- Body Parser
- Lodash
- Morgan
- Nodemon
- Eslint
- Swagger

---

## Configuration

Altough the template has configurations in server.js, etc. most of the configuration is set it up in `config/config.json`.

1. MongoDB Configuration

Go to `config/config.json` and setup your mongoDB account details for user, and password field.

2. Port Configuration

The template locally runing with nodemon on port `4000`, and `8080` in development, and staging servers. You can go to `config/config.json` file and edit ports if you want.

3. Server Configuration

In default the template provides 3 different branches(master, development, staging), and all those branches using their own `server.js` file. It means that `development, production, staging` files created by default.

---

## Installation

To run project on your local:

```bash
$ git clone https://github.com/BayCem/nodejs-backend-template.git
$ yarn install

```

Then, run the following command for run project in local server:

```bash
$ yarn start:development
```

or for run in production:

```bash
$ yarn start:production
```

---
