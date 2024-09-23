import { gowunBatang } from '@/styles/font.ts';
import { useTheme, Chip as MuiChip, ChipProps } from '@mui/material';

const Chip: React.FC<ChipProps> = ({ sx, ...rest }) => {
  const theme = useTheme();

  return (
    <MuiChip
      sx={{
        width: 'max-content',
        fontFamily: gowunBatang.style,
        fontWeight: 700,
        color: theme.palette.blue.dark,
        backgroundColor: theme.palette.common.white,
        border: `0.0625rem solid ${theme.palette.blue.dark}`,
        ...sx,
      }}
      {...rest}
    />
  );
};

export default Chip;
