'use client';

import { dmSerifDisplay, gowunBatang } from '@/styles/font.ts';
import { Typography, TypographyProps } from '@mui/material';

type TextProps = TypographyProps & {
  children: React.ReactNode;
  language: 'en' | 'ko';
};

const Text: React.FC<TextProps> = ({ language, children, sx, ...rest }) => {
  return (
    <>
      {language === 'ko' ? (
        <Typography className={gowunBatang.className} sx={{ ...sx }} {...rest}>
          {children}
        </Typography>
      ) : (
        <Typography
          className={dmSerifDisplay.className}
          sx={{ ...sx }} // 사용자가 전달한 sx 스타일을 병합
          {...rest}
        >
          {children}
        </Typography>
      )}
    </>
  );
};

export default Text;