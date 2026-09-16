'use client';

/* oxlint-disable next/no-img-element -- 원본 캡처의 비율을 유지합니다. */
import { Braces, CreditCard, Database, type LucideIcon, Video } from 'lucide-react';
import { projectCases, type ProjectCase } from './projectCases';
import { projectEvidence } from './projectEvidence';
import { ServiceOverview } from './ServiceOverview';

const stackIcons: Record<string, string> = {
  'Java 21': '/assets/tech-icons/java.png',
  'Spring Boot 3.5.11': '/assets/tech-icons/spring.png',
  'Spring Boot 3.5.9': '/assets/tech-icons/spring.png',
  'Spring Boot 3.5.14': '/assets/tech-icons/spring.png',
  'Spring Data JPA': '/assets/tech-icons/spring.png',
  PostgreSQL: '/assets/tech-icons/postgresql.svg',
  Redis: '/assets/tech-icons/redis.png',
  'Redis와 Lua': '/assets/tech-icons/redis.png',
  'React 19': '/assets/tech-icons/react.svg',
  'React 18.3': '/assets/tech-icons/react.svg',
  'TypeScript 5.9': '/assets/tech-icons/typescript.svg',
};

const stackFallbackIcons: Record<string, LucideIcon> = {
  'MyBatis 3.0.5': Database,
  'Toss Payments SDK 2': CreditCard,
  MySQL: Database,
  'OpenVidu 2.32': Video,
};

function CaseHeroMedia({ id, name }: Pick<ProjectCase, 'id' | 'name'>) {
  const mockup = {
    capsure: '/assets/capsure-3d-device-mockup.png',
    roundy: '/assets/roundy-3d-device-mockup.png',
    san: '/assets/san-3d-device-mockup.png',
  }[id];
  return <figure className={`case-hero-media project-hero-mock project-hero-mock-${id}`}>
    <img src={mockup} alt={`${name} 서비스 목업`} width="1536" height="864" />
  </figure>;
}

type CaseSlide = {
  title: string;
  problem: string;
  approach: string;
  implementation: string;
  result: string;
  reflection: string;
  primary?: boolean;
};

const portfolioResults: Record<string, string[]> = {
  capsure: [
    '중단된 결제도 조회와 대사를 거쳐 계약 상태까지 확인할 수 있게 했습니다.',
    '납입과 계약 효력을 같은 상태로 뭉치지 않고, 판단에 필요한 조건을 나눠 관리했습니다.',
    'AI의 응답을 검토 초안으로 제한해 지급 판단과 분리했습니다.',
  ],
  roundy: [
    '동시에 도착한 요청과 늦게 도착한 요청 모두에서 한 사람의 현재 방 매핑을 지켰습니다.',
    '인증 결과를 사용자에게 귀속하고 한 번만 소비하도록 만들어 재사용을 막았습니다.',
    '로그인 여부가 아니라 현재 방의 멤버인지까지 확인하도록 접근 경계를 맞췄습니다.',
  ],
  san: [
    '검색 조건과 결과를 서버에서 함께 다뤄, 필요한 자료를 빠짐없이 다시 찾게 했습니다.',
    'AI가 읽은 원문과 생성 시점을 남겨 나중에도 근거를 확인할 수 있게 했습니다.',
    '실패한 작업만 다시 시작하고 검토 상태를 분리해, 다음 행동이 흐려지지 않게 했습니다.',
  ],
};

const portfolioApproaches: Record<string, string[]> = {
  capsure: [
    '타임아웃은 UNKNOWN으로 남기고, PG 조회 결과를 주문·금액과 대조한 뒤에만 계약을 확정했습니다.',
    '미수, 독촉, 유예 종료를 따로 확인하고 청구는 사고일의 보장 상태로 판단했습니다.',
    '약관 ID와 증빙 유형만 전달하고, 응답의 근거를 다시 확인한 뒤 담당자 검토 초안으로 남겼습니다.',
  ],
  roundy: [
    '인증 소비부터 대기열, 방 매핑까지 Redis Lua에서 한 번에 처리하고, 오래된 정리는 현재 방인지 확인하게 했습니다.',
    '인증 결과를 사용자 ID에 귀속하고 VERIFIED 상태만 한 번 소비하도록 만들었습니다.',
    'JWT 확인 뒤에도 현재 roomId와 멤버 정보를 다시 확인해 조회·입장·영상 토큰의 권한을 맞췄습니다.',
  ],
  san: [
    '검색어, 태그, 기간, 페이지 조건을 서버 요청으로 옮기고 사용자별 결과와 정렬을 함께 확인했습니다.',
    '생성 시점의 입력을 고정하고 개인정보 형식 마스킹, 입력 상한, 작업 소유자 검사를 적용했습니다.',
    '실패한 TIL만 새 작업으로 등록하고, 수정 뒤에는 기존 검토 상태를 초기화했습니다.',
  ],
};

