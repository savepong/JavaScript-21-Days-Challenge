(() => {
  // เริ่มเขียนโค้ด

  function run() {
    const bodyElem = document.querySelector("body");
    const eyeElem = document.querySelectorAll(".eye");

    function onMouseMove({ pageX, pageY }) {
      eyeElem.forEach((eyeElem) => {
        const { left, top } = eyeElem.getBoundingClientRect();

        const eyeCenterX = left + eyeElem.offsetWidth / 2;
        const eyeCenterY = left + eyeElem.offsetHeight / 2;
        const radian = Math.atan2(pageX - eyeCenterX, pageY - eyeCenterY);
        const angle = ((radian * 180) / Math.PI) * -1;
        eyeElem.style.transform = `rotate(${angle}deg)`;
      });
    }

    bodyElem.addEventListener("mousemove", onMouseMove);
  }

  run();
})();
