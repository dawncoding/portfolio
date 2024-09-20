'use client';

import BoxShadowContainer from '@/components/BoxShadowContainer/index.tsx';
import {
  Avatar,
  Box,
  Button,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import { dmSerifDisplay } from '@/styles/font.ts';
import Text from '@/components/Text/index.tsx';

const BusinessCard: React.FC = () => {
  const theme = useTheme();
  const isMediumSmaller = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <BoxShadowContainer
      borderRadius="1rem"
      margin="1rem"
      width={isMediumSmaller ? '90%' : '30%'}
    >
      <Stack direction={isMediumSmaller ? 'row' : 'column'} height="100%">
        {/* Avatar */}
        <Box
          width={isMediumSmaller ? '40%' : '100%'}
          padding="1rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            borderRight: isMediumSmaller
              ? `0.125rem solid ${theme.palette.blue.light}`
              : 'none',
            borderBottom: isMediumSmaller
              ? 'none'
              : `0.125rem solid ${theme.palette.blue.light}`,
          }}
        >
          <Avatar
            alt="profile"
            src="/images/profile.png"
            sx={{
              backgroundColor: theme.palette.blue.light,
              width: '8rem',
              height: '8rem',
            }}
          />
        </Box>
        {/* Info */}
        <Stack
          width={isMediumSmaller ? '60%' : '100%'}
          padding="1rem"
          gap="1rem"
          justifyContent="space-between"
        >
          <Box display="flex" justifyContent="end">
            <Text language="en" variant="h6">
              Info.
            </Text>
          </Box>
          <Stack>
            <Text language="ko">김선진</Text>
            <Stack direction="row" gap="0.5rem">
              <Box display="flex" alignItems="center">
                <EmailIcon />
              </Box>
              <Button
                variant="text"
                sx={{
                  padding: 0,
                  color: theme.palette.common.black,
                  textTransform: 'none',
                  fontFamily: dmSerifDisplay.style,
                }}
              >
                sunnuri99@gmail.com
              </Button>
            </Stack>
            <Stack direction="row" gap="0.5rem">
              <Box display="flex" alignItems="center">
                <GitHubIcon />
              </Box>
              <Button
                variant="text"
                sx={{
                  padding: 0,
                  color: theme.palette.common.black,
                  textTransform: 'none',
                  fontFamily: dmSerifDisplay.style,
                }}
              >
                GITHUB
              </Button>
            </Stack>
            <Stack direction="row" gap="0.5rem">
              <Box display="flex" alignItems="center">
                <LaptopMacIcon />
              </Box>
              <Button
                variant="text"
                sx={{
                  padding: 0,
                  color: theme.palette.common.black,
                  textTransform: 'none',
                  fontFamily: dmSerifDisplay.style,
                }}
              >
                TISTORY
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </BoxShadowContainer>
  );
};

export default BusinessCard;
