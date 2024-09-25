import { Box } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

type AosContainerProps = {
  dataAos: string;
  children: React.ReactNode;
};

const AosContainer: React.FC<AosContainerProps> = ({ dataAos, children }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return <Box data-aos={dataAos}>{children}</Box>;
};

export default AosContainer;
