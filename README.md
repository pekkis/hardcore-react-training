# Hardcore React Training Broilerplate

## Introduction

Welcome, friend, to my two-day hardcore React Workshop.

This repository my own [broilerplate](https://github.com/pekkis/broilerplate)
to kickstart a React project with sane defaults, necessary tooling and reusable,
copy-paste-preventing stuff. It's exactly the same kit I build my own stuff on.

I recommend, though, to also check out the [create-react-app](https://github.com/facebookincubator/create-react-app) boilerplate
instead of my broilerplate. If it suits you, you might want to use it. Personally, I think it's inadequate, and do not agree with it's philosophy.
You basically always have to eject, and then you're on your own as here.

With Broilerplate, I aim to get all the advantages and none of the disadvantages.
Only future will tell whether this is sane.

[react-app-rewired](https://github.com/timarney/react-app-rewired) tries to
do the same. You might want to check it too.

## Licensing

Use as you wish, but still read the license from LICENSE.

## Branches

`training` is the default branch (don't ask) that contains the starting point for
our course. The `master` branch contains a fuller example application that might be
up to date or not, depending on stuff.

## Requirements

- MacOS and Linux are grade A citizens. Should work in Windows too, but I don't
  always test because I'm not a Windows man myself.
- If it doesn't work, just use a Unix virtual machine.
- The current version of Node.js (8+). Might work on older ones, but no guarantees!
- The [Yarn package manager](https://yarnpkg.com).
- A good editor / IDE that supports the good stuff. I use [Atom](https://atom.io/)
  myself because it's free and good!
  - Many of my colleagues use [VSCode](https://code.visualstudio.com/). They say it's even better.
  - Some alternatives: Nuclide, WebStorm, Eclipse, Sublime Text, whatever.
- Chrome browser. Or some other good browser.

### Browser extensions

Install these Chrome extensions, or similar ones for your browser of choice.

- [React dev tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Redux dev tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

### Atom packages

If you use Atom, you must install at least the following packages.

- linter
- linter-eslint
- language-babel
- language-postcss
- prettier-atom

### VSCode packages

If you use VSCode, you must install at least the following packages.

- eslint
- prettier code format

[Check this screenshot!](https://www.dropbox.com/s/mujeklatlr30ciy/Screenshot%202018-07-30%2013.39.07.png?dl=0)

## Good to know

If you want to try production mode, an [example configuration file](docs/nginx.conf) for Nginx is included. Or you can just deploy everything to CloudFront or similar very easily.

## Keywords and links

These are not all in use and can easily be changed to be something else.
Just buzzwords for students.

## Howto

The software is divided into two subfolders. `client` has the client side
code (our main dish). `server` contains a simple Express app to act as
a backend for our training session.

Commands are always run in either of these folders. Not in the common
root folder.

While preparing for the training session, you must follow the _development mode_ path
until you reach the situation in [this screenshot](https://www.dropbox.com/s/seccmd5cgzd2xuj/Screenshot%202018-07-30%2013.44.02.png?dl=0).

## Development mode

### client

- `cd client`
- `yarn`
- `cp .env.example .env`
- `yarn run start`
  - open browser and go to http://localhost:8888

### server

- `cd server`
- `yarn`
- `cp .env.example .env`
- `yarn run start`

## Build

### client

The app builds to `dist/` (client code) and `dist-server` (server side rendering) folder.

- `yarn run build`

### server side rendering

- `cd client`
- `yarn run build`
- `node dist-server/index.js`
