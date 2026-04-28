/* ===================================
   고객중심 마인드 유형 테스트 (2안) - 메인 스크립트
   9문항: 키워드별 3문항, A(일반 행동) vs B(고객중심 행동)
   =================================== */

// ===== 테스트 문항 데이터 =====
// 각 문항은 키워드별로 그룹화, A = 일반적 행동, B = 고객중심 행동
const questions = [
    // ===== 적극적 소통 (3문항) =====
    {
        id: 1,
        keyword: "comm",
        category: "적극적 소통",
        categoryEmoji: "🎙️",
        categoryIndex: 1,  // 이 카테고리 내 몇 번째 문항인지
        situation: "팀 회의 중, 아직 해결되지 않은 이슈가 있습니다.",
        ask: "이 상황에서 나는...",
        choiceA: {
            text: "완벽히 정리된 후 공유하자. 괜히 혼란만 가중될 수 있어.",
            score: 0
        },
        choiceB: {
            text: "완벽하지 않아도 일단 지금 상황을 공유해서 함께 해결책을 찾는다.",
            score: 1
        }
    },
    {
        id: 2,
        keyword: "comm",
        category: "적극적 소통",
        categoryEmoji: "🎙️",
        categoryIndex: 2,
        situation: "상대방이 내 설명을 잘 이해하지 못한 것 같습니다.",
        ask: "나는 어떻게 대응하나요?",
        choiceA: {
            text: "같은 내용을 더 자세히 반복해서 설명한다.",
            score: 0
        },
        choiceB: {
            text: "상대방이 익숙한 언어와 사례로 바꿔 다시 설명한다.",
            score: 1
        }
    },
    {
        id: 3,
        keyword: "comm",
        category: "적극적 소통",
        categoryEmoji: "🎙️",
        categoryIndex: 3,
        situation: "고객/동료가 아직 질문하지 않은 사안이 있습니다.",
        ask: "나는 어떻게 하나요?",
        choiceA: {
            text: "물어볼 때까지 기다린다. 먼저 나서면 괜히 복잡해질 수 있다.",
            score: 0
        },
        choiceB: {
            text: "먼저 파악해서 선제적으로 답을 준비해 공유한다.",
            score: 1
        }
    },

    // ===== 유연성 (3문항) =====
    {
        id: 4,
        keyword: "flex",
        category: "유연성",
        categoryEmoji: "🧩",
        categoryIndex: 1,
        situation: "내 방식과 다른 방법을 동료가 제안했습니다.",
        ask: "솔직히 내 반응은?",
        choiceA: {
            text: "지금까지 잘 해왔는데... 굳이 바꿔야 할까 싶다.",
            score: 0
        },
        choiceB: {
            text: "내 방식이 전부가 아닐 수 있다! 열린 마음으로 수용해 본다.",
            score: 1
        }
    },
    {
        id: 5,
        keyword: "flex",
        category: "유연성",
        categoryEmoji: "🧩",
        categoryIndex: 2,
        situation: "갑작스러운 요청으로 원래 계획이 틀어졌습니다.",
        ask: "이런 상황에서 나는...",
        choiceA: {
            text: "\"지금은 안 됩니다\"라고 명확히 선을 긋는다.",
            score: 0
        },
        choiceB: {
            text: "No 대신 How를 고민하며 대안을 함께 찾는다.",
            score: 1
        }
    },
    {
        id: 6,
        keyword: "flex",
        category: "유연성",
        categoryEmoji: "🧩",
        categoryIndex: 3,
        situation: "담당 업무 외의 일을 부탁받았습니다.",
        ask: "내 첫 번째 반응은?",
        choiceA: {
            text: "\"그건 제 일이 아닌데요\"라고 정중히 거절한다.",
            score: 0
        },
        choiceB: {
            text: "역할 경계보다 함께 성장하는 것이 중요하니 적극 지원한다.",
            score: 1
        }
    },

    // ===== 긴박감 (3문항) =====
    {
        id: 7,
        keyword: "urg",
        category: "긴박감",
        categoryEmoji: "🔥",
        categoryIndex: 1,
        situation: "아직 마감까지 시간이 좀 남아있습니다.",
        ask: "나는 보통...",
        choiceA: {
            text: "마감이 임박하면 그때 집중적으로 하는 편이다.",
            score: 0
        },
        choiceB: {
            text: "지금 할 수 있는 것부터 차근차근 실행해 미래를 준비한다.",
            score: 1
        }
    },
    {
        id: 8,
        keyword: "urg",
        category: "긴박감",
        categoryEmoji: "🔥",
        categoryIndex: 2,
        situation: "약속한 기한을 지키기 어려운 상황이 생겼습니다.",
        ask: "나의 행동은?",
        choiceA: {
            text: "최대한 맞추려고 노력하되, 안 되면 양해를 구한다.",
            score: 0
        },
        choiceB: {
            text: "기한은 무조건 지켜야 할 약속. 미리 방법을 찾고 대비책을 세운다.",
            score: 1
        }
    },
    {
        id: 9,
        keyword: "urg",
        category: "긴박감",
        categoryEmoji: "🔥",
        categoryIndex: 3,
        situation: "예상치 못한 변수가 생겨 계획에 차질이 생겼습니다.",
        ask: "나는 어떻게 대응하나요?",
        choiceA: {
            text: "상황을 파악하고 수정된 계획을 세우는 데 집중한다.",
            score: 0
        },
        choiceB: {
            text: "Plan B를 미리 마련해 두었기 때문에 빠르게 전환한다.",
            score: 1
        }
    }
];

