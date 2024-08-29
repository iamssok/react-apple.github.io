import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import * as M from '../styles/Mac.styled';

export function MacNav() {
  return (    
    <M.ChapterNavWrapper className="d-flex flex-justify-center">
      <Swiper slidesPerView={'auto'} freeMode={true} navigation={{nextEl: '.swiper-button-next.chapter-nav-next', prevEl: '.swiper-button-prev.chapter-nav-prev'}} modules={[Navigation]} className="chapter-nav">
        <SwiperSlide>
          <img width="79" src="https://www.apple.com/v/mac/home/by/images/chapternav/macbookair_light__dfypt7o3xfgy_large.svg" alt="MacBook Air" />
          <p>MacBook Air</p>
        </SwiperSlide>
        <SwiperSlide>
          <img width="85" src="https://www.apple.com/v/mac/home/by/images/chapternav/macbook_pro_light__bvnmtmeikj1e_large.svg" alt="MacBook Pro" />
          <p>MacBook Pro</p>
        </SwiperSlide>
        <SwiperSlide>
          <img width="43" src="https://www.apple.com/v/mac/home/by/images/chapternav/imac_light__cx5ex9nbqxme_large.svg" alt="iMac" />
          <p>iMac</p>
        </SwiperSlide>
        <SwiperSlide>
          <img width="28" src="https://www.apple.com/v/mac/home/by/images/chapternav/mac_mini_light__e7ojhup2ezau_large.svg" alt="Mac mini" />
          <p>Mac mini</p>
        </SwiperSlide>
        <SwiperSlide>
          <img width="28" src="https://www.apple.com/v/mac/home/by/images/chapternav/mac_studio_light__fcr3455qk0i2_large.svg" alt="Mac Studio" />
          <p>Mac Studio</p>
        </SwiperSlide>
        <SwiperSlide>
          <img width="35" src="https://www.apple.com/v/mac/home/by/images/chapternav/mac_pro_light__bly2b0ua4seq_large.svg" alt="Mac Pro" />
          <p>Mac Pro</p>
        </SwiperSlide>
        <SwiperSlide>
          <img width="45" src="https://www.apple.com/v/mac/home/by/images/chapternav/mac_compare_light__capy8s4wrbhy_large.svg" alt="비교하기" />
          <p>비교하기</p>
        </SwiperSlide>
        <SwiperSlide>
          <img width="72" src="https://www.apple.com/v/mac/home/by/images/chapternav/displays_light__d67yrnk0qsa6_large.svg" alt="디스플레이" />
          <p>디스플레이</p>
        </SwiperSlide>
        <SwiperSlide>
          <img width="34" src="https://www.apple.com/v/mac/home/by/images/chapternav/mac_accessories_light__esnwbnk4bxqq_large.svg" alt="액세서리" />
          <p>액세서리</p>
        </SwiperSlide>
        <SwiperSlide>
          <img width="35" src="https://www.apple.com/v/mac/home/by/images/chapternav/mac_os_light__6mb5pqhztcie_large.svg" alt="sonoma" />
          <p>Sonoma</p>
        </SwiperSlide>
        <SwiperSlide>
          <img width="108" src="https://www.apple.com/v/mac/home/by/images/chapternav/mac_shop_light__f0m72gc7jguq_large.svg" alt="Mac 쇼핑하기" />
          <p>Mac 쇼핑하기</p>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-button-next chapter-nav-next">
        <svg width="7" height="13" viewBox="0 0 7 13" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="var(--color-666)"
            d="m4.748 6.5001s0-.0001 0-.0001l-4.4336-4.877c-.3438-.3789-.3164-.9649.0625-1.3086s.9648-.3174 1.3086.0625l5 5.5c.3213.3535.3213.8927 0 1.2462l-5 5.5c-.3438.3799-.9297.4062-1.3086.0625s-.4062-.9297-.0625-1.3086l4.4336-4.877z"
          ></path>
        </svg>
      </div>
      <div className="swiper-button-prev chapter-nav-prev">
        <svg width="7" height="13" viewBox="0 0 7 13" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="var(--color-666)"
            d="m2.252 6.5001s0-.0001 0-.0001l4.4336-4.877c.3438-.3789.3164-.9648-.0625-1.3086s-.9648-.3174-1.3086.0625l-5 5.5c-.3212.3535-.3212.8927 0 1.2462l5 5.5c.3438.3799.9297.4062 1.3086.0625s.4062-.9297.0625-1.3086z"
          ></path>
        </svg>
      </div>
    </M.ChapterNavWrapper>
  )
}

