(() => {
  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;

  function setElementInnerText(id, text) {
    const element = document.getElementById(id);
    element.innerText = text;
  }

  function countDown() {
    const now = new Date().getTime();
    const newYear = new Date("January 1, 2021 00:00:00").getTime();
    const unixtimeLeft = newYear - now;

    setElementInnerText("days", Math.floor(unixtimeLeft / DAY));
    setElementInnerText("hours", Math.floor((unixtimeLeft % DAY) / HOUR));
    setElementInnerText("minutes", Math.floor((unixtimeLeft % HOUR) / MINUTE));
    setElementInnerText(
      "seconds",
      Math.floor((unixtimeLeft % MINUTE) / SECOND)
    );
  }

  function run() {
    setInterval(countDown, SECOND);
  }

  run();
})();
