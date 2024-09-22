import { createTheme, PaletteColor } from '@mui/material';

// MUI의 Palette와 PaletteOptions 타입 확장
declare module '@mui/material/styles' {
  interface Palette {
    yellow: PaletteColor;
    green: PaletteColor;
    blue: PaletteColor;
    gray: PaletteColor;
  }
  interface PaletteOptions {
    yellow?: PaletteColor;
    green?: PaletteColor;
    blue?: PaletteColor;
    gray?: PaletteColor;
  }
}

let theme = createTheme();

theme = createTheme(theme, {
  palette: {
    yellow: theme.palette.augmentColor({
      color: {
        main: '#F5FADB',
      },
      name: 'yellow',
    }),
    green: theme.palette.augmentColor({
      color: {
        main: '#ACE4C9',
      },
      name: 'green',
    }),
    blue: theme.palette.augmentColor({
      color: {
        main: '#72B3FF',
        light: '#ADD3FF',
        dark: '#377BCB',
      },
      name: 'blue',
    }),
    gray: theme.palette.augmentColor({
      color: {
        main: '#66717E',
        light: '#D9D9D9',
      },
      name: 'gray',
    }),
  },
  typography: {
    fontFamily: [
      '"Gowun_Batang"',
      '"DM_Serif_Display"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: 40,
    },
  },
});

export default theme;