// ===== 유형 결과 데이터 =====
const resultTypes = {
    comm: {
        emoji: "🎙️",
        name: "공감의 소통러",
        tagline: "숨기면 사고, 공유하면 해결! 당신의 소통이 팀을 움직입니다",
        headerClass: "type-comm",
        strength: "당신은 문제를 혼자 안고 있지 않고, 즉시 공유하여 신뢰를 만드는 사람입니다. 완벽한 보고보다 빠른 공유가 대안을 만든다는 것을 본능적으로 알고 있죠. 고객이 묻기 전에 먼저 답을 준비하는 선제적 대응의 달인이며, 전문용어 대신 상대가 이해할 수 있는 언어로 배려의 소통을 합니다. 당신의 소통 능력은 고객과 팀 모두에게 안심을 줍니다.",
        tip: "소통에 유연한 대응력과 빠른 실행력을 더하면 고객 감동이 두 배가 됩니다! 때로는 'No'보다 'How'를 함께 고민하며 대안을 찾아보고, 고민보다 실행이 더 완벽한 방법이라는 점도 기억해보세요. 당신의 뛰어난 소통력에 행동력이 더해지면 팀의 진정한 리더가 됩니다."
    },
    flex: {
        emoji: "🧩",
        name: "유연한 해결사",
        tagline: "'제가요? 왜요?' 대신 개방적인 마인드! 당신이 바로 팀의 멀티플레이어",
        headerClass: "type-flex",
        strength: "당신은 비즈니스의 변동성 속에서도 고객의 요구에 유연하게 대응하는 해결사입니다. '제가요? 왜요?' 대신 개방적인 태도로 동료의 노하우를 적극 수용하고, 타 부서의 요청에도 적극적으로 협조합니다. 'No'보다 'How'를 함께 고민하며, '네 일'은 내일의 '내 일'이라는 마인드로 역할 경계를 넘어 팀의 성장을 이끕니다.",
        tip: "유연함에 적극적인 상황 공유와 데드라인 의식을 더하면 시너지가 폭발합니다! 이슈가 생겼을 때 즉시 공유하면 더 빠른 해결이 가능하고, 고객과의 약속시간을 가장 무거운 숫자로 여겨보세요. 유연함과 긴박감이 만나면 어떤 상황에서도 흔들리지 않는 프로가 됩니다."
    },
    urg: {
        emoji: "🔥",
        name: "열정의 실행가",
        tagline: "고민보다 실행! 당신의 속도가 고객의 신뢰를 만듭니다",
        headerClass: "type-urg",
        strength: "당신은 '나중에'로 미루지 않고, 목표 날짜와 상관없이 지금 할 수 있는 일부터 차근차근 실행하는 사람입니다. 고객과의 약속시간을 가장 무거운 숫자로 여기며, 데드라인은 최대한 맞추는 날이 아니라 무조건 지키는 약속으로 생각합니다. 항상 Plan B를 품고 다니는 준비된 실행가, 당신의 속도감이 고객에게 신뢰를 줍니다.",
        tip: "빠른 실행에 팀과의 소통과 유연한 방향 전환을 더하면 무적이 됩니다! 때로는 완벽한 보고보다 이슈에 대한 즉시 공유가 신뢰와 대안을 만든다는 것을 기억하고, 내 방식이 전부가 아닐 수도 있다는 개방적 태도를 가져보세요. 실행력에 소통력이 더해지면 고객 감동의 완성입니다."
    },
    all: {
        emoji: "⭐",
        name: "완벽한 올라운더",
        tagline: "소통, 유연성, 실행력을 모두 갖춘 고객중심의 완성형!",
        headerClass: "type-all",
        strength: "당신은 세 가지 키워드를 균형 있게 갖춘 이상적인 고객중심 마인드의 소유자입니다! 이슈가 생기면 즉시 공유하며, 변화하는 상황에 유연하게 대응하고, 고민보다 실행으로 옮기는 올라운더. 상황에 따라 소통하고, 유연하게 대응하며, 빠르게 실행할 줄 아는 당신은 팀의 중심축입니다.",
        tip: "균형 잡힌 역량을 상황에 맞게 더 강하게 발휘해보세요! 고객의 니즈를 먼저 알아채야 할 때는 소통에, 예상치 못한 변화가 올 때는 유연성에, 마감이 다가올 때는 긴박감에 집중하는 것이 핵심입니다. 때로는 한 가지에 올인하는 것이 더 큰 임팩트를 만듭니다!"
    },
    bridge: {
        emoji: "💡",
        name: "하모니 브릿지",
        tagline: "두 가지 강점의 시너지! 당신은 팀의 연결고리입니다",
        headerClass: "type-bridge",
        strength: "당신은 두 가지 역량이 조화롭게 발달하여 다양한 상황에서 유연하게 대처하는 사람입니다. 팀과 고객 사이를 잇는 소중한 브릿지 역할을 하며, 상황에 따라 소통과 실행, 또는 유연함과 속도를 자유자재로 발휘합니다. 당신의 균형감은 팀에 안정감을 줍니다.",
        tip: "상대적으로 덜 발휘된 한 가지 키워드에 집중하면 올라운더로 한 단계 업그레이드! 부족한 영역의 행동문을 일상에서 하나씩 실천해보세요. 작은 변화가 쌓이면 어느새 완벽한 고객중심 마인드를 갖추게 됩니다."
    },
    growing: {
        emoji: "🌱",
        name: "성장하는 탐험가",
        tagline: "지금은 시작점! 당신의 고객중심 마인드는 무한한 가능성을 품고 있습니다",
        headerClass: "type-bridge",
        strength: "당신은 아직 고객중심 마인드를 본격적으로 발휘하기 전 단계에 있습니다. 하지만 걱정 마세요! 중요한 것은 방향을 알고 있다는 것입니다. 솔직한 답변을 선택한 당신의 자기인식 능력이야말로 성장의 가장 큰 밑거름입니다.",
        tip: "오늘부터 하루에 하나씩 행동문을 실천해보세요. '숨기면 사고, 공유하면 해결'처럼 즉시 공유하는 습관, 'No 대신 How'를 먼저 생각하는 습관, '나중에' 대신 '지금'부터 시작하는 습관. 작은 변화가 당신을 고객중심 마인드의 달인으로 만들어줄 거예요!"
    }
};

