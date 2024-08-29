import { StoreTit, StoreSlideWrapper } from '../styles/Store.styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function StoreSlide() {
  return (
    <>
      <StoreTit><span>최신 제품. </span>따끈따끈한 신제품 이야기.</StoreTit>
      <StoreSlideWrapper>
        <Swiper slidesPerView={'auto'} spaceBetween={20} navigation={true} modules={[Navigation]} className="store-slide store-slide-1">
          <SwiperSlide>
            <img style={{position:"absolute", bottom: 0}} width="100%" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-macbook-air-202402?wid=800&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1707259289595" alt="MACBOOK AIR" />
            <div className="pos-abs slide-info">
              <p>MACBOOK AIR</p>
              <h4>어디서나 종횡무진할 수 있도록.</h4>
              <p>￦1,390,000부터</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img width="100%" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-iphone-15-pro-202309?wid=800&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1692910040844" alt="IPHONE15 PRO" />
            <div className="pos-abs slide-info black-card">
              <p>IPHONE 15 PRO</p>
              <h4>티타늄</h4>
              <p>￦1,550,000부터</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img width="100%" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-iphone-15-202309?wid=800&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1692719973220" alt="IPHONE15" />
            <div className="pos-abs slide-info">
              <p>IPHONE 15</p>
              <h4>새로움 물씬</h4>
              <p>￦1,250,000부터</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img width="100%" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-watch-s9-202309_GEO_KR?wid=800&amp;hei=1000&amp;fmt=jpeg&amp;qlt=90&amp;.v=1693501331792" alt="APPLE WATCH SERISE 9" />
            <div className="pos-abs slide-info black-card">
              <p>APPLE WATCH SERISE 9</p>
              <h4>보다 똑똑. 보다 뚜렷. 보다 강력.</h4>
              <p>￦599,000부터</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img style={{position:"absolute", bottom: 0}} width="100%" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-ipad-202310_GEO_KR?wid=800&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1696875230158" alt="IPAD" />
            <div className="pos-abs slide-info">
              <p>IPAD</p>
              <h4>쓰다. 그리다. 빠져들다.</h4>
              <p>￦679,000부터</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img style={{position:"absolute", bottom: 0}} width="100%" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-ipad-pro-202210_GEO_KR?wid=800&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1667506332342" alt="IPAD PRO" />
            <div className="pos-abs slide-info black-card">
              <p>IPAD PRO</p>
              <h4>막강한 성능의 M2 칩 탑재</h4>
              <p>￦1,249,000부터</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </StoreSlideWrapper>
      <StoreTit><span>도움의 손길. </span>언제든, 당신에게 맞는 방식으로.</StoreTit>
      <StoreSlideWrapper>
        <Swiper slidesPerView={'auto'} spaceBetween={20} navigation={true} modules={[Navigation]} className="store-slide store-slide-2">
          <SwiperSlide className="slide-card">
            <img className="pos-cnt" width="480" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-specialist-help-202309?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1701194078821" alt="APPLE 스페셜리스트" />
            <div className="pos-abs slide-info">
              <p>APPLE 스페셜리스트</p>
              <h4>스페셜리스트와 함께하는 일대일 쇼핑.</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide-card">
            <img className="pos-cnt" width="480" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-TAA-202310?wid=960&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1697149577145" alt="TODAY AT APPLE" />
            <div className="pos-abs slide-info">
              <p>TODAY AT APPLE</p>
              <h4>Apple Store의 무료 세션에 참여해 보세요.</h4>
              <p>최신 기능과 더불어 Apple 기기를 더욱 심도 있게 활용하는 법을 알아보세요.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-card">
              <img className="pos-cnt" style={{bottom: 0}} width="480" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-25-apps-202108?wid=960&amp;hei=480&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1626223748000" alt="개인 맞춤 세션" />
              <div className="pos-abs slide-info">
                <h5>무료 온라인 개인 맞춤 세션에서 새 기기를 설정하는 방법을 배워보세요.</h5>
              </div>
            </div>
            <div className="slide-card">
              <img className="pos-cnt" width="480" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-25-genius-202108?wid=960&amp;hei=480&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1626384443000" alt="Genius Bar" />
              <div className="pos-abs slide-info">
                <h5>Genius Bar에서<br />직접 전문가의<br />도움을 받을 수 있습니다.</h5>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </StoreSlideWrapper>
      <StoreTit><span>생생하게 들리는 차이. </span>풍부한 고품질 사운드를 한다면 필연적인 선택.</StoreTit>
      <StoreSlideWrapper>
        <Swiper slidesPerView={'auto'} spaceBetween={20} navigation={true} modules={[Navigation]} className="store-slide store-slide-3">
          <SwiperSlide className="first-card">
            <img width="100%" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-applemusic-202110?wid=800&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1633644705000" alt="무료 이용 혜택" />
            <div className="pos-abs slide-info">
              <h4>Apple Music 6개월 무료 이용 혜택.</h4>
              <p>iPhone, AirPods 또는 일부 Beats 제품 구입 시 드리는 혜택입니다.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img className="d-block mx-auto" width="230" height="230" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MTJV3?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=90&amp;.v=1694014871985" alt="AirPods Pro" />
            <div className="pos-abs slide-info">
              <p>무료 각인</p>
              <h5>AirPods Pro MagSafe 충전 케이스 모델(2세대, USB-C)</h5>
              <p>￦359,000</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img className="d-block mx-auto" width="230" height="230" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-max-select-silver-202011?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=95&amp;.v=1604021221000" alt="AirPods Max" />
            <div className="pos-abs slide-info">
              <p>무료 각인</p>
              <h5>AirPods Max - 실버</h5>
              <p>￦769,000</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img className="d-block mx-auto" width="230" height="230" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MME73?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=95&amp;.v=1632861342000" alt="AirPods(3세대)" />
            <div className="pos-abs slide-info">
              <p>무료 각인</p>
              <h5>AirPods(3세대) Lighting 충전 케이스 모델</h5>
              <p>￦259,000</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img className="d-block mx-auto" width="230" height="230" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQLK3?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=95&amp;.v=1682361480894" alt="Beats Studio Buds" />
            <div className="pos-abs slide-info">
              <p></p>
              <h5>Beats Studio Buds + 무선 노이즈 캔슬링 이어버드 - 투명</h5>
              <p>￦229,000</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img className="d-block mx-auto" width="230" height="230" src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MJ4X3?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=95&amp;.v=1621876626000" alt="Beats Studio Buds" />
            <div className="pos-abs slide-info">
              <p></p>
              <h5>Beats Studio Buds True 무선 노이즈 감쇠 이어폰 - 블랙</h5>
              <p>￦199,000</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </StoreSlideWrapper>
    </>
  )
}

export default StoreSlide;