const clock = document.querySelector("p#clock");
let today = new Date();
let year = today.getFullYear();
//let dDay = new Date(`${year}-12-25 00:00`);

/*
function nextXmas(){
    if(today > dDay){
        year = year+1;
        dDay = new Date(`${year}-12-25 00:00`);
    }else{
        console.log("ok");
    }
};
*/

function clockXmas() {
    //nextXmas();
    today = new Date();
    //let dDayCount = Math.ceil((dDay.getTime()-today.getTime())/(1000*3600*24))-1
    let todayDay = String(today.getDate()).padStart(2,"0");
    let todayHo = String(today.getHours()).padStart(2,"0");
    let todayMi = String(today.getMinutes()).padStart(2,"0");
    let todaySe = String(today.getSeconds()).padStart(2,"0");
    //console.log(today.getDate());

    clock.innerText = ` ${todayDay}일 ${todayHo}시간 ${todayMi}분 ${todaySe}초`;
};
setInterval(clockXmas, 1000);
clockXmas(); 