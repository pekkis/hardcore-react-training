# Hardcore React Training

Welcome, friend, to my two-day hardcore React Workshop. You'll grow some real bones instead of the Backbone.js (pun intended) your rib cage is attached now.

This repo also acts as a broilerplate to kickstart a React project with sane defaults, necessary tooling and
some reusable, copy-paste-preventing boilerplate stuff. It's exactly the same stuff I build my stuff on.

The `master` branch contains the full broilerplated example application. `training` is empty.

Use as you wish, but still read the license from LICENSE.

## Requirements

- MacOS or Linux (though see the "In case of problems" section). Might work in Windows too, but I don't know. Please report if it doesn't
- For training, you can always download and use the ready-to-use [the prebuilt virtual machine](http://dr-kobros.com/lib/hardcore-react-training-vm.zip). It's ready for action.
- A new Node.js. 6.x nowadays.
- The [Yarn package manager](https://yarnpkg.com) (or NPM version 3.x)

## Training requirements

- A good editor / IDE that supports Flow real-time. I use [Nuclide](https://nuclide.io/) myself because I think it's great!

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
  -What about TypeScript
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

Until yarn run works correctly, we default to npm.

- `yarn run start`
  - open browser and go to http://localhost:8888
- `yarn run storybook`
- `yarn run test`
- `yarn run flow`
- `yarn run lint`

### build

Builds to `dist/` folder.

- `yarn run build`

## In case of problems

- Saving files does not automatically trigger compiling files and you're running Linux? Configure `fs.inotify.max_user_watches=524288` with sysctl. See https://webpack.github.io/docs/troubleshooting.html#not-enough-watchers. This seems to be a problem at least with default settings on Fedora 25.
