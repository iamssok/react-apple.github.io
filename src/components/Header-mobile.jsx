import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MinWidth320 = styled.header`
  position: absolute;
  top: 0;
  width: 100%;
`;
const MGnbWrapper = styled.div`
  position: relative;
  z-index: 100;
  width: 100%;
  height: 50px;
  background: var(--color-fff);
`;
const MGnbCont = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 22px;
  a {
    display: inline-flex;
    color: var(--color-000);
  }
`;
const MGnb2DepthWrapper = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  visibility: hidden;
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background: var(--color-fff);
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.6, 1);
`;
const MGnbNav = styled.div`
  position: fixed;
  top: 0;
  z-index: 101;
  width: 100%;
  height: 50px;
  padding: 0 22px;
  background-color: var(--color-fff);
  .m-gnb-back {
    visibility: hidden;
    opacity: 0;
    transform: translate3d(10px, 0, 0);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.6, 1);
  }
  .m-gnb-close svg line {
    transform-origin: center;
    transform: rotate(0) translate(0, 0);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.6, 1);
  }
  .m-gnb-close.on svg line.line-top {
    transform: rotate(45deg) translate(0, 3px);
  }
  .m-gnb-close.on svg line.line-bottom {
    transform: rotate(-45deg) translate(0, -5px);
  }
`;
const MGnb2DepthList = styled.div`
  width: 100%;
  padding: 70px 22px 0 50px;
  opacity: 0;
  transform: translate3d(0, -100%, 0);
  transition: visibility 0.2s cubic-bezier(0.4, 0, 0.6, 1),
    opacity 0.2s cubic-bezier(0.4, 0, 0.6, 1),
    transform 0.4s cubic-bezier(0.4, 0, 0.6, 1);
  a {
    display: block;
    font-weight: 600;
    font-size: 25px;
    color: var(--color-333);
    letter-spacing: -0.8px;
    line-height: 40px;
    transition: color 0.2s cubic-bezier(0.4, 0, 0.6, 1);
    svg {
      position: absolute;
      right: 22px;
      opacity: 0;
      transform: translate3d(-5px, 0, 0);
      transition: all 0.2s cubic-bezier(0.4, 0, 0.6, 1);
    }
    &:hover {
      color: var(--color-000);
      svg {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
  }
`;
const MGnb2DepthCont = styled.div`
  visibility: hidden;
  width: 100%;
  padding: 70px 22px 100px 50px;
  opacity: 0;
  transform: translate3d(10px, 0, 0);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.6, 1);
  div {
    display: block;
    a {
      font-weight: 600;
      font-size: 25px;
      color: var(--color-333);
      letter-spacing: -0.8px;
      line-height: 40px;
    }
  }
  .block {
    margin-top: 45px;
    p {
      margin-bottom: 14px;
      font-size: 16px;
      color: #666;
    }
    div a {
      font-weight: 600;
      font-size: 16px;
      color: var(--color-333);
      line-height: 30px;
    }
  }
`;

