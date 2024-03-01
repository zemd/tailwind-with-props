const defaultTheme = require("tailwindcss/defaultTheme");

const transformColorObject = (colors, prefix = "") => {
  if (!colors) return {};
  return Object.entries(colors).reduce((acc, [key, value]) => {
    if (typeof value === "string") {
      const prefixWithDash = prefix ? `${prefix}-` : "";
      const propName = `--color-${prefixWithDash}${key}`;
      acc[key] = `var(${propName}, ${value})`;
    }
    if (typeof value === "object") {
      acc[key] = transformColorObject(value, `${prefix}${key}-`);
    }
    return acc;
  }, {});
};

const colors = transformColorObject(defaultTheme.colors);

module.exports = {
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
      none: "none",
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
        `var(--font-size-xs, ${defaultTheme.fontSize.xs[0]})`,
        {
          lineHeight: `var(--line-height-xs, ${defaultTheme.lineHeight.normal})`,
        },
      ],
      sm: [
        `var(--font-size-sm, ${defaultTheme.fontSize.sm[0]})`,
        {
          lineHeight: `var(--line-height-sm, ${defaultTheme.lineHeight.normal})`,
        },
      ],
      base: [
        `var(--font-size-base, ${defaultTheme.fontSize.base[0]})`,
        {
          lineHeight: `var(--line-height-md, ${defaultTheme.lineHeight.normal})`,
        },
      ],
      lg: [
        `var(--font-size-lg, ${defaultTheme.fontSize.lg[0]})`,
        {
          lineHeight: `var(--line-height-lg, ${defaultTheme.lineHeight.normal})`,
        },
      ],
      xl: [
        `var(--font-size-xl, ${defaultTheme.fontSize.xl[0]})`,
        {
          lineHeight: `var(--line-height-xl, ${defaultTheme.lineHeight.normal})`,
        },
      ],
      "2xl": [
        `var(--font-size-2xl, ${defaultTheme.fontSize["2xl"][0]})`,
        {
          lineHeight: `var(--line-height-2xl, ${defaultTheme.lineHeight.normal})`,
        },
      ],
      "3xl": [
        `var(--font-size-3xl, ${defaultTheme.fontSize["3xl"][0]})`,
        {
          lineHeight: `var(--line-height-3xl, ${defaultTheme.lineHeight.normal})`,
        },
      ],
      "4xl": [
        `var(--font-size-4xl, ${defaultTheme.fontSize["4xl"][0]})`,
        {
          lineHeight: `var(--line-height-4xl, ${defaultTheme.lineHeight.normal})`,
        },
      ],
      "5xl": [
        `var(--font-size-5xl, ${defaultTheme.fontSize["5xl"][0]})`,
        {
          lineHeight: `var(--line-height-5xl, ${defaultTheme.lineHeight.normal})`,
        },
      ],
      "6xl": [
        `var(--font-size-6xl, ${defaultTheme.fontSize["6xl"][0]})`,
        {
          lineHeight: `var(--line-height-6xl, ${defaultTheme.lineHeight.normal})`,
        },
      ],
      "7xl": [
        `var(--font-size-7xl, ${defaultTheme.fontSize["7xl"][0]})`,
        {
          lineHeight: `var(--line-height-7xl, ${defaultTheme.lineHeight.normal})`,
        },
      ],
      "8xl": [
        `var(--font-size-8xl, ${defaultTheme.fontSize["8xl"][0]})`,
        {
          lineHeight: `var(--line-height-8xl, ${defaultTheme.lineHeight.normal})`,
        },
      ],
      "9xl": [
        `var(--font-size-9xl, ${defaultTheme.fontSize["9xl"][0]})`,
        {
          lineHeight: `var(--line-height-9xl, ${defaultTheme.lineHeight.normal})`,
        },
      ],
      "10xl": [
        `var(--font-size-10xl, ${defaultTheme.fontSize["9xl"][0]})`,
        {
          lineHeight: `var(--line-height-10xl, ${defaultTheme.lineHeight.normal})`,
        },
      ],
      "11xl": [
        `var(--font-size-11xl, ${defaultTheme.fontSize["9xl"][0]})`,
        {
          lineHeight: `var(--line-height-11xl, ${defaultTheme.lineHeight.normal})`,
        },
      ],
      "12xl": [
        `var(--font-size-12xl, ${defaultTheme.fontSize["9xl"][0]})`,
        {
          lineHeight: `var(--line-height-12xl, ${defaultTheme.lineHeight.normal})`,
        },
      ],
      "13xl": [
        `var(--font-size-13xl, ${defaultTheme.fontSize["9xl"][0]})`,
        {
          lineHeight: `var(--line-height-13xl, ${defaultTheme.lineHeight.normal})`,
        },
      ],
    },
    letterSpacing: {
      tighter: `var(--letter-spacing-sans-xs, ${defaultTheme.letterSpacing.tighter})`,
      tight: `var(--letter-spacing-sans-sm, ${defaultTheme.letterSpacing.tight})`,
      normal: `var(--letter-spacing-sans-md, ${defaultTheme.letterSpacing.normal})`,
      wide: `var(--letter-spacing-sans-lg, ${defaultTheme.letterSpacing.wide})`,
      wider: `var(--letter-spacing-sans-xl, ${defaultTheme.letterSpacing.wider})`,
      widest: `var(--letter-spacing-sans-2xl, ${defaultTheme.letterSpacing.widest})`,

      serif: {
        tighter: `var(--letter-spacing-serif-xs, ${defaultTheme.letterSpacing.tighter})`,
        tight: `var(--letter-spacing-serif-sm, ${defaultTheme.letterSpacing.tight})`,
        normal: `var(--letter-spacing-serif-md, ${defaultTheme.letterSpacing.normal})`,
        wide: `var(--letter-spacing-serif-lg, ${defaultTheme.letterSpacing.wide})`,
        wider: `var(--letter-spacing-serif-xl, ${defaultTheme.letterSpacing.wider})`,
        widest: `var(--letter-spacing-serif-2xl, ${defaultTheme.letterSpacing.widest})`,
      },

      mono: {
        tighter: `var(--letter-spacing-mono-xs, ${defaultTheme.letterSpacing.tighter})`,
        tight: `var(--letter-spacing-mono-sm, ${defaultTheme.letterSpacing.tight})`,
        normal: `var(--letter-spacing-mono-md, ${defaultTheme.letterSpacing.normal})`,
        wide: `var(--letter-spacing-mono-lg, ${defaultTheme.letterSpacing.wide})`,
        wider: `var(--letter-spacing-mono-xl, ${defaultTheme.letterSpacing.wider})`,
        widest: `var(--letter-spacing-mono-2xl, ${defaultTheme.letterSpacing.widest})`,
      },

      display: {
        tighter: `var(--letter-spacing-display-xs, ${defaultTheme.letterSpacing.tighter})`,
        tight: `var(--letter-spacing-display-sm, ${defaultTheme.letterSpacing.tight})`,
        normal: `var(--letter-spacing-display-md, ${defaultTheme.letterSpacing.normal})`,
        wide: `var(--letter-spacing-display-lg, ${defaultTheme.letterSpacing.wide})`,
        wider: `var(--letter-spacing-display-xl, ${defaultTheme.letterSpacing.wider})`,
        widest: `var(--letter-spacing-display-2xl, ${defaultTheme.letterSpacing.widest})`,
      },
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
      3: `var(--line-height-xs, ${defaultTheme.lineHeight[3]})`,
      4: `var(--line-height-sm, ${defaultTheme.lineHeight[4]})`,
      5: `var(--line-height-md, ${defaultTheme.lineHeight[5]})`,
      6: `var(--line-height-lg, ${defaultTheme.lineHeight[6]})`,
      7: `var(--line-height-xl, ${defaultTheme.lineHeight[7]})`,
      8: `var(--line-height-2xl, ${defaultTheme.lineHeight[8]})`,
      9: `var(--line-height-3xl, ${defaultTheme.lineHeight[9]})`,
      10: `var(--line-height-4xl, ${defaultTheme.lineHeight[10]})`,

      // line-heights that match font-sizes
      11: `var(--line-height-5xl, ${defaultTheme.lineHeight.normal})`,
      12: `var(--line-height-6xl, ${defaultTheme.lineHeight.normal})`,
      13: `var(--line-height-7xl, ${defaultTheme.lineHeight.normal})`,
      14: `var(--line-height-8xl, ${defaultTheme.lineHeight.normal})`,
      15: `var(--line-height-9xl, ${defaultTheme.lineHeight.normal})`,
      16: `var(--line-height-10xl, ${defaultTheme.lineHeight.normal})`,
      17: `var(--line-height-11xl, ${defaultTheme.lineHeight.normal})`,
      18: `var(--line-height-12xl, ${defaultTheme.lineHeight.normal})`,
      19: `var(--line-height-13xl, ${defaultTheme.lineHeight.normal})`,

      // usually line-height is different for different cases, like headings, paragraphs, etc.
      // by default all values that were defined earlier are supposed to be used for paragraphs
      // (long text blocks), but it might be not sufficient. In such a case you can use the
      // following values for short text blocks:
      // (we use the same notation here as for regular line-heights)
      short: {
        3: `var(--line-height-short-xs, ${defaultTheme.lineHeight[3]})`,
        4: `var(--line-height-short-sm, ${defaultTheme.lineHeight[4]})`,
        5: `var(--line-height-short-md, ${defaultTheme.lineHeight[5]})`,
        6: `var(--line-height-short-lg, ${defaultTheme.lineHeight[6]})`,
        7: `var(--line-height-short-xl, ${defaultTheme.lineHeight[7]})`,
        8: `var(--line-height-short-2xl, ${defaultTheme.lineHeight[8]})`,
        9: `var(--line-height-short-3xl, ${defaultTheme.lineHeight[9]})`,
        10: `var(--line-height-short-4xl, ${defaultTheme.lineHeight[10]})`,

        // line-heights that match font-sizes
        11: `var(--line-height-short-5xl, ${defaultTheme.lineHeight.normal})`,
        12: `var(--line-height-short-6xl, ${defaultTheme.lineHeight.normal})`,
        13: `var(--line-height-short-7xl, ${defaultTheme.lineHeight.normal})`,
        14: `var(--line-height-short-8xl, ${defaultTheme.lineHeight.normal})`,
        15: `var(--line-height-short-9xl, ${defaultTheme.lineHeight.normal})`,
        16: `var(--line-height-short-10xl, ${defaultTheme.lineHeight.normal})`,
        17: `var(--line-height-short-11xl, ${defaultTheme.lineHeight.normal})`,
        18: `var(--line-height-short-12xl, ${defaultTheme.lineHeight.normal})`,
        19: `var(--line-height-short-13xl, ${defaultTheme.lineHeight.normal})`,
      },
    },
    colors,
  },
};
