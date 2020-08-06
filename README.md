# Hardcore React Training

## Introduction

Welcome to my hardcore React Workshop. It is very important
that you read and follow these instructions before the actual two training days.

## Human Requirements

- You are a developer, devsigner or such.
- You have working professional knowledge on JavaScript, HTML and CSS.
  You don't have to be a guru, but the course really is not meant for
  beginners.

## Computer Requirements

- MacOS, Linux or Windows all work.
- If it doesn't work, just use some Linux virtual machine.
- The current version of Node.js (12 or 14 should work). Might work on older
  or newer ones too, but no guarantees!
- The [Yarn package manager](https://yarnpkg.com). Should work with vanilla NPM
  just as well too but dunno. I've been using Yarn.
- An editor / IDE that supports all the good stuff.
  I use [VSCode](https://code.visualstudio.com/) myself nowadays, and
  I think it's really good.

## Installation

Start by forking / cloning this repository.

If you don't know how to use [Git](https://guides.github.com/introduction/git-handbook/),
you should spend an hour or two to
[learn the basics](https://guides.github.com/introduction/git-handbook/). Git is
used everywhere in the industry so the skill does not go to waste!

If you really don't want to use / learn git, just download the repo.

`training` is the default branch that contains the starting point for
our course. The `master` was messed up by yours truly many moons ago.

There are other branches too. They contain at least all the stuff
from most of the courses I've teached. Interesting stuff, at least if you're me!

### Browser extensions

Install these Chrome extensions, or similar ones for your browser of choice.

- [React dev tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Redux dev tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

### VSCode packages

If you use VSCode, you should install at least the following extensions.

- ESLint
- stylelint
- Prettier - Code formatter
- EditorConfig for VS Code
- PostCSS syntax

Some other nice extensions here that I personally use:

- Visual studio IntelliCode

## Howto

The software is divided into two subfolders. `client` has the client side
code (our main dish). `server` contains a simple Express app to act as
a backend for our training session.

Commands are always run in either of these folders. Not in the common
root folder.

While preparing for the training session, you must follow the _development mode_ path for both server and client.

## Development mode

### client

- `cd client`
- `yarn`
- `cp .env.example .env`
- `yarn run start`

Open browser and go to http://localhost:8888. You should see a simple welcoming
screen of some kind. It should look something like [this screenshot](https://www.dropbox.com/s/tibrr0l22ebl5qn/Screenshot%202019-11-28%2010.29.02.png?dl=0).

### server

- `cd server`
- `yarn`
- `cp .env.example .env`
- `yarn run start`

After the server is running, go to http://localhost:8889/person and you should see a mighty JSON of persons.

A GraphQL backend might also be in working state: http://localhost:8889/graphql is it's endpoint!

## Build

### client

The app builds to `dist/` (client code) folder.

- `yarn run build`

## Licensing

Use as you wish. Read the license from LICENSE.