const reflections: Record<string, string[]> = {
  capsure: [
    '응답이 없다는 이유만으로 결제를 실패 처리하면 고객과 계약 상태 모두가 흔들릴 수 있었습니다. 그래서 재시도보다 먼저 확인하고, 확인 뒤에만 다음 상태로 넘기게 했습니다.',
    '납입 실패는 한 번의 이벤트지만 계약 효력은 여러 조건을 거쳐 판단됩니다. 상태를 한 줄로 줄이지 않고, 판단에 필요한 조건을 나눠 두는 편이 안전했습니다.',
    'AI가 빠르게 정리해도 지급 판단까지 대신하면 안 됩니다. 근거와 검토자를 남기는 경계가 서비스 신뢰를 지킨다고 봤습니다.',
  ],
  roundy: [
    '실시간 서비스에서는 늦게 도착한 요청도 현재 상태를 바꿀 수 있습니다. 함께 바뀌는 값은 한 번에 다루는 쪽이 더 예측 가능했습니다.',
    '인증 완료라는 결과만으로는 충분하지 않았습니다. 누구의 결과인지와 한 번만 쓸 수 있는지를 같이 확인해야 신뢰할 수 있었습니다.',
    '로그인했다는 사실은 방 권한을 보장하지 않습니다. 사용자가 지금 속한 방인지 다시 확인해야 대화 공간의 경계가 지켜집니다.',
  ],
  san: [
    '검색은 빨라지는 것만으로 끝나지 않습니다. 같은 조건에서 같은 결과를 돌려주는지까지 함께 확인해야 다시 찾을 수 있었습니다.',
    'AI가 정리한 문장보다 어떤 원문을 읽었는지가 더 중요할 때가 있습니다. 입력을 남기고 범위를 제한해야 나중에도 검토할 수 있었습니다.',
    '실패한 작업을 다시 누르는 순간에도 규칙이 필요했습니다. 같은 작업이 겹치지 않고, 사용자가 다음 행동을 알 수 있게 만드는 데 집중했습니다.',
  ],
};

function getCaseSlides(project: ProjectCase): CaseSlide[] {
  const [problem, decision, implementation, outcome] = project.steps;
  return [
    {
      title: project.mechanism,
      problem: problem.body,
      approach: portfolioApproaches[project.id][0] ?? `${decision.body} ${implementation.body}`,
      implementation: implementation.body,
      result: portfolioResults[project.id][0] ?? outcome.body,
      reflection: reflections[project.id][0],
      primary: true,
    },
    ...project.supporting.map((supporting, index) => ({
      title: supporting.title,
      problem: supporting.problem,
      approach: portfolioApproaches[project.id][index + 1] ?? supporting.body,
      implementation: supporting.body,
      result: portfolioResults[project.id][index + 1] ?? supporting.proof,
      reflection: reflections[project.id][index + 1],
    })),
  ];
}

function CaseSlideVisual({ project, slide }: { project: ProjectCase; slide: CaseSlide }) {
  const evidence = projectEvidence[project.id];
  if (slide.primary) {
    const captures = project.id === 'capsure'
      ? [
        ['/assets/capsure-mobile-application-20260912.png', 'CapSure 청약 고지 화면', '보장 선택과 청약 조건'],
        ['/assets/capsure-mobile-payment-20260912.png', 'CapSure 납입 조건 확인 화면', '납입 정보 확인'],
        ['/assets/capsure-mobile-policy-20260912.png', 'CapSure 증권 확인 화면', '증권과 계약 상태'],
      ]
      : project.id === 'roundy'
        ? [
          ['/assets/roundy-face-verification.webp', 'Roundy 얼굴 인증 화면', '얼굴 인증'],
          ['/assets/roundy-meeting.png', 'Roundy 마스킹 미팅 화면', '실루엣 대화'],
        ]
        : [
          ['/assets/san-extension.png', 'SAN 크롬 확장 프로그램 화면', '웹 자료 저장'],
          ['/assets/san-til.png', 'SAN TIL 정리 화면', '원문 근거 확인'],
        ];
    return <div className={`case-slide-captures case-slide-captures-${project.id}`} aria-label={`${project.name} 실제 서비스 화면`}>
      {captures.map(([src, alt, label]) => <figure key={src}><img src={src} alt={alt} width="1920" height="1080" /><figcaption>{label}</figcaption></figure>)}
    </div>;
  }

  const nodes = slide.primary ? evidence.nodes : [
    { name: '문제 확인', detail: slide.problem },
    { name: '조건 분리', detail: slide.approach },
    { name: '결과', detail: slide.result },
  ];

  return <div className="case-slide-diagram" aria-label={`${project.name} ${slide.title} 구현 흐름`}>
    {nodes.map((node, index) => <div key={node.name}>
      <span>0{index + 1}</span><strong>{node.name}</strong><p>{node.detail}</p>
    </div>)}
  </div>;
}

