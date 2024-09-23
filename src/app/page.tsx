'use client';

import BusinessCard from '@/components/BusinessCard/index.tsx';
import Career from '@/components/Career/index.tsx';
import Footer from '@/components/Footer/index.tsx';
import Header from '@/components/Header/index.tsx';
import Introduction from '@/components/Introduction/index.tsx';
import Skill from '@/components/Skill/index.tsx';
import theme from '@/styles/theme.ts';
import { Box, Stack, useMediaQuery } from '@mui/material';

export default function Home() {
  const isMediumSmaller = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        background: `radial-gradient(ellipse at center, ${theme.palette.yellow.main} 0%, ${theme.palette.green.main} 35%,${theme.palette.blue.light} 100%)`,
      }}
      display="flex"
      justifyContent="center"
    >
      <Stack width="100%" maxWidth="87.5rem">
        <Box display="flex" justifyContent="center">
          <Header />
        </Box>
        <Stack
          direction={isMediumSmaller ? 'column' : 'row'}
          marginTop="7.5rem"
        >
          {isMediumSmaller ? (
            <Box display="flex" justifyContent="center">
              <BusinessCard />
            </Box>
          ) : (
            <BusinessCard />
          )}
          <Stack marginLeft={isMediumSmaller ? 0 : '16rem'} gap="1rem">
            <Introduction />
            <Skill />
            <Career />
          </Stack>
        </Stack>
        <Footer />
      </Stack>
    </Box>
  );
}
