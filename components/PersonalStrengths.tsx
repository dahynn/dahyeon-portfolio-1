import { Database, ShieldCheck, Workflow } from 'lucide-react';

export function PersonalStrengths() {
  return <section className="personal-strengths" aria-label="일하는 기준">
    <ol>
      <li><div className="strength-marker"><Database aria-hidden="true" /></div><div><h3>거래 상태를 끝까지 맞추는 개발</h3><p>응답이 끊긴 뒤에도 데이터가 어긋나지 않도록 기록하고 복구합니다.</p></div></li>
      <li><div className="strength-marker"><ShieldCheck aria-hidden="true" /></div><div><h3>권한과 책임이 분명한 개발</h3><p>인증 이후에도 사용자의 현재 권한과 처리 범위를 다시 확인합니다.</p></div></li>
      <li><div className="strength-marker"><Workflow aria-hidden="true" /></div><div><h3>업무 흐름을 연결하는 개발</h3><p>화면과 API, 외부 연동과 운영 상태를 하나의 흐름으로 이해합니다.</p></div></li>
    </ol>
  </section>;
}