function ProjectCaseSlide({ project, slide, index }: { project: ProjectCase; slide: CaseSlide; index: number }) {
  const caseNumber = String(index + 1).padStart(2, '0');
  const layout = index === 0 ? 'product' : index === 1 ? 'system' : 'outcome';
  return <section className={`case-slide case-slide-${project.id} case-slide-${layout}`} id={`${project.id}-case-${caseNumber}`} data-page aria-labelledby={`${project.id}-case-${caseNumber}-title`}>
    <header className="case-slide-heading"><p>Case {caseNumber}</p><h3 id={`${project.id}-case-${caseNumber}-title`}>{slide.title}</h3><div className="case-slide-project"><img src={`/assets/project-${project.id}-hd.png`} alt="" width="30" height="30" /><span>{project.name}</span></div></header>
    <div className="case-slide-top">
      <CaseSlideVisual project={project} slide={slide} />
      <article className="case-slide-brief">
        <p>문제 상황</p><h4>{slide.problem}</h4>
        <p>제가 정한 기준</p><span>{slide.approach}</span>
        <p>제가 구현한 방식</p><span>{slide.implementation}</span>
      </article>
    </div>
    <footer className="case-slide-bottom">
      <article><p>성과 및 결과</p><strong>{slide.result}</strong></article>
      <article><p>프로젝트를 하며 알게 된 점</p><strong>{slide.reflection}</strong></article>
    </footer>
  </section>;
}

function CaseStudy({ project }: { project: ProjectCase }) {
  const evidence = projectEvidence[project.id];
  const slides = getCaseSlides(project);
  return <section className={`technical-case technical-case-${project.id}`} id={project.id} aria-labelledby={`${project.id}-title`}>
    <div className="case-hero" data-page>
      <div className="case-hero-inner">
        <CaseHeroMedia id={project.id} name={project.name} />
        <header className="case-heading">
          <div className="case-identity"><img src={`/assets/project-${project.id}-hd.png`} alt="" width="68" height="68" /><div><p>{project.category}</p><strong>{project.name}</strong></div><span className="case-number">{project.number} / 03</span></div>
          <h2 id={`${project.id}-title`}>{project.headline}</h2>
          <p className="case-intro-text">{project.summary}</p>
          <ul className="case-stack" aria-label={`${project.name} 기술 스택`}>{evidence.stack.map(tech => {
            const FallbackIcon = stackFallbackIcons[tech] ?? Braces;
            return <li key={tech}>{stackIcons[tech] ? <img src={stackIcons[tech]} alt="" width="18" height="18" /> : <FallbackIcon aria-hidden="true" size={17} strokeWidth={2} />}<span>{tech}</span></li>;
          })}</ul>
          <dl className="case-project-meta"><div><dt>팀 구성</dt><dd>{evidence.team}</dd></div><div><dt>담당 범위</dt><dd>{evidence.responsibility}</dd></div></dl>
          <ServiceOverview id={project.id} name={project.name} variant="hero" />
          <nav className="case-outline" aria-label={`${project.name} 기술 사례 목록`}>
            <p>구현 사례 <span>각 사례는 한 화면에서 읽습니다.</span></p>
            <ol>{slides.map((slide, index) => {
              const caseNumber = String(index + 1).padStart(2, '0');
              return <li key={slide.title}><a href={`#${project.id}-case-${caseNumber}`}><span>Case {caseNumber}</span><strong>{slide.title}</strong></a></li>;
            })}</ol>
          </nav>
        </header>
      </div>
    </div>
    <div className="case-container">
      <div className="case-slide-deck" id={`${project.id}-detail`}>
        {slides.map((slide, index) => <ProjectCaseSlide key={slide.title} project={project} slide={slide} index={index} />)}
      </div>
      <a className="case-back" href="#projects">프로젝트 목록으로 ↑</a>
    </div>
  </section>;
}

export function ProjectCaseStudies() {
  return <>{projectCases.map(project => <CaseStudy key={project.id} project={project} />)}</>;
}
