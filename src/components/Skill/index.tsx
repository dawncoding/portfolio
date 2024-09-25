import Circle from '@/components/Circle/index.tsx';
import SkillCard from '@/components/SkillCard/index.tsx';
import Text from '@/components/Text/index.tsx';
import { Box, Divider, Stack, useTheme } from '@mui/material';

const Skill: React.FC = () => {
  const theme = useTheme();

  return (
    <Stack padding="2rem" gap="1rem">
      <Stack direction="row" justifyContent="end">
        <Box display="flex" alignItems="end">
          <Text language="ko" variant="h6">
            제가 보유하고 있는 기술 스택을 소개합니다.
          </Text>
        </Box>
        <Box
          display="flex"
          justifyContent="end"
          marginBottom="1.5rem"
          position="relative"
        >
          <Circle direction="right" />
          <Text
            language="en"
            variant="h4"
            position="absolute"
            top="2.5rem"
            right="2rem"
            zIndex={1}
            sx={{ color: theme.palette.common.white }}
          >
            Skill.
          </Text>
        </Box>
      </Stack>
      <Divider />
      <Box
        gap="4rem"
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        marginTop="3rem"
      >
        <SkillCard skillTitle="HTML/CSS">
          <Text
            component="div"
            language="ko"
            marginBottom="0.5rem"
            marginTop="1rem"
          >
            {`- `}
            <Text
              component="span"
              language="ko"
              sx={{ color: theme.palette.blue.dark }}
            >
              디자인
            </Text>
            {`에 기반하여 `}
            <Text
              component="span"
              language="ko"
              sx={{ color: theme.palette.blue.dark }}
            >
              웹 페이지의 구조를 결정
            </Text>
            할 수 있습니다.
          </Text>
          <Text component="div" language="ko" marginBottom="0.5rem">
            {`- `}
            <Text
              component="span"
              language="ko"
              sx={{ color: theme.palette.blue.dark }}
            >
              Search Engine Optimization, BEM(Block, Element, Modifier), 반응형
              디자인
            </Text>
            을 적용한 경험이 있습니다.
          </Text>
          <Text component="div" language="ko" marginBottom="0.5rem">
            {'- '}
            <Text
              component="span"
              language="ko"
              sx={{ color: theme.palette.blue.dark }}
            >
              Sass(Scss)
            </Text>
            {`와 `}
            <Text
              component="span"
              language="ko"
              sx={{ color: theme.palette.blue.dark }}
            >
              styled-components
            </Text>
            를 활용하여 스타일을 구성할 수 있습니다.
          </Text>
        </SkillCard>

        <SkillCard skillTitle="Javascript">
          <Text
            component="div"
            language="ko"
            marginBottom="0.5rem"
            marginTop="1rem"
          >
            {`- `}
            <Text
              component="span"
              language="ko"
              sx={{ color: theme.palette.blue.dark }}
            >
              ES6+ 문법
            </Text>
            을 활용하여 웹 애플리케이션을 개발한 경험이 있습니다.
          </Text>
          <Text component="div" language="ko" marginBottom="0.5rem">
            {`- `}
            <Text
              component="span"
              language="ko"
              sx={{ color: theme.palette.blue.dark }}
            >
              React.js
            </Text>
            {` 및 `}
            <Text
              component="span"
              language="ko"
              sx={{ color: theme.palette.blue.dark }}
            >
              Next.js
            </Text>
            를 활용하여 웹 애플리케이션을 구축했습니다.
          </Text>
          <Text component="div" language="ko" marginBottom="0.5rem">
            {`- `}
            <Text
              component="span"
              language="ko"
              sx={{ color: theme.palette.blue.dark }}
            >
              axios
            </Text>
            {`를 활용하여 HTTP 비동기 통신을 수행하며, 비동기 처리를 위해 `}
            <Text
              component="span"
              language="ko"
              sx={{ color: theme.palette.blue.dark }}
            >
              async/await
            </Text>
            {` 구문을 적절히 활용할 수 있습니다.`}
          </Text>
          <Text component="div" language="ko" marginBottom="0.5rem">
            {`- `}
            <Text
              component="span"
              language="ko"
              sx={{ color: theme.palette.blue.dark }}
            >
              Storybook
            </Text>
            을 활용하여 컴포넌트 중심 개발을 실천하며 시각적 테스팅과 API 문서를
            효과적으로 관리할 수 있습니다.
          </Text>
          <Text component="div" language="ko" marginBottom="0.5rem">
            {`- `}
            <Text
              component="span"
              language="ko"
              sx={{ color: theme.palette.blue.dark }}
            >
              Recoil
            </Text>
            {` 상태 관리 라이브러리를 활용하여 상태를 효율적으로 관리할 수 있습니다.`}
          </Text>
        </SkillCard>

        <SkillCard skillTitle="Typescript">
          <Text
            component="div"
            language="ko"
            marginBottom="0.5rem"
            marginTop="1rem"
          >
            {`- `}
            <Text
              component="span"
              language="ko"
              sx={{ color: theme.palette.blue.dark }}
            >
              Typescript
            </Text>
            를 활용하여 웹 애플리케이션을 개발한 경험이 있습니다.
          </Text>
          <Text component="div" language="ko" marginBottom="0.5rem">
            {`- 필요에 따라 `}
            <Text
              component="span"
              language="ko"
              sx={{ color: theme.palette.blue.dark }}
            >
              interface
            </Text>
            {`와 `}
            <Text
              component="span"
              language="ko"
              sx={{ color: theme.palette.blue.dark }}
            >
              type
            </Text>
            을 적절히 분리하여 사용할 수 있습니다.
          </Text>
        </SkillCard>

        <SkillCard skillTitle="Server">
          <Text
            component="div"
            language="ko"
            marginBottom="0.5rem"
            marginTop="1rem"
          >
            {`- 서비스에서 `}
            <Text
              component="span"
              language="ko"
              sx={{ color: theme.palette.blue.dark }}
            >
              MySQL 데이터베이스
            </Text>
            {`를 활용한 `}
            <Text
              component="span"
              language="ko"
              sx={{ color: theme.palette.blue.dark }}
            >
              API 설계 및 CRUD 작업
            </Text>
            에 참여한 경험이 있습니다.
          </Text>
          <Text component="div" language="ko" marginBottom="0.5rem">
            {`- `}
            <Text
              component="span"
              language="ko"
              sx={{ color: theme.palette.blue.dark }}
            >
              Sequelize
            </Text>
            {`와 `}
            <Text
              component="span"
              language="ko"
              sx={{ color: theme.palette.blue.dark }}
            >
              MVC 패턴
            </Text>
            을 활용하여 데이터베이스와 애플리케이션 로직을 분리하여 개발한
            경험이 있습니다.
          </Text>
          <Text component="div" language="ko" marginBottom="0.5rem">
            {`- `}
            <Text
              component="span"
              language="ko"
              sx={{ color: theme.palette.blue.dark }}
            >
              Node.js
            </Text>
            {`를 활용하여 `}
            <Text
              component="span"
              language="ko"
              sx={{ color: theme.palette.blue.dark }}
            >
              RESTful API
            </Text>
            를 개발할 수 있습니다.
          </Text>
          <Text component="div" language="ko" marginBottom="0.5rem">
            {`- `}
            <Text
              component="span"
              language="ko"
              sx={{ color: theme.palette.blue.dark }}
            >
              AWS의 EC2, RDS
            </Text>
            를 활용하여 서버를 성공적으로 배포한 경험이 있습니다.
          </Text>
        </SkillCard>
        <SkillCard skillTitle="Communication">
          <Text
            component="div"
            language="ko"
            marginBottom="0.5rem"
            marginTop="1rem"
          >
            {`- 스크럼 회의 기록, 스프린트 회고, 코드 컨벤션 등 `}
            <Text
              component="span"
              language="ko"
              sx={{ color: theme.palette.blue.dark }}
            >
              ground rule
            </Text>
            을 수립하여 협업에 도움이 되는 개발 문화를 조성하기 위해
            노력했습니다.
          </Text>
          <Text component="div" language="ko" marginBottom="0.5rem">
            {`- 프로젝트에서 발생하는 `}
            <Text
              component="span"
              language="ko"
              sx={{ color: theme.palette.blue.dark }}
            >
              여러 이슈와 해결 과정을 기록
            </Text>
            {`하고 관리했으며, 타 프로젝트에서 `}
            <Text
              component="span"
              language="ko"
              sx={{ color: theme.palette.blue.dark }}
            >
              비슷한 이슈가 발생
            </Text>
            {`했을 때 자료를 `}
            <Text
              component="span"
              language="ko"
              sx={{ color: theme.palette.blue.dark }}
            >
              팀원에게 공유
            </Text>
            하여 시행착오를 줄일 수 있었습니다.
          </Text>
          <Text component="div" language="ko" marginBottom="0.5rem">
            {`- 서비스를 배포하기 전에 `}
            <Text
              component="span"
              language="ko"
              sx={{ color: theme.palette.blue.dark }}
            >
              Notion
            </Text>
            {`을 활용하여 `}
            <Text
              component="span"
              language="ko"
              sx={{ color: theme.palette.blue.dark }}
            >
              QA 시트를 작성
            </Text>
            하고, 코드를 수정하여 사용자 인터페이스와 경험을 개선하는 데
            기여했습니다.
          </Text>
        </SkillCard>
      </Box>
    </Stack>
  );
};

export default Skill;
