const cards = [
  {
    id: 1,
    name: '추적의 팔콘',
    img: `${process.env.PUBLIC_URL}/img/card_th/1.png`,
    activationTiming: '9\n7\n5\n3\n1',
    activationTarget:
      '공격 순서가 가장 빠른 적군 마법형\n공격 순서가 가장 빠른 적군 지원형\n공격 순서가 가장 빠른 적군 공격형',
    description:
      '아군의 공격이 팔콘 효과가 적용된 대상에게 집중됩니다.\n팔콘 유지시간 12턴',
  },
  {
    id: 2,
    name: '위습',
    img: `${process.env.PUBLIC_URL}/img/card_th/2.png`,
    activationTiming: ['6,5,4'],
    activationTarget: [
      '공격 순서가 가장 빠른 아군 방어형,공격 순서가 가장 빠른 아군 마법형,공격 순서가 가장 빠른 아군 공격형',
    ],
    description:
      '자신의 턴을 소모한 후 다음 순서의 아군에게 턴을 넘겨줍니다.\n위습 유지시간 8턴\n위습 유지시간 18턴 (마법형 선택 시)',
  },
  {
    id: 3,
    name: '휘감는 바이퍼',
    img: `${process.env.PUBLIC_URL}/img/card_th/3.png`,
    activationTiming: ['3', '2', '1'],
    activationTarget: [
      '진영 상단에 배치된 적군',
      '진영 하단에 배치된 적군',
      '진영 중단에 배치된 적군',
    ],
    description:
      '공격 및 지원 범위를 1칸으로 축소시킵니다.\n바이퍼 유지시간 12턴',
  },

  {
    id: 4,
    name: '울부짖는 다이어울프',
    img: `${process.env.PUBLIC_URL}/img/card_th/4.png`,
    activationTiming: ['1'],
    activationTarget: [
      '진영 상단에 배치된 적군',
      '진영 하단에 배치된 적군',
      '진영 중단에 배치된 적군',
    ],
    description:
      '공격력을 감소시킵니다.\n공격력 -300%\n치명 피해를 감소시킵니다.\n치명피해 -600%\n울프 유지시간 16턴',
  },
  {
    id: 5,
    name: '연속의 실피드',
    img: `${process.env.PUBLIC_URL}/img/card_th/5.png`,
    activationTiming: ['4', '13'],
    activationTarget: [
      '공격 순서가 가장 빠른 아군 공격형',
      '공격 순서가 가장 빠른 아군 방어형',
      '공격 순서가 가장 빠른 아군 마법형',
    ],
    description:
      '자신의 턴 동안 공격 및 지원 행동을 1회 더 할 수 있게 합니다.\n실피드 유지시간 8턴',
  },
  {
    id: 6,
    name: '죽음의 궁니르',
    img: `${process.env.PUBLIC_URL}/img/card_th/6.png`,
    activationTiming: ['9', '8', '7', '6', '5'],
    activationTarget: [
      '공격 순서가 가장 빠른 적군 공격형',
      '공격 순서가 가장 빠른 적군 마법형',
      '공격 순서가 가장 빠른 적군 방어형',
    ],
    description:
      '직접 추가 피해를 2회 입힙니다.\n적 최대생명력 x1500% 추가 피해',
  },
  {
    id: 7,
    name: '소생의 피닉스',
    img: `${process.env.PUBLIC_URL}/img/card_th/7.png`,
    activationTiming: ['13', '11', '9', '7', '5'],
    activationTarget: [
      '아군 무덤 중에서 공격 순서가 가장 빠른 공격형',
      '아군 무덤 중에서 공격 순서가 가장 빠른 마법형',
      '아군 무덤 중에서 공격 순서가 가장 빠른 방어형',
    ],
    description: '무덤 상태의 아군을 다시 전투에 참여할 수 있도록 합니다.',
  },

  {
    id: 8,
    name: '혼돈의 나이트메어',
    img: `${process.env.PUBLIC_URL}/img/card_th/8.png`,
    activationTiming: ['3', '2', '1'],
    activationTarget: [
      '적군 방어형 전체',
      '적군 공격형 전체',
      '적군 마법형 전체',
    ],
    description:
      '방어력이 감소됩니다.\n방어력 -100%\n받는 피해량이 증가됩니다.\n받는 피해량 +200%\n나이트메어 유지시간 14턴',
  },
  {
    id: 9,
    name: '복수의 나찰',
    img: `${process.env.PUBLIC_URL}/img/card_th/9.png`,
    activationTiming: ['4', '1'],
    activationTarget: [
      '공격 순서가 가장 빠른 아군 공격형',
      '공격 순서가 가장 빠른 아군 방어형',
      '공격 순서가 가장 빠른 아군 마법형',
    ],
    description:
      '일반 공격할 때 메인 대상에게 직접 추가 피해를 입힙니다.\n최대생명력 x55% 추가 피해\n나찰 유지시간 24턴',
  },
  {
    id: 10,
    name: '수호의 아이기스',
    img: `${process.env.PUBLIC_URL}/img/card_th/10.png`,
    activationTiming: ['6', '5', '4', '3', '2'],
    activationTarget: [
      '진영 상단에 배치된 아군',
      '진영 하단에 배치된 아군',
      '진영 중단에 배치된 아군',
    ],
    description:
      '자신을 메인 대상으로 공격하는 적의 공격 범위를 1칸으로 축소시킵니다.\n생명력을 제외한 모든 능력치가 증가합니다.\n모든 능력치 +15%\n아이기스 유지시간 10턴',
  },
  {
    id: 11,
    name: '피를 부르는 오로치',
    img: `${process.env.PUBLIC_URL}/img/card_th/11.png`,
    activationTiming: ['1'],
    activationTarget: [
      '진영 상단에 배치된 적군',
      '진영 하단에 배치된 적군',
      '진영 중단에 배치된 적군',
    ],
    description:
      '직접 지속 피해를 매 턴 입힙니다.\n매 턴 현재생명력 x51% 지속피해\n오로치 유지시간 24턴',
  },
  {
    id: 12,
    name: '유혹의 세이렌',
    img: `${process.env.PUBLIC_URL}/img/card_th/12.png`,
    activationTiming: ['4', '14'],
    activationTarget: [
      '공격 순서가 가장 빠른 적군 공격형',
      '공격 순서가 가장 빠른 적군 지원형',
      '공격 순서가 가장 빠른 적군 마법형',
    ],
    description:
      '현혹 효과를 적용합니다.\n대상을 현혹시켜 아군을 공격하게 만듭니다.\n같은 라인에 공격할 아군이 없을 경우 자신을 공격합니다.\n세이렌 유지시간 8턴',
  },

  {
    id: 13,
    name: '깨달음의 아미타',
    img: `${process.env.PUBLIC_URL}/img/card_th/13.png`,
    activationTiming: ['5', '4', '3', '2', '1'],
    activationTarget: [
      '공격 순서가 가장 느린 아군 마법형',
      '공격 순서가 가장 느린 아군 공격형',
      '공격 순서가 가장 느린 아군 방어형',
    ],
    description:
      '적의 공격을 아미타 효과가 적용된 대상에게 집중되게 합니다.\n아미타 효과가 적용된 대상이 받는 모든 피해량이 감소합니다.\n모든 피해량 감소 -50%\n아미타 유지시간 10턴',
  },
  {
    id: 14,
    name: '천둥의 불칸',
    img: `${process.env.PUBLIC_URL}/img/card_th/14.png`,
    activationTiming: ['5', '4', '3', '2', '1'],
    activationTarget: [
      '적군 방어형 전체',
      '적군 공격형 전체',
      '적군 마법형 전체',
    ],
    description: '적을 행동 불가 상태로 만듭니다.\n불칸 유지시간 5턴',
  },
  {
    id: 15,
    name: '처형의 아이언 메이든',
    img: `${process.env.PUBLIC_URL}/img/card_th/15.png`,
    activationTiming: ['1'],
    activationTarget: [
      '진영 상단에 배치된 적군',
      '진영 하단에 배치된 적군',
      '진영 중단에 배치된 적군',
    ],
    description:
      '생명력이 회복되지 않는 상태로 만듭니다.\n아이언 메이든 유지시간 36턴',
  },

  {
    id: 16,
    name: '대지의 정령',
    img: `${process.env.PUBLIC_URL}/img/card_th/16.png`,
    activationTiming: ['5', '4', '3', '2', '1'],
    activationTarget: [
      '진영 상단에 비어있는 최전방 위치',
      '진영 중단에 비어있는 최전방 위치',
      '진영 하단에 비어있는 최전방 위치',
    ],
    description: '돌의 장벽을 소환합니다.\n소환 유지시간 12턴',
  },
  {
    id: 17,
    name: '네메아의 사자 가죽',
    img: `${process.env.PUBLIC_URL}/img/card_th/17.png`,
    activationTiming: ['7', '6', '5', '4', '3'],
    activationTarget: [
      '진영 상단에 배치된 아군',
      '진영 하단에 배치된 아군',
      '진영 중단에 배치된 아군',
    ],
    description:
      '임시생명력을 얻습니다.\n공격력 x 치명피해 x 100% 임시생명력 증가\n네메아의 사자 가죽 유지시간 12턴',
  },
  {
    id: 18,
    name: '침묵의 복수자 비다르',
    img: `${process.env.PUBLIC_URL}/img/card_th/18.png`,
    activationTiming: ['5', '4', '3'],
    activationTarget: [
      '진영 상단에 배치된 적군',
      '진영 하단에 배치된 적군',
      '진영 중단에 배치된 적군',
    ],
    description:
      '지원형을 제외한 용병에게 침묵 효과를 적용합니다.\n비다르 유지시간 18턴',
  },

  {
    id: 19,
    name: '니케의 날개',
    img: `${process.env.PUBLIC_URL}/img/card_th/19.png`,
    activationTiming: ['7', '4', '1'],
    activationTarget: [
      '진영 상단에 배치된 아군',
      '진영 중단에 배치된 아군',
      '진영 하단에 배치된 아군',
    ],
    description:
      '공격력 증가 최대치(300%)가 증가됩니다.\n공격력 증가 최대치 = 500%\n공격력이 증가합니다.\n공격력 +300%\n니케의 날개 유지시간 24턴',
  },
  {
    id: 20,
    name: '판도라의 상자',
    img: `${process.env.PUBLIC_URL}/img/card_th/20.png`,
    activationTiming: ['7', '6', '5', '4', '3'],
    activationTarget: [
      '진영 상단에 최후방 위치',
      '진영 중단에 최후방 위치',
      '진영 하단에 최후방 위치',
    ],
    description: '판도라의 상자를 소환합니다.\n소환 유지시간 18턴',
  },
  {
    id: 21,
    name: '복수의 묠니르',
    img: `${process.env.PUBLIC_URL}/img/card_th/21.png`,
    activationTiming: ['1'],
    activationTarget: [
      '진영 상단에 비어있는 최전방 위치',
      '진영 하단에 비어있는 최전방 위치',
      '진영 중단에 비어있는 최전방 위치',
    ],
    description: '묠니르를 소환합니다.\n소환 유지시간 50턴',
  },
  {
    id: 22,
    name: '아르테미스의 슬픔',
    img: `${process.env.PUBLIC_URL}/img/card_th/22.png`,
    activationTiming: ['7', '4', '1'],
    activationTarget: [
      '진영 상단에 배치된 적군',
      '진영 중단에 배치된 적군',
      '진영 하단에 배치된 적군',
    ],
    description:
      '공격 및 지원 범위를 맨 뒤로 변경합니다.\n치명확률이 감소됩니다.\n치명확률 -300%\n아르테미스 유지시간 16턴',
  },

  {
    id: 23,
    name: '정화의 미스틸테인',
    img: `${process.env.PUBLIC_URL}/img/card_th/23.png`,
    activationTiming: ['9', '7', '5', '3', '1'],
    activationTarget: [
      '공격 순서가 가장 빠른 아군 방어형',
      '공격 순서가 가장 빠른 아군 마법형',
      '공격 순서가 가장 빠른 아군 공격형',
    ],
    description:
      '미스틸테인 효과가 적용되는 대상에게 적용된 모든 스펠카드 효과를 제거합니다.',
  },
  {
    id: 24,
    name: '제우스의 번개',
    img: `${process.env.PUBLIC_URL}/img/card_th/24.png`,
    activationTiming: ['7', '4', '1'],
    activationTarget: [
      '공격 순서가 가장 빠른 적군 방어형',
      '공격 순서가 가장 빠른 적군 마법형',
      '공격 순서가 가장 빠른 적군 공격형',
    ],
    description:
      '제우스의 번개 효과가 적용되는 대상 및 상하좌우로 연결된 적군 전체의 생명력을 제외한 모든 능력치가 감소됩니다. 지원형은 능력치 감소 효과를 받지 않습니다. 적 모든 능력치 -100%\n제우스의 번개 유지시간 16턴',
  },
];

// 변환 함수
function convertCardProperties(cards) {
  return cards.map((card) => {
    const convertedCard = { ...card };
    if (Array.isArray(convertedCard.activationTiming)) {
      convertedCard.activationTiming =
        convertedCard.activationTiming.join('\n');
    }
    if (Array.isArray(convertedCard.activationTarget)) {
      convertedCard.activationTarget =
        convertedCard.activationTarget.join('\n');
    }
    return convertedCard;
  });
}

const convertedCards = convertCardProperties(cards);
export default convertedCards;
