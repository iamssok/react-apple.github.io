/* eslint-disable no-loop-func */
/* eslint-disable default-case */
import { useState, useEffect } from 'react';

function useAirPodsScrollMotion() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);  // 페이지 로드 여부 확인을 위한 flag

  useEffect(() => {

    let scrollY = 0;
    let prevScrollHeight = 0;
    let currentScene = 0;
    let sceneInfo = [];
    let allImagesLoaded = false;  // 이미지 로드 여부 확인을 위한 플래그
    let hasVideoPlayed = false;   // 해당 비디오를 재생했는지 확인을 위한 플래그
    let wasInScene1 = false;      // #show-scene-1 인지 확인을 위한 플래그

    function initializeSceneInfo() {
      const canvasHeightRatio = window.innerHeight / 1050;  // 비디오 크기를 브라우저 높이에 맞게 출력하기 위한 비율 계산(1050은 비디오 높이값)

      sceneInfo = [
        {
          type: 'sticky',
          heightNum: 6,
          scrollHeight: 0,
          objs: {
            container: document.querySelector("#scroll-section-0"),
            objBtn: document.querySelector("#scroll-section-0 .btn"),
            objTit: document.querySelector("#scroll-section-0 .tit"),
            objSubTit: document.querySelector("#scroll-section-0 .subTit"),
            objVid: document.querySelector("#scroll-section-0 .obj.vid"),
            objDesc: document.querySelector("#scroll-section-0 .obj.desc"),
            txtA: document.querySelector("#scroll-section-0 .txt.a"),
            txtB: document.querySelector("#scroll-section-0 .txt.b"),
            txtC: document.querySelector("#scroll-section-0 .txt.c"),
            txtD: document.querySelector("#scroll-section-0 .txt.d"),
            txtE: document.querySelector("#scroll-section-0 .txt.e"),
            canvas: document.querySelector('#video-canvas-p'),
            context: document.querySelector('#video-canvas-p').getContext('2d'),
            videoImages: [],
            mcanvas: document.querySelector('#video-canvas-m'),
            mcontext: document.querySelector('#video-canvas-m').getContext('2d'),
            mvideoImages: []
          },
          values: {
            videoImageCount: 65,
            mvideoImageCount: 93,
				    imageSequence: [0, 64, { start: 0, end: 0.3 }],
				    mimageSequence: [0, 92, { start: 0, end: 0.3 }],
				    mcanvas_opacity_out: [1, 0, { start: 0.2, end: 0.3 }],
            objTit_scale: [1, 1.2, { start: 0, end: 0.15 }],
            objTit_opacity: [1, 0, { start: 0.05, end: 0.15 }],
            objBtn_opacity_out: [1, 0, { start: 0.05, end: 0.15 }],
            objSubTit_opacity_in: [0, 1, { start: 0.26, end: 0.28 }],
            objSubTit_scale_in: [0.8, 1, { start: 0.26, end: 0.28 }],
            objSubTit_opacity_out: [1, 0, { start: 0.3, end: 0.35 }],
            objVid_opacity_in: [0, 1, { start: 0.3, end: 0.35 }],
            objDesc_y_inOut: [100, -100, { start: 0.35, end: 1 }],
            txtA_opacity_out: [1, 0.1, { start: 0.4, end: 0.43 }],
            txtB_opacity_in: [0.1, 1, { start: 0.44, end: 0.47 }],
            txtB_opacity_out: [1, 0.1, { start: 0.48, end: 0.51 }],
            txtC_opacity_in: [0.1, 1, { start: 0.52, end: 0.55 }],
            txtC_opacity_out: [1, 0.1, { start: 0.56, end: 0.59 }],
            txtD_opacity_in: [0.1, 1, { start: 0.6, end: 0.63 }],
            txtD_opacity_out: [1, 0.1, { start: 0.64, end: 0.67 }],
            txtE_opacity_in: [0.1, 1, { start: 0.68, end: 0.71 }],
            txtE_opacity_out: [1, 0.1, { start: 0.72, end: 1 }],
            objVid_opacity_out: [1, 0, { start: 0.6, end: 0.9 }],
          },
        },
        {
          type: 'normal',
          scrollHeight: 0,
          objs: {
            container: document.querySelector("#scroll-section-1"),
          },
        },
        {
          type: 'sticky',
          heightNum: 6,
          scrollHeight: 0,
          objs: {
            container: document.querySelector("#scroll-section-2"),
            objImgA: document.querySelector("#scroll-section-2 .img.a"),
            objImgB: document.querySelector("#scroll-section-2 .img.b"),
            objImgC: document.querySelector("#scroll-section-2 .img.c"),
            objTxtA: document.querySelector("#scroll-section-2 .txt.a"),
            objTxtB: document.querySelector("#scroll-section-2 .txt.b"),
            objTxtC: document.querySelector("#scroll-section-2 .txt.c"),
            objVid: document.querySelector("#scroll-section-2 .vid"),
          },
          values: {          
            imgA_scale_out: [1, 0.9, { start: 0, end: 0.3 }],
            imgA_opacity_out: [1, 0, { start: 0.1, end: 0.4 }],
            txtA_opacity_in: [0, 1, { start: 0, end: 0.1 }],
            txtA_y_in: [0, -100, { start: 0, end: 0.1 }],
            txtA_opacity_out: [1, 0, { start: 0.11, end: 0.2 }],
            txtA_y_out: [-100, -200, { start: 0.11, end: 0.2 }],
            txtB_opacity_in: [0, 1, { start: 0.2, end: 0.3 }],
            txtB_y_in: [0, -100, { start: 0.2, end: 0.3 }],
            txtB_opacity_out: [1, 0, { start: 0.31, end: 0.4 }],
            txtB_y_out: [-100, -200, { start: 0.31, end: 0.4 }],
            imgB_opacity_in: [0, 1, { start: 0.4, end: 0.45 }],
            imgB_opacity_out: [1, 0, { start: 0.46, end: 0.6 }],
            imgB_scale_out: [1, 0.9, { start: 0.46, end: 0.6 }],
            txtC_opacity_in: [0, 1, { start: 0.4, end: 0.5 }],
            txtC_y_in: [0, -100, { start: 0.4, end: 0.5 }],
            txtC_opacity_out: [1, 0, { start: 0.51, end: 0.6 }],
            txtC_y_out: [-100, -200, { start: 0.51, end: 0.6 }],
            imgC_opacity_in: [0, 1, { start: 0.6, end: 0.7 }],
            imgC_scale_in: [1, 0.8, { start: 0.6, end: 0.7 }],
            vid_opacity_in: [0, 1, { start: 0.6, end: 0.7 }],
            vid_scale_in: [1.1, `${canvasHeightRatio}`, { start: 0.6, end: 0.7 }],
          },
        },
      ];
    }

    function fixedLocalNav() {
      const localNavWrapper = document.querySelector(".local-nav-wrapper");
      if (localNavWrapper) {  // DOM 접근에 대한 오류를 해결하기 위한 조건문
        if (scrollY >= 50) {
          localNavWrapper.style.position = "fixed";
          localNavWrapper.style.top = 0;
          localNavWrapper.style.backgroundColor = "rgba(22,22,22,1)";
        } else {
          localNavWrapper.style.position = "absolute";
          localNavWrapper.style.top = "50px";
          localNavWrapper.style.backgroundColor = "transparent";
        }
      }
    }

    function setLayout() {
      initializeSceneInfo(); // DOM 초기화 시점 조정
      sceneInfo.forEach((scene) => {
        if (!scene.objs.container) return; // 컨테이너가 없는 경우 무시
        if (scene.type === 'sticky') {
          scene.scrollHeight = scene.heightNum * window.innerHeight;
        } else if (scene.type === 'normal') {
          scene.scrollHeight = scene.objs.container.offsetHeight;
        }
        scene.objs.container.style.height = `${scene.scrollHeight}px`;
      });

      scrollY = window.scrollY || window.pageYOffset;

      let totalScrollHeight = 0;
      for (let i = 0; i < sceneInfo.length; i++) {
        totalScrollHeight += sceneInfo[i].scrollHeight;
        if (totalScrollHeight >= scrollY) {
          currentScene = i;
          break;
        }
      }
      document.body.setAttribute('id', `show-scene-${currentScene}`);
    }

    function calcValues(values, currentScrollY) {
      let rv;
      const scrollHeight = sceneInfo[currentScene].scrollHeight;
      const scrollRatio = currentScrollY / scrollHeight;

      if (values.length === 3) {
        const partScrollStart = values[2].start * scrollHeight;
        const partScrollEnd = values[2].end * scrollHeight;
        const partScrollHeight = partScrollEnd - partScrollStart;

        if (currentScrollY >= partScrollStart && currentScrollY <= partScrollEnd) {
          rv = ((currentScrollY - partScrollStart) / partScrollHeight) * (values[1] - values[0]) + values[0];
        } else if (currentScrollY < partScrollStart) {
          rv = values[0];
        } else if (currentScrollY > partScrollEnd) {
          rv = values[1];
        }
      } else if (values.length === 2) {
        rv = scrollRatio * (values[1] - values[0]) + values[0];
      } else {
        rv = values[1];
      }
      return rv;
    }
       
    function setCanvasImages() {
      let imagesLoaded = 0; // 로드된 이미지 개수를 카운트
      for (let i = 0; i < sceneInfo[0].values.videoImageCount; i++) {
        let imgElem = new Image(); // 반복마다 새로운 변수 선언
        imgElem.src = `${process.env.PUBLIC_URL}/video/${1000 + i}.png`;

        imgElem.onload = () => {
          sceneInfo[0].objs.videoImages[i] = imgElem; // 각 인덱스에 이미지 저장
          imagesLoaded++;

          // 모든 이미지가 로드되었는지 확인
          if (imagesLoaded === sceneInfo[0].values.videoImageCount) {
            allImagesLoaded = true;
            // 페이지 로드 시에만 초기 이미지 그리기
            if (!isPageLoaded) {
              sceneInfo[0].objs.context.drawImage(sceneInfo[0].objs.videoImages[0], 0, 0);
              setIsPageLoaded(true); // 초기 이미지를 그린 후 상태 업데이트
            }
          }
        }
      }

      for (let i = 0; i < sceneInfo[0].values.mvideoImageCount; i++) {
        let mimgElem = new Image(); // 반복마다 새로운 변수 선언
        mimgElem.src = `${process.env.PUBLIC_URL}/mvideo/${1000 + i}.jpg`;

        mimgElem.onload = () => {
          sceneInfo[0].objs.mvideoImages[i] = mimgElem; // 각 인덱스에 이미지 저장
          imagesLoaded++;

          // 모든 이미지가 로드되었는지 확인
          if (imagesLoaded === sceneInfo[0].values.mvideoImageCount) {
            allImagesLoaded = true;
            // 페이지 로드 시에만 초기 이미지 그리기
            if (!isPageLoaded) {
              sceneInfo[0].objs.mcontext.drawImage(sceneInfo[0].objs.mvideoImages[0], 0, 0);
              setIsPageLoaded(true); // 초기 이미지를 그린 후 상태 업데이트
            }
          }
        }
      }
    }

    function playAnimation() {
      if (!allImagesLoaded) return; // 모든 이미지가 로드된 후에만 애니메이션 수행
      if (currentScene >= sceneInfo.length) return;
      const objs = sceneInfo[currentScene]?.objs;
      const values = sceneInfo[currentScene]?.values;
      if (!objs || !values) return; // objs와 values가 undefined가 아닌지 확인
      const scrollHeight = sceneInfo[currentScene].scrollHeight;
      const currentScrollY = scrollY - prevScrollHeight;
      const scrollRatio = currentScrollY / scrollHeight;

      switch (currentScene) {
        case 0:   
               
          let sequence = Math.round(calcValues(values.imageSequence, currentScrollY));
          let msequence = Math.round(calcValues(values.mimageSequence, currentScrollY));
          if (scrollRatio >= 0 && scrollRatio < 0.31) {
            objs.context.clearRect(0, 0, objs.canvas.width, objs.canvas.height);
            objs.context.drawImage(objs.videoImages[sequence], 0, 0);
            objs.mcontext.clearRect(0, 0, objs.mcanvas.width, objs.mcanvas.height);
            objs.mcontext.drawImage(objs.mvideoImages[msequence], 0, 0);
            objs.mcanvas.style.opacity = calcValues(values.mcanvas_opacity_out, currentScrollY);
          }
          
          if (scrollRatio >= 0 && scrollRatio <= 0.16) {            
            objs.objTit.style.transform = `scale(${calcValues(values.objTit_scale, currentScrollY)})`;
          }          
          if (scrollRatio > 0.04 && scrollRatio <= 0.16) {            
            objs.objBtn.style.opacity = calcValues(values.objBtn_opacity_out, currentScrollY);
            objs.objTit.style.opacity = calcValues(values.objTit_opacity, currentScrollY);
          }
          if (scrollRatio < 0.29) {
            objs.objSubTit.style.opacity = calcValues(values.objSubTit_opacity_in, currentScrollY);
            objs.objSubTit.style.transform = `scale(${calcValues(values.objSubTit_scale_in, currentScrollY)})`;
          } else {            
            objs.objSubTit.style.opacity = calcValues(values.objSubTit_opacity_out, currentScrollY);
          }          
          if (scrollRatio < 0.5) {
            objs.objVid.style.opacity = calcValues(values.objVid_opacity_in, currentScrollY);
          } else {
            objs.objVid.style.opacity = calcValues(values.objVid_opacity_out, currentScrollY);
          }
          
          objs.objDesc.style.transform = `translate3d(0, ${calcValues(values.objDesc_y_inOut, currentScrollY)}%, 0)`;
          objs.txtA.style.opacity = calcValues(values.txtA_opacity_out, currentScrollY);
          if (scrollRatio <= 0.47) {
            objs.txtB.style.opacity = calcValues(values.txtB_opacity_in, currentScrollY);
          } else {
            objs.txtB.style.opacity = calcValues(values.txtB_opacity_out, currentScrollY);
          }
          if (scrollRatio <= 0.55) {
            objs.txtC.style.opacity = calcValues(values.txtC_opacity_in, currentScrollY);
          } else {
            objs.txtC.style.opacity = calcValues(values.txtC_opacity_out, currentScrollY);
          }
          if (scrollRatio <= 0.63) {
            objs.txtD.style.opacity = calcValues(values.txtD_opacity_in, currentScrollY);
          } else {
            objs.txtD.style.opacity = calcValues(values.txtD_opacity_out, currentScrollY);
          }
          if (scrollRatio <= 0.71) {
            objs.txtE.style.opacity = calcValues(values.txtE_opacity_in, currentScrollY);
          } else {
            objs.txtE.style.opacity = calcValues(values.txtE_opacity_out, currentScrollY);
          }

          break;

        case 2:   
        
          if ( scrollRatio < 0.5 ) {
            objs.objImgA.style.transform = `scale(${calcValues(values.imgA_scale_out, currentScrollY)})`;
            objs.objImgA.style.opacity = calcValues(values.imgA_opacity_out, currentScrollY);
          }
          if ( scrollRatio < 0.11 ) {
            objs.objTxtA.style.opacity = calcValues(values.txtA_opacity_in, currentScrollY);
            objs.objTxtA.style.transform = `translate3d(0, ${calcValues(values.txtA_y_in, currentScrollY)}px, 0)`;
          } else {
            objs.objTxtA.style.opacity = calcValues(values.txtA_opacity_out, currentScrollY);
            objs.objTxtA.style.transform = `translate3d(0, ${calcValues(values.txtA_y_out, currentScrollY)}px, 0)`;
          }
          if ( scrollRatio < 0.31 ) {
            objs.objTxtB.style.opacity = calcValues(values.txtB_opacity_in, currentScrollY);
            objs.objTxtB.style.transform = `translate3d(0, ${calcValues(values.txtB_y_in, currentScrollY)}px, 0)`;
          } else {
            objs.objTxtB.style.opacity = calcValues(values.txtB_opacity_out, currentScrollY);
            objs.objTxtB.style.transform = `translate3d(0, ${calcValues(values.txtB_y_out, currentScrollY)}px, 0)`;
          }
          if ( scrollRatio < 0.46 ) {            
            objs.objImgB.style.opacity = calcValues(values.imgB_opacity_in, currentScrollY);
          } else {
            objs.objImgB.style.opacity = calcValues(values.imgB_opacity_out, currentScrollY);
            objs.objImgB.style.transform = `scale(${calcValues(values.imgB_scale_out, currentScrollY)})`;
          }
          if ( scrollRatio < 0.51 ) {
            objs.objTxtC.style.opacity = calcValues(values.txtC_opacity_in, currentScrollY);
            objs.objTxtC.style.transform = `translate3d(0, ${calcValues(values.txtC_y_in, currentScrollY)}px, 0)`;
          } else {
            objs.objTxtC.style.opacity = calcValues(values.txtC_opacity_out, currentScrollY);
            objs.objTxtC.style.transform = `translate3d(0, ${calcValues(values.txtC_y_out, currentScrollY)}px, 0)`;
          }
            objs.objImgC.style.opacity = calcValues(values.imgC_opacity_in, currentScrollY);
            objs.objImgC.style.transform = `scale(${calcValues(values.imgC_scale_in, currentScrollY)})`;
            objs.objVid.style.opacity = calcValues(values.vid_opacity_in, currentScrollY);
            objs.objVid.style.transform = `scale(${calcValues(values.vid_scale_in, currentScrollY)})`;

          break;
      }
    }

    function scrollLoop() {
      prevScrollHeight = 0;

      for (let i = 0; i < currentScene; i++) {
        prevScrollHeight += sceneInfo[i].scrollHeight;
      }

      if (scrollY > prevScrollHeight + sceneInfo[currentScene]?.scrollHeight) {
        currentScene = Math.min(currentScene + 1, sceneInfo.length - 1);
        document.body.setAttribute('id', `show-scene-${currentScene}`);
      }

      if (scrollY < prevScrollHeight) {
        if (currentScene === 0) return;
        currentScene = Math.max(currentScene - 1, 0);
        document.body.setAttribute('id', `show-scene-${currentScene}`);
      }
      
      const h2Vid = document.querySelector("#scroll-section-1 video");

      if (h2Vid) {
        if (currentScene === 1) {
          if (!hasVideoPlayed || !wasInScene1) {
            // currentScene이 1이고, 비디오가 아직 재생되지 않았거나 이전에 scene 1을 벗어났다가 다시 돌아온 경우
            h2Vid.play();
            hasVideoPlayed = true;
            wasInScene1 = true;
          }
        } else if (wasInScene1) {
          // currentScene이 1이 아닌 경우 비디오를 일시 정지하고 wasInScene1을 false로 설정
          h2Vid.pause();
          wasInScene1 = false;
        }
      }

      const section0 = document.querySelector("#scroll-section-0");
      const objElements = section0.querySelectorAll(".obj");

      if (objElements.length > 0) { // .obj 요소가 존재하는지 확인
        if (currentScene !== 0) {
          objElements.forEach(obj => {
            obj.style.display = "none"; // 각 .obj 요소의 display 속성을 none으로 설정
          });
        } else {
          objElements.forEach(obj => {
            obj.style.display = "block";
          });
        }
      }

      const section2 = document.querySelector("#scroll-section-2");
      const motion1 = section2.querySelector(".scroll-motion-1");
      const motion2 = section2.querySelector(".scroll-motion-2");
      const motion3 = section2.querySelector(".scroll-motion-3");
      const sec2Vid = section2.querySelector("video");

      if (motion1 && motion2 && motion3 && sec2Vid) {
        if (currentScene === 2) {
          motion1.style.position = "fixed";
          motion2.style.position = "fixed";
          motion3.style.position = "fixed";
          sec2Vid.style.position = "fixed";
        } else if (currentScene === 1) {
          motion1.style.position = "absolute";
          motion2.style.position = "absolute";
          motion3.style.position = "absolute";
          sec2Vid.style.position = "absolute";
        }
      }

      playAnimation();
    }
    
    // if (document.body.classList.contains("before-load")) {
    //   console.log("ok");
    //   document.querySelectorAll("section").forEach(section => {
    //     section.style.display = "none";
    //   });
    // } else {
    //   document.querySelectorAll("section").forEach(section => {
    //     section.style.display = "block";
    //   });
    // }
    // document.body.classList.remove("before-load");

    initializeSceneInfo();
    setCanvasImages();
    setLayout();

    // setTimeout(() => {
    //   window.scrollTo(0, 1);
    // }, 100);

    let tempScrollY = scrollY;
    let tempScrollCount = 0;
    
    if (scrollY > 0) {
      let siId = setInterval(() => {
        window.scrollTo(0, tempScrollY);
        tempScrollY += 1;
  
        if (tempScrollCount > 5) {
          clearInterval(siId);
        }
        tempScrollCount++;
      }, 20);
    }

    window.addEventListener("scroll", () => {
      scrollY = window.scrollY || window.pageYOffset;
      scrollLoop();
      fixedLocalNav();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) {
        setLayout();
        // window.location.reload();
      }
    });

    window.addEventListener("orientationchange", () => {
      setTimeout(setLayout, 100);
      // window.scrollTo(0, 0);
      // setTimeout(() => {
      //   window.location.reload();
      // }, 100);
    });

    return () => {
      window.removeEventListener("load", setLayout);
      window.removeEventListener("scroll", scrollLoop);
      window.removeEventListener("resize", setLayout);
      window.removeEventListener("orientationchange", setLayout);
    };

  }, [isPageLoaded]);
  
}

export default useAirPodsScrollMotion;