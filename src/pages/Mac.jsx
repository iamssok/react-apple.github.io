import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MacNav, MacSlide } from './Mac-slide';
import useVideoControl from '../hooks/useVideoControl';
import useVideoCanvas from '../hooks/useVideoCanvas';
import useScrollMotion from '../hooks/useScrollMotion';
import * as M from '../styles/Mac.styled';

function Mac() {
  const { toggleVideo } = useVideoControl('prologue-video', '.video-control');
  useVideoCanvas();
  useScrollMotion();

  const [openIndex, setOpenIndex] = useState(0);
  const accorContRefs = useRef([]);
  console.log(accorContRefs);
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  useEffect(() => {
    const updateHeight = () => {
      accorContRefs.current.forEach((ref, idx) => {        
        if (ref) {
          const pHeight = ref.querySelector('p')?.offsetHeight || 0;
          const picHeight = ref.querySelector('picture')?.offsetHeight || 0;
          if (openIndex === idx) {
            ref.style.height = window.innerWidth <= 1048 ? `${pHeight + picHeight + 10}px` : `${pHeight + 10}px`;
          } else {
            ref.style.height = '0px';
          }
        }
      });
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [openIndex]);

  return (
    <>
      <MacNav />
      <M.RibbonWrapper>
        <div className="ribbon">
          교육 할인가로 Mac을 더욱 부담 없이.
          <Link to="" onClick={(e) => e.preventDefault()}>
            더 알아보기 
            <svg width="10" height="10" viewBox="0 0 10 10">
              <line x1="4" y1="1" x2="8" y2="5" stroke="#06c" strokeWidth="1"></line>
              <line x1="4" y1="9" x2="8" y2="5" stroke="#06c" strokeWidth="1"></line>
            </svg>
          </Link>
        </div>
      </M.RibbonWrapper>
      <M.PrologueWrapper>
        <div className="d-flex flex-space-between flex-align-center prologue-tit">
          <h1>Mac</h1>
          <p>꿈꾸던 그 모든 것,<br />Mac과 함께 현실로.</p>
        </div>
        <div id="scroll-prologue-video" className="prologue-video-wrapper">
          <div className="video-canvas">
            <video id="prologue-video" autoPlay loop muted playsInline preload="auto" role="img" src="https://www.apple.com/105/media/us/mac/family/2024/60fc0159-4236-4a03-8534-f5ba07e538c5/anim/welcome/xlarge.mp4"></video>
            <button type="button" onClick={toggleVideo} className="pos-abs video-control control-pause">
              <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <g fill="rgba(0,0,0,0.56)">
                  <rect width="4.5" height="14" x="3.75" y="3" rx="1.5"></rect>
                  <rect width="4.5" height="14" x="11.75" y="3" rx="1.5"></rect>
                </g>
                <path fill="rgba(0,0,0,0.56)"
                  d="M5 15.25V4.77a1.44 1.44 0 0 1 1.44-1.62 1.86 1.86 0 0 1 1.11.31l8.53 5c.76.44 1.17.8 1.17 1.51s-.41 1.07-1.17 1.51l-8.53 5a1.86 1.86 0 0 1-1.11.31A1.42 1.42 0 0 1 5 15.25Z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </M.PrologueWrapper>
      <MacSlide />
      <M.AccordionWrapper className="go">
        <M.MacSlideTit className="d-flex flex-space-between flex-align-center fade-up-20">
          <h1>절친 목록.</h1>
        </M.MacSlideTit>
        <div className="info-wrapper fade-up-20">
          <div className="d-flex flex-align-center info-box">
            <div className="info-accordion">
              <M.Accordion className={`accordion ${openIndex === 0 ? 'on' : ''}`} onClick={() => toggleAccordion(0)}>
                <div className="accordion-tit">Mac과 iPhone
                  <svg className="accordion-icon" viewBox="0 0 17 8.85">
                    <polyline stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" fill="none" fillRule="evenodd" points="15 7.72 8.5 1.13 2 7.72"></polyline>
                  </svg>
                </div>
                <div className="d-flex flex-column flex-align-center accor-cont" ref={(el) => (accorContRefs.current[0] = el)}>
                  <p>iPhone으로 걸려온 전화 또는 받은 문자 메시지, 모두 Mac에서 바로 응대할 수 있습니다. iPhone에서 이미지, 동영상 또는 텍스트를 복사한 다음, 근처에 있는 Mac에서 사용 중인 다른 앱에 붙여 넣을 수도 있죠. 게다가 iCloud를 활용하면 즐겨 쓰는 파일을 iPhone에서도, Mac에서도 자유롭게 확인할 수 있습니다. 그 밖에도 Mac과 iPhone을 함께 사용하면 좋은 이유는 한가득이죠.</p>
                  <picture>
                    <source media="(max-width:734px)" srcSet="https://www.apple.com/kr/mac/home/by/images/overview/augment/world_mac_iphone__mr1xfuchl56e_small.jpg, https://www.apple.com/kr/mac/home/by/images/overview/augment/world_mac_iphone__mr1xfuchl56e_small_2x.jpg 2x" />
                    <source media="(max-width:1068px)" srcSet="https://www.apple.com/kr/mac/home/by/images/overview/augment/world_mac_iphone__mr1xfuchl56e_medium.jpg, https://www.apple.com/kr/mac/home/by/images/overview/augment/world_mac_iphone__mr1xfuchl56e_medium_2x.jpg 2x" />
                    <source media="(max-width:1440px)" srcSet="https://www.apple.com/kr/mac/home/by/images/overview/augment/world_mac_iphone__mr1xfuchl56e_large.jpg, https://www.apple.com/kr/mac/home/by/images/overview/augment/world_mac_iphone__mr1xfuchl56e_large_2x.jpg 2x" />
                    <source media="(min-width:0px)" srcSet="https://www.apple.com/kr/mac/home/by/images/overview/augment/world_mac_iphone__mr1xfuchl56e_xlarge.jpg, https://www.apple.com/kr/mac/home/by/images/overview/augment/world_mac_iphone__mr1xfuchl56e_xlarge_2x.jpg 2x" />
                    <img src="https://www.apple.com/kr/mac/home/by/images/overview/augment/world_mac_iphone__mr1xfuchl56e_xlarge.jpg" alt="" />
                  </picture>
                </div>
              </M.Accordion>
              <M.Accordion className={`accordion ${openIndex === 1 ? 'on' : ''}`} onClick={() => toggleAccordion(1)}>
                <div className="accordion-tit">Mac과 iPad
                  <svg className="accordion-icon" viewBox="0 0 17 8.85">
                    <polyline stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" fill="none" fillRule="evenodd" points="15 7.72 8.5 1.13 2 7.72"></polyline>
                  </svg>
                </div>
                <div className="d-flex flex-column flex-align-center accor-cont" ref={(el) => (accorContRefs.current[1] = el)}>
                  <p>iPad에서 스케치한 그림을 Mac에 바로 띄워 볼 수 있습니다. 아니면 한 화면에서 작업하는 동안 또 하나의 화면을 참고할 수 있도록, iPad를 보조 디스플레이로 활용할 수도 있죠. 심지어 iPad에서 시작한 Final Cut Pro 프로젝트를 Mac에서 마저 이어서 진행할 수도 있답니다.</p>
                  <picture>
                    <source media="(max-width:734px)" srcSet="https://www.apple.com/kr/mac/home/by/images/overview/augment/world_mac_ipad__d9mjiijkul0m_small.jpg, https://www.apple.com/kr/mac/home/by/images/overview/augment/world_mac_ipad__d9mjiijkul0m_small_2x.jpg 2x" />
                    <source media="(max-width:1068px)" srcSet="https://www.apple.com/kr/mac/home/by/images/overview/augment/world_mac_ipad__d9mjiijkul0m_medium.jpg, https://www.apple.com/kr/mac/home/by/images/overview/augment/world_mac_ipad__d9mjiijkul0m_medium_2x.jpg 2x" />
                    <source media="(max-width:1440px)" srcSet="https://www.apple.com/kr/mac/home/by/images/overview/augment/world_mac_ipad__d9mjiijkul0m_large.jpg, https://www.apple.com/kr/mac/home/by/images/overview/augment/world_mac_ipad__d9mjiijkul0m_large_2x.jpg 2x" />
                    <source media="(min-width:0px)" srcSet="https://www.apple.com/kr/mac/home/by/images/overview/augment/world_mac_ipad__d9mjiijkul0m_xlarge.jpg, https://www.apple.com/kr/mac/home/by/images/overview/augment/world_mac_ipad__d9mjiijkul0m_xlarge_2x.jpg 2x" />
                    <img src="https://www.apple.com/kr/mac/home/by/images/overview/augment/world_mac_ipad__d9mjiijkul0m_xlarge.jpg" alt="" />
                  </picture>
                </div>
              </M.Accordion>
              <M.Accordion className={`accordion ${openIndex === 2 ? 'on' : ''}`} onClick={() => toggleAccordion(2)}>
                <div className="accordion-tit">Mac과 Apple Watch
                  <svg className="accordion-icon" viewBox="0 0 17 8.85">
                    <polyline stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" fill="none" fillRule="evenodd" points="15 7.72 8.5 1.13 2 7.72"></polyline>
                  </svg>
                </div>
                <div className="d-flex flex-column flex-align-center accor-cont" ref={(el) => (accorContRefs.current[2] = el)}>
                  <p>‘자동 잠금 해제’ 기능을 활성화한 Apple Watch를 차고 있으면 Mac에 자동으로 로그인할 수 있습니다. 암호 입력은 필요 없죠.</p>
                  <picture>
                    <source media="(max-width:734px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/augment/world_mac_watch__dckn1orrpkqe_small.jpg, https://www.apple.com/v/mac/home/by/images/overview/augment/world_mac_watch__dckn1orrpkqe_small_2x.jpg 2x" />
                    <source media="(max-width:1068px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/augment/world_mac_watch__dckn1orrpkqe_medium.jpg, https://www.apple.com/v/mac/home/by/images/overview/augment/world_mac_watch__dckn1orrpkqe_medium_2x.jpg 2x" />
                    <source media="(max-width:1440px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/augment/world_mac_watch__dckn1orrpkqe_large.jpg, https://www.apple.com/v/mac/home/by/images/overview/augment/world_mac_watch__dckn1orrpkqe_large_2x.jpg 2x" />
                    <source media="(min-width:0px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/augment/world_mac_watch__dckn1orrpkqe_xlarge.jpg, https://www.apple.com/v/mac/home/by/images/overview/augment/world_mac_watch__dckn1orrpkqe_xlarge_2x.jpg 2x" />
                    <img src="https://www.apple.com/v/mac/home/by/images/overview/augment/world_mac_watch__dckn1orrpkqe_xlarge.jpg" alt="" />
                  </picture>
                </div>
              </M.Accordion>
            </div>
            <div className="info-image">
              <picture>
                <source media="(max-width:734px)" srcSet="https://www.apple.com/kr/mac/home/by/images/overview/augment/world_mac_iphone__mr1xfuchl56e_small.jpg, https://www.apple.com/kr/mac/home/by/images/overview/augment/world_mac_iphone__mr1xfuchl56e_small_2x.jpg 2x" />
                <source media="(max-width:1068px)" srcSet="https://www.apple.com/kr/mac/home/by/images/overview/augment/world_mac_iphone__mr1xfuchl56e_medium.jpg, https://www.apple.com/kr/mac/home/by/images/overview/augment/world_mac_iphone__mr1xfuchl56e_medium_2x.jpg 2x" />
                <source media="(max-width:1440px)" srcSet="https://www.apple.com/kr/mac/home/by/images/overview/augment/world_mac_iphone__mr1xfuchl56e_large.jpg, https://www.apple.com/kr/mac/home/by/images/overview/augment/world_mac_iphone__mr1xfuchl56e_large_2x.jpg 2x" />
                <source media="(min-width:0px)" srcSet="https://www.apple.com/kr/mac/home/by/images/overview/augment/world_mac_iphone__mr1xfuchl56e_xlarge.jpg, https://www.apple.com/kr/mac/home/by/images/overview/augment/world_mac_iphone__mr1xfuchl56e_xlarge_2x.jpg 2x" />
                <img src="https://www.apple.com/kr/mac/home/by/images/overview/augment/world_mac_iphone__mr1xfuchl56e_xlarge.jpg" alt="iPhone 15에서 이미지를 복사해 MacBook Pro에서 작성 중인 Pages 문서에 붙여 넣는 모습." />
              </picture>
            </div>
          </div>
        </div>
      </M.AccordionWrapper>
    </>
  )
}

export default Mac;