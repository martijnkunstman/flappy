let debug = document.getElementById("debug");
debug.innerHTML = "Device Orientation API is not supported by your browser.";

const acl = new Accelerometer({ frequency: 60 });
acl.addEventListener("reading", () => {
    debug.innerHTML = "X: "+acl.x;
    debug.innerHTML += "Y: "+acl.y;
    debug.innerHTML += "Z: "+acl.z;  
});

acl.start();