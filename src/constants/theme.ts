import { css } from "styled-components";

const theme = {
  COLORS: {
    RED: {
      50: "#fef2f2",
      100: "#fee2e2",
      200: "#fecaca",
      300: "#fca5a5",
      400: "#f87171",
      500: "#ef4444",
      600: "#dc2626",
      700: "#b91c1c",
      800: "#991b1b",
      900: "#7f1d1d",
      950: "#450a0a",
    },
    ORANGE: {
      50: "#fff7ed",
      100: "#ffedd5",
      200: "#fed7aa",
      300: "#fdba74",
      400: "#fb923c",
      500: "#f97316",
      600: "#ea580c",
      700: "#c2410c",
      800: "#9a3412",
      900: "#7c2d12",
      950: "#431407",
    },
    GREEN: {
      50: "#f0fdf4",
      100: "#dcfce7",
      200: "#a7f3d0",
      300: "#6ee7b7",
      400: "#34d399",
      500: "#10b981",
      600: "#059669",
      700: "#047857",
      800: "#065f46",
      900: "#064e3b",
      950: "#022c22",
    },
    PURPLE: {
      50: "#faf5ff",
      100: "#f3e8ff",
      200: "#e9d5ff",
      300: "#d8b4fe",
      400: "#c084fc",
      500: "#a855f7",
      600: "#9333ea",
      700: "#7e22ce",
      800: "#6b21a8",
      900: "#581c87",
      950: "#3b0764",
    },
    NEUTRAL: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#e5e5e5",
      300: "#d4d4d4",
      400: "#a3a3a3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
      950: "#0a0a0a",
    },
    GRAY: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
      950: "#030712",
    },
    BLUE: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a",
      950: "#172554",
    },
    WHITE: "#ffffff",
    BLACK: "#000000",
  },
  FONT: {
    FAMILY: {
      POPPINS: "'Poppins', sans-serif",
    },
    WEIGHT: {
      THIN: 100,
      EXTRALIGHT: 200,
      LIGHT: 300,
      REGULAR: 400,
      MEDIUM: 500,
      SEMI_BOLD: 600,
      BOLD: 700,
      EXTRA_BOLD: 800,
      BLACK: 900,
    },
  },
  BREAKPOINTS: {
    XS: 0,
    SM: 400,
    MD: 768,
    LG: 1024,
    XL: 1280,
    XXL: 1536,
  },
  BACKDROP: css`
    backdrop-filter: blur(2px);
    background-color: rgba(0, 0, 0, 0.1);
  `,
  SIDEBAR_WIDTH: 240,
  HEADER_HEIGHT: 64,
  BOTTOM_NAVIGATION_HEIGHT: 68,
  CLEAR_BUTTON: css`
    border: none;
    background-color: transparent;
    font-family: inherit;
    transition: all 300ms ease-in-out;
    user-select: none;
    &:not(:disabled) {
      cursor: pointer;
    }
  `,
  CLEAR_INPUT: css`
    border: none;
    padding: 4px 12px;
    font-size: clamp(14px, 1.5vw, 16px);
    transition: all 300ms ease-in-out;
    font-family: inherit;
    &::placeholder {
      color: inherit;
    }
  `,
  CLEAR_INPUT_NUMBER: css`
    appearance: textfield;
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  `,
  CLEAR_LINK: css`
    text-decoration: none;
    color: inherit;
  `,
  CLEAR_LIST: css`
    list-style: none;
  `,
  PADDING_DEFAULT: css`
    padding: 16px clamp(16px, 5vw, 24px);
  `,
  SCROLL_BAR_HIDDEN: css`
    overflow-x: auto;
    scrollbar-width: none; /* Para Firefox */
    -ms-overflow-style: none; /* Para Internet Explorer e Edge */

    &::-webkit-scrollbar {
      display: none; /* Para Chrome, Safari e navegadores baseados em Webkit */
    }
  `,
  SHADOW: {
    SMALL: "0 1px 2px rgba(0, 0, 0, 0.1)",
    MEDIUM: "0 4px 6px rgba(0, 0, 0, 0.1)",
    LARGE: "0 10px 15px rgba(0, 0, 0, 0.2)",
  },
  NICE_TEXT: (color = "", strokeColor = "") => css`
    color: ${color};
    text-shadow: 0 0.1em 1.25em ${strokeColor}, 0.05em -0.03em 0 ${strokeColor},
      0.05em 0.005em 0 ${strokeColor}, 0em 0.08em 0 ${strokeColor},
      0.05em 0.08em 0 ${strokeColor}, 0em -0.03em 0 ${strokeColor},
      -0.03em -0.03em 0 ${strokeColor}, -0.03em 0.08em 0 ${strokeColor},
      -0.03em 0 0 ${strokeColor};
  `,
  SCROLLBAR: (thumbColor = "", thumbColorHover = "") => css`
    &::-webkit-scrollbar {
      width: 20px;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${thumbColor};
      border-radius: 20px;
      border: 6px solid transparent;
      background-clip: content-box;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: ${thumbColorHover};
    }
  `,
  SCROLLBAR_NONE: css`
    /* Oculta a barra de rolagem, mas mantém a funcionalidade de scroll */
    overflow: auto; /* Mantém a rolagem */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE e Edge */

    /* WebKit (Chrome, Safari) */
    &::-webkit-scrollbar {
      display: none; /* Oculta a barra de rolagem */
    }
  `,
  DEFAULT_TRANSITION: css`
    transition: all 300ms ease-in-out;
  `,
} as const;

export default theme;
