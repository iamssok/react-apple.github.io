import { Link } from 'react-router-dom';
import useAirPodsScrollMotion from '../hooks/useAirPodsScrollMotion';
import * as A from '../styles/AirPodsPro2.styled';

function AirPodsPro2() {
  useAirPodsScrollMotion();
  
  return (
    <>
      <A.LocalNavWrapper className="local-nav-wrapper">
        <div className="d-flex flex-space-between flex-align-center mx-auto local-nav">
          <h5>AirPods Pro2</h5>
          <Link to="" onClick={(e) => e.preventDefault()}>구입하기</Link>
        </div>
      </A.LocalNavWrapper>
      <A.Section0 id="scroll-section-0">
        <video className="pos-fixed obj vid" autoPlay loop muted preload="none" src="https://www.apple.com/105/media/us/airpods-pro/2022/d2deeb8e-83eb-48ea-9721-f567cf0fffa8/anim/spatial-audio/large.mp4"></video>       
        <div className="pos-fixed obj tit-wrapper">
          <div className="d-flex flex-justify-center flex-align-center flex-wrapper">
            <p className="pos-abs subTit">전에 없던 청취 경험.<br />적응형 오디오.</p>
            <h1 className="pos-abs tit">Air Pods Pro</h1>
            <div className="d-flex flex-justify-center flex-align-center pos-abs obj canvas-wrapper">
              <canvas id="video-canvas-p" className="p" width="1440" height="810"></canvas>
              <canvas id="video-canvas-m" className="m" width="734" height="412"></canvas>
            </div>
          </div>
        </div>
        <div className="pos-fixed obj button-wrapper">
          <div className="d-flex flex-justify-center flex-align-center btn">
            <Link to="" onClick={(e) => e.preventDefault()}>'소음을 날리다' 동영상 시청하기</Link>
            <Link to="" onClick={(e) => e.preventDefault()}>제품 동영상 시청하기</Link>
          </div>
        </div>
        <div className="pos-fixed obj desc text-wrapper">
            <span className="txt a" style={{opacity:1}}>최대 2배 강력해진 액티브 노이즈 캔슬링. </span>
            <span className="txt b">주변 소리도 들려주는 주변음 허용 모드. </span>
            <span className="txt c">환경에 맞게 소음 제어 수준을 스마트하게 조정해주는 완전히 새로운 적응형 오디오. </span>
            <span className="txt d">놀라운 수준으로 개인에게 꼭 맞는 몰입감을 선사하는 공간 음향. </span>
            <span className="txt e">그리고 한 번의 충전으로 6시간까지 사용 가능한 배터리 성능까지.</span>
        </div>  
      </A.Section0>
      <A.Section1 id="scroll-section-1">
        <div className="block-1">
          <div className="mx-auto txt-wrapper">
            <p>오디오 성능</p>
            <h1>H2. 더욱 빠져들게 하는 두뇌.</h1>
            <p>Apple이 제작한 H2 칩은 AirPids Pro가 가진 첨단 오디오 성능의 원동력입니다. 드라이버 및 앰프와 연동해 맑은 고해상도의 사운드를 들려주죠. H2 칩은 컴퓨테이셔널 알고리즘을 활용해 노이즈 캔슬링 성능과 탁월한 3차원 사운드, 효율적인 배터리 사용 시간까지 한 번에 선사합니다.</p>
          </div>
        </div>
        <div className="d-flex block-2">
          <div>
            <video muted playsInline preload="auto" src="https://www.apple.com/105/media/us/airpods-pro/2022/d2deeb8e-83eb-48ea-9721-f567cf0fffa8/anim/h2/large.mp4"></video>
          </div>
          <div className="d-flex flex-align-center">
            <p><span>컴퓨테이셔널 알고리즘</span>을 활용해 스마트한 노이즈 캔슬링과 탁월한 3차원 사운드, 효율적인 배터리 성능 등 갖가지 놀라운 기능들을 한 번에 선사하는 <span>H2 칩</span>.</p>
          </div>
        </div>
      </A.Section1>
      <A.Section2 id="scroll-section-2">
        <video className="pos-abs vid" autoPlay loop muted preload="none" src="https://www.apple.com/105/media/us/airpods-pro/2022/d2deeb8e-83eb-48ea-9721-f567cf0fffa8/anim/noise-reduction/large.mp4"></video>
        <div className="pos-abs mx-auto scroll-motion-3">
          <picture>								
            <source srcSet="https://www.apple.com/v/airpods-pro/k/images/overview/audio_airpod__dni8q27q7tqq_small.jpg, https://www.apple.com/v/airpods-pro/k/images/overview/audio_airpod__dni8q27q7tqq_small_2x.jpg 2x" media="(max-width:734px)" />
            <source srcSet="https://www.apple.com/v/airpods-pro/k/images/overview/audio_airpod__dni8q27q7tqq_medium.jpg, https://www.apple.com/v/airpods-pro/k/images/overview/audio_airpod__dni8q27q7tqq_medium_2x.jpg 2x" media="(max-width:1068px)" />
            <source srcSet="https://www.apple.com/v/airpods-pro/k/images/overview/audio_airpod__dni8q27q7tqq_large.jpg, https://www.apple.com/v/airpods-pro/k/images/overview/audio_airpod__dni8q27q7tqq_large_2x.jpg 2x" media="(min-width:0px)" />
            <img className="img c" src="https://www.apple.com/v/airpods-pro/k/images/overview/audio_airpod__dni8q27q7tqq_large.jpg" alt="AirPods Pro" />
          </picture>
        </div>   
        <div className="pos-abs mx-auto scroll-motion-2">
          <picture>									
            <source srcSet="https://www.apple.com/v/airpods-pro/k/images/overview/audio_airpod_guts_bottom__bfet1uy1eg0y_small.jpg, https://www.apple.com/v/airpods-pro/k/images/overview/audio_airpod_guts_bottom__bfet1uy1eg0y_small_2x.jpg 2x" media="(max-width:734px)" />
            <source srcSet="https://www.apple.com/v/airpods-pro/k/images/overview/audio_airpod_guts_bottom__bfet1uy1eg0y_medium.jpg, https://www.apple.com/v/airpods-pro/k/images/overview/audio_airpod_guts_bottom__bfet1uy1eg0y_medium_2x.jpg 2x" media="(max-width:1068px)" />
            <source srcSet="https://www.apple.com/v/airpods-pro/k/images/overview/audio_airpod_guts_bottom__bfet1uy1eg0y_large.jpg, https://www.apple.com/v/airpods-pro/k/images/overview/audio_airpod_guts_bottom__bfet1uy1eg0y_large_2x.jpg 2x" media="(min-width:0px)" />
            <img className="img b" src="/v/airpods-pro/k/images/overview/audio_airpod_guts_bottom__bfet1uy1eg0y_large.jpg" alt="AirPods Pro를 투명하게 설정하여 내부의 맞춤 제작 드라이버 및 앰프를 보여주는 모습." />
          </picture>
          <p className="pos-abs txt c"><span>맞춤 제작 드라이버 및 앰프</span>가 H2 칩과 연동되어 재생 중 사운드 왜곡을 줄여주기 때문에 어떤 음량에서도 더욱 <span className="color-g">깊은 저음과 맑은 고음</span>을 즐길 수 있습니다.</p>
        </div>
        <div className="pos-abs mx-auto scroll-motion-1">
          <picture>
            <source srcSet="https://www.apple.com/v/airpods-pro/k/images/overview/audio_airpod_guts_top__d2is2iiz9l6q_small.jpg, https://www.apple.com/v/airpods-pro/k/images/overview/audio_airpod_guts_top__d2is2iiz9l6q_small_2x.jpg 2x" media="(max-width:734px)" />
            <source srcSet="https://www.apple.com/v/airpods-pro/k/images/overview/audio_airpod_guts_top__d2is2iiz9l6q_medium.jpg, https://www.apple.com/v/airpods-pro/k/images/overview/audio_airpod_guts_top__d2is2iiz9l6q_medium_2x.jpg 2x" media="(max-width:1068px)" />
            <source srcSet="https://www.apple.com/v/airpods-pro/k/images/overview/audio_airpod_guts_top__d2is2iiz9l6q_large.jpg, https://www.apple.com/v/airpods-pro/k/images/overview/audio_airpod_guts_top__d2is2iiz9l6q_large_2x.jpg 2x" media="(min-width:0px)" />
            <img className="img a" src="https://www.apple.com/v/airpods-pro/k/images/overview/audio_airpod_guts_top__d2is2iiz9l6q_large.jpg" alt="H2 칩이 보이도록 AirPods Pro를 엑스레이 방식으로 투시한 모습." />
          </picture>
          <p className="pos-abs txt a">칩에 탑재된 강력한 <span>적응형 알고리즘</span>이 사운드를 더 빠르게 처리해 소리가 들리는 정확한 순간에 맞춰 오디오를 조정해줍니다. 또한, 사운드의 모든 디테일은 귀 내부 모양에 맞춰 렌더링되기 때문에 <span className="color-g">더욱 뛰어난 하이파이 사운드</span>에 더 깊이 빠져들 수 있습니다.</p>
          <p className="pos-abs txt b"><span>내향 마이크</span>가 음성 향상 알고리즘을 사용해 당신의 음성을 인지하고 또렷하게 만들어줍니다. 덕분에 전화 및 영상 통화 중에 <span className="color-g">너무나 자연스러운 목소리</span>를 전달할 수 있죠.</p>
        </div>
      </A.Section2>
    </>
  )
}

export default AirPodsPro2;