export function MacSlide() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['노트북', '데스크탑', '디스플레이'];
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>      
      <M.MacSlideWrapper className="macSlide-1 go">
        <M.MacSlideTit className="d-flex flex-space-between flex-align-center fade-up-20">
          <h1>알면 알수록, Mac.</h1>
        </M.MacSlideTit>
        <Swiper slidesPerView={'auto'} spaceBetween={20} navigation={true} modules={[Navigation]} className="mac-slide fade-up-20">
          <SwiperSlide>
            <picture>
              <source media="(max-width:734px)" srcSet="https://www.apple.com/kr/mac/home/by/images/overview/consider/mac_ease__bvgkz2zdltxy_small.jpg, https://www.apple.com/kr/mac/home/by/images/overview/consider/mac_ease__bvgkz2zdltxy_small_2x.jpg 2x" />
              <source media="(max-width:1068px)" srcSet="https://www.apple.com/kr/mac/home/by/images/overview/consider/mac_ease__bvgkz2zdltxy_medium.jpg, https://www.apple.com/kr/mac/home/by/images/overview/consider/mac_ease__bvgkz2zdltxy_medium_2x.jpg 2x" />
              <source media="(max-width:1440px)" srcSet="https://www.apple.com/kr/mac/home/by/images/overview/consider/mac_ease__bvgkz2zdltxy_large.jpg, https://www.apple.com/kr/mac/home/by/images/overview/consider/mac_ease__bvgkz2zdltxy_large_2x.jpg 2x" />
              <source media="(min-width:0px)" srcSet="https://www.apple.com/kr/mac/home/by/images/overview/consider/mac_ease__bvgkz2zdltxy_xlarge.jpg, https://www.apple.com/kr/mac/home/by/images/overview/consider/mac_ease__bvgkz2zdltxy_xlarge_2x.jpg 2x" />
              <img src="https://www.apple.com/kr/mac/home/by/images/overview/consider/mac_ease__bvgkz2zdltxy_xlarge.jpg" alt="" />
            </picture>
            <div className="pos-abs slide-info color-w">
              <p>시작하기</p>
              <h4>쉽게 사용하고. 쉽게 빠져들고.</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <picture>
              <source  media="(max-width:734px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/consider/mac_performance__dh5hyac1zf8m_small.jpg, https://www.apple.com/v/mac/home/by/images/overview/consider/mac_performance__dh5hyac1zf8m_small_2x.jpg 2x" />
              <source media="(max-width:1068px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/consider/mac_performance__dh5hyac1zf8m_medium.jpg, https://www.apple.com/v/mac/home/by/images/overview/consider/mac_performance__dh5hyac1zf8m_medium_2x.jpg 2x" />
              <source media="(max-width:1440px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/consider/mac_performance__dh5hyac1zf8m_large.jpg, https://www.apple.com/v/mac/home/by/images/overview/consider/mac_performance__dh5hyac1zf8m_large_2x.jpg 2x" />
              <source media="(min-width:0px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/consider/mac_performance__dh5hyac1zf8m_xlarge.jpg, https://www.apple.com/v/mac/home/by/images/overview/consider/mac_performance__dh5hyac1zf8m_xlarge_2x.jpg 2x" />
              <img src="https://www.apple.com/v/mac/home/by/images/overview/consider/mac_performance__dh5hyac1zf8m_xlarge.jpg" alt="" />
            </picture>
            <div className="pos-abs slide-info color-w">
              <p>성능 및 배터리 사용 시간</p>
              <h4>더 빠르게. 더 오래.</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <picture>
              <source media="(max-width:734px)" srcSet="https://www.apple.com/kr/mac/home/by/images/overview/consider/mac_iphone__gh1tblkt6bqm_small.jpg, https://www.apple.com/kr/mac/home/by/images/overview/consider/mac_iphone__gh1tblkt6bqm_small_2x.jpg 2x" />
              <source media="(max-width:1068px)" srcSet="https://www.apple.com/kr/mac/home/by/images/overview/consider/mac_iphone__gh1tblkt6bqm_medium.jpg, https://www.apple.com/kr/mac/home/by/images/overview/consider/mac_iphone__gh1tblkt6bqm_medium_2x.jpg 2x" />
              <source media="(max-width:1440px)" srcSet="https://www.apple.com/kr/mac/home/by/images/overview/consider/mac_iphone__gh1tblkt6bqm_large.jpg, https://www.apple.com/kr/mac/home/by/images/overview/consider/mac_iphone__gh1tblkt6bqm_large_2x.jpg 2x" />
              <source media="(min-width:0px)" srcSet="https://www.apple.com/kr/mac/home/by/images/overview/consider/mac_iphone__gh1tblkt6bqm_xlarge.jpg, https://www.apple.com/kr/mac/home/by/images/overview/consider/mac_iphone__gh1tblkt6bqm_xlarge_2x.jpg 2x" />
              <img src="https://www.apple.com/kr/mac/home/by/images/overview/consider/mac_iphone__gh1tblkt6bqm_xlarge.jpg" alt="" />
            </picture>
            <div className="pos-abs slide-info">
              <p>Mac 및 iPhone</p>
              <h4>환상의 드림팀.</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <picture>
              <source media="(max-width:734px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/consider/mac_compatibility__cu59oukz81ci_small.jpg, https://www.apple.com/v/mac/home/by/images/overview/consider/mac_compatibility__cu59oukz81ci_small_2x.jpg 2x" />
              <source media="(max-width:1068px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/consider/mac_compatibility__cu59oukz81ci_medium.jpg, https://www.apple.com/v/mac/home/by/images/overview/consider/mac_compatibility__cu59oukz81ci_medium_2x.jpg 2x" />
              <source media="(max-width:1440px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/consider/mac_compatibility__cu59oukz81ci_large.jpg, https://www.apple.com/v/mac/home/by/images/overview/consider/mac_compatibility__cu59oukz81ci_large_2x.jpg 2x"  />
              <source media="(min-width:0px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/consider/mac_compatibility__cu59oukz81ci_xlarge.jpg, https://www.apple.com/v/mac/home/by/images/overview/consider/mac_compatibility__cu59oukz81ci_xlarge_2x.jpg 2x" />
              <img src="https://www.apple.com/v/mac/home/by/images/overview/consider/mac_compatibility__cu59oukz81ci_xlarge.jpg" alt="" />
            </picture>
            <div className="pos-abs slide-info">
              <p>호환성</p>
              <h4>즐겨 쓰는 앱이라면 Mac에서도.</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <picture>
              <source media="(max-width:734px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/consider/mac_security__gfwda10khdym_small.jpg, https://www.apple.com/v/mac/home/by/images/overview/consider/mac_security__gfwda10khdym_small_2x.jpg 2x" />
              <source media="(max-width:1068px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/consider/mac_security__gfwda10khdym_medium.jpg, https://www.apple.com/v/mac/home/by/images/overview/consider/mac_security__gfwda10khdym_medium_2x.jpg 2x" />
              <source media="(max-width:1440px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/consider/mac_security__gfwda10khdym_large.jpg, https://www.apple.com/v/mac/home/by/images/overview/consider/mac_security__gfwda10khdym_large_2x.jpg 2x" />
              <source media="(min-width:0px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/consider/mac_security__gfwda10khdym_xlarge.jpg, https://www.apple.com/v/mac/home/by/images/overview/consider/mac_security__gfwda10khdym_xlarge_2x.jpg 2x" />
              <img src="https://www.apple.com/v/mac/home/by/images/overview/consider/mac_security__gfwda10khdym_xlarge.jpg" alt="" />
            </picture>
            <div className="pos-abs slide-info color-w">
              <p>개인정보 보호 및 보안</p>
              <h4>당신의 정보는 오롯이 당신만의 것.</h4>
            </div>
          </SwiperSlide>
        </Swiper>
      </M.MacSlideWrapper>
      <M.MacSlideWrapper className="macSlide-2 go">
        <M.MacSlideTit className="d-flex flex-space-between flex-align-center fade-up-20">
          <h1>라인업 살펴보기.</h1>
          <Link to="" onClick={(e) => e.preventDefault()}>전체 모델 비교하기
            <svg width="10" height="10" viewBox="0 0 10 11">
              <line x1="5" y1="0" x2="10" y2="5" stroke="#06c" strokeWidth="1"></line>
              <line x1="5" y1="10" x2="10" y2="5" stroke="#06c" strokeWidth="1"></line>
            </svg>
          </Link>
        </M.MacSlideTit>
        <M.TabWrapper className="d-flex fade-up-20 tabs">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`tab ${activeTab === index ? 'on' : ''}`}
              onClick={() => handleTabClick(index)}
            >
              {tab}
            </div>
          ))}
        </M.TabWrapper>
        <M.TabContWrapper className="fade-up-20">
          <div className={`tab-cont ${activeTab === 0 ? 'on' : ''}`}>
            <Swiper slidesPerView={'auto'} spaceBetween={0} navigation={true} modules={[Navigation]} className="mac-lineUp">
              <SwiperSlide>
                <picture>
                  <source media="(max-width:734px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_mba_13_15__fx2g3qlubdym_small.png, https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_mba_13_15__fx2g3qlubdym_small_2x.png 2x" />
                  <source media="(max-width:1068px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_mba_13_15__fx2g3qlubdym_medium.png, https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_mba_13_15__fx2g3qlubdym_medium_2x.png 2x" />
                  <source media="(min-width:0px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_mba_13_15__fx2g3qlubdym_large.png, https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_mba_13_15__fx2g3qlubdym_large_2x.png 2x" />
                  <img className="pos-cnt" src="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_mba_13_15__fx2g3qlubdym_large.png" alt="" />
                </picture>
                <div className="slide-info">
                  <h4>MacBook Air 13 및 15</h4>
                  <h6>M2 또는 M3 칩</h6>
                  <p className="desc">어디서든 일하고, 즐기고, 창작할 수 있도록<br />해주는 놀랍도록 얇고 빠른 노트북.</p>
                  <p className="price">￦1,390,000부터</p>
                  <div className="d-flex flex-justify-center flex-align-center slide-btn">
                    <Link to="" onClick={(e) => e.preventDefault()}>더 알아보기</Link>
                    <Link to="" onClick={(e) => e.preventDefault()}>구입하기
                      <svg width="10" height="10" viewBox="0 0 10 11">
                        <line x1="5" y1="0" x2="10" y2="5" stroke="#06c" strokeWidth="1"></line>
                        <line x1="5" y1="10" x2="10" y2="5" stroke="#06c" strokeWidth="1"></line>
                      </svg>
                    </Link>
                  </div>
                  <div className="d-flex flex-wrap flex-justify-center slide-detail-info">
                    <div>
                      <h4>34.5cm 또는 38.9cm</h4>
                      <p>10억 색상 지원 및 500 니트 밝기를 자랑하는 Liquid Retina 디스플레이</p>
                    </div>
                    <div>
                      <picture>
                        <source media="(min-width:0px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_icon_m2_m3__jo6w8mbgmmye_large.png, https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_icon_m2_m3__jo6w8mbgmmye_large_2x.png 2x" />
                        <img src="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_icon_m2_m3__jo6w8mbgmmye_large.png" alt="" />
                      </picture>
                      <p>Apple M2 또는 M3 칩</p>
                    </div>
                    <div>
                      <h4>4개 포트</h4>
                      <p>Thunderbolt/USB 4 2개, 헤드폰 잭, MagSafe</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <picture>
                  <source media="(max-width:734px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_mbp_14_16__bkl8zusnkpw2_small.png, https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_mbp_14_16__bkl8zusnkpw2_small_2x.png 2x" />
                  <source media="(max-width:1068px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_mbp_14_16__bkl8zusnkpw2_medium.png, https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_mbp_14_16__bkl8zusnkpw2_medium_2x.png 2x" />
                  <source media="(min-width:0px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_mbp_14_16__bkl8zusnkpw2_large.png, https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_mbp_14_16__bkl8zusnkpw2_large_2x.png 2x" />
                  <img className="pos-cnt" src="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_mbp_14_16__bkl8zusnkpw2_large.png" alt="" />
                </picture>
                <div className="slide-info">
                  <h4>MacBook Pro 14 및 16</h4>
                  <h6>M3, M3 Pro 또는 M3 Max 칩</h6>
                  <p className="desc">막대한 워크플로도 너끈히 처리하는<br />가장 앞선 Mac 노트북.</p>
                  <p className="price">￦2,390,000부터</p>
                  <div className="d-flex flex-justify-center flex-align-center slide-btn">
                    <Link to="" onClick={(e) => e.preventDefault()}>더 알아보기</Link>
                    <Link to="" onClick={(e) => e.preventDefault()}>구입하기
                      <svg width="10" height="10" viewBox="0 0 10 11">
                        <line x1="5" y1="0" x2="10" y2="5" stroke="#06c" strokeWidth="1"></line>
                        <line x1="5" y1="10" x2="10" y2="5" stroke="#06c" strokeWidth="1"></line>
                      </svg>
                    </Link>
                  </div>
                  <div className="d-flex flex-wrap flex-justify-center slide-detail-info">
                    <div>
                      <h4>35.9cm 또는 41.0cm</h4>
                      <p>1000 니트의 HDR 밝기 및 600 니트의 SDR 밝기 그리고 최대 120Hz의 재생률을 제공하는 Liquid Retina XDR 디스플레이</p>
                    </div>
                    <div>
                      <picture>
                        <source media="(min-width:0px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_icon_m3_pro_max__wg8d2vblzmqi_large.png, https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_icon_m3_pro_max__wg8d2vblzmqi_large_2x.png 2x" />
                        <img src="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_icon_m3_pro_max__wg8d2vblzmqi_large.png" alt="" />
                      </picture>
                      <p>Apple M3, M3 Pro 또는 M3 Max 칩</p>
                    </div>
                    <div>
                      <h4>7개 포트</h4>
                      <p>Thunderbolt/USB 4 2개 또는 Thunderbolt 4 3개, HDMI, SDXC, 헤드폰 잭, MagSafe</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={`tab-cont ${activeTab === 1 ? 'on' : ''}`}>
            <Swiper slidesPerView={'auto'} spaceBetween={0} navigation={true} modules={[Navigation]} className="mac-lineUp">
              <SwiperSlide>
                <picture>
                  <source media="(max-width:734px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_imac_24__inq0od011wuq_small.png, https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_imac_24__inq0od011wuq_small_2x.png 2x" />
                  <source media="(max-width:1068px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_imac_24__inq0od011wuq_medium.png, https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_imac_24__inq0od011wuq_medium_2x.png 2x" />
                  <source media="(min-width:0px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_imac_24__inq0od011wuq_large.png, https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_imac_24__inq0od011wuq_large_2x.png 2x" />
                  <img className="pos-cnt" src="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_imac_24__inq0od011wuq_large.png" alt="" />
                </picture>
                <div className="slide-info">
                  <h4>iMac</h4>
                  <h6>M3 칩</h6>
                  <p className="desc">창의적인 작업도 생산적 업무도 척척.<br />놀라운 올인원 데스크탑.</p>
                  <p className="price">￦1,990,000부터</p>
                  <div className="d-flex flex-justify-center flex-align-center slide-btn">
                    <Link to="" onClick={(e) => e.preventDefault()}>더 알아보기</Link>
                    <Link to="" onClick={(e) => e.preventDefault()}>구입하기
                      <svg width="10" height="10" viewBox="0 0 10 11">
                        <line x1="5" y1="0" x2="10" y2="5" stroke="#06c" strokeWidth="1"></line>
                        <line x1="5" y1="10" x2="10" y2="5" stroke="#06c" strokeWidth="1"></line>
                      </svg>
                    </Link>
                  </div>
                  <div className="d-flex flex-wrap flex-justify-center slide-detail-info">
                    <div>
                      <h4>59.6cm</h4>
                      <p>선명하고 생생한 디테일을 보여주는 500 니트 밝기의 4.5K Retina 디스플레이</p>
                    </div>
                    <div>
                      <picture>
                        <source media="(min-width:0px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_icon_m3__geq4mv9q8qeu_large.png, https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_icon_m3__geq4mv9q8qeu_large_2x.png 2x" />
                        <img src="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_icon_m3__geq4mv9q8qeu_large.png" alt="" />
                      </picture>
                      <p>Apple M3 칩</p>
                    </div>
                    <div>
                      <h4>6개 포트</h4>
                      <p>Thunderbolt/USB 4 2개, USB 3 최대 2개, 기가비트 이더넷, 헤드폰 잭</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <picture>
                  <source media="(max-width:734px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_mac_mini__c4284n3j25w2_small.png, https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_mac_mini__c4284n3j25w2_small_2x.png 2x" />
                  <source media="(max-width:1068px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_mac_mini__c4284n3j25w2_medium.png, https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_mac_mini__c4284n3j25w2_medium_2x.png 2x" />
                  <source media="(min-width:0px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_mac_mini__c4284n3j25w2_large.png, https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_mac_mini__c4284n3j25w2_large_2x.png 2x" />
                  <img className="pos-cnt" src="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_mac_mini__c4284n3j25w2_large.png" alt="" />
                </picture>
                <div className="slide-info">
                  <h4>Mac mini</h4>
                  <h6>M2 또는 M2 Pro 칩</h6>
                  <p className="desc">크기 이상의 성능을 선사하는<br />가장 부담 없는 Mac 데스크탑.</p>
                  <p className="price">￦850,000부터</p>
                  <div className="d-flex flex-justify-center flex-align-center slide-btn">
                    <Link to="" onClick={(e) => e.preventDefault()}>더 알아보기</Link>
                    <Link to="" onClick={(e) => e.preventDefault()}>구입하기
                      <svg width="10" height="10" viewBox="0 0 10 11">
                        <line x1="5" y1="0" x2="10" y2="5" stroke="#06c" strokeWidth="1"></line>
                        <line x1="5" y1="10" x2="10" y2="5" stroke="#06c" strokeWidth="1"></line>
                      </svg>
                    </Link>
                  </div>
                  <div className="d-flex flex-wrap flex-justify-center slide-detail-info">
                    <div>
                      <h4>-</h4>
                      <p></p>
                    </div>
                    <div>
                      <picture>
                        <source media="(min-width:0px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_icon_m2_pro__c5ftjeskmwuq_large.png, https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_icon_m2_pro__c5ftjeskmwuq_large_2x.png 2x" />
                        <img src="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_icon_m2_pro__c5ftjeskmwuq_large.png" alt="" />
                      </picture>
                      <p>Apple M2 또는 M2 Pro 칩</p>
                    </div>
                    <div>
                      <h4>9개 포트</h4>
                      <p>Thunderbolt 4 최대 4개, USB-A 2개, HDMI, 기가비트 이더넷, 헤드폰 잭</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <picture>
                  <source media="(max-width:734px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_mac_studio__c24lhkuq4vee_small.png, https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_mac_studio__c24lhkuq4vee_small_2x.png 2x" />
                  <source media="(max-width:1068px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_mac_studio__c24lhkuq4vee_medium.png, https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_mac_studio__c24lhkuq4vee_medium_2x.png 2x" />
                  <source media="(min-width:0px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_mac_studio__c24lhkuq4vee_large.png, https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_mac_studio__c24lhkuq4vee_large_2x.png 2x" />
                  <img className="pos-cnt" src="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_mac_studio__c24lhkuq4vee_large.png" alt="" />
                </picture>
                <div className="slide-info">
                  <h4>Mac Studio</h4>
                  <h6>M2 Max 또는 M2 Ultra 칩</h6>
                  <p className="desc">전문 워크플로를 위한<br />강력한 성능 및 빈틈없는 연결성.</p>
                  <p className="price">￦2,990,000부터</p>
                  <div className="d-flex flex-justify-center flex-align-center slide-btn">
                    <Link to="" onClick={(e) => e.preventDefault()}>더 알아보기</Link>
                    <Link to="" onClick={(e) => e.preventDefault()}>구입하기
                      <svg width="10" height="10" viewBox="0 0 10 11">
                        <line x1="5" y1="0" x2="10" y2="5" stroke="#06c" strokeWidth="1"></line>
                        <line x1="5" y1="10" x2="10" y2="5" stroke="#06c" strokeWidth="1"></line>
                      </svg>
                    </Link>
                  </div>
                  <div className="d-flex flex-wrap flex-justify-center slide-detail-info">
                    <div>
                      <h4>-</h4>
                      <p></p>
                    </div>
                    <div>
                      <picture>
                        <source media="(min-width:0px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_icon_m2_max_m2_ultra__d0wnaf44m6qa_large.png, https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_icon_m2_max_m2_ultra__d0wnaf44m6qa_large_2x.png 2x" />
                        <img src="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_icon_m2_max_m2_ultra__d0wnaf44m6qa_large.png" alt="" />
                      </picture>
                      <p>Apple M2 Max 또는 M2 Ultra 칩</p>
                    </div>
                    <div>
                      <h4>12개 포트</h4>
                      <p>Thunderbolt 4 최대 6개, USB-A 2개, USB-C 최대 2개, HDMI, 10Gb 이더넷, SDXC, 헤드폰 잭</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <picture>
                  <source media="(max-width:734px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_mac_pro__6q3qt8073f6e_small.png, https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_mac_pro__6q3qt8073f6e_small_2x.png 2x" />
                  <source media="(max-width:1068px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_mac_pro__6q3qt8073f6e_medium.png, https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_mac_pro__6q3qt8073f6e_medium_2x.png 2x" />
                  <source media="(min-width:0px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_mac_pro__6q3qt8073f6e_large.png, https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_mac_pro__6q3qt8073f6e_large_2x.png 2x" />
                  <img className="pos-cnt" src="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_mac_pro__6q3qt8073f6e_large.png" alt="" />
                </picture>
                <div className="slide-info">
                  <h4>Mac Pro</h4>
                  <h6>M2 Ultra 칩</h6>
                  <p className="desc">PCIe 확장으로 막대한 워크플로도 너끈히<br />처리할 수 있는 전문가용 워크스테이션.</p>
                  <p className="price">￦10,490,000부터</p>
                  <div className="d-flex flex-justify-center flex-align-center slide-btn">
                    <Link to="" onClick={(e) => e.preventDefault()}>더 알아보기</Link>
                    <Link to="" onClick={(e) => e.preventDefault()}>구입하기
                      <svg width="10" height="10" viewBox="0 0 10 11">
                        <line x1="5" y1="0" x2="10" y2="5" stroke="#06c" strokeWidth="1"></line>
                        <line x1="5" y1="10" x2="10" y2="5" stroke="#06c" strokeWidth="1"></line>
                      </svg>
                    </Link>
                  </div>
                  <div className="d-flex flex-wrap flex-justify-center slide-detail-info">
                    <div>
                      <h4>-</h4>
                      <p></p>
                    </div>
                    <div>
                      <picture>
                        <source media="(min-width:0px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_icon_m2_ultra__4mmsok50gvmu_large.png, https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_icon_m2_ultra__4mmsok50gvmu_large_2x.png 2x" />
                        <img src="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_icon_m2_ultra__4mmsok50gvmu_large.png" alt="" />
                      </picture>
                      <p>Apple M2 Ultra 칩</p>
                    </div>
                    <div>
                      <h4>18개 포트</h4>
                      <p>Thunderbolt 4 8개, USB-A 3개, HDMI 2개, 10Gb 이더넷 2개, Serial ATA 2개, 헤드폰 잭</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={`tab-cont ${activeTab === 2 ? 'on' : ''}`}>
            <Swiper slidesPerView={'auto'} spaceBetween={0} navigation={true} modules={[Navigation]} className="mac-lineUp">
              <SwiperSlide>
                <picture>
                  <source media="(max-width:734px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_studio_display__c0gbtkgtsx0m_small.png, https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_studio_display__c0gbtkgtsx0m_small_2x.png 2x" />
                  <source media="(max-width:1068px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_studio_display__c0gbtkgtsx0m_medium.png, https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_studio_display__c0gbtkgtsx0m_medium_2x.png 2x" />
                  <source media="(min-width:0px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_studio_display__c0gbtkgtsx0m_large.png, https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_studio_display__c0gbtkgtsx0m_large_2x.png 2x" />
                  <img className="pos-cnt" src="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_studio_display__c0gbtkgtsx0m_large.png" alt="" />
                </picture>
                <div className="slide-info">
                  <h4>Studio Display</h4>
                  <p className="desc">뛰어난 카메라와 오디오를 갖춘<br />5K Retina 디스플레이.</p>
                  <p className="price">￦2,090,000부터</p>
                  <div className="d-flex flex-justify-center flex-align-center slide-btn">
                    <Link to="" onClick={(e) => e.preventDefault()}>더 알아보기</Link>
                    <Link to="" onClick={(e) => e.preventDefault()}>구입하기
                      <svg width="10" height="10" viewBox="0 0 10 11">
                        <line x1="5" y1="0" x2="10" y2="5" stroke="#06c" strokeWidth="1"></line>
                        <line x1="5" y1="10" x2="10" y2="5" stroke="#06c" strokeWidth="1"></line>
                      </svg>
                    </Link>
                  </div>
                  <div className="d-flex flex-wrap flex-justify-center slide-detail-info">
                    <div>
                      <h4>68.3cm</h4>
                      <p>5120 x 2880 픽셀의 Retina 디스플레이 밝기로 화사한 컬러 구현</p>
                    </div>
                    <div>
                      <picture>
                        <source media="(min-width:0px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_icon_screen__gfttd7yxs9ay_large.png, https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_icon_screen__gfttd7yxs9ay_large_2x.png 2x" />
                        <img src="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_icon_screen__gfttd7yxs9ay_large.png" alt="" />
                      </picture>
                      <p>Retina 디스플레이가 선사하는 미려한 색상과 놀라운 디테일</p>
                    </div>
                    <div>
                      <h4>4개 포트</h4>
                      <p>Thunderbolt 3(USB‑C), USB‑C 3개</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <picture>
                  <source media="(max-width:734px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_pro_display__duklzyfwl92e_small.png, https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_pro_display__duklzyfwl92e_small_2x.png 2x" />
                  <source media="(max-width:1068px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_pro_display__duklzyfwl92e_medium.png, https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_pro_display__duklzyfwl92e_medium_2x.png 2x" />
                  <source media="(min-width:0px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_pro_display__duklzyfwl92e_large.png, https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_pro_display__duklzyfwl92e_large_2x.png 2x" />
                  <img className="pos-cnt" src="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_pro_display__duklzyfwl92e_large.png" alt="" />
                </picture>
                <div className="slide-info">
                  <h4>Pro Display XDR</h4>
                  <p className="desc">프로 워크플로에 적합한<br />첨단 6K XDR 디스플레이.</p>
                  <p className="price">￦6,499,000부터</p>
                  <div className="d-flex flex-justify-center flex-align-center slide-btn">
                    <Link to="" onClick={(e) => e.preventDefault()}>더 알아보기</Link>
                    <Link to="" onClick={(e) => e.preventDefault()}>구입하기
                      <svg width="10" height="10" viewBox="0 0 10 11">
                        <line x1="5" y1="0" x2="10" y2="5" stroke="#06c" strokeWidth="1"></line>
                        <line x1="5" y1="10" x2="10" y2="5" stroke="#06c" strokeWidth="1"></line>
                      </svg>
                    </Link>
                  </div>
                  <div className="d-flex flex-wrap flex-justify-center slide-detail-info">
                    <div>
                      <h4>80.3cm</h4>
                      <p>6016 x 3384 픽셀의 Retina XDR 디스플레이 밝기로 찬란한 컬러 구현, 최대 1600 니트의 부분 최대 밝기</p>
                    </div>
                    <div>
                      <picture>
                        <source media="(min-width:0px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_icon_screen__gfttd7yxs9ay_large.png, https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_icon_screen__gfttd7yxs9ay_large_2x.png 2x" />
                        <img src="https://www.apple.com/v/mac/home/by/images/overview/select/product_tile_icon_screen__gfttd7yxs9ay_large.png" alt="" />
                      </picture>
                      <p>Retina XDR 디스플레이가 선사하는 가장 몰입감 넘치는 시각 경험</p>
                    </div>
                    <div>
                      <h4>4개 포트</h4>
                      <p>Thunderbolt 3(USB‑C), USB‑C 3개</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </M.TabContWrapper>
      </M.MacSlideWrapper>
      <M.MacSlideWrapper className="macSlide-3 go">
        <M.MacSlideTit className="d-flex flex-space-between flex-align-center fade-up-20">
          <h1>Mac, Apple에서 사면<br />가장 좋은 이유.</h1>
          <Link to="" onClick={(e) => e.preventDefault()}>Mac 쇼핑하기
            <svg width="10" height="10" viewBox="0 0 10 11">
              <line x1="5" y1="0" x2="10" y2="5" stroke="#06c" strokeWidth="1"></line>
              <line x1="5" y1="10" x2="10" y2="5" stroke="#06c" strokeWidth="1"></line>
            </svg>
          </Link>
        </M.MacSlideTit>
        <Swiper slidesPerView={'auto'} spaceBetween={20} navigation={true} modules={[Navigation]} className="mac-slide fade-up-20">
          <SwiperSlide>
            <div className="slide-info">
              <picture>
                <source media="(min-width:0px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/incentive/icon_apple_card__fa68csvawtei_large.png, https://www.apple.com/v/mac/home/by/images/overview/incentive/icon_apple_card__fa68csvawtei_large_2x.png 2x" />
                <img src="https://www.apple.com/v/mac/home/by/images/overview/incentive/icon_apple_card__fa68csvawtei_large.png" alt="" />
              </picture>
              <h4>월 할부 가능.</h4>
              <p>편리한 월 할부 옵션으로 보다 부담 없이 구매하실 수 있습니다.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-info">
              <picture>
                <source media="(min-width:0px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/incentive/icon_trade_in__ca5f20mux4b6_large.png, https://www.apple.com/v/mac/home/by/images/overview/incentive/icon_trade_in__ca5f20mux4b6_large_2x.png 2x" />
                <img src="https://www.apple.com/v/mac/home/by/images/overview/incentive/icon_trade_in__ca5f20mux4b6_large.png" alt="" />
              </picture>
              <h4>Apple Trade In으로<br />보다 저렴하게.</h4>
              <p>보상 판매 대상 기기를 반납하고 새 Mac 구입 시 사용할 수 있는 크레딧을 받으세요.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-info">
              <picture>
                <source media="(min-width:0px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/incentive/icon_customize__b6w4i5ax89py_large.png, https://www.apple.com/v/mac/home/by/images/overview/incentive/icon_customize__b6w4i5ax89py_large_2x.png 2x" />
                <img src="https://www.apple.com/v/mac/home/by/images/overview/incentive/icon_customize__b6w4i5ax89py_large.png" alt="" />
              </picture>
              <h4>Mac 구성하기.</h4>
              <p>칩, 메모리, 저장 용량, 색상까지 꼭 마음에 들도록.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-info">
              <picture>
                <source media="(min-width:0px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/incentive/icon_delivery__fyzranm9416y_large.png, https://www.apple.com/v/mac/home/by/images/overview/incentive/icon_delivery__fyzranm9416y_large_2x.png 2x" />
                <img src="https://www.apple.com/v/mac/home/by/images/overview/incentive/icon_delivery__fyzranm9416y_large.png" alt="" />
              </picture>
              <h4>무료 배송 및 픽업.</h4>
              <p>제품을 무료로 배송받거나 Apple Store에서 픽업할 수 있습니다.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-info">
              <picture>
                <source media="(min-width:0px)" srcSet="https://www.apple.com/v/mac/home/by/images/overview/incentive/icon_specialist__fpgj89m9d9aq_large.png, https://www.apple.com/v/mac/home/by/images/overview/incentive/icon_specialist__fpgj89m9d9aq_large_2x.png 2x" />
                <img src="https://www.apple.com/v/mac/home/by/images/overview/incentive/icon_specialist__fpgj89m9d9aq_large.png" alt="" />
              </picture>
              <h4>Mac 스페셜리스트의<br />쇼핑 지원.</h4>
              <p>스페셜리스트와 함께 하는 일대일 쇼핑. 온라인에서도 매장에서도.</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </M.MacSlideWrapper>
    </>
  )
}
