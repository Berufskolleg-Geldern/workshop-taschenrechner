# Taschenrechner Provider Service

A CLI app that extracts button data from the calculator App.js and returns it as JSON.

## Installation

1. Navigate to the cli-app directory.
2. Run `npm install -g .` to install globally.

## Usage

Run via npx:

```
npx taschenrechner-providerserv
```

The app will prompt for your name, then extract and display the button types, texts, and press handlers from `../calculator/App.js` as JSON.

## Local Testing

Run directly with Node.js:

```
node index.js
```