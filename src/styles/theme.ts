import { createTheme, PaletteColor } from '@mui/material';

// MUI의 Palette와 PaletteOptions 타입 확장
declare module '@mui/material/styles' {
  interface Palette {
    gray: PaletteColor; // Palette에 gray 추가
    blue: PaletteColor;
  }
  interface PaletteOptions {
    gray?: PaletteColor; // PaletteOptions에 gray 추가
    blue?: PaletteColor;
  }
}

let theme = createTheme();

theme = createTheme(theme, {
  palette: {
    background: {
      default: '#ACE4C9',
    },
    gray: theme.palette.augmentColor({
      color: {
        main: '#66717E',
        light: '#D9D9D9',
      },
      name: 'gray',
    }),
    blue: theme.palette.augmentColor({
      color: {
        main: '#72B3FF',
        light: '#ADD3FF',
        dark: '#377BCB',
      },
      name: 'blue',
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
