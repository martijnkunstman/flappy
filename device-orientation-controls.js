let debug = document.getElementById("debug");
debug.innerHTML = "Device Orientation API is not supported by your browser.";

const acl = new Accelerometer({ frequency: 10 });
acl.addEventListener("reading", () => {
    
   let x = (Math.round(acl.x * 100) / 100).toFixed(2);
   let y = (Math.round(acl.y * 100) / 100).toFixed(2);
   let z = (Math.round(acl.z * 100) / 100).toFixed(2);
    
    debug.innerHTML = "X: "+x+"<br>";
    debug.innerHTML += "Y: "+y+"<br>";
    debug.innerHTML += "Z: "+z+"<br>";  
});

acl.start();