import { createTheme } from "@mui/material/styles"

const SPACING = 4

export const colors = {
  primaryDark: "#3FBFCA",
  primaryLight: "#E2F7F8",
  primary: {
    regular: "#70D2DA",
    lighter: "#E2F7F8",
    light2: "#C9EAEC",
    darker: "#3FBFCA",
  },
  secondary: "#232C36",
  tertiary: "#e8e8e8",
  secondaryLight: "#414F5E",
  tertiaryWine: "#521B41",
  tertiarySupernova: "#F7BE00",
  // supernova: '#F7BE00', // deprecated
  supernova2: "#E3AF02", // deprecated
  supernovaDark: "#735903", // deprecated
  supernovaLight: "rgba(247, 190, 0, 0.2)", // deprecated
  supernovaLight2: "#FEEEBA", // deprecated
  supernova: {
    regular: "#F7BE00",
    medium: "#FFDA60",
    light: "#FFF6D6",
    light2: "#FEEEBA",
    dark: "#735903",
    secondary: "#E3AF02",
  },
  confirmed: "#3FCA6F",
  confirmedLight: "rgba(63, 202, 111, 0.15)",
  white: "#FFFFFF",
  grey0: "#EFEFEF",
  grey1: "#E8E8E8",
  grey2: "#D8D8D8",
  grey3: "#C6C6C6",
  grey4: "#B1B1B1",
  grey5: "#787878",
  grey6: "#555555",
  grey7: "#323232",
  mainBackground: "#FAFAFA", // deprecated
  background2: "#F5F5F5", // deprecated
  backgroundMain: "#FAFAFA", // deprecated
  backgroundDark: "#F5F5F5", // deprecated
  background: {
    regular: "#FAFAFA",
    darker: "#F5F5F5",
    lighter: "#FDFDFD",
  },
  backgroundLight: "#FDFDFD", // deprecated
  attention: "#B96161",
  error: {
    regular: "#B96161",
    light: "#EDDBDB",
    light2: "#FFF6F6",
  },
  // legacy colors
  customer: "#7BD7DF",
  vendors: "#27323E",
  lightBlue: "#7bd7df",
  gray: "#9b9b9b",
  lightGray: "#edf0f1",
  darkGray: "#27323e",
  darkerLightBlue: "#0699a6",
  black: "#000000",
  charcoal: "#4A4A4A",
}

// Extend PaletteOptions and Palette interfaces
declare module "@mui/material/styles" {
  interface Palette {
    tertiary: Palette["primary"]
    textPrimary: Palette["primary"]
    textSecondary: Palette["primary"]
  }

  interface PaletteOptions {
    tertiary?: PaletteOptions["primary"]
    textPrimary?: PaletteOptions["primary"]
    textSecondary?: PaletteOptions["primary"]
  }
}

const theme = createTheme({
  spacing: SPACING,
  palette: {
    primary: {
      main: colors.primary.regular,
    },
    secondary: {
      main: colors.secondary,
    },
    tertiary: {
      main: colors.tertiary,
    },
    textPrimary: {
      main: colors.grey7,
    },
    textSecondary: {
      main: colors.grey5,
    },
    error: {
      main: colors.attention,
    },
    text: {
      primary: colors.grey7,
      secondary: colors.grey5,
    },
  },
  typography: {
    fontFamily: [
      "Metropolis",
      "Helvetica Neue",
      "Helvetica",
      "Arial",
      "sans-serif",
    ].join(","),
    h1: {
      fontSize: 28,
      fontWeight: 600,
      color: colors.grey7,
    },
    h2: {
      fontSize: 18,
      fontWeight: 600,
      color: colors.grey7,
      lineHeight: 1.125,
    },
    h3: {
      fontSize: 16,
      fontWeight: 400,
      color: colors.grey5,
    },
    subtitle1: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1,
      color: colors.grey5,
    },
  },
})

export default theme
