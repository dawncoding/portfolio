import { Box, IconProps, useTheme } from '@mui/material';

type CircleProps = IconProps & {
  direction: string;
};

const Circle: React.FC<CircleProps> = ({ direction, sx }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '5.5rem',
        height: '5.5rem',
        backgroundColor:
          direction === 'right'
            ? theme.palette.blue.main
            : theme.palette.blue.light,
        borderRadius: '50%',
        boxShadow: `0rem 0.25rem 0.25rem 0rem ${theme.palette.gray.main}`,
        ...sx,
      }}
    />
  );
};

export default Circle;
