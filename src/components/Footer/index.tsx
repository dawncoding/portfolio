import Text from '@/components/Text/index.tsx';
import { Stack, useTheme } from '@mui/material';

const Footer: React.FC = () => {
  const theme = useTheme();

  return (
    <Stack display="flex" alignItems="end" padding="2rem">
      <Text language="en" variant="h4" sx={{ color: theme.palette.gray.main }}>
        Designed & Developed by
      </Text>
      <Text language="en" variant="h4">
        KIMSUNJIN
      </Text>
    </Stack>
  );
};

export default Footer;
