# Hardcore React Training Broilerplate

## Introduction

Welcome, friend, to my two-day hardcore React Workshop v1. You'll grow some real bones instead of the backbone.js (pun intended, even though the joke is getting old)
your rib cage is attached to now.

This repo also currently acts as a starter project for my [broilerplate](https://github.com/pekkis/broilerplate)
to kickstart a React project with sane defaults, necessary tooling and reusable, copy-paste-preventing stuff. It's exactly the same kit I build my own stuff on.

I recommend, though, to check out the [create-react-app](https://github.com/facebookincubator/create-react-app) boilerplate
instead of my broilerplate. If it suits you, you might want to use it. Personally, I think it's inadequate. and do not agree with it's philosophy.
You always have to eject, and then you're on your own as here.

With Broilerplate, I aim to get all the advantages and none of the disadvantages.
Only future will tell whether this is sane.

## Branches

The `master` branch contains a fuller example application. `training` is empty.

Use as you wish, but still read the license from LICENSE.

## Requirements

- MacOS and Linux are grade A citizens. Should work in Windows too, but I don't
  always test because I'm not a Windows man.
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

If you want to try production mode, an [example configuration file](docs/nginx.conf) for Nginx is included. Or you can just deploy everything to CloudFront very easily.

## Keywords and links

These are not all in use and can easily be changed to be something else.
Just buzzwords for students.

- React (uses)
- Server Side rendering
  - Zero-configuration idiot-proof support.
  - `src/index.js`
  - `src/server.js` (your own code goes here!)
- Routing
  - React Router (uses)
  - Redux First router (alternative)
- State management
  - Redux (uses)
  - MobX (alternative)
- Functional programming
  - Immutable.js (uses)
  - Lodash (alternative)
  - Ramda (alternative)
- Immutable data
  - Immutable.js (uses)
- Styling
  - PostCSS and CSS modules (uses)
  - Styled Components (uses)
- Component development with designer-friendly methods
  - Storybook (alternative)
- Babel
  - preset-env (uses)
- Webpack
- Flow & TypeScript (mentioned)
- REST
- GraphQL
- Linting
  - Prettier
  - eslint
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

### develop (server)

- `cd server`
- `yarn`
- `cp .env.example .env`
- `yarn run start`

### build (client)

Builds to `dist/` (client code) and `dist-server` (server side rendering) folder.

- `yarn run build`

### serve (server side rendering)

- `cd client`
- `yarn run build`
- `node dist-server/index.js`
