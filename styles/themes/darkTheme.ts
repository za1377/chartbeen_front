// src/styles/themes/darkTheme.ts

import { primitiveColors } from '../primitives/colors';
import { spacing } from '../primitives/spacing';
import { typography } from '../primitives/typography';

export const darkTheme = {
  mode: 'dark',

  colors: {
    background: {
      primary: primitiveColors.neutral.black,      // #181C22
      secondary: primitiveColors.neutral.dark,     // #505661
      tertiary: primitiveColors.neutral.gray,      // #7B8189
      inverse: primitiveColors.neutral.white,      // #F2F5FA
    },

    text: {
      primary: primitiveColors.brand.textDark,     // #90CAD7 (متن در حالت تاریک)
      secondary: primitiveColors.neutral.lighter,  // #C8CACD
      tertiary: primitiveColors.neutral.lightGray, // #92969D
      black: primitiveColors.neutral.black,     
      white: primitiveColors.neutral.white     // #181C22
    },

    brand: {
      primary: primitiveColors.brand.primary,      // #163A73
      secondary: primitiveColors.brand.secondary,  // #2884B2
      accent: primitiveColors.brand.accent,        // #3ACFF1
      light: primitiveColors.brand.light,          // #D0F6FF
      textDark: primitiveColors.brand.textDark,    // #90CAD7
    },

    border: {
      primary: primitiveColors.neutral.dark,       // #505661
      secondary: primitiveColors.neutral.gray,     // #7B8189
    },

    status: {
      success: primitiveColors.status.success,    // #22c55e
      error: primitiveColors.status.error,        // #ef4444
      warning: primitiveColors.status.warning,    // #f59e0b
      info: primitiveColors.status.info,          // #3b82f6
    },
  },

  spacing,
  typography,
};