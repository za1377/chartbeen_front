// src/styles/themes/lightTheme.ts

import { primitiveColors } from '../primitives/colors';
import { spacing } from '../primitives/spacing';
import { typography } from '../primitives/typography';

export const lightTheme = {
  mode: 'light',

  colors: {
    background: {
      primary: primitiveColors.neutral.white,      
      secondary: primitiveColors.neutral.lightest, 
      tertiary: primitiveColors.neutral.lighter,   
      inverse: primitiveColors.neutral.black,      
    },

    text: {
      primary: primitiveColors.brand.primary,     
      secondary: primitiveColors.neutral.gray,    
      tertiary: primitiveColors.neutral.lightGray, 
      black: primitiveColors.neutral.black,     
      white: primitiveColors.neutral.white
    },

    brand: {
      primary: primitiveColors.brand.primary,     
      secondary: primitiveColors.brand.secondary, 
      accent: primitiveColors.brand.accent,       
      light: primitiveColors.brand.light,        
      textDark: primitiveColors.brand.textDark,   
    },

    border: {
      primary: primitiveColors.neutral.lighter,   
      secondary: primitiveColors.neutral.lightest, 
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