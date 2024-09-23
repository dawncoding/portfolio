import Circle from '@/components/Circle/index.tsx';
import Text from '@/components/Text/index.tsx';
import { Box, Stack, useTheme } from '@mui/material';

const Career: React.FC = () => {
  const theme = useTheme();

  return (
    <Stack
      padding="2rem"
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
          Career.
        </Text>
      </Box>
    </Stack>
  );
};

export default Career;
