# Hardcore React Training Broilerplate

## Introduction

Welcome, friend, to my two-day hardcore React Workshop. You'll grow some real bones instead of the backbone.js (pun intended) your rib cage is attached to now.

This repo also acts as a starter project for my [broilerplate](https://github.com/pekkis/broilerplate)
to kickstart a React project with sane defaults, necessary tooling and reusable, copy-paste-preventing boilerplate stuff. It's exactly the same kit I build my own stuff on.

I recommend to check out the [create-react-app](https://github.com/facebookincubator/create-react-app) boilerplate
instead of my broilerplate. If it suits you, you might want to use it. Personally, I think it's inadequate.
You always have to eject, and then you're on your own as here. With Broilerplate, this is not the case.

## Branches

The `master` branch contains a fuller example application. `training` is empty.

Use as you wish, but still read the license from LICENSE.

## Requirements

- MacOS and Linux are grade A citizens. Should work in Windows too, but I don't always
  test because I'm not a Windows man.
- If it doesn't work, just use a Unix virtual machine.
- The current version of Node.js (8.x). Might work on older ones, but no guarantees!
- The [Yarn package manager](https://yarnpkg.com).

## Training requirements

- A good editor / IDE that supports our stuff in real-time. I use [Atom](https://atom.io/) (Atom)
  myself because it's free and good!
- Some alternatives: VSCode, Nuclide, WebStorm.

If you decide to use Atom, install at least the following packages:

- linter
- linter-eslint
- language-babel
- language-postcss
- prettier-atom

## Good to know

- If you want to try production mode, an [example configuration file](docs/nginx.conf) for Nginx is included.

## Keywords

- React
- routing
  - React Router
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

Builds to `dist/` (client code) and `dist-server` (server SSR code) folder.

- `yarn run build`

### serve (node)

- `cd client`
- `yarn run build`
- `node dist-server/index.js`
