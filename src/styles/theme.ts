import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    background: {
      default: "#ACE4C9",
    },
  },
  typography: {
    fontFamily: ["DMSerifDisplay", "GowunBatang"].join(","),
  },
});

export default theme;
