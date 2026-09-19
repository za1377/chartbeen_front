import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* ===== فونت فارسی (IRANYekanX) ===== */
  @font-face {
    font-family: "IRANYekanX";
    src: local('IRANYekanX'),url(/fonts/IRANYekanXFaNum-Thin.woff2) format('woff2');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "IRANYekanX";
    src: local('IRANYekanX'),url(/fonts/IRANYekanXFaNum-UltraLight.woff2) format('woff2');
    font-weight: 200;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "IRANYekanX";
    src: local('IRANYekanX'),url(/fonts/IRANYekanXFaNum-Light.woff2) format('woff2');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "IRANYekanX";
    src: local('IRANYekanX'),url(/fonts/IRANYekanXFaNum-Regular.woff2) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "IRANYekanX";
    src: local('IRANYekanX'),url(/fonts/IRANYekanXFaNum-Medium.woff2) format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "IRANYekanX";
    src: local('IRANYekanX'),url(/fonts/IRANYekanXFaNum-DemiBold.woff2) format('woff2');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "IRANYekanX";
    src: local('IRANYekanX'),url(/fonts/IRANYekanXFaNum-Bold.woff2) format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "IRANYekanX";
    src: local('IRANYekanX'),url(/fonts/IRANYekanXFaNum-ExtraBold.woff2) format('woff2');
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "IRANYekanX";
    src: local('IRANYekanX'),url(/fonts/IRANYekanXFaNum-Black.woff2) format('woff2');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }


  /* ===== فونت انگلیسی (Roboto) ===== */
  @font-face {
    font-family: "Roboto";
    src: local('Roboto'), url(/fonts/Roboto-Thin.woff2) format('ttf');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Roboto";
    src: local('Roboto'), url(/fonts/Roboto-ExtraLight.woff2) format('ttf');
    font-weight: 200;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Roboto";
    src: local('Roboto'), url(/fonts/Roboto-Light.woff2) format('ttf');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Roboto";
    src: local('Roboto'), url(/fonts/Roboto-Regular.woff2) format('ttf');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Roboto";
    src: local('Roboto'), url(/fonts/Roboto-Medium.woff2) format('ttf');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Roboto";
    src: local('Roboto'), url(/fonts/Roboto-SemiBold.woff2) format('ttf');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Roboto";
    src: local('Roboto'), url(/fonts/Roboto-Bold.woff2) format('ttf');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Roboto";
    src: local('Roboto'), url(/fonts/Roboto-ExtraBold.woff2) format('ttf');
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Roboto";
    src: local('Roboto'), url(/fonts/Roboto-Black.woff2) format('ttf');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  html {
    direction: ltr; /* پیش‌فرض، بعداً با زبان تغییر می‌کند */
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
    background-color: ${({ theme }) => theme.colors.background.primary};
    color: ${({ theme }) => theme.colors.text.primary};
    transition: background-color 0.3s ease, color 0.3s ease;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }

  input,
  textarea,
  select {
    font-family: inherit;
    font-size: inherit;
  }

  /* اسکرول‌بار سفارشی */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background.secondary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border.primary};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.brand.primary};
  }
`;