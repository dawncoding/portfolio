import Circle from '@/components/Circle/index.tsx';
import Text from '@/components/Text/index.tsx';
import { Box, Stack, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

const Introduction = React.forwardRef<HTMLDivElement>((_, ref) => {
  const theme = useTheme();
  const isMediumSmaller = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Stack
      ref={ref}
      padding="2rem"
      marginTop={isMediumSmaller ? '1rem' : 0}
      justifyContent="space-between"
      sx={{ backgroundColor: theme.palette.background.default }}
    >
      <Box position="relative" marginBottom="1.5rem">
        <Circle direction="left" />
        <Text
          language="en"
          variant="h4"
          position="absolute"
          top="2.5rem"
          left="2rem"
          zIndex={1}
        >
          Intro.
        </Text>
      </Box>
      <Text component="div" language="ko" sx={{ whiteSpace: 'pre-line' }}>
        <Stack gap="0.5rem">
          <Text component="div" language="ko">
            {`저는 `}
            <Text
              component="span"
              language="ko"
              sx={{ color: theme.palette.blue.dark }}
            >
              발생할 수 있는 문제를 미리 파악하고, 이를 선제적으로 해결할 준비를
              갖춘
            </Text>
            {` 주니어 프론트엔드 개발자입니다.`}
          </Text>
          <Text component="div" language="ko">
            {`- 저의 장점은 `}
            <Text
              component="span"
              language="ko"
              sx={{ color: theme.palette.blue.dark }}
            >
              프론트엔드 개발자로서
            </Text>
            {` 다음과 같이 발휘되었습니다.`}
          </Text>
          <Text language="ko" paddingLeft="2rem">
            컴포넌트의 재사용성과 코드의 일관성을 강화하여, 유지보수에 필요한
            시간을 줄이고 효율성을 높이기 위해 노력했습니다.
          </Text>
          <Text component="div" language="ko">
            {`- 저의 장점은 `}
            <Text
              component="span"
              language="ko"
              sx={{ color: theme.palette.blue.dark }}
            >
              협업할 때
            </Text>
            {` 다음과 같이 발휘되었습니다.`}
          </Text>
          <Text language="ko" paddingLeft="2rem">
            개발하면서 겪었던 이슈와 해결하는 과정을 기록하고, 이를 팀원들에게
            공유하여 향후 동일한 문제가 발생했을 때 신속하게 대처할 수 있도록
            했습니다.
          </Text>
        </Stack>
      </Text>
    </Stack>
  );
});

Introduction.displayName = 'Introduction';

export default Introduction;