function HeaderMobile() {
  return (
    <MinWidth320>
      <MGnbWrapper className="m-gnb-wrapper">
        <MGnbCont className="d-flex flex-space-between flex-align-center m-gnb-cont">
          <Link to="/" className="m-gnb-logo">
            <svg width="17" height="46" viewBox="0 0 17 46" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m15.5752 19.0792a4.2055 4.2055 0 0 0 -2.01 3.5376 4.0931 4.0931 0 0 0 2.4908 3.7542 9.7779 9.7779 0 0 1 -1.2755 2.6351c-.7941 1.1431-1.6244 2.2862-2.8878 2.2862s-1.5883-.734-3.0443-.734c-1.42 0-1.9252.7581-3.08.7581s-1.9611-1.0589-2.8876-2.3584a11.3987 11.3987 0 0 1 -1.9373-6.1487c0-3.61 2.3464-5.523 4.6566-5.523 1.2274 0 2.25.8062 3.02.8062.734 0 1.8771-.8543 3.2729-.8543a4.3778 4.3778 0 0 1 3.6822 1.841zm-6.8586-2.0456a1.3865 1.3865 0 0 1 -.2527-.024 1.6557 1.6557 0 0 1 -.0361-.337 4.0341 4.0341 0 0 1 1.0228-2.5148 4.1571 4.1571 0 0 1 2.7314-1.4078 1.7815 1.7815 0 0 1 .0361.373 4.1487 4.1487 0 0 1 -.9867 2.587 3.6039 3.6039 0 0 1 -2.5148 1.3236z"
              ></path>
            </svg>
          </Link>
          <Link to="" onClick={(e) => e.preventDefault()} className="m-gnb-menu">
            <svg width="16" height="16" viewBox="0 0 16 16">
              <line x1="0" y1="5" x2="16" y2="5" stroke="#333" strokeWidth="1"></line>
              <line x1="0" y1="13" x2="16" y2="13" stroke="#333" strokeWidth="1"></line>
            </svg>
          </Link>
        </MGnbCont>
      </MGnbWrapper>
      <MGnb2DepthWrapper className="m-gnb-2depth-wrapper">
        <MGnbNav className="d-flex flex-space-between flex-align-center pos-abs m-gnb-nav">
          <Link to="" onClick={(e) => e.preventDefault()} className="m-gnb-back">
            <svg width="14" height="14" viewBox="0 0 14 14">
              <line x1="9" y1="0" x2="1" y2="7" stroke="#333" strokeWidth="1"></line>
              <line x1="9" y1="14" x2="1" y2="7" stroke="#333" strokeWidth="1"></line>
            </svg>
          </Link>
          <Link to="" onClick={(e) => e.preventDefault()} className="m-gnb-close">
            <svg width="16" height="16" viewBox="0 0 16 16">
              <line x1="0" y1="5" x2="16" y2="5" className="line-top" stroke="#333" strokeWidth="1"></line>
              <line x1="0" y1="13" x2="16" y2="13" className="line-bottom" stroke="#333" strokeWidth="1"></line>
            </svg>
          </Link>
        </MGnbNav>
        <MGnb2DepthList className="pos-abs m-gnb-2depth-list">
          <Link to="" onClick={(e) => e.preventDefault()}>스토어
            <svg width="14" height="44">
              <line x1="4" y1="15" x2="12" y2="22" stroke="#333" strokeWidth="1"></line>
              <line x1="4" y1="29" x2="12" y2="22" stroke="#333" strokeWidth="1"></line>
            </svg>
          </Link>
          <Link to="" onClick={(e) => e.preventDefault()}>Mac
            <svg width="14" height="44">
              <line x1="4" y1="15" x2="12" y2="22" stroke="#333" strokeWidth="1"></line>
              <line x1="4" y1="29" x2="12" y2="22" stroke="#333" strokeWidth="1"></line>
            </svg>
          </Link>
          <Link to="" onClick={(e) => e.preventDefault()}>iPad
            <svg width="14" height="44">
              <line x1="4" y1="15" x2="12" y2="22" stroke="#333" strokeWidth="1"></line>
              <line x1="4" y1="29" x2="12" y2="22" stroke="#333" strokeWidth="1"></line>
            </svg>
          </Link>
          <Link to="" onClick={(e) => e.preventDefault()}>iPhone
            <svg width="14" height="44">
              <line x1="4" y1="15" x2="12" y2="22" stroke="#333" strokeWidth="1"></line>
              <line x1="4" y1="29" x2="12" y2="22" stroke="#333" strokeWidth="1"></line>
            </svg>
          </Link>
          <Link to="" onClick={(e) => e.preventDefault()}>Watch
            <svg width="14" height="44">
              <line x1="4" y1="15" x2="12" y2="22" stroke="#333" strokeWidth="1"></line>
              <line x1="4" y1="29" x2="12" y2="22" stroke="#333" strokeWidth="1"></line>
            </svg>
          </Link>
          <Link to="" onClick={(e) => e.preventDefault()}>AirPods
            <svg width="14" height="44">
              <line x1="4" y1="15" x2="12" y2="22" stroke="#333" strokeWidth="1"></line>
              <line x1="4" y1="29" x2="12" y2="22" stroke="#333" strokeWidth="1"></line>
            </svg>
          </Link>
          <Link to="" onClick={(e) => e.preventDefault()}>TV 및 홈
            <svg width="14" height="44">
              <line x1="4" y1="15" x2="12" y2="22" stroke="#333" strokeWidth="1"></line>
              <line x1="4" y1="29" x2="12" y2="22" stroke="#333" strokeWidth="1"></line>
            </svg>
          </Link>
          <Link to="" onClick={(e) => e.preventDefault()}>엔터테인먼트
            <svg width="14" height="44">
              <line x1="4" y1="15" x2="12" y2="22" stroke="#333" strokeWidth="1"></line>
              <line x1="4" y1="29" x2="12" y2="22" stroke="#333" strokeWidth="1"></line>
            </svg>
          </Link>
          <Link to="" onClick={(e) => e.preventDefault()}>액세서리
            <svg width="14" height="44">
              <line x1="4" y1="15" x2="12" y2="22" stroke="#333" strokeWidth="1"></line>
              <line x1="4" y1="29" x2="12" y2="22" stroke="#333" strokeWidth="1"></line>
            </svg>
          </Link>
          <Link to="" onClick={(e) => e.preventDefault()}>지원
            <svg width="14" height="44">
              <line x1="4" y1="15" x2="12" y2="22" stroke="#333" strokeWidth="1"></line>
              <line x1="4" y1="29" x2="12" y2="22" stroke="#333" strokeWidth="1"></line>
            </svg>
          </Link>
        </MGnb2DepthList>
        <MGnb2DepthCont className="pos-abs m-gnb-2depth-cont">
          <div><Link to="/store" style={{color:"var(--color-06c)"}}>최신 제품 쇼핑하기</Link></div>
          <div><Link to="">Mac</Link></div>
          <div><Link to="">iPad</Link></div>
          <div><Link to="">iPhone</Link></div>
          <div><Link to="">Apple Watch</Link></div>
          <div><Link to="">액세서리</Link></div>
          <div className="block">
            <p>빠른 링크</p>
            <div><Link to="">매장 찾기</Link></div>
            <div><Link to="">주문 상태</Link></div>
            <div><Link to="">Apple Trade In</Link></div>
            <div><Link to="">할부 방식</Link></div>
          </div>
          <div className="block">
            <p>특별 할인 쇼핑하기</p>
            <div><Link to="">인증 리퍼비쉬 제품</Link></div>
            <div><Link to="">교육</Link></div>
            <div><Link to="">비즈니스</Link></div>
          </div>
        </MGnb2DepthCont>
        <MGnb2DepthCont className="pos-abs m-gnb-2depth-cont">
          <div><Link to="/mac" style={{color:"var(--color-06c)"}}>Mac 모두 살펴보기</Link></div>
          <div><Link to="">MacBook Air</Link></div>
          <div><Link to="">MacBook Pro</Link></div>
          <div><Link to="">iMac</Link></div>
          <div><Link to="">Mac mini</Link></div>
          <div><Link to="">Mac Studio</Link></div>
          <div><Link to="">Mac Pro</Link></div>
          <div><Link to="">디스플레이</Link></div>
          <div><Link to="" className="m-s-link">Mac 비교하기</Link></div>
          <div><Link to="" className="m-s-link">Mac은 뭐든 척척</Link></div>
          <div className="block">
            <p>Mac 쇼핑하기</p>
            <div><Link to="">Mac 쇼핑하기</Link></div>
            <div><Link to="">Mac 액세서리</Link></div>
            <div><Link to="">Apple Trade In</Link></div>
            <div><Link to="">할부 방식</Link></div>
          </div>
          <div className="block">
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
          </div>
        </MGnb2DepthCont>
        <MGnb2DepthCont className="pos-abs m-gnb-2depth-cont">
          <div><Link to="">iPad 모두 살펴보기</Link></div>
          <div><Link to="">iPad Air</Link></div>
          <div><Link to="">iPad Pro</Link></div>
          <div><Link to="">iPad</Link></div>
          <div><Link to="">iPad mini</Link></div>
          <div><Link to="">Apple Pencil</Link></div>
          <div><Link to="">키보드</Link></div>
          <div><Link to="" className="m-s-link">iPad 비교하기</Link></div>
          <div>
            <Link to="" className="m-s-link">iPad를 선택하는 이유</Link>
          </div>
          <div className="block">
            <p>iPad 쇼핑하기</p>
            <div><Link to="">iPad 쇼핑하기</Link></div>
            <div><Link to="">iPad 액세서리</Link></div>
            <div><Link to="">Apple Trade In</Link></div>
            <div><Link to="">할부 방식</Link></div>
          </div>
          <div className="block">
            <p>그 외 iPad 관련 항목</p>
            <div><Link to="">iPad 지원</Link></div>
            <div><Link to="">iPad를 위한 AppleCare+</Link></div>
            <div><Link to="">iPadOS 17</Link></div>
            <div><Link to="">iPad용 Cut Pro</Link></div>
            <div><Link to="">iPad용 Losic Pro</Link></div>
            <div><Link to="">연속성</Link></div>
            <div><Link to="">iCloud+</Link></div>
            <div><Link to="">교육</Link></div>
          </div>
        </MGnb2DepthCont>
        <MGnb2DepthCont className="pos-abs m-gnb-2depth-cont">
          <div><Link to="">iPhone 모두 살펴보기</Link></div>
          <div><Link to="">iPhone 15 Pro</Link></div>
          <div><Link to="">iPhone 15</Link></div>
          <div><Link to="">iPhone 14</Link></div>
          <div><Link to="">iPhone 13</Link></div>
          <div><Link to="">iPhone SE</Link></div>
          <div><Link to="" className="m-s-link">iPhone 비교하기</Link></div>
          <div>
            <Link to="" className="m-s-link">안드로이드에서 갈아타기</Link>
          </div>
          <div className="block">
            <p>iPhone 쇼핑하기</p>
            <div><Link to="">iPhone 쇼핑하기</Link></div>
            <div><Link to="">iPhone 액세서리</Link></div>
            <div><Link to="">Apple Trade In</Link></div>
            <div><Link to="">할부 방식</Link></div>
          </div>
          <div className="block">
            <p>그 외 iPhone 관련 항목</p>
            <div><Link to="">iPhone 지원</Link></div>
            <div><Link to="">iPhone을 위한 AppleCare+</Link></div>
            <div><Link to="">iOS 17</Link></div>
            <div><Link to="">iPhone의 개인정보보호</Link></div>
            <div><Link to="">iCloud+</Link></div>
            <div><Link to="">Apple 지갑, Apple Pay</Link></div>
            <div><Link to="">Siri</Link></div>
          </div>
        </MGnb2DepthCont>
        <MGnb2DepthCont className="pos-abs m-gnb-2depth-cont">
          <div><Link to="">Watch 모두 살펴보기</Link></div>
          <div><Link to="/watchSeries9" style={{color:"var(--color-06c)"}}>Watch Series 9</Link></div>
          <div><Link to="">Watch Ultra 2</Link></div>
          <div><Link to="">Watch SE</Link></div>
          <div><Link to="">Watch Nike</Link></div>
          <div><Link to="">Watch Hermes</Link></div>
          <div><Link to="" className="m-s-link">Watch 비교하기</Link></div>
          <div>
            <Link to="" className="m-s-link">Apple Watch를 선택하는 이유</Link>
          </div>
          <div className="block">
            <p>Watch 쇼핑하기</p>
            <div><Link to="">Watch 쇼핑하기</Link></div>
            <div><Link to="">Watch Studio</Link></div>
            <div><Link to="">Watch 밴드</Link></div>
            <div><Link to="">Watch 액세서리</Link></div>
            <div><Link to="">Apple Trade In</Link></div>
            <div><Link to="">할부 방식</Link></div>
          </div>
          <div className="block">
            <p>그 외 Watch 관련 항목</p>
            <div><Link to="">Watch 지원</Link></div>
            <div><Link to="">AppleCare+</Link></div>
            <div><Link to="">watchOS 10</Link></div>
          </div>
        </MGnb2DepthCont>
        <MGnb2DepthCont className="pos-abs m-gnb-2depth-cont">
          <div><Link to="">AirPods 모두 살펴보기</Link></div>
          <div><Link to="/airPodsPro2" style={{color:"var(--color-06c)"}}>AirPods Pro 2</Link></div>
          <div><Link to="">AirPods 2세대</Link></div>
          <div><Link to="">AirPods 3세대</Link></div>
          <div><Link to="">AirPods Max</Link></div>
          <div><Link to="" className="m-s-link">AirPods 비교하기</Link></div>
          <div className="block">
            <p>AirPods 쇼핑하기</p>
            <div><Link to="">AirPods 쇼핑하기</Link></div>
            <div><Link to="">AirPods 액세서리</Link></div>
          </div>
          <div className="block">
            <p>그 외 AirPods 관련 항목</p>
            <div><Link to="">AirPods 지원</Link></div>
            <div><Link to="">헤드폰을 위한 AppleCare+</Link></div>
            <div><Link to="">Apple Music</Link></div>
          </div>
        </MGnb2DepthCont>
        <MGnb2DepthCont className="pos-abs m-gnb-2depth-cont">
          <div><Link to="">TV 및 홈 살펴보기</Link></div>
          <div><Link to="">Apple TV 4K</Link></div>
          <div className="block">
            <p>TV 및 홈 쇼핑하기</p>
            <div><Link to="">Apple TV 4K 쇼핑하기</Link></div>
            <div><Link to="">Siri Remote 쇼핑하기</Link></div>
            <div><Link to="">TV 및 홈 액세서리</Link></div>
          </div>
          <div className="block">
            <p>그 외 TV 및 홈 관련 항목</p>
            <div><Link to="">Apple TV 지원</Link></div>
            <div><Link to="">AppleCare+</Link></div>
            <div><Link to="">Apple TV 앱</Link></div>
            <div><Link to="">Apple TV+</Link></div>
            <div><Link to="">홈 앱</Link></div>
            <div><Link to="">Apple Music</Link></div>
            <div><Link to="">Siri</Link></div>
            <div><Link to="">AirPlay</Link></div>
          </div>
        </MGnb2DepthCont>
        <MGnb2DepthCont className="pos-abs m-gnb-2depth-cont">
          <div><Link to="">엔터테인먼트 살펴보기</Link></div>
          <div><Link to="">Apple One</Link></div>
          <div><Link to="">Apple TV+</Link></div>
          <div><Link to="">Apple Music</Link></div>
          <div><Link to="">Apple Arcade</Link></div>
          <div><Link to="">Apple Podcasts</Link></div>
          <div><Link to="">Apple Books</Link></div>
          <div><Link to="">Apple Store</Link></div>
          <div className="block">
            <p>지원</p>
            <div><Link to="">Apple TV+ 지원</Link></div>
            <div><Link to="">Apple Music 지원</Link></div>
          </div>
        </MGnb2DepthCont>
        <MGnb2DepthCont className="pos-abs m-gnb-2depth-cont">
          <div><Link to="">액세서리 모두 쇼핑하기</Link></div>
          <div><Link to="">Mac</Link></div>
          <div><Link to="">iPad</Link></div>
          <div><Link to="">iPhone</Link></div>
          <div><Link to="">Apple Watch</Link></div>
          <div><Link to="">AirPods</Link></div>
          <div><Link to="">TV 및 홈</Link></div>
          <div className="block">
            <p>액세서리 살펴보기</p>
            <div><Link to="">Apple 제작 정품</Link></div>
            <div><Link to="">Beats by Dr. Dre</Link></div>
            <div><Link to="">AirTag</Link></div>
          </div>
        </MGnb2DepthCont>
        <MGnb2DepthCont className="pos-abs m-gnb-2depth-cont">
          <div><Link to="">Mac</Link></div>
          <div><Link to="">iPad</Link></div>
          <div><Link to="">iPhone</Link></div>
          <div><Link to="">Apple Watch</Link></div>
          <div><Link to="">AirPods</Link></div>
          <div><Link to="">Music</Link></div>
          <div><Link to="">TV</Link></div>
          <div><Link to="" className="m-s-link">지원 상황 살펴보기</Link></div>
          <div className="block">
            <p>도움 받기</p>
            <div><Link to="">커뮤니티</Link></div>
            <div><Link to="">보장 상태 확인하기</Link></div>
            <div><Link to="">수리</Link></div>
            <div><Link to="">문의하기</Link></div>
          </div>
          <div className="block">
            <p>유용한 주제제</p>
            <div><Link to="">AppleCare+ 구입하기</Link></div>
            <div><Link to="">Apple ID 및 암호</Link></div>
            <div><Link to="">청구 및 구독</Link></div>
            <div><Link to="">나의 찾기</Link></div>
            <div><Link to="">손쉬운 사용</Link></div>
          </div>
        </MGnb2DepthCont>
      </MGnb2DepthWrapper>
    </MinWidth320>
  )
}

export default HeaderMobile;