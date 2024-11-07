# [인터랙션 반응형 웹](https://clonecoding-by-react.vercel.app/)
(2024. 07 ~ 09)

기존에 `HTML5/CSS3`, `JavaScript`, `jQuery`를 사용하여 'apple.com/kr' 사이트를 클론 코딩한 인터랙션 반응형 웹사이트를 `React` 컴포넌트 기반 개발 방식으로 리팩토링하였습니다.

## 주요 기능 및 커스텀 Hook
### Header.jsx, Footer.jsx
- [x] 브라우저 너비값 반환하는 훅 만들기
- [x] 훅에서 반환하는 너비값을 이용해 반응형 메뉴 만들기
- [x] 그 외 필요한 애니메이션

### Home.jsx
- [x] 비디오 컨트롤 훅 만들기
- [x] swiper/react 반응형 슬라이드 만들기
- [x] 그 외 필요한 애니메이션

### Store.jsx
- [x] swiper/react 슬라이드 만들기

### Mac.jsx
- [x] 비디오 크시 계산을 위한 스크롤 인터랙션 훅 만들기
- [x] 스크롤 모션 훅 만들기
- [x] 반응형 아코디언 기능 구현하기

### WatchSeries9.jsx
- [x] 페이지 전체 스크롤 인터랙션 기능 구현

### AirPodsPro2.jsx
- [x] 페이지 전체 스크롤 인터랙션 기능 구현
- 페이지 첫 로드 시 이미지 인터랙션이 원활하지 않은 문제: 
수십 장의 이미지가 로드 되기 때문에 로딩 시간이 길어질 수 있다. 이를 해결하기 위해 첫 번째 이미지를 우선적으로 그린 후 상태를 업데이트하도록 설정했으나, 여전히 문제의 원인을 파악하지 못함

## Stack
- [x] HTML5
- [x] CSS3
- [x] JavaScript
- [x] React
- [x] Styled-Components
