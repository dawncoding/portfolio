'use client';

import BoxShadowContainer from '@/components/BoxShadowContainer/index.tsx';
import {
  Avatar,
  Box,
  Button,
  Stack,
  Tooltip,
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
      width={isMediumSmaller ? '90%' : '14rem'}
      marginLeft={isMediumSmaller ? 0 : '1rem'}
      borderRadius="1rem"
      position={isMediumSmaller ? 'static' : 'fixed'}
      zIndex={2}
    >
      <Stack direction={isMediumSmaller ? 'row' : 'column'}>
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
            src="/images/avatar-business-card.png"
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
            <Text language="ko" marginBottom="0.5rem">
              김선진
            </Text>
            <Tooltip
              title="주소를 누르면 이메일을 입력하는 창이 열립니다."
              placement="right"
              arrow
            >
              <Button
                variant="text"
                size="small"
                startIcon={<EmailIcon />}
                sx={{
                  width: 'max-content',
                  color: theme.palette.common.black,
                  textTransform: 'none',
                  fontFamily: dmSerifDisplay.style,
                  '&:hover': {
                    color: theme.palette.blue.main,
                  },
                }}
                onClick={() =>
                  (window.location.href = 'mailto:sunnuri99@gmail.com')
                }
              >
                sunnuri99@gmail.com
              </Button>
            </Tooltip>
            <Tooltip
              title="새로운 탭에서 제 Github 페이지가 열립니다."
              placement="right"
              arrow
            >
              <Button
                variant="text"
                size="small"
                startIcon={<GitHubIcon />}
                sx={{
                  width: 'max-content',
                  color: theme.palette.common.black,
                  textTransform: 'none',
                  fontFamily: dmSerifDisplay.style,
                  '&:hover': {
                    color: theme.palette.blue.main,
                  },
                }}
                onClick={() =>
                  window.open('https://github.com/dawncoding', '_blank')
                }
              >
                GITHUB
              </Button>
            </Tooltip>
            <Tooltip
              title="새로운 탭에서 제 개발 블로그가 열립니다."
              placement="right"
              arrow
            >
              <Button
                variant="text"
                size="small"
                startIcon={<LaptopMacIcon />}
                sx={{
                  width: 'max-content',
                  color: theme.palette.common.black,
                  textTransform: 'none',
                  fontFamily: dmSerifDisplay.style,
                  '&:hover': {
                    color: theme.palette.blue.main,
                  },
                }}
                onClick={() =>
                  window.open('https://dawnwithsun.tistory.com/', '_blank')
                }
              >
                TISTORY
              </Button>
            </Tooltip>
          </Stack>
        </Stack>
      </Stack>
    </BoxShadowContainer>
  );
};

export default BusinessCard;
