import Circle from '@/components/Circle/index.tsx';
import Text from '@/components/Text/index.tsx';
import { Box, Stack, useMediaQuery, useTheme } from '@mui/material';

const Introduction: React.FC = () => {
  const theme = useTheme();
  const isMediumSmaller = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Stack
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
      <Text language="ko" sx={{ whiteSpace: 'pre-line' }}>
        {`저는 미리 발생할 만한 문제 상황을 예측하고 대비하는 능력을 갖춘 주니어 프론트엔드 개발자입니다.
        
        일상생활에서 소소하게 도움이 되는 물건들을 챙겨 다니며 주변 사람들에게 도움을 주다 보니 “도라에몽"이라는 별명을 얻게 되었습니다.
        
        이러한 성격은 업무에서도 발휘되었습니다. 개발 중에 겪었던 이슈와 해결과정을 기록하고 팀원들에게 공유함으로써, 향후 동일한 문제가 발생했을 때 신속하게 대처할 수 있도록 했습니다.`}
      </Text>
    </Stack>
  );
};

export default Introduction;
