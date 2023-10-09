# Pekkis' Hardcore React Training

## Introduction

Welcome to my two day React Workshop. It is very important
that you read and follow these instructions **carefully** and **before** the actual two training days begin.

## Human Requirements

- You are a developer, devsigner or such.
- You have working professional knowledge on JavaScript, HTML and CSS.
  You don't have to be a guru, but the course really is not meant for beginners.

## Computer Requirements

- MacOS, Linux or Windows all work.
  - In Windows, this works in **WSL 2**. I often use that myself when hobby coding.
  - If it doesn't work, just boot it up in some Linux virtual machine or docker or whatnot.
- Current stable version of Node.js (20.x, 18.x) and a "normal" default version of `npm` that comes bundled with the Node version. This might work on older or newer Node versions too, but who knows! Use `nvm` (for example) to manage multiple Node versions.
- An editor / IDE that supports all the good stuff. I use [VSCode](https://code.visualstudio.com/) myself, and because of the LiveShare code sharing environment, you really probably should use it too during this training.

## Installation

Start by forking / cloning this repository.

`main` is the default branch that contains the starting point for our course.

There are lots of other branches too. These contain the code I've done
in basically all of the previous courses I've teached and while preparing the material. Interesting stuff, at least if you're
hungry for nostalgia and see how the scene has changed!

### Browser extensions

You should install these Chrome extensions, or similar ones for your browser of choice.

- [React dev tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

### VSCode extensions

You should install at least the following extensions.

- ESLint (dbaeumer.vscode-eslint)
- Prettier - Code formatter (esbenp.prettier-vscode)
- EditorConfig for VS Code (editorconfig.editorconfig)
- Live Share (ms-vsliveshare.vsliveshare)
- vscode-styled-components (styled-components.vscode-styled-components)
- stylelint (stylelint.vscode-stylelint)
- PostCSS language support (csstools.postcss)

I also seem to have these maybe relevant ones, so if you want feature
parity with me2 you should install them too.

- Visual Studio IntelliCode (visualstudioexptteam.vscodeintellicode)
- GitLens — Git supercharged (eamodio.gitlens)

Some extensions you might already have could conflict with these, so please
try to check that everything is a-ok. Also if you have good extensions that
I should use in addition / replacing one of these, please holler!

## How to

### Develop

- `npm i -g pnpm` (just once to install pnpm if you don't still have it)

- `pnpm i`
- `cp .env.example .env.local`
- edit `.env.local`. Invent **NEXT_PUBLIC_APPID** to be a string that you'd think would be unique for yourself. It's an unique id for your pre-built backend hosted in Firebase.
- `pnpm run dev`

Open browser and go to http://localhost:3000 (if that is reserved for some reason, you might get another port but the terminal should tell you that).

You should see a "beautiful" welcoming screen that contains a duckling and might suggest that some people like suckling on ducklings.

There should be more instructions / assertions on the screen. Please read them carefully. If you're happy with what you see, you're done.

### Build

- `pnpm run build`

Goes to `.next/` folder.

## Licensing

Use as you wish. Read the license from LICENSE.
