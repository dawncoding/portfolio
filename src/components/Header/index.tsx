'use client';

import BoxShadowContainer from '@/components/BoxShadowContainer/index.tsx';
import {
  Box,
  Button,
  IconButton,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Text from '@/components/Text/index.tsx';
import { dmSerifDisplay } from '@/styles/font.ts';

const Header: React.FC = () => {
  const theme = useTheme();
  const isMediumSmaller = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <BoxShadowContainer borderRadius="2.5rem" padding="1.5rem" margin="1rem">
      <Stack direction="row" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <Text language="en" variant="h5">
            Portfolio
          </Text>
        </Box>
        {isMediumSmaller ? (
          <IconButton sx={{ color: theme.palette.common.black, padding: 0 }}>
            <MenuIcon />
          </IconButton>
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
