const defaultTheme = require("tailwindcss/defaultTheme");
const defaultColors = require("tailwindcss/colors");

const deprecatedColors = ["lightBlue", "warmGray", "trueGray", "coolGray", "blueGray"];

module.exports = (opts = {}) => {
  const options = { useTailwindColorOrder: true, ...opts };

  const transformColorObject = (colors, prefix, useIndexes = false) => {
    if (!colors) {
      return {};
    }
    return Object.entries(colors).reduce((acc, [key, value], index) => {
      if (deprecatedColors.includes(key)) {
        // skipping deprecated colors
        return acc;
      }
      if (typeof value === "string") {
        let propName = `--color-${prefix}${key}`;
        if (`${parseInt(key)}` === key && useIndexes) {
          propName = `--color-${prefix}${index}`;
        }
        acc[key] = `var(${propName}, ${value})`;
      }
      if (typeof value === "object") {
        acc[key] = transformColorObject(value, `${prefix}${key}-`, !options.useTailwindColorOrder);
      }
      return acc;
    }, {});
  };
  deprecatedColors.forEach((color) => {
    delete defaultColors[color];
  });
  const colors = transformColorObject(defaultColors, "", false);

  return {
    content: [],
    theme: {
      borderRadius: {
        none: `var(--radius-none, ${defaultTheme.borderRadius.none})`,
        px: `var(--radius-px, 1px)`,
        full: `var(--radius-full, 1e5px)`,
        DEFAULT: `var(--radius-default, ${defaultTheme.borderRadius.sm})`,
        sm: `var(--radius-1, ${defaultTheme.borderRadius.sm})`,
        md: `var(--radius-2, ${defaultTheme.borderRadius.md})`,
        lg: `var(--radius-3, ${defaultTheme.borderRadius.lg})`,
        xl: `var(--radius-4, ${defaultTheme.borderRadius.xl})`,
        "2xl": `var(--radius-5, 0px)`,
        "3xl": `var(--radius-6, 0px)`,
      },
      borderWidth: {
        none: `var(--border-0, ${defaultTheme.borderWidth[0]})`,
        px: "var(--border-px, 1px)",
        DEFAULT: "var(--border-default, 1px)",
        0: `var(--border-0, ${defaultTheme.borderWidth[0]})`,
        2: `var(--border-2, ${defaultTheme.borderWidth[2]})`,
        4: `var(--border-4, ${defaultTheme.borderWidth[4]})`,
        8: `var(--border-8, ${defaultTheme.borderWidth[8]})`,
      },
      boxShadow: {
        none: "var(--shadow-none, none)",
        inner: `var(--shadow-inner-1, ${defaultTheme.boxShadow.inner})`,
        DEFAULT: `var(--shadow-default, ${defaultTheme.boxShadow.DEFAULT})`,
        sm: `var(--shadow-1, ${defaultTheme.boxShadow.sm})`,
        md: `var(--shadow-2, ${defaultTheme.boxShadow.md})`,
        lg: `var(--shadow-3, ${defaultTheme.boxShadow.lg})`,
        xl: `var(--shadow-4, ${defaultTheme.boxShadow.xl})`,
        "2xl": `var(--shadow-5, ${defaultTheme.boxShadow["2xl"]})`,
      },
      dropShadow: {
        none: `var(--drop-shadow-none, ${defaultTheme.dropShadow.none})`,
        DEFAULT: `var(--drop-shadow-default, ${defaultTheme.dropShadow.DEFAULT})`,
        sm: `var(--drop-shadow-1, ${defaultTheme.dropShadow.sm})`,
        md: `var(--drop-shadow-2, ${defaultTheme.dropShadow.md})`,
        lg: `var(--drop-shadow-3, ${defaultTheme.dropShadow.lg})`,
        xl: `var(--drop-shadow-4, ${defaultTheme.dropShadow.xl})`,
        "2xl": `var(--drop-shadow-5, ${defaultTheme.dropShadow["2xl"]})`,
      },
      fontFamily: {
        sans: `var(--font-sans, ${defaultTheme.fontFamily.sans})`,
        serif: `var(--font-serif, ${defaultTheme.fontFamily.serif})`,
        mono: `var(--font-mono, ${defaultTheme.fontFamily.mono})`,
        display: `var(--font-display, ${defaultTheme.fontFamily.display ?? ""})`,
      },
      fontSize: {
        xs: [
          `var(--font-size-1, ${defaultTheme.fontSize.xs[0]})`,
          {
            lineHeight: `var(--line-height-1, ${defaultTheme.lineHeight.normal})`,
          },
        ],
        sm: [
          `var(--font-size-2, ${defaultTheme.fontSize.sm[0]})`,
          {
            lineHeight: `var(--line-height-2, ${defaultTheme.lineHeight.normal})`,
          },
        ],
        base: [
          `var(--font-size-3, ${defaultTheme.fontSize.base[0]})`,
          {
            lineHeight: `var(--line-height-3, ${defaultTheme.lineHeight.normal})`,
          },
        ],
        lg: [
          `var(--font-size-4, ${defaultTheme.fontSize.lg[0]})`,
          {
            lineHeight: `var(--line-height-4, ${defaultTheme.lineHeight.normal})`,
          },
        ],
        xl: [
          `var(--font-size-5, ${defaultTheme.fontSize.xl[0]})`,
          {
            lineHeight: `var(--line-height-5, ${defaultTheme.lineHeight.normal})`,
          },
        ],
        "2xl": [
          `var(--font-size-6, ${defaultTheme.fontSize["2xl"][0]})`,
          {
            lineHeight: `var(--line-height-6, ${defaultTheme.lineHeight.normal})`,
          },
        ],
        "3xl": [
          `var(--font-size-7, ${defaultTheme.fontSize["3xl"][0]})`,
          {
            lineHeight: `var(--line-height-7, ${defaultTheme.lineHeight.normal})`,
          },
        ],
        "4xl": [
          `var(--font-size-8, ${defaultTheme.fontSize["4xl"][0]})`,
          {
            lineHeight: `var(--line-height-8, ${defaultTheme.lineHeight.normal})`,
          },
        ],
        "5xl": [
          `var(--font-size-9, ${defaultTheme.fontSize["5xl"][0]})`,
          {
            lineHeight: `var(--line-height-9, ${defaultTheme.lineHeight.normal})`,
          },
        ],
        "6xl": [
          `var(--font-size-10, ${defaultTheme.fontSize["6xl"][0]})`,
          {
            lineHeight: `var(--line-height-10, ${defaultTheme.lineHeight.normal})`,
          },
        ],
        "7xl": [
          `var(--font-size-11, ${defaultTheme.fontSize["7xl"][0]})`,
          {
            lineHeight: `var(--line-height-11, ${defaultTheme.lineHeight.normal})`,
          },
        ],
        "8xl": [
          `var(--font-size-12, ${defaultTheme.fontSize["8xl"][0]})`,
          {
            lineHeight: `var(--line-height-12, ${defaultTheme.lineHeight.normal})`,
          },
        ],
        "9xl": [
          `var(--font-size-13, ${defaultTheme.fontSize["9xl"][0]})`,
          {
            lineHeight: `var(--line-height-13, ${defaultTheme.lineHeight.normal})`,
          },
        ],
        "10xl": [
          `var(--font-size-14, ${defaultTheme.fontSize["9xl"][0]})`,
          {
            lineHeight: `var(--line-height-14, ${defaultTheme.lineHeight.normal})`,
          },
        ],
        "11xl": [
          `var(--font-size-15, ${defaultTheme.fontSize["9xl"][0]})`,
          {
            lineHeight: `var(--line-height-15, ${defaultTheme.lineHeight.normal})`,
          },
        ],
        "12xl": [
          `var(--font-size-16, ${defaultTheme.fontSize["9xl"][0]})`,
          {
            lineHeight: `var(--line-height-16, ${defaultTheme.lineHeight.normal})`,
          },
        ],
        "13xl": [
          `var(--font-size-17, ${defaultTheme.fontSize["9xl"][0]})`,
          {
            lineHeight: `var(--line-height-17, ${defaultTheme.lineHeight.normal})`,
          },
        ],

        short: {
          xs: [
            `var(--font-size-short-1, ${defaultTheme.fontSize.xs[0]})`,
            {
              lineHeight: `var(--line-height-short-1, ${defaultTheme.lineHeight.normal})`,
            },
          ],
          sm: [
            `var(--font-size-short-2, ${defaultTheme.fontSize.sm[0]})`,
            {
              lineHeight: `var(--line-height-short-2, ${defaultTheme.lineHeight.normal})`,
            },
          ],
          base: [
            `var(--font-size-short-3, ${defaultTheme.fontSize.base[0]})`,
            {
              lineHeight: `var(--line-height-short-3, ${defaultTheme.lineHeight.normal})`,
            },
          ],
          lg: [
            `var(--font-size-short-4, ${defaultTheme.fontSize.lg[0]})`,
            {
              lineHeight: `var(--line-height-short-4, ${defaultTheme.lineHeight.normal})`,
            },
          ],
          xl: [
            `var(--font-size-short-5, ${defaultTheme.fontSize.xl[0]})`,
            {
              lineHeight: `var(--line-height-short-5, ${defaultTheme.lineHeight.normal})`,
            },
          ],
          "2xl": [
            `var(--font-size-short-6, ${defaultTheme.fontSize["2xl"][0]})`,
            {
              lineHeight: `var(--line-height-short-6, ${defaultTheme.lineHeight.normal})`,
            },
          ],
          "3xl": [
            `var(--font-size-short-7, ${defaultTheme.fontSize["3xl"][0]})`,
            {
              lineHeight: `var(--line-height-short-7, ${defaultTheme.lineHeight.normal})`,
            },
          ],
          "4xl": [
            `var(--font-size-short-8, ${defaultTheme.fontSize["4xl"][0]})`,
            {
              lineHeight: `var(--line-height-short-8, ${defaultTheme.lineHeight.normal})`,
            },
          ],
          "5xl": [
            `var(--font-size-short-9, ${defaultTheme.fontSize["5xl"][0]})`,
            {
              lineHeight: `var(--line-height-short-9, ${defaultTheme.lineHeight.normal})`,
            },
          ],
          "6xl": [
            `var(--font-size-short-10, ${defaultTheme.fontSize["6xl"][0]})`,
            {
              lineHeight: `var(--line-height-short-10, ${defaultTheme.lineHeight.normal})`,
            },
          ],
          "7xl": [
            `var(--font-size-short-11, ${defaultTheme.fontSize["7xl"][0]})`,
            {
              lineHeight: `var(--line-height-short-11, ${defaultTheme.lineHeight.normal})`,
            },
          ],
          "8xl": [
            `var(--font-size-short-12, ${defaultTheme.fontSize["8xl"][0]})`,
            {
              lineHeight: `var(--line-height-short-12, ${defaultTheme.lineHeight.normal})`,
            },
          ],
          "9xl": [
            `var(--font-size-short-13, ${defaultTheme.fontSize["9xl"][0]})`,
            {
              lineHeight: `var(--line-height-short-13, ${defaultTheme.lineHeight.normal})`,
            },
          ],
          "10xl": [
            `var(--font-size-short-14, ${defaultTheme.fontSize["9xl"][0]})`,
            {
              lineHeight: `var(--line-height-short-14, ${defaultTheme.lineHeight.normal})`,
            },
          ],
          "11xl": [
            `var(--font-size-short-15, ${defaultTheme.fontSize["9xl"][0]})`,
            {
              lineHeight: `var(--line-height-short-15, ${defaultTheme.lineHeight.normal})`,
            },
          ],
          "12xl": [
            `var(--font-size-short-16, ${defaultTheme.fontSize["9xl"][0]})`,
            {
              lineHeight: `var(--line-height-short-16, ${defaultTheme.lineHeight.normal})`,
            },
          ],
          "13xl": [
            `var(--font-size-short-17, ${defaultTheme.fontSize["9xl"][0]})`,
            {
              lineHeight: `var(--line-height-short-17, ${defaultTheme.lineHeight.normal})`,
            },
          ],
        },

        fluid: {
          xs: `var(--font-size-fluid-1, clamp(.75rem, 1.5vw, 1rem))`,
          sm: `var(--font-size-fluid-2, clamp(1rem, 2vw, 1.5rem))`,
          md: `var(--font-size-fluid-3, clamp(1.5rem, 3vw, 2.5rem))`,
          lg: `var(--font-size-fluid-4, clamp(2rem, 4vw, 3.5rem))`,
        },
      },
      letterSpacing: {
        tighter: `var(--letter-spacing-1, ${defaultTheme.letterSpacing.tighter})`,
        tight: `var(--letter-spacing-2, ${defaultTheme.letterSpacing.tight})`,
        normal: `var(--letter-spacing-3, ${defaultTheme.letterSpacing.normal})`,
        wide: `var(--letter-spacing-4, ${defaultTheme.letterSpacing.wide})`,
        wider: `var(--letter-spacing-5, ${defaultTheme.letterSpacing.wider})`,
        widest: `var(--letter-spacing-6, ${defaultTheme.letterSpacing.widest})`,
      },
      lineHeight: {
        none: `var(--line-height-none, ${defaultTheme.lineHeight.none})`, // === '1'
        inherit: "inherit",

        tight: `var(--line-height-tight, ${defaultTheme.lineHeight.tight})`,
        snug: `var(--line-height-snug, ${defaultTheme.lineHeight.snug})`,
        normal: `var(--line-height-normal, ${defaultTheme.lineHeight.normal})`,
        relaxed: `var(--line-height-relaxed, ${defaultTheme.lineHeight.relaxed})`,
        loose: `var(--line-height-loose, ${defaultTheme.lineHeight.loose})`,

        // numeric line-heights that match defaultConfig
        // it would be better using font size based names like "sm", "md", "lg", etc.
        // but since tailwindcss uses numeric values for line-heights, we have to use them as well
        3: `var(--line-height-1, ${defaultTheme.lineHeight[3]})`,
        4: `var(--line-height-2, ${defaultTheme.lineHeight[4]})`,
        5: `var(--line-height-3, ${defaultTheme.lineHeight[5]})`,
        6: `var(--line-height-4, ${defaultTheme.lineHeight[6]})`,
        7: `var(--line-height-5, ${defaultTheme.lineHeight[7]})`,
        8: `var(--line-height-6, ${defaultTheme.lineHeight[8]})`,
        9: `var(--line-height-7, ${defaultTheme.lineHeight[9]})`,
        10: `var(--line-height-8, ${defaultTheme.lineHeight[10]})`,

        // line-heights that match font-sizes
        11: `var(--line-height-9, ${defaultTheme.lineHeight.normal})`,
        12: `var(--line-height-10, ${defaultTheme.lineHeight.normal})`,
        13: `var(--line-height-11, ${defaultTheme.lineHeight.normal})`,
        14: `var(--line-height-12, ${defaultTheme.lineHeight.normal})`,
        15: `var(--line-height-13, ${defaultTheme.lineHeight.normal})`,
        16: `var(--line-height-14, ${defaultTheme.lineHeight.normal})`,
        17: `var(--line-height-15, ${defaultTheme.lineHeight.normal})`,
        18: `var(--line-height-16, ${defaultTheme.lineHeight.normal})`,
        19: `var(--line-height-17, ${defaultTheme.lineHeight.normal})`,

        // usually line-height is different for different cases, like headings, paragraphs, etc.
        // by default all values that were defined earlier are supposed to be used for paragraphs
        // (long text blocks), but it might be not sufficient. In such a case you can use the
        // following values for short text blocks:
        // (we use the same notation here as for regular line-heights)
        short: {
          3: `var(--line-height-short-1, ${defaultTheme.lineHeight[3]})`,
          4: `var(--line-height-short-2, ${defaultTheme.lineHeight[4]})`,
          5: `var(--line-height-short-3, ${defaultTheme.lineHeight[5]})`,
          6: `var(--line-height-short-4, ${defaultTheme.lineHeight[6]})`,
          7: `var(--line-height-short-5, ${defaultTheme.lineHeight[7]})`,
          8: `var(--line-height-short-6, ${defaultTheme.lineHeight[8]})`,
          9: `var(--line-height-short-7, ${defaultTheme.lineHeight[9]})`,
          10: `var(--line-height-short-8, ${defaultTheme.lineHeight[10]})`,

          // line-heights that match font-sizes
          11: `var(--line-height-short-9, ${defaultTheme.lineHeight.normal})`,
          12: `var(--line-height-short-10, ${defaultTheme.lineHeight.normal})`,
          13: `var(--line-height-short-11, ${defaultTheme.lineHeight.normal})`,
          14: `var(--line-height-short-12, ${defaultTheme.lineHeight.normal})`,
          15: `var(--line-height-short-13, ${defaultTheme.lineHeight.normal})`,
          16: `var(--line-height-short-14, ${defaultTheme.lineHeight.normal})`,
          17: `var(--line-height-short-15, ${defaultTheme.lineHeight.normal})`,
          18: `var(--line-height-short-16, ${defaultTheme.lineHeight.normal})`,
          19: `var(--line-height-short-17, ${defaultTheme.lineHeight.normal})`,
        },
      },
      extend: {
        colors,
      }
    },
  };
};
