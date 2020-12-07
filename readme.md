# Doggie Dictionary

Select a breed of dog to see a photo. Click a button to see another photo of your chosen dog breed.

App created as an exercise on async/await in tandem with fetching data via and API.

## Installation

This is a simple app to setup. Run these two commands:

```sh
# Install dependencies
$ npm install
$ npm install http-server -g
```

## Usage

Depending on your development preferences, there are two npm scripts to choose from. The first runs webpack, which watches for files changing in `src/`, and starts a local server.

```sh
$ npm start
```

The second does the same as the first, but also _live reloads the page_ anytime you make changes to anything in the `/src` directory.

```sh
$ npm run dev:liveReload
```

No matter which you choose, both will compile everything in `src/` to `dist/`.

### Deployment

To prep your app for deployment, run:

```sh
$ npm run build-production
```

This will minify your `js` and `css`, name the files accordingly, and put them in `dist/`.

## Website

View it [here](https://tynandebold.com/doggie-dictionary/).
