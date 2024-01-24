let debug = document.getElementById("debug");
debug.innerHTML = "Device Orientation API is not supported by your browser.";
const acl = new Accelerometer({ frequency: 10 });

let jumpvalue = 0;
let jump = false;

acl.addEventListener("reading", () => {
  let x = (Math.round(acl.x * 100) / 100).toFixed(2);

  if (!jump) {
    if (x > 2 || x < -2) {
      jumpvalue = 1;
      jump = true;
      bird_dy = -7.6;
    }
  }
  if (x < 1 && x > -1) {
    jumpvalue = 0;
    jump = false;
  }

  debug.innerHTML = jumpvalue + " - "+x;
});

acl.start();
