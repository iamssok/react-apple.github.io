import { useEffect } from "react";

function useVideoCanvas() {

  useEffect(() => {
    
    let scrollY = 0;

    const sceneInfo = {
      heightNum: 0.8,
      scrollHeight: 0,
      objs: {
        container: document.querySelector("#scroll-prologue-video"),
        objA: document.querySelector("#scroll-prologue-video .video-canvas"),
      },
      values: {
        objA_width: [100, 87, { start: 0.1, end: 0.9 }],
        objA_height: [56, 54, { start: 0.1, end: 0.9 }],
        objA_borderRadius: [0, 30, { start: 0.1, end: 0.9 }],
      },
    };

    function setLayout() {
      sceneInfo.scrollHeight = sceneInfo.heightNum * window.innerHeight;
      sceneInfo.objs.container.style.height = `55vw`;
    }

    function calcValues(values, scrollY) {
      let rv;
      const scrollHeight = sceneInfo.scrollHeight;
      const scrollRatio = scrollY / scrollHeight;

      if (values.length === 3) {
        const partScrollStart = values[2].start * scrollHeight;
        const partScrollEnd = values[2].end * scrollHeight;
        const partScrollHeight = partScrollEnd - partScrollStart;

        if (scrollY >= partScrollStart && scrollY <= partScrollEnd) {
          rv =
            ((scrollY - partScrollStart) / partScrollHeight) *
              (values[1] - values[0]) +
            values[0];
        } else if (scrollY < partScrollStart) {
          rv = values[0];
        } else if (scrollY > partScrollEnd) {
          rv = values[1];
        }
      } else {
        rv = scrollRatio * (values[1] - values[0]) + values[0];
      }
      return rv;
    }

    function playAnimation() {
      const objs = sceneInfo.objs;
      const values = sceneInfo.values;
      const scrollHeight = sceneInfo.scrollHeight;
      const scrollRatio = scrollY / scrollHeight;

      if (scrollRatio >= 0 && scrollRatio <= 1) {
        objs.objA.style.width = `${calcValues(values.objA_width, scrollY)}vw`;
        objs.objA.style.height = `${calcValues(values.objA_height, scrollY)}vw`;
        objs.objA.style.borderRadius = `${calcValues(
          values.objA_borderRadius,
          scrollY
        )}px`;
      }
    }

    setLayout();

    window.addEventListener("scroll", () => {
      scrollY = window.scrollY || window.pageYOffset;
      playAnimation();
    });

    window.addEventListener("resize", setLayout);

    return () => {
      window.removeEventListener("scroll", playAnimation);
      window.removeEventListener("resize", setLayout);
    };

  }, [])

}

export default useVideoCanvas;
