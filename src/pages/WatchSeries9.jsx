import { Link } from 'react-router-dom';
import useWatchScrollMotion from '../hooks/useWatchScrollMotion';
import useScrollMotion from '../hooks/useScrollMotion';
import * as W from '../styles/WatchSeries9.styled';

function WatchSeries9() {
  useWatchScrollMotion();
  useScrollMotion();

  return (
    <>
      <W.Loading className="d-flex flex-justify-center flex-align-center pos-fixed loading">
        <svg className="loading-circle">
          <circle cx="50%" cy="50%" r="25"></circle>
        </svg>
      </W.Loading>
      <W.LocalNavWrapper className="local-nav-wrapper">
        <div className="d-flex flex-space-between flex-align-center mx-auto local-nav">
          <h5>Watch Series 9</h5>
          <Link to="" onClick={(e) => e.preventDefault()}>구입하기</Link>
        </div>
      </W.LocalNavWrapper>
      <W.Section0 id="scroll-section-0">
        <video className="pos-fixed obj vid" autoPlay muted preload="none" src="https://www.apple.com/105/media/kr/apple-watch-series-9/2023/b9bd6af6-4574-4a5a-90a6-764df91d4d7c/anim/hero/large.mp4"></video>
        <picture className="pos-fixed x-cnt obj logo">
          <source media="(max-width:734px)" srcSet="https://www.apple.com/v/apple-watch-series-9/d/images/overview/hero/logo_watch_series_9__caarhvmrw9si_small.png, https://www.apple.com/v/apple-watch-series-9/d/images/overview/hero/logo_watch_series_9__caarhvmrw9si_small_2x.png 2x" />
          <source media="(max-width:1068px)" srcSet="https://www.apple.com/v/apple-watch-series-9/d/images/overview/hero/logo_watch_series_9__caarhvmrw9si_medium.png, https://www.apple.com/v/apple-watch-series-9/d/images/overview/hero/logo_watch_series_9__caarhvmrw9si_medium_2x.png 2x" />
          <source media="(min-width:0px)" srcSet="https://www.apple.com/v/apple-watch-series-9/d/images/overview/hero/logo_watch_series_9__caarhvmrw9si_large.png, https://www.apple.com/v/apple-watch-series-9/d/images/overview/hero/logo_watch_series_9__caarhvmrw9si_large_2x.png 2x" />
          <img src="https://www.apple.com/v/apple-watch-series-9/d/images/overview/hero/logo_watch_series_9__caarhvmrw9si_large.png" alt="watch series9 logo" />
        </picture>
        <h1 className="pos-fixed obj tit">보다 똑똑.<br />보다 또력.<br />보다 강력.</h1>
        <div className="d-flex flex-column flex-justify-center pos-fixed obj wrap">
          <p className="obj desc">Apple Watch 사상 가장 강력한 성능의 칩. 화면을 터치하지 않고도 Apple Watch를 다루는 신박한 방법. 두 배 더 밝은 디스플레이. 여기에 이제 탄소 중립 케이스 및 밴드를 조합할 수 있는 옵션까지.</p>
          <div className="obj link">
            <Link to="" onClick={(e) => e.preventDefault()}>동영상 보기
              <svg width="20" height="20" viewBox="0 0 20 20">
                <line x1="5" y1="4" x2="12" y2="11" stroke="#fff" strokeWidth="2"></line>
                <line x1="5" y1="18" x2="12" y2="11" stroke="#fff" strokeWidth="2"></line>
              </svg>
            </Link>
            <Link to="" onClick={(e) => e.preventDefault()}>이벤트 시청하기
              <svg width="20" height="20" viewBox="0 0 20 20">
                <line x1="5" y1="4" x2="12" y2="11" stroke="#fff" strokeWidth="2"></line>
                <line x1="5" y1="18" x2="12" y2="11" stroke="#fff" strokeWidth="2"></line>
              </svg>
            </Link>
          </div>
        </div>
      </W.Section0>
      <W.Section1 id="scroll-section-1">
        <div className="mx-auto w-980">
          <div className="go fade-up-100">
            <h4>S9 SIP</h4>
            <h1>강력하게<br />앞서 나아가다.</h1>
          </div>
          <div className="video-wrap">
            <video autoPlay muted playsInline preload="none" src="https://www.apple.com/105/media/us/apple-watch-series-9/2023/b9bd6af6-4574-4a5a-90a6-764df91d4d7c/anim/close-up/large.mp4"></video>
          </div>
          <p className="go fade-up-100">Apple Watch Series 9을 더 강력하고, 더 직관적이고, 더 빠르게 만들어주는 전용 Apple Silicon. 듀얼 코어 CPU에는 S8 칩보다 60% 더 많아진 56억 개의 트랜지스터가  집적되어 있습니다. 그리고 4코어 Neural Engine은 머신 러닝 작업을 최대 두 배 더 빠르게 처리하죠. ‘더블 탭’ 제스처를 포함해 수많은 혁신이 가능한 이유입니다.</p>
          <div className="go fade-up-100">
            <h4>제스처</h4>
            <h1>손끝을 톡톡.<br />시계를 척척.</h1>
          </div>
        </div>
        <div className="d-flex flex-column flex-justify-center flex-align-center w-100">
          <h1>더블 탭</h1>
          <div className="video-wrap">
            <video autoPlay muted playsInline preload="none" src="https://www.apple.com/105/media/kr/apple-watch-series-9/2023/b9bd6af6-4574-4a5a-90a6-764df91d4d7c/anim/kinetic-tap-tap/large.webm"></video>
          </div>
          <p className="go fade-up-100">이제 제스처로 언제든 Apple Watch를 더욱 간편하게 다룰 수 있습니다. 특히 양손 모두 바쁠 때 아주 요긴하죠. 엄지와 검지를 두 번 탭하는 것만으로 전화 받기, 알림 열기, 음악 재생 및 일시 정지 등이 가능하니까요.</p>
        </div>
      </W.Section1>
      <W.Section2 id="scroll-section-2">
        <div className="pos-fixed obj text-wrap">
          <ul className="txt a">
            <li>
              <picture>
                <source media="(max-width:734px)" srcSet="https://www.apple.com/v/apple-watch-series-9/d/images/overview/gestures/kinetic_icon_music__dmu6nd9s62gm_small.png, https://www.apple.com/v/apple-watch-series-9/d/images/overview/gestures/kinetic_icon_music__dmu6nd9s62gm_small_2x.png 2x" />
                <source media="(min-width:0px)" srcSet="https://www.apple.com/v/apple-watch-series-9/d/images/overview/gestures/kinetic_icon_music__dmu6nd9s62gm_large.png, https://www.apple.com/v/apple-watch-series-9/d/images/overview/gestures/kinetic_icon_music__dmu6nd9s62gm_large_2x.png 2x" />
                <img src="https://www.apple.com/v/apple-watch-series-9/d/images/overview/gestures/kinetic_icon_music__dmu6nd9s62gm_large.png" alt="장 보면서 음악 재생 및 일시 정지하기" />
              </picture>
            </li>
            <li>
              <h3 className="pc">장 보면서 음악 재생 및<br />일시 정지하기.</h3>
              <h3 className="m">장 보면서<br />음악 재생 및<br />일시 정지하기.</h3>
            </li>
          </ul>
          <ul className="txt b">
            <li>
              <picture>
                <source media="(max-width:734px)" srcSet="https://www.apple.com/v/apple-watch-series-9/d/images/overview/gestures/kinetic_icon_phone__cl7qfzatsryq_small.png, https://www.apple.com/v/apple-watch-series-9/d/images/overview/gestures/kinetic_icon_phone__cl7qfzatsryq_small_2x.png 2x" />
                <source media="(min-width:0px)" srcSet="https://www.apple.com/v/apple-watch-series-9/d/images/overview/gestures/kinetic_icon_phone__cl7qfzatsryq_large.png, https://www.apple.com/v/apple-watch-series-9/d/images/overview/gestures/kinetic_icon_phone__cl7qfzatsryq_large_2x.png 2x" />
                <img src="https://www.apple.com/v/apple-watch-series-9/d/images/overview/gestures/kinetic_icon_phone__cl7qfzatsryq_large.png" alt="패들보드 타는 중에 전화 받기" />
              </picture>
            </li>
            <li>
              <h3 className="pc">패들보드 타는 중에<br />전화 받기.</h3>
              <h3 className="m">패들보드 타는 중에<br />전화 받기.</h3>
            </li>
          </ul>
          <ul className="txt c">
            <li>
              <picture>
                <source media="(max-width:734px)" srcSet="https://www.apple.com/v/apple-watch-series-9/d/images/overview/gestures/kinetic_icon_timer__c5i9cftltg02_small.png, https://www.apple.com/v/apple-watch-series-9/d/images/overview/gestures/kinetic_icon_timer__c5i9cftltg02_small_2x.png 2x" />
                <source media="(min-width:0px)" srcSet="https://www.apple.com/v/apple-watch-series-9/d/images/overview/gestures/kinetic_icon_timer__c5i9cftltg02_large.png, https://www.apple.com/v/apple-watch-series-9/d/images/overview/gestures/kinetic_icon_timer__c5i9cftltg02_large_2x.png 2x" />
                <img src="https://www.apple.com/v/apple-watch-series-9/d/images/overview/gestures/kinetic_icon_timer__c5i9cftltg02_large.png" alt="국 젓는 동안 타이머 중단하기" />
              </picture>
            </li>
            <li>
              <h3 className="pc">국 젓는 동안<br />타이머 중단하기.</h3>
              <h3 className="m">국 젓는 동안<br />타이머 중단하기.</h3>
            </li>
          </ul>
          <ul className="txt d">
            <li>
              <picture>
                <source media="(max-width:734px)" srcSet="https://www.apple.com/v/apple-watch-series-9/d/images/overview/gestures/kinetic_icon_messages__fvnkqw7nj76m_small.png, https://www.apple.com/v/apple-watch-series-9/d/images/overview/gestures/kinetic_icon_messages__fvnkqw7nj76m_small_2x.png 2x" />
                <source media="(min-width:0px)" srcSet="https://www.apple.com/v/apple-watch-series-9/d/images/overview/gestures/kinetic_icon_messages__fvnkqw7nj76m_large.png, https://www.apple.com/v/apple-watch-series-9/d/images/overview/gestures/kinetic_icon_messages__fvnkqw7nj76m_large_2x.png 2x" />
                <img src="https://www.apple.com/v/apple-watch-series-9/d/images/overview/gestures/kinetic_icon_messages__fvnkqw7nj76m_large.png" alt="반려견 산책시키면서 메시지에 답장하기" />
              </picture>
            </li>
            <li>
              <h3 className="pc">반려견 산책시키면서<br />메시지에 답장하기.</h3>
              <h3 className="m">반려견 산책시키면서<br />메시지에 답장하기.</h3>
            </li>
          </ul>
          <ul className="txt e">
            <li>
              <picture>
                <source media="(max-width:734px)" srcSet="https://www.apple.com/v/apple-watch-series-9/d/images/overview/gestures/kinetic_icon_stacks__b2zxae8y2b6u_small.png, https://www.apple.com/v/apple-watch-series-9/d/images/overview/gestures/kinetic_icon_stacks__b2zxae8y2b6u_small_2x.png 2x" />
                <source media="(min-width:0px)" srcSet="https://www.apple.com/v/apple-watch-series-9/d/images/overview/gestures/kinetic_icon_stacks__b2zxae8y2b6u_large.png, https://www.apple.com/v/apple-watch-series-9/d/images/overview/gestures/kinetic_icon_stacks__b2zxae8y2b6u_large_2x.png 2x" />
                <img src="https://www.apple.com/v/apple-watch-series-9/d/images/overview/gestures/kinetic_icon_stacks__b2zxae8y2b6u_large.png" alt="아기를 안고 있는 상태에서 스마트 스택 확인하기" />
              </picture>
            </li>
            <li>
              <h3 className="pc">아기를 안고 있는 상태에서<br />스마트 스택 확인하기.</h3>
              <h3 className="m">아기를 안고 있는<br />상태에서 스마트 스택<br />확인하기.</h3>
            </li>
          </ul>
        </div>
        <div className="pos-fixed obj img-wrap">
          <div className="pos-abs screen-wrap">            
            {/* <picture className="img e">
							<source media="(max-width:734px)" srcSet="https://www.apple.com/kr/apple-watch-series-9/d/images/overview/gestures/kinetic_scenarios_screen_stacks__fmx64kict3qm_small.jpg, https://www.apple.com/kr/apple-watch-series-9/d/images/overview/gestures/kinetic_scenarios_screen_stacks__fmx64kict3qm_small_2x.jpg 2x" />
              <source media="(min-width:0px)" srcSet="https://www.apple.com/kr/apple-watch-series-9/d/images/overview/gestures/kinetic_scenarios_screen_stacks__fmx64kict3qm_large.jpg, https://www.apple.com/kr/apple-watch-series-9/d/images/overview/gestures/kinetic_scenarios_screen_stacks__fmx64kict3qm_large_2x.jpg 2x" />
              <img src="https://www.apple.com/kr/apple-watch-series-9/d/images/overview/gestures/kinetic_scenarios_screen_stacks__fmx64kict3qm_large.jpg" alt="" />
						</picture>
            <picture className="img d">
							<source media="(max-width:734px)" srcSet="https://www.apple.com/kr/apple-watch-series-9/d/images/overview/gestures/kinetic_scenarios_screen_messages__fxvk231plyye_small.jpg, https://www.apple.com/kr/apple-watch-series-9/d/images/overview/gestures/kinetic_scenarios_screen_messages__fxvk231plyye_small_2x.jpg 2x" />
              <source media="(min-width:0px)" srcSet="https://www.apple.com/kr/apple-watch-series-9/d/images/overview/gestures/kinetic_scenarios_screen_messages__fxvk231plyye_large.jpg, https://www.apple.com/kr/apple-watch-series-9/d/images/overview/gestures/kinetic_scenarios_screen_messages__fxvk231plyye_large_2x.jpg 2x" />
              <img src="https://www.apple.com/kr/apple-watch-series-9/d/images/overview/gestures/kinetic_scenarios_screen_messages__fxvk231plyye_large.jpg" alt="" />
						</picture>
            <picture className="img c">
							<source media="(max-width:734px)" srcSet="https://www.apple.com/kr/apple-watch-series-9/d/images/overview/gestures/kinetic_scenarios_screen_timer_avail__cs9hqeoc4ssy_small.jpg, https://www.apple.com/kr/apple-watch-series-9/d/images/overview/gestures/kinetic_scenarios_screen_timer_avail__cs9hqeoc4ssy_small_2x.jpg 2x" />
              <source media="(min-width:0px)" srcSet="https://www.apple.com/kr/apple-watch-series-9/d/images/overview/gestures/kinetic_scenarios_screen_timer_avail__cs9hqeoc4ssy_large.jpg, https://www.apple.com/kr/apple-watch-series-9/d/images/overview/gestures/kinetic_scenarios_screen_timer_avail__cs9hqeoc4ssy_large_2x.jpg 2x" />
              <img src="https://www.apple.com/kr/apple-watch-series-9/d/images/overview/gestures/kinetic_scenarios_screen_timer_avail__cs9hqeoc4ssy_large.jpg" alt="" />
						</picture>
            <picture className="img b">
							<source media="(max-width:734px)" srcSet="https://www.apple.com/kr/apple-watch-series-9/d/images/overview/gestures/kinetic_scenarios_screen_phone__dii99ouyh3ee_small.jpg, https://www.apple.com/kr/apple-watch-series-9/d/images/overview/gestures/kinetic_scenarios_screen_phone__dii99ouyh3ee_small_2x.jpg 2x" />
              <source media="(min-width:0px)" srcSet="https://www.apple.com/kr/apple-watch-series-9/d/images/overview/gestures/kinetic_scenarios_screen_phone__dii99ouyh3ee_large.jpg, https://www.apple.com/kr/apple-watch-series-9/d/images/overview/gestures/kinetic_scenarios_screen_phone__dii99ouyh3ee_large_2x.jpg 2x" />
              <img src="https://www.apple.com/kr/apple-watch-series-9/d/images/overview/gestures/kinetic_scenarios_screen_phone__dii99ouyh3ee_large.jpg" alt="" />
						</picture> */}
            <picture className="img a">
              <source media="(max-width:734px)" srcSet="https://www.apple.com/v/apple-watch-series-9/d/images/overview/gestures/kinetic_scenarios_screen_music_avail__dm2drfyz5802_small.jpg, https://www.apple.com/v/apple-watch-series-9/d/images/overview/gestures/kinetic_scenarios_screen_music_avail__dm2drfyz5802_small_2x.jpg 2x" />
              <source media="(min-width:0px)" srcSet="https://www.apple.com/v/apple-watch-series-9/d/images/overview/gestures/kinetic_scenarios_screen_music_avail__dm2drfyz5802_large.jpg, https://www.apple.com/v/apple-watch-series-9/d/images/overview/gestures/kinetic_scenarios_screen_music_avail__dm2drfyz5802_large_2x.jpg 2x" />
              <img src="https://www.apple.com/v/apple-watch-series-9/d/images/overview/gestures/kinetic_scenarios_screen_music_avail__dm2drfyz5802_large.jpg" alt="" />
            </picture>
          </div>
          <div className="pos-abs stack-wrap">
            <picture className="d-block">
              <source media="(max-width:734px)" srcSet="https://www.apple.com/v/apple-watch-series-9/d/images/overview/gestures/kinetic_scenarios__flc8mhysqcya_small.jpg, https://www.apple.com/v/apple-watch-series-9/d/images/overview/gestures/kinetic_scenarios__flc8mhysqcya_small_2x.jpg 2x" />
              <source media="(min-width:0px)" srcSet="https://www.apple.com/v/apple-watch-series-9/d/images/overview/gestures/kinetic_scenarios__flc8mhysqcya_large.jpg, https://www.apple.com/v/apple-watch-series-9/d/images/overview/gestures/kinetic_scenarios__flc8mhysqcya_large_2x.jpg 2x" />
              <img src="https://www.apple.com/v/apple-watch-series-9/d/images/overview/gestures/kinetic_scenarios__flc8mhysqcya_large.jpg" alt="화면에 스마트 스택이 띄워져 있는 시계를 앞에서 바라본 모습." />
            </picture>
          </div>
        </div>
      </W.Section2>
      <W.Section3 id="scroll-section-3">
        <div className="pos-rel mx-auto w-980 go">
          <div className="img-wrap slide-up-100">
            <picture className="pos-abs non-brightness">
              <source media="(max-width:734px)" srcSet="https://www.apple.com/kr/apple-watch-series-9/d/images/overview/design/design_brightness_dim__bp2yysiiycya_small.jpg, https://www.apple.com/kr/apple-watch-series-9/d/images/overview/design/design_brightness_dim__bp2yysiiycya_small_2x.jpg 2x" />
              <source media="(max-width:1068px)" srcSet="https://www.apple.com/kr/apple-watch-series-9/d/images/overview/design/design_brightness_dim__bp2yysiiycya_medium.jpg, https://www.apple.com/kr/apple-watch-series-9/d/images/overview/design/design_brightness_dim__bp2yysiiycya_medium_2x.jpg 2x" />
              <source media="(min-width:0px)" srcSet="https://www.apple.com/kr/apple-watch-series-9/d/images/overview/design/design_brightness_dim__bp2yysiiycya_large.jpg, https://www.apple.com/kr/apple-watch-series-9/d/images/overview/design/design_brightness_dim__bp2yysiiycya_large_2x.jpg 2x" />
              <img src="https://www.apple.com/kr/apple-watch-series-9/d/images/overview/design/design_brightness_dim__bp2yysiiycya_large.jpg" alt ="" />
            </picture>
            <picture className="pos-abs brightness">
              <source media="(max-width:734px)" srcSet="https://www.apple.com/kr/apple-watch-series-9/d/images/overview/design/design_brightness_bright__f0qot4cow8q6_small.jpg, https://www.apple.com/kr/apple-watch-series-9/d/images/overview/design/design_brightness_bright__f0qot4cow8q6_small_2x.jpg 2x" />
              <source media="(max-width:1068px)" srcSet="https://www.apple.com/kr/apple-watch-series-9/d/images/overview/design/design_brightness_bright__f0qot4cow8q6_medium.jpg, https://www.apple.com/kr/apple-watch-series-9/d/images/overview/design/design_brightness_bright__f0qot4cow8q6_medium_2x.jpg 2x" />
              <source media="(min-width:0px)" srcSet="https://www.apple.com/kr/apple-watch-series-9/d/images/overview/design/design_brightness_bright__f0qot4cow8q6_large.jpg, https://www.apple.com/kr/apple-watch-series-9/d/images/overview/design/design_brightness_bright__f0qot4cow8q6_large_2x.jpg 2x" />
              <img src="https://www.apple.com/kr/apple-watch-series-9/d/images/overview/design/design_brightness_bright__f0qot4cow8q6_large.jpg"
                alt="얼마나 밝은지 알 수 있도록 시계를 옆에서 바라본 모습." />
            </picture>
          </div>
          <div className="pos-abs text-wrap fade-up-100">
            <h4>2배 더 밝은 디스플레이</h4>
            <h1>찬란한 혁신.</h1>
            <p> Series 9의 앞선 디스플레이 시스템은 디스플레이의 최대 밝기를 Series 8의 두 배로, 최대 2000 니트까지 높여줍니다. 덕분에 쨍한 햇빛 아래에서도 화면 내용을 더 쉽게 읽을 수 있죠. 또한, 밝기를 불과 1니트까지 낮춰 영화관 같은 저조도 환경에서도 더욱 보기 편하게 해줍니다.</p>
          </div>
        </div>
      </W.Section3>
    </>
  )
}

export default WatchSeries9;