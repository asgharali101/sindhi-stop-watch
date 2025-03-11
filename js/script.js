let hr = 0;
let min = 0;
let sec = 0;
let count = 0;
let timer = false;

function Start() {
  timer = true;
  StopWatch();
}
function Stop() {
  timer = false;
}
function Restart() {
  count = 0;
  sec = 0;
  min = 0;
  hr = 0;
}

function SindhiNumber(num) {
  const SindhiDigit = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  return num
    .toString()
    .split("")
    .map((digit) =>
      isNaN(parseInt(digit)) ? digit : SindhiDigit[parseInt(digit)]
    )
    .join("");
}

function ScreenMenu() {
  document.getElementById("count").innerHTML = SindhiNumber(
    count.toString().padStart(2, "0")
  );
  document.getElementById("sec").innerHTML = SindhiNumber(
    sec.toString().padStart(2, "0")
  );
  document.getElementById("min").innerHTML = SindhiNumber(
    min.toString().padStart(2, "0")
  );
  document.getElementById("hr").innerHTML = SindhiNumber(
    hr.toString().padStart(2, "0")
  );
}
function StopWatch() {
  if (timer) {
    count++;
    if (count === 100) {
      sec++;
      count = 0;
    }
    if (sec === 60) {
      min++;
      sec = 0;
    }
    if (min === 60) {
      hr++;
      min = 0;
    }
    ScreenMenu();
    setTimeout(StopWatch, 10);
  }
}
