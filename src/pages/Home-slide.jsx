import { Link } from 'react-router-dom';
import { TvPlusWrapper, InfoTop } from '../styles/Home.styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function HomeSlide() {
  return (
    <>      
      <TvPlusWrapper>
        <Swiper slidesPerView={'auto'} centeredSlides={true} pagination={{ clickable: true }} spaceBetween={10} loop={true} autoplay={{ delay: 3500, disableOnInteraction: false }} speed={1000} modules={[Autoplay, Pagination]}>
          <SwiperSlide>
            <picture>
              <source media="(max-width:734px)" srcSet={require('../assets/images/home/home_module3_slide1_small.jpg')} />
              <source media="(max-width:1068px)" srcSet={require('../assets/images/home/home_module3_slide1_medium.jpg')} />
              <source media="(max-width:1440px)" srcSet={require('../assets/images/home/home_module3_slide1_large.jpg')} />
              <img src={require('../assets/images/home/home_module3_slide1_xlarge.jpg')} alt="아가일" />
            </picture>
            <div className="d-flex flex-align-center pos-abs slide-copy-wrapper">
              <Link to=""><div className="watchNow">지금 시청하기</div></Link>
              <p>코미디ㆍ매튜 본 감독 신작 스파이 스릴러</p>
            </div>
            <InfoTop className="pos-abs">
              <figure className="atv-plus-icon"></figure>
              <figure className="logo" style={{backgroundImage:"url('https://is1-ssl.mzstatic.com/image/thumb/v64262-YWaZqmhiuQrEG6w/548x193.png')"}}></figure>
            </InfoTop>
          </SwiperSlide>
          <SwiperSlide>
            <picture>
              <source media="(max-width:734px)" srcSet={require('../assets/images/home/home_module3_slide2_small.jpg')} />
              <source media="(max-width:1068px)" srcSet={require('../assets/images/home/home_module3_slide2_medium.jpg')} />
              <source media="(max-width:1440px)" srcSet={require('../assets/images/home/home_module3_slide2_large.jpg')} />
              <img src={require('../assets/images/home/home_module3_slide2_xlarge.jpg')} alt="슈거" />
            </picture>
            <div className="d-flex flex-align-center pos-abs slide-copy-wrapper">
              <Link to=""><div className="watchNow">지금 시청하기</div></Link>
              <p>드라마ㆍ존재 자체가 미스터리인 사람이 있다</p>
            </div>
            <InfoTop className="pos-abs">
              <figure className="atv-plus-icon"></figure>
              <figure className="logo" style={{backgroundImage:"url('https://is1-ssl.mzstatic.com/image/thumb/M5H2657RdxxWfnRidD2Sgw/548x341.png')"}}></figure>
            </InfoTop>
          </SwiperSlide>
          <SwiperSlide>
            <picture>
              <source media="(max-width:734px)" srcSet={require('../assets/images/home/home_module3_slide3_small.jpg')} />
              <source media="(max-width:1068px)" srcSet={require('../assets/images/home/home_module3_slide3_medium.jpg')} />
              <source media="(max-width:1440px)" srcSet={require('../assets/images/home/home_module3_slide3_large.jpg')} />
              <img src={require('../assets/images/home/home_module3_slide3_xlarge.jpg')} alt="마스터스 오브 디 에어" />
            </picture>
            <div className="d-flex flex-align-center pos-abs slide-copy-wrapper">
              <Link to=""><div className="watchNow">지금 시청하기</div></Link>
              <p>드라마ㆍ스티븐 스필버그, 톰 행크스, 게리 고츠만 제작</p>
            </div>
            <InfoTop className="pos-abs">
              <figure className="atv-plus-icon"></figure>
              <figure className="logo" style={{backgroundImage:"url('https://is1-ssl.mzstatic.com/image/thumb/imsrhtWw0__R0NLI9szOGQ/548x145.png')"}}></figure>
            </InfoTop>
          </SwiperSlide>
          <SwiperSlide>
            <picture>
              <source media="(max-width:734px)" srcSet={require('../assets/images/home/home_module3_slide4_small.jpg')} />
              <source media="(max-width:1068px)" srcSet={require('../assets/images/home/home_module3_slide4_medium.jpg')} />
              <source media="(max-width:1440px)" srcSet={require('../assets/images/home/home_module3_slide4_large.jpg')} />
              <img src={require('../assets/images/home/home_module3_slide4_xlarge.jpg')} alt="파친코" />
            </picture>
            <div className="d-flex flex-align-center pos-abs slide-copy-wrapper">
              <Link to=""><div className="watchNow">지금 시청하기</div></Link>
              <p>드라마ㆍ4개의 세대. 하나의 운명.</p>
            </div>
            <InfoTop className="pos-abs">
              <figure className="atv-plus-icon"></figure>
              <figure className="logo" style={{backgroundImage:"url('https://is1-ssl.mzstatic.com/image/thumb/QjRiAXt4hA0ChHEKP2oO1A/548x304.png')"}} alt="apple tv+"></figure>
            </InfoTop>
          </SwiperSlide>
        </Swiper>
      </TvPlusWrapper>
    </>
  )
}

export default HomeSlide;