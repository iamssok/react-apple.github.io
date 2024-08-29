import { Link } from 'react-router-dom';
import HomeSlide from './Home-slide';
import useVideoControl from '../hooks/useVideoControl';
import * as H from '../styles/Home.styled';

function Home() {
  const { video, toggleVideo } = useVideoControl('prologue-video', '.video-control');

  return (
    <>
      <H.ContainerFluid>
        <H.Row>
          <H.Module1 className="col-12">
            <H.Button type="button" onClick={toggleVideo} className="pos-abs video-control control-pause">{video ? 'Pause' : 'Play'}</H.Button>
            <H.UnitImageWrapper className="unit-image-wrapper">
              <H.Video id="prologue-video" className="pos-cnt" autoPlay loop muted playsInline preload="auto" role="img"
                src="https://www.apple.com/105/media/us/home/2024/9ca55411-d96c-4ea2-9cec-9b5eff7d5e94/anim/2line/largetall.mp4" alt="2024 Apple Worldwide Developers Conference"
              ></H.Video>
            </H.UnitImageWrapper>
            <H.UnitCopyWrapper className="unit-copy-wrapper">
              <h1>WWDC24</h1>
              <h4>한국 시간 6월 11일-15일, 온라인에서 만나요.</h4>
              <Link to="" className="blue-link">더 알아보기</Link>
            </H.UnitCopyWrapper>
          </H.Module1>
          <H.Module1 className="col-12">
            <H.UnitCopyWrapper className="unit-copy-wrapper">
              <h1>iPhone 15 Pro</h1>
              <h4>티타늄. 초강력. 초경량. 초프로.</h4>
              <Link to="" className="blue-link">더 알아보기 </Link>
              <Link to="" className="blueLine-link">지금 주문하기 </Link>
            </H.UnitCopyWrapper>
            <H.UnitImageWrapper className="unit-image-wrapper">
              <picture>
                <source media="(max-width:734px)" srcSet={require('../assets/images/home/home_module1_iphone15pro_small.jpg')} />
                <img className="pos-cnt unit-image" src={require('../assets/images/home/home_module1_iphone15pro_large.jpg')} alt="iphone15 pro" />
              </picture>
            </H.UnitImageWrapper>
          </H.Module1>
          <H.Module1 className="col-12">
            <H.UnitCopyWrapper className="unit-copy-wrapper">
              <h1>iPhone 15</h1>
              <h4>새로운 카메라. 새로운 디자인. 새로움이 물씬.</h4>
              <Link to="" className="blue-link">더 알아보기</Link>
              <Link to="" className="blueLine-link">지금 주문하기</Link>
            </H.UnitCopyWrapper>
            <H.UnitImageWrapper className="unit-image-wrapper">
              <picture>
                <source media="(max-width:734px)" srcSet={require('../assets/images/home/home_module1_iphone15_small.jpg')} />
                <img className="pos-cnt unit-image" src={require('../assets/images/home/home_module1_iphone15_large.jpg')} alt="iphone15" />
              </picture>
            </H.UnitImageWrapper>
          </H.Module1>
          <H.Module1 className="col-12 module-1">
            <H.UnitCopyWrapper className="unit-copy-wrapper">
              <h1>WATCH</h1>
              <h4>보다 똑똑. 보다 또렷. 보다 강력.</h4>
              <Link to="" className="blue-link">더 알아보기</Link>
              <Link to="" className="blueLine-link">지금 주문하기</Link>
            </H.UnitCopyWrapper>
            <H.UnitImageWrapper className="unit-image-wrapper">
              <picture>
                <source media="(max-width:734px)" srcSet={require('../assets/images/home/home_module1_watch_series_9_small.jpg')} />
                <img className="pos-cnt unit-image" src={require('../assets/images/home/home_module1_watch_series_9_largel.jpg')} alt="watch series9" />
              </picture>
            </H.UnitImageWrapper>
          </H.Module1>
        </H.Row>
        <H.Row>
          <H.Module2 className="col-12 col-md-6 module-2">
            <H.UnitCopyWrapper className="unit-copy-wrapper">
              <h2>WATCH</h2>
              <h5>한 차원 높은 모험</h5>
              <Link to="" className="blue-link">더 알아보기</Link>
              <Link to="" className="blueLine-link">구입하기</Link>
            </H.UnitCopyWrapper>
            <H.UnitImageWrapper className="unit-image-wrapper">
              <picture>
                <source media="(max-width:734px)" srcSet={require('../assets/images/home/home_module2_watch_ultra2_small.jpg')} />
                <img className="pos-cnt unit-image" src={require('../assets/images/home/home_module2_watch_ultra2_large.jpg')} alt="watch ultra2" />
              </picture>
            </H.UnitImageWrapper>
          </H.Module2>
          <H.Module2 className="col-12 col-md-6 module-2">
            <H.UnitCopyWrapper className="unit-copy-wrapper">
              <h2>AirPods Pro</h2>
              <h5>전에 없던 청취 경험. 적응형 오디오</h5>
              <Link to="" className="blue-link">더 알아보기 </Link>
              <Link to="" className="blueLine-link">구입하기</Link>
            </H.UnitCopyWrapper>
            <H.UnitImageWrapper className="unit-image-wrapper">
              <picture>
                <source media="(max-width:734px)" srcSet={require('../assets/images/home/home_module2_airpods_pro_small.jpg')} />
                <img className="pos-cnt unit-image" src={require('../assets/images/home/home_module2_airpods_pro_large.jpg')} alt="airpods pro" />
              </picture>
            </H.UnitImageWrapper>
          </H.Module2>
          <H.Module2 className="col-12 col-md-6 module-2">
            <H.UnitCopyWrapper className="unit-copy-wrapper">
              <h2>iPad Pro</h2>
              <h5>막강한 성능의 탑재</h5>
              <Link to="" className="blue-link">더 알아보기</Link>
              <Link to="" className="blueLine-link">구입하기</Link>
            </H.UnitCopyWrapper>
            <H.UnitImageWrapper className="unit-image-wrapper">
              <picture>
                <source media="(max-width:734px)" srcSet={require('../assets/images/home/home_module2_ipad_small.jpg')} />
                <img className="pos-cnt unit-image" src={require('../assets/images/home/home_module2_ipadpro_large.jpg')} alt="ipad pro" />
              </picture>
            </H.UnitImageWrapper>
          </H.Module2>
          <H.Module2 className="col-12 col-md-6 module-2">
            <H.UnitCopyWrapper className="unit-copy-wrapper">
              <h2>MacBook Air 15</h2>
              <h5>크게 펼치고, 얇게 접다.</h5>
              <Link to="" className="blue-link">더 알아보기</Link>
              <Link to="" className="blueLine-link">구입하기</Link>
            </H.UnitCopyWrapper>
            <H.UnitImageWrapper className="unit-image-wrapper">
              <picture>
                <source media="(max-width:734px)" srcSet={require('../assets/images/home/home_module2_macbook_air_15_small.jpg')} />
                <img className="pos-cnt unit-image" src={require('../assets/images/home/home_module2_macbook_air_15_large.jpg')} alt="macbook air15" />
              </picture>
            </H.UnitImageWrapper>
          </H.Module2>
        </H.Row>
      </H.ContainerFluid>
      <HomeSlide />
    </>
  )
}

export default Home;