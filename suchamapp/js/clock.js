const clock = document.querySelector("p#clock");
let today = new Date();

function clockFnc() {
    today = new Date();
    //let todayYear = String(today.getFullYear());
    //let todayMo = String(today.getMonth()+1);
    //let todayDay = String(today.getDate()).padStart(2,"0");
    let todayHo = String(today.getHours()).padStart(2,"0");
    let todayMi = String(today.getMinutes()).padStart(2,"0");
    let todaySe = String(today.getSeconds()).padStart(2,"0");

    clock.innerText = `${todayHo}:${todayMi}:${todaySe}`;
};
setInterval(clockFnc, 1000);
clockFnc(); 