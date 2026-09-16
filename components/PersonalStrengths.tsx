/* oxlint-disable next/no-img-element -- 정적 Pages 내보내기에서 심볼 PNG를 원본 비율로 표시합니다. */

export function PersonalStrengths() {
  return <section className="personal-strengths" aria-label="일하는 기준">
    <ol>
      <li><div className="strength-marker strength-bankware-marker"><img className="strength-bankware-symbol" src="/assets/strength-retail-banking-transparent.png" alt="" width="120" height="120" /></div><div><h3>거래 상태를 끝까지 맞추는 개발</h3><p>응답이 끊긴 뒤에도 데이터가 어긋나지 않도록 기록하고 복구합니다.</p></div></li>
      <li><div className="strength-marker strength-bankware-marker"><img className="strength-bankware-symbol" src="/assets/strength-erp-transparent.png" alt="" width="120" height="120" /></div><div><h3>권한과 책임이 분명한 개발</h3><p>인증 이후에도 사용자의 현재 권한과 처리 범위를 다시 확인합니다.</p></div></li>
      <li><div className="strength-marker strength-bankware-marker"><img className="strength-bankware-symbol" src="/assets/strength-banking-saas-transparent.png" alt="" width="120" height="120" /></div><div><h3>업무 흐름을 연결하는 개발</h3><p>화면과 API, 외부 연동과 운영 상태를 하나의 흐름으로 이해합니다.</p></div></li>
    </ol>
  </section>;
}
