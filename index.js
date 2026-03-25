 const video = document.getElementById("bgVideo");

    // гарантированно сработает
    video.onloadeddata = () => {
      video.classList.add("show");
    };

    // страховка если браузер тупит
    setTimeout(() => {
      video.classList.add("show");
    }, 1000);