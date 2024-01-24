let debug = document.getElementById("debug");
debug.innerHTML = "Device Orientation API is not supported by your browser.";


let jumpvalue = 0;
let jump = false;

function requestOrientationPermission(){
    console.log('requesting orientation permission')
    DeviceOrientationEvent.requestPermission()
    .then(response => {
        if (response == 'granted') {
            window.addEventListener('deviceorientation', (e) => {
              const acl = new Accelerometer({ frequency: 10 });
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
            })
        }
    })
    .catch(console.error)
}



