import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MinWidth768 = styled.header`
  position: absolute;
  top: 0;
  width: 100%;
`;
const GnbWrapper = styled.div`
  position: relative;
  z-index: 100;
  width: 100%;
  height: 50px;
  background: var(--color-fff);
`;
const GnbCont = styled.div`
  width: 100%;
  max-width: 1024px;
  height: 50px;
  padding: 0 24px;
  a {
    font-size: 12px;
    color: var(--color-000);
  }
`; 
const Gnb2DepthBack =  styled.div`
  visibility: hidden;
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 100%;
  background: rgba(244, 244, 244, 0.8);
  backdrop-filter: blur(20px);
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.6, 1);
`;
const Gnb2DepthWrapper = styled.div`
  visibility: hidden;
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
  height: auto;
  background: var(--color-fff);
  opacity: 0;
  transform: translate3d(0, -100%, 0);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.6, 1);
`;
const Gnb2DepthCont = styled.div`
  visibility: hidden;
  width: 100%;
  max-width: 1024px;
  padding: 80px 24px;
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.6, 1);
`;
const Column = styled.div`
  padding-right: 50px;
  &.column-fir {
    padding-right: 100px;
    a {
      font-weight: 700;
      font-size: 22px;
      line-height: 35px;
    }
  }
  p {
    margin: 10px 0;
    font-size: 12px;
    color: var(--color-666);
  }
  div {
    display: block;
  }
  a, a.s-link {
    font-weight: 600;
    font-size: 12px;
    color: var(--color-000);
    line-height: 24px;
  }
`;

