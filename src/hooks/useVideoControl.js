import { useState, useEffect } from 'react';

function useVideoControl(videoId, controlClass) {
  const [video, setVideo] = useState(true);

  useEffect(() => {
    const prologueVideo = document.getElementById(videoId);
    const videoControl = document.querySelector(controlClass);

    if (prologueVideo && videoControl) {
      if (video) {
        prologueVideo.play();
        videoControl.classList.add("control-pause");
        videoControl.classList.remove("control-play");
      } else {
        prologueVideo.pause();
        videoControl.classList.add("control-play");
        videoControl.classList.remove("control-pause");
      }
    }
  }, [video, videoId, controlClass]);

  const toggleVideo = () => {
    setVideo(current => !current);
  };

  return { video, toggleVideo };
}

export default useVideoControl;