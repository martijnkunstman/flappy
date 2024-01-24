let debug = document.getElementById("debug");
debug.innerHTML = "Device Orientation API is not supported by your browser.";
const acl = new Accelerometer({ frequency: 10 });

let jumpvalue = 0;
let jump = false;

acl.addEventListener("reading", () => {
  let x = (Math.round(acl.x * 100) / 100).toFixed(2);
  let y = (Math.round(acl.y * 100) / 100).toFixed(2);
  let z = (Math.round(acl.z * 100) / 100).toFixed(2);

  if (!jump) {
    if (acl.x > 0.4 || acl.x < -0.4) {
      jumpvalue = 1;
      jump = true;
    }
  }
  if (acl.y < 0.2 && acl.y > -0.2) {
    jumpvalue = 0;
    jump = false;
  }
  debug.innerHTML = jumpvalue;
});

acl.start();
