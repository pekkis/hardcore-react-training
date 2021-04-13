# Pekkis' React Training

## Introduction

Welcome to my two day React Workshop. It is very important
that you read and follow these instructions **before** the actual two training
days.

## Human Requirements

- You are a developer, devsigner or such.
- You have working professional knowledge on JavaScript, HTML and CSS.
  You don't have to be a guru, but this course really is not meant for
  beginners.

## Computer Requirements

- MacOS, Linux or Windows all work.
  - In Windows, it works at least in WSL. I use that myself when hobby coding.
    Native Windows? I have absolutely no clue.
  - If it doesn't work, just boot this up in some Linux virtual machine.
- The current version of Node.js (14.x), just to be sure. Might work on older
  or newer ones too, but no guarantees!
- The [Yarn package manager](https://yarnpkg.com). It will probably work with vanilla NPM
  just as well too but dunno. I've been using Yarn.
  - I have no idea whether Yarn 2.x works. I haven't migrated. If it doesn't, fall back to Yarn 1.x.
- An editor / IDE that supports all the good stuff.
  I use [VSCode](https://code.visualstudio.com/) myself.
  If you are not sure of this stuff, just get VSCode and you're sure to have
  feature parity with me.

## Installation

Start by forking / cloning this repository.

`training` is the default branch that contains the starting point for
our course. This is just for historical reasons, me messing up master at some point.

There are other branches too. They contain at least all the stuff
from most of the previous courses I've teached. Interesting stuff, at least if you're
hungry for nostalgia.

### Browser extensions

You should install these Chrome extensions, or similar ones for your browser of choice.

- [React dev tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Redux dev tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

### VSCode extensions

If you use VSCode, you should install at least the following extensions.

- ESLint (dbaeumer.vscode-eslint)
- Prettier - Code formatter (esbenp.prettier-vscode)
- EditorConfig for VS Code (editorconfig.editorconfig)
- Live Share Extension Pack (ms-vsliveshare.vsliveshare-pack)
- vscode-styled-components (jpoissonnier.vscode-styled-components)
- stylelint (stylelint.vscode-stylelint)

I also seem to have these potentially relevant ones, so if you want feature
parity do install them too.

- Visual Studio IntelliCode (visualstudioexptteam.vscodeintellicode)
- GitLens — Git supercharged (eamodio.gitlens)

Some extensions you might already have could conflict with these, so please
try to check that everything is a-ok. Also if you have good extensions that
I should use in addition / replacing one of these, do holler!

## Howto

The software is divided into two subfolders. `client` has the client side
code (our main dish). `server` just contains a simple Express app to act as
a backend for our training session.

Commands are always run in either of these folders, not in the common
root folder.

While preparing for the training session, you must follow the _development_ path for both server and client and assert that you get a working starting state.

## Development

### client

- `cd client`
- `yarn`
- `cp .env.example .env`
- `yarn run start`

Open browser and go to http://localhost:8888. You should see a simple welcoming
screen of some kind that suggests that you suckle on a duckling (or something
similar).

It could look something like [this screenshot](https://www.dropbox.com/s/tibrr0l22ebl5qn/Screenshot%202019-11-28%2010.29.02.png?dl=0).

### server

- `cd server`
- `yarn`
- `cp .env.example .env`
- `yarn run start`

After the server is running, open browser and go to http://localhost:8889/person and make sure you see a mighty JSON blob of random data.

A GraphQL backend might also be in a semi-working state: http://localhost:8889/graphql is it's endpoint. It might also not work. Nobody knows.

## Build

### client

The app builds to `dist/` (client code) folder.

- `yarn run build`

## Licensing

Use as you wish. Read the license from LICENSE.
