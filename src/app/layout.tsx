"use client";

import theme from "@/styles/theme.ts";
import { CssBaseline, ThemeProvider } from "@mui/material";
// import localFont from "next/font/local";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
