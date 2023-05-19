let counter = document.querySelectorAll(".counter");
let interval = 1000;

counter.forEach((count) => {
  let startNum = 0;
  let endNum = parseInt(count.getAttribute("data-val"));
  console.log(endNum);
  let duration = Math.floor(interval / endNum);
  let countClock = setInterval(function () {
    startNum += 1;
    count.textContent = startNum + "+";
    if (startNum == endNum) {
      clearInterval(countClock);
    }
  }, 0.00000001);
});
