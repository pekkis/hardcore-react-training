# Hardcore React Training

Welcome, friend, to my two-day hardcore React Workshop. You'll grow some real bones instead of the Backbone.js (pun intended) your rib cage is attached now.

This repo also acts as a broilerplate to kickstart a React project with sane defaults, necessary tooling and
some reusable, copy-paste-preventing boilerplate stuff. It's exactly the same stuff I build my stuff on.

The `master` branch contains the full broilerplated example application. `training` is empty.

Use as you wish, but still read the license from LICENSE.

## Requirements

- MacOS and Linux are grade A citizens. Should work in Windows too, but I don't always
  test because I'm not a Windows man.
- For training, you can always download and use the ready-to-use [the prebuilt virtual machine](http://dr-kobros.com/lib/hardcore-react-training-vm.zip). It's ready for action.
- An LTS or current version of Node.js (6.x or 7.x)
- The [Yarn package manager](https://yarnpkg.com)

## Training requirements

- A good editor / IDE that supports our stuff in real-time. I use [Nuclide](https://nuclide.io/) (Atom) myself because it's free and good!
- Some alternatives: Visual Studio Code, WebStorm.

If you decide to use Atom, install at least the following packages:

- nuclide
- linter
- linter-eslint
- language-babel
- language-postcss

## Good to know

- If you want to run production mode, an [example configuration file](docs/nginx.conf) for Nginx is included.

## Keywords

- React
  - React Router
- Application state management
  - Redux
- Immutable data
  - Immutable.js, Ramda, Lodash
- Component based styling
  - PostCSS and CSS modules vs pure JavaScript styling
- Component development with designer-friendly methods
  - React Storybook
- Babel
  - Preset to React apps
- Webpack
  - To hot reload or not?
- Flow
  -What about TypeScript?
- Linting
- Testing
  - Mocha, Chai and Enzyme

## Howto

### Initialize

- install yarn
- `yarn`

#### Common steps

- `cp config.client.example.js config.client.js`
- `cp config.server.example.js config.server.js`

### develop

- `yarn run start`
  - open browser and go to http://localhost:8888
- `yarn run storybook`
- `yarn run test`
- `yarn run flow`
- `yarn run lint`

### build

Builds to `dist/` folder.

- `yarn run build`
