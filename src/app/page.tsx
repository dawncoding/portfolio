'use client';

import BusinessCard from '@/components/BusinessCard/index.tsx';
import Header from '@/components/Header/index.tsx';
import theme from '@/styles/theme.ts';
import { Box, Stack, useMediaQuery } from '@mui/material';

export default function Home() {
  const isMediumSmaller = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box
      sx={{ backgroundColor: theme.palette.background.default }}
      display="flex"
      justifyContent="center"
    >
      <Stack width="100%" maxWidth="87.5rem">
        <Header />
        <Box
          display="flex"
          justifyContent={isMediumSmaller ? 'center' : 'start'}
        >
          <BusinessCard />
        </Box>
      </Stack>
    </Box>
  );
}
