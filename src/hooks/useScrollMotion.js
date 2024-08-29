import { useEffect } from 'react';

function useScrollMotion() {

  useEffect(() => {
    
    let scrollY = 0;

    function scrollMotion() {
      const winH = window.innerHeight || document.documentElement.clientHeight;
      const goElements = document.querySelectorAll(".go");
      const videoElements = document.querySelectorAll("#scroll-section-1 video");

      goElements.forEach((element) => {
        const motionTop = element.offsetTop;
        if (scrollY >= motionTop - winH * 0.6) {
          element.classList.add("in-animate");
        } else {
          element.classList.remove("in-animate");
        }
      });

      // watch series9 page
      videoElements.forEach((element) => {
        const motionTop = element.offsetTop;
        if (scrollY >= motionTop - winH * 0.7) {
          element.play();
        } else {
          element.pause();
        }
      });
    }

    const handleScroll = () => {
      scrollY = window.scrollY || window.pageYOffset;
      scrollMotion();
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", scrollMotion);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", scrollMotion);
    };

  }, []);
  
}

export default useScrollMotion;