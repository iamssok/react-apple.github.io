export function minWidth768() {
  const back = document.querySelector(".gnb-2depth-back");
  const wrapper = document.querySelector(".gnb-2depth-wrapper");

  document.querySelectorAll(".gnb-menu").forEach(function(menu, index) {
    menu.addEventListener("mouseover", function() {
      let Gnb2DepthHeightArr = [];
      document.querySelectorAll(".gnb-2depth-cont").forEach(function(cont) {
        const Gnb2DepthHeight = cont.offsetHeight;
        Gnb2DepthHeightArr.push(Gnb2DepthHeight);
        cont.style.visibility = "hidden";
        cont.style.opacity = "0";
      });

      back.style.visibility = "visible";
      back.style.opacity = "1";
      wrapper.style.height = Gnb2DepthHeightArr[index] + "px";
      wrapper.style.visibility = "visible";
      wrapper.style.opacity = "1";
      wrapper.style.transform = "translate3d(0,0,0)";

      const activeCont = document.querySelectorAll(".gnb-2depth-cont")[index];
      activeCont.style.visibility = "visible";
      activeCont.style.opacity = "1";
    });

    menu.addEventListener("click", function() {
      back.style.visibility = "hidden";
      back.style.opacity = "0";
      wrapper.style.visibility = "hidden";
      wrapper.style.opacity = "0";
      wrapper.style.transform = "translate3d(0,-100%,0)";
    });
  });  

  document.querySelectorAll(".gnb-2depth-cont a").forEach(function(link) {
    link.addEventListener("click", function() {
      back.style.visibility = "hidden";
      back.style.opacity = "0";
      wrapper.style.visibility = "hidden";
      wrapper.style.opacity = "0";
      wrapper.style.transform = "translate3d(0,-100%,0)";
    });
  });

  document.querySelectorAll(".gnb-2depth-back, .gnb-logo").forEach(function(element) {
    element.addEventListener("mouseover", function() {
      back.style.visibility = "hidden";
      back.style.opacity = "0";
      wrapper.style.visibility = "hidden";
      wrapper.style.opacity = "0";
      wrapper.style.transform = "translate3d(0,-100%,0)";

      document.querySelectorAll(".gnb-2depth-cont").forEach(function(cont) {
        cont.style.visibility = "hidden";
        cont.style.opacity = "0";
      });
    });
  });
}

export function minWidth320() {
  const btnMenu = document.querySelector(".m-gnb-menu");
  const btnClose = document.querySelector(".m-gnb-close");
  const btnBack = document.querySelector(".m-gnb-back");
  const wrapper = document.querySelector(".m-gnb-2depth-wrapper");
  const list = document.querySelector(".m-gnb-2depth-list");
  const contMenu = document.querySelectorAll(".m-gnb-2depth-cont a");

  if (btnMenu) {
    btnMenu.addEventListener("click", function() {
      document.body.style.overflowY = "hidden";
      btnClose.classList.add("on");
      wrapper.style.visibility = "visible";
      wrapper.style.opacity = "1";
      list.style.opacity = "1";
      list.style.transform = "translate3d(0,0,0)";
    });
  }

  if (btnClose) {
    btnClose.addEventListener("click", function() {
      document.body.style.overflowY = "auto";
      btnClose.classList.remove("on");
      wrapper.style.visibility = "hidden";
      wrapper.style.opacity = "0";
      list.style.opacity = "0";
      list.style.transform = "translate3d(0,-100%,0)";

      document.querySelectorAll(".m-gnb-2depth-cont").forEach(function(cont) {
        cont.style.visibility = "hidden";
        cont.style.opacity = "0";
        cont.style.transform = "translate3d(10px,0,0)";
      });

      btnBack.style.visibility = "hidden";
      btnBack.style.opacity = "0";
      btnBack.style.transform = "translate3d(10px,0,0)";
    });
  }

  contMenu.forEach((menu) => {
    menu.addEventListener("click", function() {
      document.body.style.overflowY = "auto";
      btnClose.classList.remove("on");
      wrapper.style.visibility = "hidden";
      wrapper.style.opacity = "0";
      list.style.opacity = "0";
      list.style.transform = "translate3d(0,-100%,0)";
  
      document.querySelectorAll(".m-gnb-2depth-cont").forEach(function(cont) {
        cont.style.visibility = "hidden";
        cont.style.opacity = "0";
        cont.style.transform = "translate3d(10px,0,0)";
      });

      btnBack.style.visibility = "hidden";
      btnBack.style.opacity = "0";
      btnBack.style.transform = "translate3d(10px,0,0)";
    });
  });

  document.querySelectorAll(".m-gnb-2depth-list a").forEach(function(link, index) {
    link.addEventListener("click", function() {
      btnBack.style.visibility = "visible";
      btnBack.style.opacity = "1";
      btnBack.style.transform = "translate3d(0,0,0)";
      list.style.opacity = "0";
      list.style.transform = "translate3d(-10px,0,0)";

      const cont = document.querySelectorAll(".m-gnb-2depth-cont")[index];
      cont.style.visibility = "visible";
      cont.style.opacity = "1";
      cont.style.transform = "translate3d(0,0,0)";
    });
  });

  if (btnBack) {
    btnBack.addEventListener("click", function() {
      document.querySelectorAll(".m-gnb-2depth-cont").forEach(function(cont) {
        cont.style.visibility = "hidden";
        cont.style.opacity = "0";
        cont.style.transform = "translate3d(10px,0,0)";
      });

      btnBack.style.visibility = "hidden";
      btnBack.style.opacity = "0";
      btnBack.style.transform = "translate3d(10px,0,0)";
      list.style.opacity = "1";
      list.style.transform = "translate3d(0,0,0)";
    });
  }
}