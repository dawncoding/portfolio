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
  Stack,
  Tooltip,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { dmSerifDisplay } from '@/styles/font.ts';
import React from 'react';
import Text from '@/components/Text/index.tsx';

const Header: React.FC<{
  introRef: React.RefObject<HTMLDivElement>;
  skillRef: React.RefObject<HTMLDivElement>;
  careerRef: React.RefObject<HTMLDivElement>;
}> = ({ introRef, skillRef, careerRef }) => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const theme = useTheme();
  const isMediumSmaller = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (newOpen: boolean) => () => {
    setIsDrawerOpen(newOpen);
  };

  const handleScrollToSection = (
    sectionRef: React.RefObject<HTMLDivElement>
  ) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const DrawerList = (
    <Box onClick={toggleDrawer(false)} width="10rem">
      <List>
        <ListItem key="Intro" disablePadding>
          <ListItemButton onClick={() => handleScrollToSection(introRef)}>
            <Text language="en">Intro</Text>
          </ListItemButton>
        </ListItem>
        <ListItem key="Skill" disablePadding>
          <ListItemButton onClick={() => handleScrollToSection(skillRef)}>
            <Text language="en">Skill</Text>
          </ListItemButton>
        </ListItem>
        <ListItem key="Career" disablePadding>
          <ListItemButton onClick={() => handleScrollToSection(careerRef)}>
            <Text language="en">Career</Text>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <BoxShadowContainer
      width="95%"
      maxWidth="87.5rem"
      padding="1.5rem"
      margin="1rem"
      borderRadius="2.5rem"
      position="fixed"
      zIndex={3}
    >
      <Stack direction="row" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <Text language="en" variant="h1">
            Portfolio
          </Text>
        </Box>
        {isMediumSmaller ? (
          <>
            <Tooltip title="메뉴바가 열립니다." placement="bottom" arrow>
              <IconButton
                sx={{
                  color: theme.palette.common.black,
                  padding: 0,
                  '&:hover': {
                    color: theme.palette.blue.main,
                  },
                }}
                onClick={toggleDrawer(true)}
              >
                <MenuIcon sx={{ width: '2rem', height: '2rem' }} />
              </IconButton>
            </Tooltip>
            <Drawer open={isDrawerOpen} onClose={toggleDrawer(false)}>
              {DrawerList}
            </Drawer>
          </>
        ) : (
          <Stack direction="row" gap="1rem">
            <Button
              variant="text"
              sx={{
                color: theme.palette.common.black,
                textTransform: 'none',
                fontFamily: dmSerifDisplay.style,
              }}
              onClick={() => handleScrollToSection(introRef)}
            >
              Intro
            </Button>
            <Button
              variant="text"
              className={dmSerifDisplay.className}
              sx={{
                color: theme.palette.common.black,
                textTransform: 'none',
                fontFamily: dmSerifDisplay.style,
              }}
              onClick={() => handleScrollToSection(skillRef)}
            >
              Skill
            </Button>
            <Button
              variant="text"
              className={dmSerifDisplay.className}
              sx={{
                color: theme.palette.common.black,
                textTransform: 'none',
                fontFamily: dmSerifDisplay.style,
              }}
              onClick={() => handleScrollToSection(careerRef)}
            >
              Career
            </Button>
          </Stack>
        )}
      </Stack>
    </BoxShadowContainer>
  );
};

export default Header;
