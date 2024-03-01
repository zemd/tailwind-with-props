# @zemd/tailwind-with-props

[![npm](https://img.shields.io/npm/v/@zemd/tailwind-with-props?color=0000ff&label=npm&labelColor=000)](https://npmjs.com/package/@zemd/tailwind-with-props)

This is a simple Tailwindcss preset that maps theme options with css props. This allows you to 
configure theme from within your `global.css` file.

## Usage

```css
@layer base {
  :root {
    --font-size-xs: 1rem; /* is used for `text-xs` class */
    --color-red-500: #ff0000; /* is used for `*-red-500` classes */
  }
}
```

```js
// your tailwind.config.js

module.exports = {
  presets: [
    require('@zemd/tailwind-with-props')
  ],
};

```

## Installation

```sh
bun add @zemd/tailwind-with-props --dev
npm install @zemd/tailwind-with-props --save-dev
pnpm add @zemd/tailwind-with-props --dev
```

## License

All the code in the repository released under the Apache 2.0 license

## Donate

[![](https://img.shields.io/badge/patreon-donate-yellow.svg)](https://www.patreon.com/red_rabbit)
[![](https://img.shields.io/static/v1?label=UNITED24&message=support%20Ukraine&color=blue)](https://u24.gov.ua/)
