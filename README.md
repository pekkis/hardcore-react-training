# Hardcore React Training Broilerplate

## Introduction

Welcome, friend, to my two-day hardcore React Workshop. You'll grow some real bones instead of the backbone.js (pun intended) your rib cage is attached to now.

This repo also acts as my broilerplate to kickstart a React project with sane defaults, necessary tooling and
some reusable, copy-paste-preventing boilerplate stuff. It's exactly the same stuff I build my own stuff on.

I recommend to check out the [create-react-app](https://github.com/facebookincubator/create-react-app) boilerplate
instead of my broilerplate. If it suits you, you might want to use it. Personally, I think it's inadequate.
You always have to eject, and then you're just as on your own as here.

## Branches

The `master` branch contains a fuller example application. `training` is empty.

Use as you wish, but still read the license from LICENSE.

## Requirements

- MacOS and Linux are grade A citizens. Should work in Windows too, but I don't always
  test because I'm not a Windows man.
- For the training, you can also download and use the ready-to-use [the prebuilt virtual machine](http://dr-kobros.com/lib/hardcore-react-training-vm.zip).
- The current version of Node.js (8.x). Might work on older ones, but no guarantee!
- The [Yarn package manager](https://yarnpkg.com).

## Training requirements

- A good editor / IDE that supports our stuff in real-time. I use [Nuclide](https://nuclide.io/) (Atom)
  myself because it's free and good!
- Some alternatives: Visual Studio Code, WebStorm.

If you decide to use Atom, install at least the following packages:

- nuclide
- linter
- linter-eslint
- language-babel
- language-postcss

## Good to know

- If you want to try production mode, an [example configuration file](docs/nginx.conf) for Nginx is included.

## Keywords

- React
- routing
  - React Router v4
  - alternatives (Redux-first routing)
- Application state management
  - Redux
  - Alternatives (MobX)
- Functional programming
  - Lodash
  - Ramda
- Immutable data
  - Immutable.js
- Component based styling
  - PostCSS and CSS modules
  - Styled Components
- Component development with designer-friendly methods
  - React Storybook
- Babel
- Webpack
- Flow & TypeScript
- REST & GraphQL
- Linting
- Testing
  - Jest

## Howto

The software is divided into two subfolders. `client` has the client side
code (main dish). `server` contains a simple Express app to act as
a backend for our training session.

Commands are always run in either of these folders. Not in the common
root folder.


### develop (client)

- `cd client`
- `yarn`
- `cp .env.example .env`
- `yarn run start`
  - open browser and go to http://localhost:8888

- `yarn run test`
- `yarn run flow`
- `yarn run lint`

### develop (server)

- `cd server`
- `yarn`
- `cp .env.example .env`
- `yarn run start`

### build (client)

Builds to `dist/` folder.

- `yarn run build`
