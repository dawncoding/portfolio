import Circle from '@/components/Circle/index.tsx';
import SkillCard from '@/components/SkillCard/index.tsx';
import Text from '@/components/Text/index.tsx';
import { Box, Stack, useTheme } from '@mui/material';

const Skill: React.FC = () => {
  const theme = useTheme();
  // const isMediumSmaller = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Stack padding="2rem" gap="2rem">
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
      <Box gap="4rem" display="flex" flexWrap="wrap" justifyContent="center">
        <SkillCard skillTitle="HTML/CSS">
          {`- 디자인에 기반하여 웹 페이지의 구조를 결정할 수 있습니다.
        - Search Engine Optimization, BEM(Block, Element, Modifier), 반응형 디자인을 적용한 경험이 있습니다.
        - Sass(Scss)와 styled-components를 활용하여 스타일을 구성할 수 있습니다.`}
        </SkillCard>
        <SkillCard skillTitle="Javascript">
          {`- ES6+ 문법을 활용하여 웹 애플리케이션을 개발한 경험이 있습니다.
        - React.js 및 Next.js를 활용하여 웹 애플리케이션을 구축했습니다.
        - axios를 활용하여 HTTP 비동기 통신을 수행하며, 비동기 처리를 위해 async/await 구문을 적절히 활용할 수 있습니다.
        - Storybook을 활용하여 컴포넌트 중심 개발을 실천하며 시각적 테스팅과 API 문서를 효과적으로 관리할 수 있습니다.
        - Recoil 상태 관리 라이브러리를 활용하여 상태를 효율적으로 관리할 수 있습니다.`}
        </SkillCard>
        <SkillCard skillTitle="Typescript">
          {`- Typescript를 활용하여 웹 애플리케이션을 개발한 경험이 있습니다.
        - 필요에 따라 interface와 type을 적절히 분리하여 사용할 수 있습니다.`}
        </SkillCard>
        <SkillCard skillTitle="Server">
          {`- 서비스에서 MySQL 데이터베이스를 활용한 API 설계 및 CRUD 작업에 참여한 경험이 있습니다.
        - Sequelize와 MVC 패턴을 활용하여 데이터베이스와 애플리케이션 로직을 분리하여 개발한 경험이 있습니다.
        - Node.js를 활용하여 RESTful API를 개발할 수 있습니다.
        - AWS의 EC2, RDS를 활용하여 서버를 성공적으로 배포한 경험이 있습니다.`}
        </SkillCard>
        <SkillCard skillTitle="Communication">
          {`- 스크럼 회의 기록, 스프린트 회고, 코드 컨벤션 등 ground rule을 수립하여 협업에 도움이 되는 개발 문화를 조성하기 위해 노력했습니다.
        - 프로젝트에서 발생하는 여러 이슈와 해결 과정을 기록하고 관리했으며, 타 프로젝트에서 비슷한 이슈가 발생했을 때 자료를 구성원에게 공유하여 시행착오를 줄일 수 있었습니다.
        - 서비스를 배포하기 전에 Notion을 활용하여 QA 시트를 작성하고, 코드를 수정하여 사용자 인터페이스와 경험을 개선하는 데 기여했습니다.`}
        </SkillCard>
      </Box>
      {/* {isMediumSmaller ? (
        <Stack gap="4rem">
          <SkillCard skillTitle="HTML/CSS">
            {`- 디자인에 기반하여 웹 페이지의 구조를 결정할 수 있습니다.
        - Search Engine Optimization, BEM(Block, Element, Modifier), 반응형 디자인을 적용한 경험이 있습니다.
        - Sass(Scss)와 styled-components를 활용하여 스타일을 구성할 수 있습니다.`}
          </SkillCard>
          <SkillCard skillTitle="Javascript">
            {`- ES6+ 문법을 활용하여 웹 애플리케이션을 개발한 경험이 있습니다.
        - React.js 및 Next.js를 활용하여 웹 애플리케이션을 구축했습니다.
        - axios를 활용하여 HTTP 비동기 통신을 수행하며, 비동기 처리를 위해 async/await 구문을 적절히 활용할 수 있습니다.
        - Storybook을 활용하여 컴포넌트 중심 개발을 실천하며 시각적 테스팅과 API 문서를 효과적으로 관리할 수 있습니다.
        - Recoil 상태 관리 라이브러리를 활용하여 상태를 효율적으로 관리할 수 있습니다.`}
          </SkillCard>
          <SkillCard skillTitle="Typescript">
            {`- Typescript를 활용하여 웹 애플리케이션을 개발한 경험이 있습니다.
        - 필요에 따라 interface와 type을 적절히 분리하여 사용할 수 있습니다.`}
          </SkillCard>
          <SkillCard skillTitle="Server">
            {`- 서비스에서 MySQL 데이터베이스를 활용한 API 설계 및 CRUD 작업에 참여한 경험이 있습니다.
        - Sequelize와 MVC 패턴을 활용하여 데이터베이스와 애플리케이션 로직을 분리하여 개발한 경험이 있습니다.
        - Node.js를 활용하여 RESTful API를 개발할 수 있습니다.
        - AWS의 EC2, RDS를 활용하여 서버를 성공적으로 배포한 경험이 있습니다.`}
          </SkillCard>
          <SkillCard skillTitle="Communication">
            {`- 스크럼 회의 기록, 스프린트 회고, 코드 컨벤션 등 ground rule을 수립하여 협업에 도움이 되는 개발 문화를 조성하기 위해 노력했습니다.
        - 프로젝트에서 발생하는 여러 이슈와 해결 과정을 기록하고 관리했으며, 타 프로젝트에서 비슷한 이슈가 발생했을 때 자료를 구성원에게 공유하여 시행착오를 줄일 수 있었습니다.
        - 서비스를 배포하기 전에 Notion을 활용하여 QA 시트를 작성하고, 코드를 수정하여 사용자 인터페이스와 경험을 개선하는 데 기여했습니다.`}
          </SkillCard>
        </Stack>
      ) : (
        <Stack gap="4rem">
          <Stack direction="row" gap="1rem" justifyContent="center">
            <SkillCard skillTitle="HTML/CSS">
              {`- 디자인에 기반하여 웹 페이지의 구조를 결정할 수 있습니다.
        - Search Engine Optimization, BEM(Block, Element, Modifier), 반응형 디자인을 적용한 경험이 있습니다.
        - Sass(Scss)와 styled-components를 활용하여 스타일을 구성할 수 있습니다.`}
            </SkillCard>
            <SkillCard skillTitle="Javascript">
              {`- ES6+ 문법을 활용하여 웹 애플리케이션을 개발한 경험이 있습니다.
        - React.js 및 Next.js를 활용하여 웹 애플리케이션을 구축했습니다.
        - axios를 활용하여 HTTP 비동기 통신을 수행하며, 비동기 처리를 위해 async/await 구문을 적절히 활용할 수 있습니다.
        - Storybook을 활용하여 컴포넌트 중심 개발을 실천하며 시각적 테스팅과 API 문서를 효과적으로 관리할 수 있습니다.
        - Recoil 상태 관리 라이브러리를 활용하여 상태를 효율적으로 관리할 수 있습니다.`}
            </SkillCard>
          </Stack>
          <Stack direction="row" gap="1rem" justifyContent="center">
            <SkillCard skillTitle="Typescript">
              {`- Typescript를 활용하여 웹 애플리케이션을 개발한 경험이 있습니다.
        - 필요에 따라 interface와 type을 적절히 분리하여 사용할 수 있습니다.`}
            </SkillCard>
            <SkillCard skillTitle="Server">
              {`- 서비스에서 MySQL 데이터베이스를 활용한 API 설계 및 CRUD 작업에 참여한 경험이 있습니다.
        - Sequelize와 MVC 패턴을 활용하여 데이터베이스와 애플리케이션 로직을 분리하여 개발한 경험이 있습니다.
        - Node.js를 활용하여 RESTful API를 개발할 수 있습니다.
        - AWS의 EC2, RDS를 활용하여 서버를 성공적으로 배포한 경험이 있습니다.`}
            </SkillCard>
          </Stack>
          <Box display="flex" justifyContent="start">
            <SkillCard skillTitle="Communication">
              {`- 스크럼 회의 기록, 스프린트 회고, 코드 컨벤션 등 ground rule을 수립하여 협업에 도움이 되는 개발 문화를 조성하기 위해 노력했습니다.
        - 프로젝트에서 발생하는 여러 이슈와 해결 과정을 기록하고 관리했으며, 타 프로젝트에서 비슷한 이슈가 발생했을 때 자료를 구성원에게 공유하여 시행착오를 줄일 수 있었습니다.
        - 서비스를 배포하기 전에 Notion을 활용하여 QA 시트를 작성하고, 코드를 수정하여 사용자 인터페이스와 경험을 개선하는 데 기여했습니다.`}
            </SkillCard>
          </Box>
        </Stack>
      )} */}

      <Box display="flex" justifyContent="end" padding="2rem">
        <Text language="en" variant="h4">
          Designed & Developed by KIMSUNJIN
        </Text>
      </Box>
    </Stack>
  );
};

export default Skill;
