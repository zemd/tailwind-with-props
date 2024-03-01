const defaultConfig = require("tailwindcss/defaultConfig");

const transformColorObject = (colors, prefix = "") => {
  return Object.entries(colors).reduce((acc, [key, value]) => {
    if (typeof value === "string") {
      const propName = `--color-${prefix ? `${prefix}-` : ""}${key}`;
      acc[key] = `var(${propName}, ${value})`;
    }
    if (typeof value === "object") {
      return transformColorObject(value, `${prefix}${key}-`);
    }
  }, {});
};

const colors = transformColorObject(defaultConfig.colors);

module.exports = {
  content: [],
  theme: {
    borderRadius: {
      none: `var(--radius-none, ${defaultConfig.borderRadius.none})`,
      px: `var(--radius-px, 1px)`,
      full: `var(--radius-full, 1e5px)`,
      DEFAULT: `var(--radius-default, ${defaultConfig.borderRadius.sm})`,
      sm: `var(--radius-1, ${defaultConfig.borderRadius.sm})`,
      md: `var(--radius-2, ${defaultConfig.borderRadius.md})`,
      lg: `var(--radius-3, ${defaultConfig.borderRadius.lg})`,
      xl: `var(--radius-4, ${defaultConfig.borderRadius.xl})`,
      "2xl": `var(--radius-5, 0px)`,
      "3xl": `var(--radius-6, 0px)`,
    },
    borderWidth: {
      none: `var(--border-0, ${defaultConfig.borderWidth[0]})`,
      px: "var(--border-px, 1px)",
      DEFAULT: "var(--border-default, 1px)",
      0: `var(--border-0, ${defaultConfig.borderWidth[0]})`,
      2: `var(--border-2, ${defaultConfig.borderWidth[2]})`,
      4: `var(--border-4, ${defaultConfig.borderWidth[4]})`,
      8: `var(--border-8, ${defaultConfig.borderWidth[8]})`,
    },
    boxShadow: {
      none: "none",
      inner: `var(--shadow-inner-1, ${defaultConfig.boxShadow.inner})`,
      DEFAULT: `var(--shadow-default, ${defaultConfig.boxShadow.DEFAULT})`,
      sm: `var(--shadow-1, ${defaultConfig.boxShadow.sm})`,
      md: `var(--shadow-2, ${defaultConfig.boxShadow.md})`,
      lg: `var(--shadow-3, ${defaultConfig.boxShadow.lg})`,
      xl: `var(--shadow-4, ${defaultConfig.boxShadow.xl})`,
      "2xl": `var(--shadow-5, ${defaultConfig.boxShadow["2xl"]})`,
    },
    dropShadow: {
      none: `var(--drop-shadow-none, ${defaultConfig.dropShadow.none})`,
      DEFAULT: `var(--drop-shadow-default, ${defaultConfig.dropShadow.DEFAULT})`,
      sm: `var(--drop-shadow-1, ${defaultConfig.dropShadow.sm})`,
      md: `var(--drop-shadow-2, ${defaultConfig.dropShadow.md})`,
      lg: `var(--drop-shadow-3, ${defaultConfig.dropShadow.lg})`,
      xl: `var(--drop-shadow-4, ${defaultConfig.dropShadow.xl})`,
      "2xl": `var(--drop-shadow-5, ${defaultConfig.dropShadow["2xl"]})`,
    },
    fontFamily: {
      sans: `var(--font-sans, ${defaultConfig.fontFamily.sans})`,
      serif: `var(--font-serif, ${defaultConfig.fontFamily.serif})`,
      mono: `var(--font-mono, ${defaultConfig.fontFamily.mono})`,
      display: `var(--font-display, ${defaultConfig.fontFamily.display ?? ""})`,
    },
    fontSize: {
      xs: [
        `var(--font-size-xs, ${defaultConfig.fontSize.xs})`,
        {
          lineHeight: `var(--line-height-xs, ${defaultConfig.lineHeight.normal})`,
        },
      ],
      sm: [
        `var(--font-size-sm, ${defaultConfig.fontSize.sm})`,
        {
          lineHeight: `var(--line-height-sm, ${defaultConfig.lineHeight.normal}))`,
        },
      ],
      base: [
        `var(--font-size-base, ${defaultConfig.fontSize.base})`,
        {
          lineHeight: `var(--line-height-md, ${defaultConfig.lineHeight.normal}))`,
        },
      ],
      lg: [
        `var(--font-size-lg, ${defaultConfig.fontSize.lg})`,
        {
          lineHeight: `var(--line-height-lg, ${defaultConfig.lineHeight.normal}))`,
        },
      ],
      xl: [
        `var(--font-size-xl, ${defaultConfig.fontSize.xl})`,
        {
          lineHeight: `var(--line-height-xl, ${defaultConfig.lineHeight.normal}))`,
        },
      ],
      "2xl": [
        `var(--font-size-2xl, ${defaultConfig.fontSize["2xl"]})`,
        {
          lineHeight: `var(--line-height-2xl, ${defaultConfig.lineHeight.normal}))`,
        },
      ],
      "3xl": [
        `var(--font-size-3xl, ${defaultConfig.fontSize["3xl"]})`,
        {
          lineHeight: `var(--line-height-3xl, ${defaultConfig.lineHeight.normal}))`,
        },
      ],
      "4xl": [
        `var(--font-size-4xl, ${defaultConfig.fontSize["4xl"]})`,
        {
          lineHeight: `var(--line-height-4xl, ${defaultConfig.lineHeight.normal}))`,
        },
      ],
      "5xl": [
        `var(--font-size-5xl, ${defaultConfig.fontSize["5xl"]})`,
        {
          lineHeight: `var(--line-height-5xl, ${defaultConfig.lineHeight.normal}))`,
        },
      ],
      "6xl": [
        `var(--font-size-6xl, ${defaultConfig.fontSize["6xl"]})`,
        {
          lineHeight: `var(--line-height-6xl, ${defaultConfig.lineHeight.normal}))`,
        },
      ],
      "7xl": [
        `var(--font-size-7xl, ${defaultConfig.fontSize["7xl"]})`,
        {
          lineHeight: `var(--line-height-7xl, ${defaultConfig.lineHeight.normal}))`,
        },
      ],
      "8xl": [
        `var(--font-size-8xl, ${defaultConfig.fontSize["8xl"]})`,
        {
          lineHeight: `var(--line-height-8xl, ${defaultConfig.lineHeight.normal}))`,
        },
      ],
      "9xl": [
        `var(--font-size-9xl, ${defaultConfig.fontSize["9xl"]})`,
        {
          lineHeight: `var(--line-height-9xl, ${defaultConfig.lineHeight.normal}))`,
        },
      ],
      "10xl": [
        `var(--font-size-10xl, ${defaultConfig.fontSize["10xl"] ?? ""})`,
        {
          lineHeight: `var(--line-height-10xl, ${defaultConfig.lineHeight.normal}))`,
        },
      ],
      "11xl": [
        `var(--font-size-11xl, ${defaultConfig.fontSize["11xl"] ?? ""})`,
        {
          lineHeight: `var(--line-height-11xl, ${defaultConfig.lineHeight.normal}))`,
        },
      ],
      "12xl": [
        `var(--font-size-12xl, ${defaultConfig.fontSize["12xl"] ?? ""})`,
        {
          lineHeight: `var(--line-height-12xl, ${defaultConfig.lineHeight.normal}))`,
        },
      ],
      "13xl": [
        `var(--font-size-13xl, ${defaultConfig.fontSize["13xl"] ?? ""})`,
        {
          lineHeight: `var(--line-height-13xl, ${defaultConfig.lineHeight.normal}))`,
        },
      ],
    },
    letterSpacing: {
      tighter: `var(--letter-spacing-sans-xs, ${defaultConfig.letterSpacing.tighter})`,
      tight: `var(--letter-spacing-sans-sm, ${defaultConfig.letterSpacing.tight})`,
      normal: `var(--letter-spacing-sans-md, ${defaultConfig.letterSpacing.normal})`,
      wide: `var(--letter-spacing-sans-lg, ${defaultConfig.letterSpacing.wide})`,
      wider: `var(--letter-spacing-sans-xl, ${defaultConfig.letterSpacing.wider})`,
      widest: `var(--letter-spacing-sans-2xl, ${defaultConfig.letterSpacing.widest})`,

      serif: {
        tighter: `var(--letter-spacing-serif-xs, ${defaultConfig.letterSpacing.tighter})`,
        tight: `var(--letter-spacing-serif-sm, ${defaultConfig.letterSpacing.tight})`,
        normal: `var(--letter-spacing-serif-md, ${defaultConfig.letterSpacing.normal})`,
        wide: `var(--letter-spacing-serif-lg, ${defaultConfig.letterSpacing.wide})`,
        wider: `var(--letter-spacing-serif-xl, ${defaultConfig.letterSpacing.wider})`,
        widest: `var(--letter-spacing-serif-2xl, ${defaultConfig.letterSpacing.widest})`,
      },

      mono: {
        tighter: `var(--letter-spacing-mono-xs, ${defaultConfig.letterSpacing.tighter})`,
        tight: `var(--letter-spacing-mono-sm, ${defaultConfig.letterSpacing.tight})`,
        normal: `var(--letter-spacing-mono-md, ${defaultConfig.letterSpacing.normal})`,
        wide: `var(--letter-spacing-mono-lg, ${defaultConfig.letterSpacing.wide})`,
        wider: `var(--letter-spacing-mono-xl, ${defaultConfig.letterSpacing.wider})`,
        widest: `var(--letter-spacing-mono-2xl, ${defaultConfig.letterSpacing.widest})`,
      },

      display: {
        tighter: `var(--letter-spacing-display-xs, ${defaultConfig.letterSpacing.tighter})`,
        tight: `var(--letter-spacing-display-sm, ${defaultConfig.letterSpacing.tight})`,
        normal: `var(--letter-spacing-display-md, ${defaultConfig.letterSpacing.normal})`,
        wide: `var(--letter-spacing-display-lg, ${defaultConfig.letterSpacing.wide})`,
        wider: `var(--letter-spacing-display-xl, ${defaultConfig.letterSpacing.wider})`,
        widest: `var(--letter-spacing-display-2xl, ${defaultConfig.letterSpacing.widest})`,
      },
    },
    lineHeight: {
      none: `var(--line-height-none, ${defaultConfig.lineHeight.none})`, // === '1'
      inherit: "inherit",

      tight: `var(--line-height-tight, ${defaultConfig.lineHeight.tight})`,
      snug: `var(--line-height-snug, ${defaultConfig.lineHeight.snug})`,
      normal: `var(--line-height-normal, ${defaultConfig.lineHeight.normal})`,
      relaxed: `var(--line-height-relaxed, ${defaultConfig.lineHeight.relaxed})`,
      loose: `var(--line-height-loose, ${defaultConfig.lineHeight.loose})`,

      // numeric line-heights that match defaultConfig
      // it would be better using font size based names like "sm", "md", "lg", etc.
      // but since tailwindcss uses numeric values for line-heights, we have to use them as well
      3: `var(--line-height-xs, ${defaultConfig.lineHeight[3]})`,
      4: `var(--line-height-sm, ${defaultConfig.lineHeight[4]})`,
      5: `var(--line-height-md, ${defaultConfig.lineHeight[5]})`,
      6: `var(--line-height-lg, ${defaultConfig.lineHeight[6]})`,
      7: `var(--line-height-xl, ${defaultConfig.lineHeight[7]})`,
      8: `var(--line-height-2xl, ${defaultConfig.lineHeight[8]})`,
      9: `var(--line-height-3xl, ${defaultConfig.lineHeight[9]})`,
      10: `var(--line-height-4xl, ${defaultConfig.lineHeight[10]})`,

      // line-heights that match font-sizes
      11: `var(--line-height-5xl, ${defaultConfig.lineHeight.normal})`,
      12: `var(--line-height-6xl, ${defaultConfig.lineHeight.normal})`,
      13: `var(--line-height-7xl, ${defaultConfig.lineHeight.normal})`,
      14: `var(--line-height-8xl, ${defaultConfig.lineHeight.normal})`,
      15: `var(--line-height-9xl, ${defaultConfig.lineHeight.normal})`,
      16: `var(--line-height-10xl, ${defaultConfig.lineHeight.normal})`,
      17: `var(--line-height-11xl, ${defaultConfig.lineHeight.normal})`,
      18: `var(--line-height-12xl, ${defaultConfig.lineHeight.normal})`,
      19: `var(--line-height-13xl, ${defaultConfig.lineHeight.normal})`,

      // usually line-height is different for different cases, like headings, paragraphs, etc.
      // by default all values that were defined earlier are supposed to be used for paragraphs
      // (long text blocks), but it might be not sufficient. In such a case you can use the
      // following values for short text blocks:
      // (we use the same notation here as for regular line-heights)
      short: {
        3: `var(--line-height-short-xs, ${defaultConfig.lineHeight[3]})`,
        4: `var(--line-height-short-sm, ${defaultConfig.lineHeight[4]})`,
        5: `var(--line-height-short-md, ${defaultConfig.lineHeight[5]})`,
        6: `var(--line-height-short-lg, ${defaultConfig.lineHeight[6]})`,
        7: `var(--line-height-short-xl, ${defaultConfig.lineHeight[7]})`,
        8: `var(--line-height-short-2xl, ${defaultConfig.lineHeight[8]})`,
        9: `var(--line-height-short-3xl, ${defaultConfig.lineHeight[9]})`,
        10: `var(--line-height-short-4xl, ${defaultConfig.lineHeight[10]})`,

        // line-heights that match font-sizes
        11: `var(--line-height-short-5xl, ${defaultConfig.lineHeight.normal})`,
        12: `var(--line-height-short-6xl, ${defaultConfig.lineHeight.normal})`,
        13: `var(--line-height-short-7xl, ${defaultConfig.lineHeight.normal})`,
        14: `var(--line-height-short-8xl, ${defaultConfig.lineHeight.normal})`,
        15: `var(--line-height-short-9xl, ${defaultConfig.lineHeight.normal})`,
        16: `var(--line-height-short-10xl, ${defaultConfig.lineHeight.normal})`,
        17: `var(--line-height-short-11xl, ${defaultConfig.lineHeight.normal})`,
        18: `var(--line-height-short-12xl, ${defaultConfig.lineHeight.normal})`,
        19: `var(--line-height-short-13xl, ${defaultConfig.lineHeight.normal})`,
      },
    },
    colors,
  },
};
