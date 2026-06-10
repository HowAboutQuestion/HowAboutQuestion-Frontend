import type { HelpCategory } from '@/pages/help/types';

export const management: HelpCategory = {
  id: 'management',
  label: '문제 관리',
  steps: [
    {
      id: 'management-create',
      title: '객관식 & 주관식 문제 만들기',
      description:
        '문제 관리 페이지에서 직접 문제를 만들 수 있습니다. 객관식은 선택지를 추가하고 정답을 지정하는 방식이며, 주관식은 직접 정답 텍스트를 입력합니다. 문제마다 상세 설명을 추가하면 학습자가 오답 시 해설을 확인할 수 있습니다.',
      imageUrl: 'https://d2ab13l3eziju4.cloudfront.net/frontend/문제생성.png',
    },
    {
      id: 'management-tag',
      title: '태그로 문제 분류하기',
      description:
        '생성한 문제에 태그를 붙여 체계적으로 분류할 수 있습니다. 태그를 기준으로 문제를 필터링하면 원하는 주제의 문제만 빠르게 찾을 수 있으며, 문제 풀이 화면에서도 태그 선택에 활용됩니다.',
      imageUrl: 'https://d2ab13l3eziju4.cloudfront.net/frontend/문제생성.png',
    },
    {
      id: 'management-export',
      title: 'ZIP 파일로 내보내기',
      description:
        '내가 만든 문제를 ZIP 파일로 내보내 다른 기기나 다른 사용자와 공유할 수 있습니다. ZIP 파일을 앱에 다시 가져오면 문제 세트를 빠르게 복원할 수 있어 협업과 배포에 유용합니다.',
      imageUrl: 'https://d2ab13l3eziju4.cloudfront.net/frontend/문제생성.png',
    },
  ],
};
