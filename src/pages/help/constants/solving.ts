import type { HelpCategory } from '@/pages/help/types';

export const solving: HelpCategory = {
  id: 'solving',
  label: '문제 풀이',
  steps: [
    {
      id: 'solving-mode',
      title: '시험 모드 & 카드 모드 선택',
      description:
        '학습 목적에 따라 두 가지 풀이 모드를 선택할 수 있습니다. 시험 모드는 실제 시험처럼 타이머와 함께 문제를 풀고 결과를 분석받을 수 있으며, 카드 모드는 플래시카드 방식으로 빠르게 반복 학습하기에 적합합니다.',
      imageUrl: 'https://d2ab13l3eziju4.cloudfront.net/frontend/모의시험.png',
    },
    {
      id: 'solving-tag',
      title: '태그별 문제 필터링',
      description:
        '원하는 태그를 선택해 해당 주제의 문제만 골라서 풀 수 있습니다. 여러 태그를 동시에 선택해 복합적인 주제로 학습하거나, 취약한 태그만 집중적으로 연습하는 것도 가능합니다.',
      imageUrl: 'https://d2ab13l3eziju4.cloudfront.net/frontend/모의시험.png',
    },
    {
      id: 'solving-shuffle',
      title: '셔플 & 타이머 옵션',
      description:
        '문제 순서 셔플, 선택지 셔플, 타이머 설정을 자유롭게 조합해 다양한 학습 환경을 만들 수 있습니다. 실제 시험과 최대한 유사한 환경에서 연습하면 실전 적응력을 높일 수 있습니다.',
      imageUrl: 'https://d2ab13l3eziju4.cloudfront.net/frontend/모의시험.png',
    },
    {
      id: 'solving-pdf',
      title: '시험 결과 PDF 저장',
      description:
        '시험 모드 종료 후 결과 화면에서 성적표를 PDF로 저장할 수 있습니다. 틀린 문제와 정답, 정답률이 담긴 PDF를 보관하면 추후 오프라인에서도 복습 자료로 활용할 수 있습니다.',
      imageUrl: 'https://d2ab13l3eziju4.cloudfront.net/frontend/모의시험.png',
    },
  ],
};
