# Handball Club API

An API that we developed in the context of a school project. [See the brief](brief-hcc.pdf)

It is built with **Node.js**, **express** and **sqlite**. It uses *swagger*, *cors*, *express-validator* and *jsonwebtoken*.

## Installation

```zsh
git clone https://github.com/edgarcrssn/handball-club-api.git
```
or
```zsh
git clone git@github.com:edgarcrssn/handball-club-api.git
```

## Usage

Before bootstrapping the project:

- Install dependencies
```zsh
npm install
```
- Setup your environment variables (.env). See [.env.example](.env.example).

---

You can now bootstrap the API:
```zsh
npm run start:dev
```

You can run the seed to hydrate the database with some data:
```zsh
npm run db:init
```