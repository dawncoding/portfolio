'use client';

import BoxShadowContainer from '@/components/BoxShadowContainer/index.tsx';
import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Text from '@/components/Text/index.tsx';
import { dmSerifDisplay } from '@/styles/font.ts';
import React from 'react';

const Header: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const theme = useTheme();
  const isMediumSmaller = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (newOpen: boolean) => () => {
    setIsDrawerOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: '40%' }} onClick={toggleDrawer(false)}>
      <List>
        {[
          'Intro',
          'Skill',
          'Career',
          'Team Projects',
          'Personal Experience',
        ].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <BoxShadowContainer borderRadius="2.5rem" padding="1.5rem" margin="1rem">
      <Stack direction="row" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <Text language="en" variant="h1">
            Portfolio
          </Text>
        </Box>
        {isMediumSmaller ? (
          <>
            <IconButton
              sx={{
                color: theme.palette.common.black,
                padding: 0,
              }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon sx={{ width: '2rem', height: '2rem' }} />
            </IconButton>
            <Drawer open={isDrawerOpen} onClose={toggleDrawer(false)}>
              {DrawerList}
            </Drawer>
          </>
        ) : (
          <Stack direction="row" gap="1rem">
            <Button
              variant="text"
              className={dmSerifDisplay.className}
              sx={{
                color: theme.palette.common.black,
                textTransform: 'none',
              }}
            >
              Intro
            </Button>
            <Button
              variant="text"
              className={dmSerifDisplay.className}
              sx={{
                color: theme.palette.common.black,
                textTransform: 'none',
              }}
            >
              Skill
            </Button>
            <Button
              variant="text"
              className={dmSerifDisplay.className}
              sx={{
                color: theme.palette.common.black,
                textTransform: 'none',
              }}
            >
              Career
            </Button>
            <Button
              variant="text"
              className={dmSerifDisplay.className}
              sx={{
                color: theme.palette.common.black,
                textTransform: 'none',
              }}
            >
              Team Projects
            </Button>
            <Button
              variant="text"
              className={dmSerifDisplay.className}
              sx={{
                color: theme.palette.common.black,
                textTransform: 'none',
              }}
            >
              Personal Experience
            </Button>
          </Stack>
        )}
      </Stack>
    </BoxShadowContainer>
  );
};

export default Header;
