# @zemd/tailwind-with-props

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

## Mapping reference

| Tailwindcss class | Prop ranges | Named props |
|-------------------|----------|----------------|
| font-size         | `--font-size-{1-17}`, <br/> `--font-size-fluid-{1-4}`, <br/> `--font-size-short-{1-17}` | |
| colors            | `--color-{color}-{50-950}` | all top level colors, like `--color-white`, `--color-black`, `--color-primary` etc. |
| border-radius     | `--radius-{1-6}` | `--radius-none`, <br/> `--radius-px`, <br/> `--radius-full`, <br/> `--radius-default` |
| border width | `--border-{0,2,4,8}` | `--border-px`, <br/> `--border-default` | 
| box-shadow | `--shadow-{1-5}`, <br/> `--shadow-inner-1` | `--shadow-default`  | 
| drop-shadow | `--drop-shadow-{1-5}` | `--drop-shadow-none`, <br/> `--drop-shadow-default` |
| font-family |  | `--font-sans`, <br/> `--font-serif`, <br/> `--font-mono`, <br/> `--font-display` |
| letter-spacing | `--letter-spacing-{1-6}` | |
| line-height | `--line-height-{1-17}`, <br/> `--line-height-short-{1-17}` | `--line-height-none`, <br/> `--line-height-tight`, <br/> `--line-height-snug`, <br/> `--line-height-normal`, <br/> `--line-height-relaxed`, <br/> `--line-height-loose` |

## Configuring color palette

In some cases, you might want to configure how you want to name your colors. For example, 
instead of using `--color-red-500` you might want to use `--color-red-6`.
In such a case you can use factory method for the preset in your `tailwind.config.js`:

```js
module.exports = {
  presets: [
    require('@zemd/tailwind-with-props/factory')({ useTailwindColorOrder: false })
  ],
};
```

## License

All the code in the repository released under the Apache 2.0 license

## Donate

[![](https://img.shields.io/badge/patreon-donate-yellow.svg)](https://www.patreon.com/red_rabbit)
[![](https://img.shields.io/static/v1?label=UNITED24&message=support%20Ukraine&color=blue)](https://u24.gov.ua/)