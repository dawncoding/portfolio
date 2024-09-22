import BoxShadowContainer from '@/components/BoxShadowContainer/index.tsx';
import Text from '@/components/Text/index.tsx';
import { Stack } from '@mui/material';

type SkillCardProps = {
  skillTitle: string;
  children: React.ReactNode;
};

const SkillCard: React.FC<SkillCardProps> = ({ skillTitle, children }) => {
  return (
    <Stack alignItems="center" position="relative">
      <BoxShadowContainer
        display="flex"
        justifyContent="center"
        width="10rem"
        padding="1rem"
        borderRadius="2rem"
        position="absolute"
        top="-2.5rem"
      >
        <Text language="en" variant="h6">
          {skillTitle}
        </Text>
      </BoxShadowContainer>
      <BoxShadowContainer
        width="25rem"
        borderRadius="1rem"
        padding="2.5rem"
        display="flex"
        alignItems="center"
      >
        <Text language="ko" sx={{ whiteSpace: 'pre-line' }}>
          {children}
        </Text>
      </BoxShadowContainer>
    </Stack>
  );
};

export default SkillCard;
