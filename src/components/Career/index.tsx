import Chip from '@/components/Chip/index.tsx';
import Circle from '@/components/Circle/index.tsx';
import Text from '@/components/Text/index.tsx';
import { ArrowDropDown } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  CardMedia,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';

const Career: React.FC = () => {
  const theme = useTheme();
  const isMediumSmaller = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Stack
      gap="1.5rem"
      padding="2rem"
      sx={{ backgroundColor: theme.palette.background.default }}
    >
      <Box position="relative">
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
      <Stack direction="row" justifyContent="space-between">
        <Text
          variant="h6"
          language="ko"
          sx={{ whiteSpace: 'pre-line', color: theme.palette.blue.dark }}
        >{`미래내일일경험 인턴,
        엘리스 Product Division Frontend`}</Text>
        <Text
          variant="h6"
          language="ko"
          sx={{ whiteSpace: 'pre-line', textAlign: 'end' }}
        >{`2024.07.08 ~ 2024.09.10
        (주2일 16시간 근무)`}</Text>
      </Stack>
      <Stack direction="row" flexWrap="wrap" gap="0.5rem">
        <Chip label="ES6+ Javascript" />
        <Chip label="React 16+" />
        <Chip label="Typescript" />
        <Chip label="Material UI" />
      </Stack>
      <Text language="ko">
        올인원 디지털 교육 플랫폼인 엘리스LXP에서 수업을 관리하고 구성하는
        페이지들에서 사용된 elice/blocks 컴포넌트를 Material UI 기반의
        컴포넌트로 교체하여 코드 베이스를 업데이트하여 UI 일관성 및 개발 생산성
        향상
      </Text>
      <Stack>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ArrowDropDown />}
            aria-controls="panel1-content"
          >
            <Text language="ko">컴포넌트 분석 및 매핑</Text>
          </AccordionSummary>
          <AccordionDetails>
            <Text language="ko">
              엘리스에서 자체 제작된 React component library인 elice/blocks
              컴포넌트와 Material UI 기반의 컴포넌트를 비교, 분석하여 대체
              가능한 컴포넌트 매핑
            </Text>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ArrowDropDown />}
            aria-controls="panel2-content"
          >
            <Text language="ko">코드 베이스 업데이트</Text>
          </AccordionSummary>
          <AccordionDetails>
            <Stack gap="0.5rem">
              <Text language="ko">
                엘리스LXP에서 수업 관리자가 수업 정보를 입력하는 페이지, 수업
                이수 조건 및 수료증 설정 페이지, 분반 구성 페이지, 수업 정보를
                소개하는 페이지에서 사용된 레거시 컴포넌트를 Material UI
                컴포넌트로 교체하여 코드 베이스 업데이트
              </Text>
              <Text language="ko">- 공용 컴포넌트 설계 및 구현</Text>
              <Text language="ko" paddingLeft="2rem">
                - 배경: 엘리스LXP 플랫폼에서 elice/blocks 라이브러리의 input
                컴포넌트에 적용된 글자 수 제한 기능을 Material UI의 TextField로
                대체하는 과정에서, TextField가 기본적으로 글자 수 제한 기능을
                제공하지 않는 것을 발견
              </Text>
              <Text language="ko" paddingLeft="2rem">
                - 문제 인식: 초기에는 수업 정보 입력 페이지에서만 사용할 수 있는
                커스텀 기능을 구현할 계획이었으나, 프로젝트 전반에 걸쳐 다양한
                페이지에서 글자 수 제한 기능의 필요성 인식
              </Text>
              <Text language="ko" paddingLeft="2rem">
                - 해결: 중복된 코드 작성과 유지보수의 어려움을 최소화하기 위해
                공용 컴포넌트로서 글자 수 제한 기능을 추가한 커스텀 TextField
                컴포넌트를 설계. 이를 엘리스의 코드 컨벤션에 맞춰 구현하여, 여러
                페이지에서 재사용 가능하도록 구성
              </Text>
              <Text language="ko" paddingLeft="2rem">
                - 성과: 공용 컴포넌트를 통해 다양한 페이지에서 통일된 기능을
                제공하고 유지보수의 일관성을 유지하면서도 각 페이지별 요구사항
                충족
              </Text>
            </Stack>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ArrowDropDown />}
            aria-controls="panel3-content"
          >
            <Text language="ko">스타일링 및 테마 설정</Text>
          </AccordionSummary>
          <AccordionDetails>
            <Text language="ko">
              Material UI의 테마 설정 기능을 활용하여 기존 스타일과 일치하도록
              테마 구성 및 적용
            </Text>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ArrowDropDown />}
            aria-controls="panel4-content"
          >
            <Text language="ko">MUI 컴포넌트 migration 문서화</Text>
          </AccordionSummary>
          <AccordionDetails sx={{ position: 'relative' }}>
            <Stack gap="0.5rem">
              <Text language="ko">
                엘리스LXP 수업 관련 페이지 migration을 담당하는 스쿼드의
                팀장으로서, 레거시 컴포넌트를 Material UI 컴포넌트로 전환하는
                과정을 문서화하는 작업 주도
              </Text>
              <Text language="ko" paddingLeft="2rem">
                - Notion을 활용하여 각 레거시 컴포넌트를 대응하는 Material UI
                컴포넌트와 매핑, migration 과정에서 발생할 수 있는 이슈 및 해결
                방안에 대한 설명 추가
              </Text>
              <Text language="ko" paddingLeft="2rem">
                - 팀 간 협업을 원활하게 하기 위해 레퍼런스 문서를 제공하여 코드
                베이스의 일관성 및 유지보수성 향상에 기여
              </Text>
              <Box display="flex" justifyContent="end">
                <CardMedia
                  component="img"
                  src="/images/notion-component-migration-mapping.png"
                  alt="component migration mapping"
                  sx={{
                    boxShadow: `0rem 0.25rem 0.25rem 0rem ${theme.palette.gray.main}`,
                  }}
                />
              </Box>

              <CardMedia
                component="img"
                src="/images/avatar-career.png"
                alt="avatar"
                sx={{
                  width: isMediumSmaller ? '8rem' : '10rem',
                  height: isMediumSmaller ? '8rem' : '10rem',
                  position: 'absolute',
                  right: '0rem',
                  bottom: '0rem',
                }}
              />
            </Stack>
          </AccordionDetails>
        </Accordion>
      </Stack>
    </Stack>
  );
};

export default Career;
