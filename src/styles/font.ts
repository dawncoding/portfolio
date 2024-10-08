import { Gowun_Batang, DM_Serif_Display } from 'next/font/google';
import localFont from 'next/font/local';

const pretendard = localFont({
  src: '/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
});

const gowunBatang = Gowun_Batang({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap', // 화면에 폰트가 로딩되기 전 기본 폰트가 적용되도록 함
});

const dmSerifDisplay = DM_Serif_Display({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export { gowunBatang, dmSerifDisplay, pretendard };