function HeaderWeb() {
  return (
    <MinWidth768>
      <GnbWrapper>
        <GnbCont className="d-flex flex-space-between flex-align-center mx-auto">
          <Link to="/" className="gnb-logo">
            <svg width="14" height="42" viewBox="0 0 14 42" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"
            ></path>
            </svg>
          </Link>
          <Link to="/store" className="gnb-menu" style={{color:"var(--color-06c)"}}>스토어</Link>
          <Link to="/mac" className="gnb-menu" style={{color:"var(--color-06c)"}}>Mac</Link>
          <Link to="" onClick={(e) => e.preventDefault()} className="gnb-menu">iPad</Link>
          <Link to="" onClick={(e) => e.preventDefault()} className="gnb-menu">iPhone</Link>
          <Link to="/watchSeries9" className="gnb-menu" style={{color:"var(--color-06c)"}}>Watch</Link>
          <Link to="/airPodsPro2" className="gnb-menu" style={{color:"var(--color-06c)"}}>AirPods</Link>
          <Link to="" onClick={(e) => e.preventDefault()} className="gnb-menu">TV 및 홈</Link>
          <Link to="" onClick={(e) => e.preventDefault()} className="gnb-menu">엔터테인먼트</Link>
          <Link to="" onClick={(e) => e.preventDefault()} className="gnb-menu">액세서리</Link>
          <Link to="" onClick={(e) => e.preventDefault()} className="gnb-menu">고객지원</Link>
        </GnbCont>
      </GnbWrapper>
      <Gnb2DepthBack className="gnb-2depth-back"></Gnb2DepthBack>
      <Gnb2DepthWrapper className="gnb-2depth-wrapper">
        <Gnb2DepthCont className="d-flex pos-cnt gnb-2depth-cont">
          <Column className="column-fir">
            <p>쇼핑하기</p>
            <div><Link to="/store">최신 제품 쇼핑하기</Link></div>
            <div><Link to="">Mac</Link></div>
            <div><Link to="">iPad</Link></div>
            <div><Link to="">iPhone</Link></div>
            <div><Link to="">Apple Watch</Link></div>
            <div><Link to="">액세서리</Link></div>
          </Column>
          <Column>
            <p>빠른 링크</p>
            <div><Link to="">매장 찾기</Link></div>
            <div><Link to="">주문 상태</Link></div>
            <div><Link to="">Apple Trade In</Link></div>
            <div><Link to="">할부 방식</Link></div>
          </Column>
          <Column>
            <p>특별 할인 쇼핑하기</p>
            <div><Link to="">인증 리퍼비쉬 제품</Link></div>
            <div><Link to="">교육</Link></div>
            <div><Link to="">비즈니스</Link></div>
          </Column>
        </Gnb2DepthCont>
        <Gnb2DepthCont className="d-flex pos-cnt gnb-2depth-cont">
          <Column className="column-fir">
            <p>Mac 살펴보기</p>
            <div><Link to="/mac">Mac 모두 살펴보기</Link></div>
            <div><Link to="">MacBook Air</Link></div>
            <div><Link to="">MacBook Pro</Link></div>
            <div><Link to="">iMac</Link></div>
            <div><Link to="">Mac mini</Link></div>
            <div><Link to="">Mac Studio</Link></div>
            <div><Link to="">Mac Pro</Link></div>
            <div><Link to="">디스플레이</Link></div>
            <div><Link to="" className="s-link">Mac 비교하기</Link></div>
            <div><Link to="" className="s-link">Mac은 뭐든 척척</Link></div>
          </Column>
          <Column>
            <p>Mac 쇼핑하기</p>
            <div><Link to="">Mac 쇼핑하기</Link></div>
            <div><Link to="">Mac 액세서리</Link></div>
            <div><Link to="">Apple Trade In</Link></div>
            <div><Link to="">할부 방식</Link></div>
          </Column>
          <Column>
            <p>그 외 Mac 관련 항목</p>
            <div><Link to="">Mac 지원</Link></div>
            <div><Link to="">Mac을 위한 AppleCare+</Link></div>
            <div><Link to="">macOS sonoma</Link></div>
            <div><Link to="">Final Cut Pro</Link></div>
            <div><Link to="">Losic Pro</Link></div>
            <div><Link to="">연속성</Link></div>
            <div><Link to="">iCloud+</Link></div>
            <div><Link to="">Mac과 비즈니스</Link></div>
            <div><Link to="">교육</Link></div>
          </Column>
        </Gnb2DepthCont>
        <Gnb2DepthCont className="d-flex pos-cnt gnb-2depth-cont">
          <Column className="column-fir">
            <p>iPad 살펴보기</p>
            <div><Link to="">iPad 모두 살펴보기</Link></div>
            <div><Link to="">iPad Air</Link></div>
            <div><Link to="">iPad Pro</Link></div>
            <div><Link to="">iPad</Link></div>
            <div><Link to="">iPad mini</Link></div>
            <div><Link to="">Apple Pencil</Link></div>
            <div><Link to="">키보드</Link></div>
            <div><Link to="" className="s-link">iPad 비교하기</Link></div>
            <div><Link to="" className="s-link">iPad를 선택하는 이유</Link></div>
          </Column>
          <Column>
            <p>iPad 쇼핑하기</p>
            <div><Link to="">iPad 쇼핑하기</Link></div>
            <div><Link to="">iPad 액세서리</Link></div>
            <div><Link to="">Apple Trade In</Link></div>
            <div><Link to="">할부 방식</Link></div>
          </Column>
          <Column>
            <p>그 외 iPad 관련 항목</p>
            <div><Link to="">iPad 지원</Link></div>
            <div><Link to="">iPad를 위한 AppleCare+</Link></div>
            <div><Link to="">iPadOS 17</Link></div>
            <div><Link to="">iPad용 Final Cut Pro</Link></div>
            <div><Link to="">iPad용 Losic Pro</Link></div>
            <div><Link to="">iCloud+</Link></div>
            <div><Link to="">교육</Link></div>
          </Column>
        </Gnb2DepthCont>
        <Gnb2DepthCont className="d-flex pos-cnt gnb-2depth-cont">
          <Column className="column-fir">
            <p>iPhone 살펴보기</p>
            <div><Link to="">iPhone 모두 살펴보기</Link></div>
            <div><Link to="">iPhone 15 Pro</Link></div>
            <div><Link to="">iPhone 15</Link></div>
            <div><Link to="">iPhone 14</Link></div>
            <div><Link to="">iPhone 13</Link></div>
            <div><Link to="">iPhone SE</Link></div>
            <div><Link to="" className="s-link">iPhone 비교하기</Link></div>
            <div><Link to=""className="s-link">안드로이드에서 갈아타기</Link></div>
          </Column>
          <Column>
            <p>iPhone 쇼핑하기</p>
            <div><Link to="">iPhone 쇼핑하기</Link></div>
            <div><Link to="">iPhone 액세서리</Link></div>
            <div><Link to="">Apple Trade In</Link></div>
            <div><Link to="">할부 방식</Link></div>
          </Column>
          <Column>
            <p>그 외 iPhone 관련 항목</p>
            <div><Link to="">iPhone 지원</Link></div>
            <div><Link to="">iPhone을 위한 AppleCare+</Link></div>
            <div><Link to="">iOS 17</Link></div>
            <div><Link to="">iPhone의 개인정보보호</Link></div>
            <div><Link to="">iCloud+</Link></div>
            <div><Link to="">Apple 지갑, Apple Pay</Link></div>
            <div><Link to="">Siri</Link></div>
          </Column>
        </Gnb2DepthCont>
        <Gnb2DepthCont className="d-flex pos-cnt gnb-2depth-cont">
          <Column className="column-fir">
            <p>Watch 살펴보기</p>
            <div><Link to="">Watch 모두 살펴보기</Link></div>
            <div><Link to="/watchSeries9">Watch Serise 9</Link></div>
            <div><Link to="">Watch Ultra 2</Link></div>
            <div><Link to="">Watch SE</Link></div>
            <div><Link to="">Watch Nike</Link></div>
            <div><Link to="">Watch Hermes</Link></div>
            <div><Link to="" className="s-link">Watch 비교하기</Link></div>
            <div><Link to="" className="s-link">Apple Watch를 선택하는 이유</Link></div>
          </Column>
          <Column>
            <p>Watch 쇼핑하기</p>
            <div><Link to="">Watch 쇼핑하기</Link></div>
            <div><Link to="">Watch Studio</Link></div>
            <div><Link to="">Watch 밴드</Link></div>
            <div><Link to="">Watch 액세서리</Link></div>
            <div><Link to="">Apple Trade In</Link></div>
            <div><Link to="">할부 방식</Link></div>
          </Column>
          <Column>
            <p>그 외 Watch 관련 항목</p>
            <div><Link to="">Apple Watch 지원</Link></div>
            <div><Link to="">AppleCare+</Link></div>
            <div><Link to="">watchOS 10</Link></div>
          </Column>
        </Gnb2DepthCont>
        <Gnb2DepthCont className="d-flex pos-cnt gnb-2depth-cont">
          <Column className="column-fir">
            <p>AirPods 살펴보기</p>
            <div><Link to="">AirPods 모두 살펴보기</Link></div>
            <div><Link to="/airPodsPro2">AirPods Pro 2세대</Link></div>
            <div><Link to="">AirPods 2세대</Link></div>
            <div><Link to="">AirPods 3세대</Link></div>
            <div><Link to="">AirPods Max</Link></div>
            <div><Link to="" className="s-link">AirPods 비교하기</Link></div>
          </Column>
          <Column>
            <p>AirPods 쇼핑하기</p>
            <div><Link to="">AirPods 쇼핑하기</Link></div>
            <div><Link to="">AirPods 액세서리</Link></div>
          </Column>
          <Column>
            <p>그 외 AirPods 관련 항목</p>
            <div><Link to="">AirPods 지원</Link></div>
            <div><Link to="">헤드폰을 위한 AppleCare+</Link></div>
            <div><Link to="">Apple Music</Link></div>
          </Column>
        </Gnb2DepthCont>
        <Gnb2DepthCont className="d-flex pos-cnt gnb-2depth-cont">
          <Column className="column-fir">
            <p>TV 및 홈 살펴보기</p>
            <div><Link to="">TV 및 홈 살펴보기</Link></div>
            <div><Link to="">Apple TV 4K</Link></div>
          </Column>
          <Column>
            <p>TV 및 홈 쇼핑하기</p>
            <div><Link to="">Apple TV 4K 쇼핑하기</Link></div>
            <div><Link to="">Siri Remote 쇼핑하기</Link></div>
            <div><Link to="">TV 및 홈 액세서리</Link></div>
          </Column>
          <Column>
            <p>그 외 TV 및 홈 관련 항목</p>
            <div><Link to="">Apple TV 지원</Link></div>
            <div><Link to="">AppleCare+</Link></div>
            <div><Link to="">Apple TV 앱</Link></div>
            <div><Link to="">Apple TV+</Link></div>
            <div><Link to="">홈 앱</Link></div>
            <div><Link to="">Apple Music</Link></div>
            <div><Link to="">Siri</Link></div>
            <div><Link to="">AirPlay</Link></div>
          </Column>
        </Gnb2DepthCont>
        <Gnb2DepthCont className="d-flex pos-cnt gnb-2depth-cont">
          <Column className="column-fir">
            <p>엔터테인먼트 살펴보기</p>
            <div><Link to="">엔터테인먼트 살펴보기</Link></div>
            <div><Link to="">Apple One</Link></div>
            <div><Link to="">Apple TV+</Link></div>
            <div><Link to="">Apple Music</Link></div>
            <div><Link to="">Apple Arcade</Link></div>
            <div><Link to="">Apple Podcasts</Link></div>
            <div><Link to="">Apple Books</Link></div>
            <div><Link to="">Apple Store</Link></div>
          </Column>
          <Column>
            <p>지원</p>
            <div><Link to="">Apple TV+ 지원</Link></div>
            <div><Link to="">Apple Music 지원</Link></div>
          </Column>
        </Gnb2DepthCont>
        <Gnb2DepthCont className="d-flex pos-cnt gnb-2depth-cont">
          <Column className="column-fir">
            <p>액세서리 쇼핑하기</p>
            <div><Link to="">액세서리 모두 쇼핑하기</Link></div>
            <div><Link to="">Mac</Link></div>
            <div><Link to="">iPad</Link></div>
            <div><Link to="">iPhone</Link></div>
            <div><Link to="">Apple Watch</Link></div>
            <div><Link to="">AirPods</Link></div>
            <div><Link to="">TV 및 홈</Link></div>
          </Column>
          <Column>
            <p>액세서리 살펴보기</p>
            <div><Link to="">Apple 제작 정품</Link></div>
            <div><Link to="">Beats by Dr. Dre</Link></div>
            <div><Link to="">AirTag</Link></div>
          </Column>
        </Gnb2DepthCont>
        <Gnb2DepthCont className="d-flex pos-cnt gnb-2depth-cont">
          <Column className="column-fir">
            <p>지원 상황 살펴보기</p>
            <div><Link to="">Mac</Link></div>
            <div><Link to="">iPad</Link></div>
            <div><Link to="">iPhone</Link></div>
            <div><Link to="">Apple Watch</Link></div>
            <div><Link to="">AirPods</Link></div>
            <div><Link to="">Music</Link></div>
            <div><Link to="">TV</Link></div>
            <div><Link to="" className="s-link">지원 상황 살펴보기</Link></div>
          </Column>
          <Column>
            <p>도움 받기</p>
            <div><Link to="">커뮤니티</Link></div>
            <div><Link to="">보장 상태 확인하기</Link></div>
            <div><Link to="">수리</Link></div>
            <div><Link to="">문의하기</Link></div>
          </Column>
          <Column>
            <p>유용한 주제</p>
            <div><Link to="">AppleCare+ 구입하기</Link></div>
            <div><Link to="">Apple ID 및 암호</Link></div>
            <div><Link to="">청구 및 구독</Link></div>
            <div><Link to="">나의 찾기</Link></div>
            <div><Link to="">손쉬운 사용</Link></div>
          </Column>
        </Gnb2DepthCont>
      </Gnb2DepthWrapper>
    </MinWidth768>
  )
}

export default HeaderWeb;