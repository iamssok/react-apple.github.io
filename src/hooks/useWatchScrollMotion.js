/* eslint-disable no-loop-func */
/* eslint-disable default-case */
import { useEffect } from 'react';

function useWatchScrollMotion() {

  useEffect(() => {

    let scrollY = 0;
    let prevScrollHeight = 0;
    let currentScene = 0;
    let sceneInfo = [];

    function initializeSceneInfo() {
      sceneInfo = [
        {
          type: 'sticky',
          heightNum: 5,
          scrollHeight: 0,
          objs: {
            container: document.querySelector("#scroll-section-0"),
            objVid: document.querySelector("#scroll-section-0 .obj.vid"),
            objLogo: document.querySelector("#scroll-section-0 .obj.logo"),
            objTit: document.querySelector("#scroll-section-0 .obj.tit"),
            objDesc: document.querySelector("#scroll-section-0 .obj.desc"),
            objLink: document.querySelector("#scroll-section-0 .obj.link"),
            objWrap: document.querySelector("#scroll-section-0 .obj.wrap"),
          },
          values: {            
            objTit_in_opacity: [0, 1, { start: 0, end: 0.05 }],
            objTit_in_y: [50, 0, { start: 0, end: 0.05 }],
            objTit_out: [60, -100, { start: 0.1, end: 0.3 }],
            objLogo_out: [1, 0, { start: 0.25, end: 0.3 }],
            objVid_out_opacity: [0.4, 0, { start: 0.25, end: 0.3 }],
            objVid_out_scale: [1, 0.85, { start: 0.25, end: 0.3 }],
            objDesc_inOut: [150, 0, { start: 0.3, end: 0.8 }],
            objLink_in: [0, 1, { start: 0.65, end: 0.7 }],
            objWrap_out: [-50, -150, { start: 0.8, end: 1 }],
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
          heightNum: 5,
          scrollHeight: 0,
          objs: {
            container: document.querySelector("#scroll-section-2"),            
            objTextWrap: document.querySelector("#scroll-section-2 .text-wrap"),
            objImgWrap: document.querySelector("#scroll-section-2 .img-wrap"),
            txtA: document.querySelector("#scroll-section-2 .txt.a"),
            txtB: document.querySelector("#scroll-section-2 .txt.b"),
            txtC: document.querySelector("#scroll-section-2 .txt.c"),
            txtD: document.querySelector("#scroll-section-2 .txt.d"),
            txtE: document.querySelector("#scroll-section-2 .txt.e"),
            /*imgA: document.querySelector("#scroll-section-2 .img.a"),
            imgB: document.querySelector("#scroll-section-2 .img.b"),
            imgC: document.querySelector("#scroll-section-2 .img.c"),
            imgD: document.querySelector("#scroll-section-2 .img.d"),
            imgE: document.querySelector("#scroll-section-2 .img.e"),*/
          },
          values: {            
            objTextWrap_in: [1000, 300, { start: 0, end: 0.09 }],
            objImgWrap_in: [1150, 450, { start: 0, end: 0.09 }],
            //imgA_out_opacity: [1, 0, { start: 0.13, end: 0.22 }],
            txtA_out_opacity: [1, 0, { start: 0.1, end: 0.22 }],
            txtA_out_scale: [1, 0.95, { start: 0.1, end: 0.22 }],
            txtA_out_y: [0, -100, { start: 0.1, end: 0.22 }],
            txtB_in_opacity: [0, 1, { start: 0.12, end: 0.22 }],
            txtB_in_y: [300, 0, { start: 0.12, end: 0.22 }],
            //imgB_out_opacity: [1, 0, { start: 0.26, end: 0.35 }],
            txtB_out_opacity: [1, 0, { start: 0.23, end: 0.35 }],
            txtB_out_scale: [1, 0.95, { start: 0.23, end: 0.35 }],
            txtB_out_y: [0, -100, { start: 0.23, end: 0.35 }],
            txtC_in_opacity: [0, 1, { start: 0.25, end: 0.35 }],
            txtC_in_y: [300, 0, { start: 0.25, end: 0.35 }],
            //imgC_out_opacity: [1, 0, { start: 0.39, end: 0.48 }],
            txtC_out_opacity: [1, 0, { start: 0.36, end: 0.48 }],
            txtC_out_scale: [1, 0.95, { start: 0.36, end: 0.48 }],
            txtC_out_y: [0, -100, { start: 0.36, end: 0.48 }],
            txtD_in_opacity: [0, 1, { start: 0.38, end: 0.48 }],
            txtD_in_y: [300, 0, { start: 0.38, end: 0.48 }],
            //imgD_out_opacity: [1, 0, { start: 0.52, end: 0.61 }],
            txtD_out_opacity: [1, 0, { start: 0.49, end: 0.61 }],
            txtD_out_scale: [1, 0.95, { start: 0.49, end: 0.61 }],
            txtD_out_y: [0, -100, { start: 0.49, end: 0.61 }],
            txtE_in_opacity: [0, 1, { start: 0.51, end: 0.61 }],
            txtE_in_y: [300, 0, { start: 0.51, end: 0.61 }],
            objTextWrap_out: [300, -800, { start: 0.7, end: 1 }],
            objImgWrap_out: [450, -800, { start: 0.7, end: 1 }],
          },
        },
        {
          type: 'normal',
          scrollHeight: 0,
          objs: {
            container: document.querySelector("#scroll-section-3"),
          },
        },
      ];
    }

    function fixedLocalNav() {
      const localNavWrapper = document.querySelector(".local-nav-wrapper");
      if (localNavWrapper) {
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
      initializeSceneInfo();
      sceneInfo.forEach((scene) => {
        if (!scene.objs.container) return;
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

    function playAnimation() {
      if (currentScene >= sceneInfo.length) return;
      const objs = sceneInfo[currentScene]?.objs;
      const values = sceneInfo[currentScene]?.values;
      if (!objs || !values) return;
      const scrollHeight = sceneInfo[currentScene].scrollHeight;
      const currentScrollY = scrollY - prevScrollHeight;
      const scrollRatio = currentScrollY / scrollHeight;

      switch (currentScene) {
        case 0:   
          
          if (scrollRatio < 0.07) {
            objs.objTit.style.opacity = calcValues(
              values.objTit_in_opacity,
              currentScrollY
            );
            objs.objTit.style.transform = `translateY(${calcValues(
              values.objTit_in_y,
              currentScrollY
            )}px)`;
          }
          objs.objTit.style.backgroundImage = `radial-gradient(
            circle at 50% ${calcValues(values.objTit_out, currentScrollY)}vh,
            rgb(251, 160, 181) 1vh,
            rgb(252, 70, 170) 40vh,
            rgb(116, 47, 120) 70vh,
            rgba(0, 0, 0, 0) 100vh
          )`;
          if (scrollRatio > 0.24 && scrollRatio < 0.31) {
            objs.objLogo.style.opacity = calcValues(values.objLogo_out, currentScrollY);
            objs.objVid.style.opacity = calcValues(
              values.objVid_out_opacity,
              currentScrollY
            );
            objs.objVid.style.transform = `scale(${calcValues(
              values.objVid_out_scale,
              currentScrollY
            )})`;
          }
          objs.objDesc.style.backgroundImage = `radial-gradient(
            circle at 50% ${calcValues(values.objDesc_inOut, currentScrollY)}vh,
            rgb(251, 160, 181) 1vh,
            rgb(252, 70, 170) 40vh,
            rgb(116, 47, 120) 70vh,
            rgba(0, 0, 0, 0) 100vh
          )`;
          objs.objLink.style.opacity = calcValues(values.objLink_in, currentScrollY);
          objs.objWrap.style.transform = `translate(-50%, ${calcValues(
            values.objWrap_out,
            currentScrollY
          )}%)`;

          if (scrollRatio === 0) {
            objs.objVid.style.opacity = 1;
          }

          break;

        case 2:   
        
          if (scrollRatio <= 0.09) {
            objs.objTextWrap.style.transform = `translate3d(0,${calcValues(
              values.objTextWrap_in,
              currentScrollY
            )}px,0)`;
            objs.objImgWrap.style.transform = `translate3d(0,${calcValues(
              values.objImgWrap_in,
              currentScrollY
            )}px,0)`;
          }
          
          objs.txtA.style.opacity = calcValues(
            values.txtA_out_opacity,
            currentScrollY
          );
          objs.txtA.style.transform = `scale(${calcValues(
            values.txtA_out_scale,
            currentScrollY
          )}) translate3d(0,${calcValues(
            values.txtA_out_y,
            currentScrollY
          )}px,0)`;
          /*objs.imgA.style.opacity = calcValues(
            values.imgA_out_opacity,
            currentScrollY
          );*/

          if (scrollRatio < 0.23) {
            objs.txtB.style.opacity = calcValues(
              values.txtB_in_opacity,
              currentScrollY
            );
            objs.txtB.style.transform = `scale(1) translate3d(0,${calcValues(
              values.txtB_in_y,
              currentScrollY
            )}px,0)`;
          } else {
            objs.txtB.style.opacity = calcValues(
              values.txtB_out_opacity,
              currentScrollY
            );
            objs.txtB.style.transform = `scale(${calcValues(
              values.txtB_out_scale,
              currentScrollY
            )}) translate3d(0,${calcValues(
              values.txtB_out_y,
              currentScrollY
            )}px,0)`;
          }

          /*if (scrollRatio >= 0.26 && scrollRatio <= 0.35) {              
            objs.imgB.style.opacity = calcValues(
              values.imgB_out_opacity,
              currentScrollY
            );
          }*/

          if (scrollRatio < 0.36) {
            objs.txtC.style.opacity = calcValues(
              values.txtC_in_opacity,
              currentScrollY
            );
            objs.txtC.style.transform = `scale(1) translate3d(0,${calcValues(
              values.txtC_in_y,
              currentScrollY
            )}px,0)`;
          } else {
            objs.txtC.style.opacity = calcValues(
              values.txtC_out_opacity,
              currentScrollY
            );
            objs.txtC.style.transform = `scale(${calcValues(
              values.txtC_out_scale,
              currentScrollY
            )}) translate3d(0,${calcValues(
              values.txtC_out_y,
              currentScrollY
            )}px,0)`;
          }

          /*if (scrollRatio >= 0.39 && scrollRatio <= 0.48) {
            objs.imgC.style.opacity = calcValues(
              values.imgC_out_opacity,
              currentScrollY
            );
          }*/

          if (scrollRatio < 0.49) {
            objs.txtD.style.opacity = calcValues(
              values.txtD_in_opacity,
              currentScrollY
            );
            objs.txtD.style.transform = `scale(1) translate3d(0,${calcValues(
              values.txtD_in_y,
              currentScrollY
            )}px,0)`;
          } else {
            objs.txtD.style.opacity = calcValues(
              values.txtD_out_opacity,
              currentScrollY
            );
            objs.txtD.style.transform = `scale(${calcValues(
              values.txtD_out_scale,
              currentScrollY
            )}) translate3d(0,${calcValues(
              values.txtD_out_y,
              currentScrollY
            )}px,0)`;
          }

          /*if (scrollRatio >= 0.52 && scrollRatio <= 0.61) {
            objs.imgD.style.opacity = calcValues(
              values.imgD_out_opacity,
              currentScrollY
            );
          }*/

          objs.txtE.style.opacity = calcValues(
            values.txtE_in_opacity,
            currentScrollY
          );
          objs.txtE.style.transform = `scale(1) translate3d(0,${calcValues(
            values.txtE_in_y,
            currentScrollY
          )}px,0)`;

          if (scrollRatio >= 0.7) {
            objs.objTextWrap.style.transform = `translate3d(0,${calcValues(
              values.objTextWrap_out,
              currentScrollY
            )}px,0)`;
            objs.objImgWrap.style.transform = `translate3d(0,${calcValues(
              values.objImgWrap_out,
              currentScrollY
            )}px,0)`;
          }

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

      const section0 = document.querySelector("#scroll-section-0");
      const objElements = section0.querySelectorAll(".obj");

      if (objElements.length > 0) {
        if (currentScene !== 0) {
          objElements.forEach(obj => {
            obj.style.display = "none";
          });
        } else {
          objElements.forEach(obj => {
            obj.style.display = "block";
          });
        }
      }

      playAnimation();
    }
    
    const loading = document.querySelector(".loading");

    if (loading) {
      loading.style.opacity = 0;
      
      setTimeout(() => {
        if (loading && loading.parentNode) {
          loading.style.visibility = "hidden";
        }
      }, 500);
    }

    initializeSceneInfo();
    setLayout();

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
      }
    });

    window.addEventListener("orientationchange", () => {
      setTimeout(setLayout, 100);
    });

    return () => {
      window.removeEventListener("load", setLayout);
      window.removeEventListener("scroll", scrollLoop);
      window.removeEventListener("resize", setLayout);
      window.removeEventListener("orientationchange", setLayout);
    };

  }, []);
  
}

export default useWatchScrollMotion;