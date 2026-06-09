import type { FeatureItem } from '@/pages/landing/types';

export const featureItems: FeatureItem[] = [
  {
    id: 'dashboard',
    label: '대시보드',
    imageUrl: 'https://d2ab13l3eziju4.cloudfront.net/frontend/대시보드.png',
    title: '학습 흐름을 한눈에 확인하고, 놓치고 있는 문제까지 다시 챙겨보세요.',
    description:
      '대시보드 탭에서는 최근 학습 기록과 추천 문제를 통해 나의 학습 상태를 자연스럽게 확인할 수 있습니다. 많이 틀린 문제는 더 자주 추천되고, 충분히 익숙해진 문제는 추천 빈도가 낮아져 반복 학습의 부담을 줄여줍니다.',
    bullets: ['오답 기반 문제 추천', '최근 풀이 기록 확인', '달력으로 이전 기록 조회'],
  },
  {
    id: 'solving',
    label: '문제 풀이',
    imageUrl: 'https://d2ab13l3eziju4.cloudfront.net/frontend/모의시험.png',
    title: '문제를 푸는 방식도 학습 스타일에 맞게 선택해보세요.',
    description:
      '문제 풀이 탭에서는 태그별로 원하는 문제를 골라 학습할 수 있으며, 학습 목적에 따라 시험 모드와 카드 모드를 선택할 수 있습니다. 타이머, 문제 셔플, 선택지 셔플 기능을 활용해 실제 시험처럼 연습하거나, 반복 학습에 집중하는 것도 가능합니다.',
    bullets: ['시험 모드 & 카드 모드 선택', '태그별 결과 분석', '시험 결과 PDF 저장'],
  },
  {
    id: 'management',
    label: '문제 관리',
    imageUrl: 'https://d2ab13l3eziju4.cloudfront.net/frontend/문제생성.png',
    title: '문제를 만들고, 수정하고, 함께 공유하는 모든 과정을 한곳에서 관리해보세요.',
    description:
      '문제 관리 페이지에서는 원하는 태그별로 문제를 쉽게 찾아볼 수 있으며, 문제 설명이 포함된 문제는 아이콘으로 구분되어 필요한 내용을 빠르게 확인할 수 있습니다.',
    bullets: ['태그별 문제 필터링', '객관식과 주관식 문제 생성', 'ZIP 파일 내보내기'],
  },
];