// ===== 상태 관리 =====
let currentQuestion = 0;      // 현재 문항 인덱스
let scores = {                 // 키워드별 점수 (각 0~3점)
    comm: 0,
    flex: 0,
    urg: 0
};
let isAnimating = false;       // 애니메이션 중복 방지

// ===== DOM 요소 참조 =====
const screens = {
    intro: document.getElementById('intro-screen'),
    question: document.getElementById('question-screen'),
    loading: document.getElementById('loading-screen'),
    result: document.getElementById('result-screen')
};

// ===== 화면 전환 함수 =====
function switchScreen(from, to) {
    from.style.animation = 'fadeSlideOut 0.35s ease forwards';

    setTimeout(() => {
        from.classList.remove('active');
        from.style.animation = '';
        to.classList.add('active');
        to.style.animation = 'fadeSlideIn 0.5s ease forwards';

        if (to === screens.result) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, 350);
}

// ===== 테스트 시작 =====
function startTest() {
    currentQuestion = 0;
    scores = { comm: 0, flex: 0, urg: 0 };

    displayQuestion(0);
    switchScreen(screens.intro, screens.question);
}

// ===== 문항 표시 =====
function displayQuestion(index) {
    const q = questions[index];

    // 카테고리 배지 업데이트
    document.getElementById('category-emoji').textContent = q.categoryEmoji;
    document.getElementById('category-name').textContent = q.category;
    document.getElementById('category-count').textContent = `(${q.categoryIndex}/3)`;

    // 카테고리 배지 색상 클래스 설정
    const badge = document.getElementById('category-badge');
    badge.className = 'category-badge';
    badge.classList.add(`cat-${q.keyword}`);

    // DOM 요소 업데이트
    document.getElementById('question-number').textContent = `Q${q.id}`;
    document.getElementById('question-situation').textContent = q.situation;
    document.getElementById('question-ask').textContent = q.ask;
    document.getElementById('choice-a-text').textContent = q.choiceA.text;
    document.getElementById('choice-b-text').textContent = q.choiceB.text;

    // 프로그레스바 업데이트
    const progress = ((index + 1) / questions.length) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;
    document.getElementById('progress-text').textContent = `${index + 1} / ${questions.length}`;

    // 선택 상태 초기화
    document.getElementById('choice-a').classList.remove('selected');
    document.getElementById('choice-b').classList.remove('selected');
}

// ===== 답변 선택 =====
function selectAnswer(choice) {
    if (isAnimating) return;
    isAnimating = true;

    const q = questions[currentQuestion];

    // 선택된 버튼 하이라이트
    const selectedBtn = document.getElementById(`choice-${choice}`);
    selectedBtn.classList.add('selected');

    // 점수 추가 (B 선택 시 해당 키워드에 1점)
    if (choice === 'b') {
        scores[q.keyword] += q.choiceB.score;
    }

    // 다음 문항으로 이동
    setTimeout(() => {
        currentQuestion++;

        if (currentQuestion < questions.length) {
            const card = document.getElementById('question-card');
            card.classList.add('slide-out');

            setTimeout(() => {
                // 모바일 터치 상태 초기화 (이전 답변의 hover/focus 잔상 방지)
                document.activeElement.blur();
                displayQuestion(currentQuestion);
                card.classList.remove('slide-out');
                card.classList.add('slide-in');

                setTimeout(() => {
                    card.classList.remove('slide-in');
                    isAnimating = false;
                }, 350);
            }, 350);
        } else {
            showLoading();
        }
    }, 400);
}

// ===== 로딩 화면 =====
function showLoading() {
    switchScreen(screens.question, screens.loading);

    setTimeout(() => {
        showResult();
    }, 3000);
}

// ===== 유형 판정 =====
// 각 키워드 0~3점, 총 9점 만점
function determineType() {
    const { comm, flex, urg } = scores;
    const total = comm + flex + urg;
    const max = Math.max(comm, flex, urg);
    const min = Math.min(comm, flex, urg);

    // 전체 점수가 낮으면 (3점 이하 = 33% 이하) → 성장형
    if (total <= 3) {
        return 'growing';
    }

    // 세 키워드 모두 높고 균형 (차이 1 이하) → 올라운더
    if (max - min <= 1 && total >= 6) {
        return 'all';
    }

    // 단독 1위 체크
    const maxCount = [comm, flex, urg].filter(s => s === max).length;

    if (maxCount === 1) {
        if (comm === max) return 'comm';
        if (flex === max) return 'flex';
        if (urg === max) return 'urg';
    }

    // 공동 1위 (두 키워드 동점)
    return 'bridge';
}

// ===== 결과 표시 =====
function showResult() {
    const type = determineType();
    const result = resultTypes[type];

    // 결과 헤더 배경 클래스 설정
    const header = document.querySelector('.result-header');
    header.className = 'result-header';
    header.classList.add(result.headerClass);

    // 결과 데이터 채우기
    document.getElementById('result-emoji').textContent = result.emoji;
    document.getElementById('result-type-name').textContent = result.name;
    document.getElementById('result-tagline').textContent = result.tagline;
    document.getElementById('result-strength').textContent = result.strength;
    document.getElementById('result-tip').textContent = result.tip;

    // 화면 전환
    switchScreen(screens.loading, screens.result);

    // 컨페티 효과
    setTimeout(() => {
        createConfetti();
    }, 500);
}

// ===== 컨페티 효과 =====
function createConfetti() {
    const container = document.createElement('div');
    container.className = 'confetti-container';
    document.body.appendChild(container);

    const colors = [
        '#FF7EB3', '#FF9DC6',
        '#7B93FF', '#93A8FF',
        '#56C6B9', '#6DD5C8',
        '#C4A0FF', '#FFB347'
    ];

    for (let i = 0; i < 40; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';

        const color = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.random() * 100;
        const size = Math.random() * 8 + 6;
        const duration = Math.random() * 2 + 2;
        const delay = Math.random() * 1.5;

        piece.style.cssText = `
            left: ${left}%;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            animation-duration: ${duration}s;
            animation-delay: ${delay}s;
            border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
        `;

        container.appendChild(piece);
    }

    setTimeout(() => {
        container.remove();
    }, 5000);
}

// ===== 다시 테스트하기 =====
function retryTest() {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    currentQuestion = 0;
    scores = { comm: 0, flex: 0, urg: 0 };
    isAnimating = false;

    displayQuestion(0);
    switchScreen(screens.result, screens.intro);
}

// ===== 초기화 =====
document.addEventListener('DOMContentLoaded', () => {
    screens.intro.classList.add('active');
    buildAllTypesModal();
});

// ===== 모든 유형 보기 모달 =====
// 모달에 표시할 유형 목록 (모든 유형 보기용)
const allTypesForModal = [
    {
        key: 'comm',
        emoji: '🎙️',
        name: '공감의 소통러',
        tagline: '숨기면 사고, 공유하면 해결!',
        desc: '문제를 혼자 안고 있지 않고 즉시 공유하여 신뢰를 만드는 사람. 고객이 묻기 전에 먼저 답을 준비하는 선제적 대응의 달인이며, 상대의 언어로 배려의 소통을 합니다.'
    },
    {
        key: 'flex',
        emoji: '🧩',
        name: '유연한 해결사',
        tagline: "'제가요? 왜요?' 대신 개방적인 마인드!",
        desc: "비즈니스의 변동성 속에서도 고객의 요구에 유연하게 대응하는 해결사. 'No'보다 'How'를 함께 고민하며, 역할 경계를 넘어 팀의 성장을 이끕니다."
    },
    {
        key: 'urg',
        emoji: '🔥',
        name: '열정의 실행가',
        tagline: '고민보다 실행! 속도가 곧 신뢰!',
        desc: "'나중에'로 미루지 않고 지금 할 수 있는 일부터 실행하는 사람. 고객과의 약속시간을 가장 무거운 숫자로 여기며, 항상 Plan B를 품고 다니는 준비된 실행가입니다."
    },
    {
        key: 'all',
        emoji: '⭐',
        name: '완벽한 올라운더',
        tagline: '소통, 유연성, 실행력을 모두 갖춘 완성형!',
        desc: '세 가지 키워드를 균형 있게 갖춘 이상적인 고객중심 마인드의 소유자. 상황에 따라 소통하고, 유연하게 대응하며, 빠르게 실행할 줄 아는 팀의 중심축입니다.'
    },
    {
        key: 'bridge',
        emoji: '💡',
        name: '하모니 브릿지',
        tagline: '두 가지 강점의 시너지!',
        desc: '두 가지 역량이 조화롭게 발달하여 다양한 상황에서 유연하게 대처하는 사람. 팀과 고객 사이를 잇는 소중한 브릿지 역할을 합니다.'
    },
    {
        key: 'growing',
        emoji: '🌱',
        name: '성장하는 탐험가',
        tagline: '지금은 시작점! 무한한 가능성!',
        desc: '고객중심 마인드를 본격적으로 발휘하기 전 단계. 솔직한 자기인식이야말로 성장의 가장 큰 밑거름입니다. 하루 하나씩 행동문을 실천하며 성장해보세요!'
    }
];

// 모달 콘텐츠 빌드 (초기화 시 1회 실행)
function buildAllTypesModal() {
    const listEl = document.getElementById('all-types-list');
    if (!listEl) return;

    listEl.innerHTML = allTypesForModal.map(type => `
        <div class="type-card">
            <div class="type-card-header">
                <span class="type-card-emoji">${type.emoji}</span>
                <div class="type-card-info">
                    <div class="type-card-name">${type.name}</div>
                    <div class="type-card-tagline">${type.tagline}</div>
                </div>
            </div>
            <p class="type-card-desc">${type.desc}</p>
        </div>
    `).join('');
}

// 모달 열기
function openAllTypes() {
    const modal = document.getElementById('all-types-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // 배경 스크롤 방지
}

// 모달 닫기
function closeAllTypes(event, forceClose) {
    const modal = document.getElementById('all-types-modal');

    // 배경 클릭 or X 버튼 클릭 시 닫기
    if (forceClose || event.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // 스크롤 복원
    }
}

// ===== 투표하기 (임시 - 나중에 실제 URL로 교체) =====
function goToVote() {
    // TODO: 실제 투표 링크로 교체하세요
    // 예: window.open('https://forms.google.com/...', '_blank');
    alert('투표 링크가 아직 준비되지 않았습니다.\n링크가 준비되면 script.js의 goToVote() 함수에 URL을 넣어주세요!');
}

