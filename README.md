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

`main` is the default branch that contains the starting point for
our course. This is just for historical reasons, me messing up ``master` at some point.

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

### Develop

- `yarn`
- `cp .env.example .env`
- `yarn run start`

Open browser and go to http://localhost:8888. You should see a beautiful welcoming
screen that contains a duckling and suggests that some people like suckling on ducklings.

There should be some helpful instructions / assertions on the screen. So go thru it carefully. If you're happy with what you see, you're done.

### Build

- `yarn run build`

Look at the `dist/`

## Licensing

Use as you wish. Read the license from LICENSE.
