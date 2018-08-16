# Hardcore React Training

## Introduction

Welcome to my two-day hardcore React Workshop. It is very important
that you read and follow these instructions before the actual two training days.

## Installation

Start by forking / cloning this repository.

If you don't know how to use git, you should spend an hour to [learn the basics](https://guides.github.com/introduction/git-handbook/)!

If you really don't want to use / learn git, just download the repo.

`training` is the default branch that contains the starting point for
our course. The `master` branch contains a fuller example application that might be
up to date or not, depending on the phases of the moon and the planets.

There are other branches too. They contain all the stuff from all the previous trainings. Interesting stuff, at least if you're me!

## Human Requirements

- You are a developer, devsigner or such.
- You have working professional knowledge on JavaScript, HTML and CSS. You don't have to be a guru, but the course is not suitable for beginners.

## Computer Requirements

- MacOS and Linux are grade A citizens. Should work in Windows too, but I don't
  always test because I'm not a Windows man myself.
- If it doesn't work, just use a Unix virtual machine.
- The current version of node.js (8 and 10 should both work). Might work on older / newer / other ones, but no guarantees!
- The [Yarn package manager](https://yarnpkg.com).
- An editor / IDE that supports the good stuff. I use [VSCode](https://code.visualstudio.com/)
  myself nowadays, and it's really good. [Atom](https://atom.io/) is OK too.
  - Some alternatives: Nuclide, WebStorm, Eclipse, Sublime Text, whatever. Just make sure you get all the syntax and code helps etc.
- Chrome browser. Or some other good dev browser.

### Browser extensions

Install these Chrome extensions, or similar ones for your browser of choice.

- [React dev tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Redux dev tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

### VSCode packages

If you use VSCode, you must install at least the following extensions.

- ESLint
- Prettier - Code formatter
- EditorConfig for VS Code
- PostCSS syntax
- vscode-styled-components

[Check this screenshot!](https://www.dropbox.com/s/mujeklatlr30ciy/Screenshot%202018-07-30%2013.39.07.png?dl=0)

### Atom packages

If you use Atom, you must install at least the following packages.

- linter
- linter-eslint
- language-babel
- language-postcss
- prettier-atom

## Howto

The software is divided into two subfolders. `client` has the client side
code (our main dish). `server` contains a simple Express app to act as
a backend for our training session.

Commands are always run in either of these folders. Not in the common
root folder.

While preparing for the training session, you must follow the _development mode_ path
until you reach the situation in [this screenshot](https://www.dropbox.com/s/np9dsnil0p7jny7/Screenshot%202018-08-16%2014.07.12.png?dl=0).

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

## Food for thought

This repository uses my own [broilerplate](https://github.com/pekkis/broilerplate)
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

Use as you wish. Read the license from LICENSE.
