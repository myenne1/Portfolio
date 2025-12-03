import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#242424",    // deeper, richer charcoal
      light: "#3C3C3C",
      dark: "#101010",
    },

    secondary: {
      main: "#C9A46C",    // warmer, more vibrant gold-beige
      light: "#DEC8A0",
      dark: "#A5804A",
    },

    background: {
      default: "#EFE8DD", // slightly warmer beige
      paper: "#FFFFFF",
    },

    text: {
      primary: "#242424",
      secondary: "#4A4A4A",
    },
  },

  typography: {
    fontFamily: `"Share Tech", sans-serif`,
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 500 },
    h6: { fontWeight: 500 },
    button: { textTransform: "none", fontWeight: 600 },
  },

  shape: {
    borderRadius: 10,
  },

  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          padding: "4px",
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: { borderRadius: 12 },
      },
    },

    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        body: {
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
        },
      }),
    },
  },
});

export default theme;
