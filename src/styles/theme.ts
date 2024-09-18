import { createTheme, PaletteColor } from '@mui/material';

// MUI의 Palette와 PaletteOptions 타입 확장
declare module '@mui/material/styles' {
  interface Palette {
    gray: PaletteColor; // Palette에 gray 추가
  }
  interface PaletteOptions {
    gray?: PaletteColor; // PaletteOptions에 gray 추가
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
  },
  typography: {
    fontFamily: [
      '"Gowun_Batang"',
      '"DM_Serif_Display"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

export default theme;
