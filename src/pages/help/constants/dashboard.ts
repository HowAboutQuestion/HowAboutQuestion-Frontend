import type { HelpCategory } from '@/pages/help/types';

export const dashboard: HelpCategory = {
  id: 'dashboard',
  label: '대시보드',
  steps: [
    {
      id: 'dashboard-overview',
      title: '학습 현황 한눈에 보기',
      description:
        '대시보드에서는 나의 전체 학습 현황을 한눈에 확인할 수 있습니다. 최근 풀었던 문제와 오답 비율, 오늘의 학습 진행 상황이 한 화면에 정리되어 있어 매일 학습을 시작할 때 현재 상태를 빠르게 파악할 수 있습니다.',
      imageUrl: 'https://d2ab13l3eziju4.cloudfront.net/frontend/대시보드.png',
    },
    {
      id: 'dashboard-recommend',
      title: '오답 기반 문제 추천',
      description:
        '많이 틀린 문제는 더 자주 추천되고, 충분히 익숙해진 문제는 추천 빈도가 낮아집니다. 별도로 오답 노트를 관리하지 않아도 앱이 자동으로 복습이 필요한 문제를 추천해 학습 효율을 높여줍니다.',
      imageUrl: 'https://d2ab13l3eziju4.cloudfront.net/frontend/대시보드.png',
    },
    {
      id: 'dashboard-calendar',
      title: '달력으로 이전 기록 조회',
      description:
        '달력 뷰를 통해 날짜별 학습 기록을 한눈에 볼 수 있습니다. 특정 날짜를 선택하면 그날 풀었던 문제 목록과 결과를 다시 확인할 수 있어 꾸준한 학습 습관을 만드는 데 도움이 됩니다.',
      imageUrl: 'https://d2ab13l3eziju4.cloudfront.net/frontend/대시보드.png',
    },
  ],
};
