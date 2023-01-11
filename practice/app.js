/*
alert("ohoh");

let num1 = 5, num2 = 2;
const myName = "jungil";

console.log(num1 + num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log("super " + myName);

num1 = num2;
console.log(num1 + num2);
console.log(num1 * num2);
console.log(num1 / num2);


const ami = null;
let something;
console.log(something);
something = "";
console.log(something);
console.log(ami);

const daysOfWeek = ["월", "화", "수요일", "목요일", "금", "토", "일"];
console.log(daysOfWeek[1]);

daysOfWeek.push("+@");
console.log(daysOfWeek);

const user = {
    name: "suchama",
    level: 284,
    class: "NightRoad",
    guild: "pacman",
    game: "maple"

};


console.log(user.class);
user.login = "nexonEmail";
console.log(user);

function testFnc(val1,val2,val3){
    console.log("val1 "+ val1 + " and val2 " + val2 + " and val3 " + val3);
};
testFnc("no1",null,"no3");
console.log(val1);

        //case1
let no1 = 3, no2 = 5;

const calculator = {
    plus:function(num1,num2){
        console.log(num1+num2);},
        //no1=num1+num2;},
    minus:function(num1,num2){
        console.log(num1-num2);},
        //no1=num1-num2;},
    multipli:function(num1,num2){
        console.log(num1*num2);},
        //no1=num1*num2;},
    divied:function(num1,num2){
        console.log(num1/num2);},
        //no1=num1/num2;},
    
    reset:function(){
        no1=0 ;   },
    total:function(){
        console.log(no1);
    }
    Input:function(num1,num2){
        no1=num1, no2=num2;
    },
  
};
calculator.plus(no1,no2);
calculator.minus(no1,no2);
calculator.multipli(no1,no2);
calculator.divied(no1,no2);
//calculator.reset();
//calculator.Input(5,7);
calculator.plus(no1,no2);
calculator.minus(no1,no2);
calculator.multipli(no1,no2);
calculator.divied(no1,no2);

console.log(calculator);

        //case2
let no1 = 3, no2 = 5;
let result = 0
const calculator = {
    plus:function(num1,num2){
        return result=num1+num2;},
    minus:function(num1,num2){
        return result=num1-num2;},
    multipli:function(num1,num2){
        return result=(num1*num2);},
    divied:function(num1,num2){
        return result=(num1/num2);},
    reset:function(){
        result = 0 ;   },
    Input:function(num1,num2){
        no1=num1, no2=num2;},
    
};

calculator.plus(no1,no2);
console.log(result);
calculator.minus(no1,no2);
console.log(result);
calculator.multipli(no1,no2);
console.log(result);
calculator.divied(no1,no2);
console.log(result);
//calculator.reset();
//calculator.Input(5,7);
console.log(calculator);




const age = parseInt(prompt("age : "));
//console.log(console);

if(isNaN(age) || age < 0){
    console.log("retry");
}   else if(age < 19 && age > 0) {
        console.log(age + " X") ;
    }
    else if(age >= 19 && age <= 50){
        console.log(age + " O");
    }
    else if(age > 50){
        console.log(age + " OH...");
    }
    else {
        console.log("error, retry");
    }

const grain = document.querySelectorAll(".grain h1");
const reset = document.querySelector(".reset h1");
let grainNum = 0
const basicColor = grain[0].style.color
console.log(grain);
console.dir(grain);
grain[0].innerText = "button";
grain[6].innerText = "change1";
grain[7].innerText = "change2";
grain[8].innerText = "change3";
function handleGrainClick(){
    console.log("click button");
    if(grainNum < grain.length)
    {
        grain[grainNum].style.color = "blue";
        grainNum = grainNum + 1;
    }
    else
    {
        console.log("end");
    }
    
};
function resetClick(){
    console.log("click button");
    if(grainNum > 0)
    {
        grainNum = grainNum - 1;
        grain[grainNum].style.color = basicColor;
        
    }
    else
    {
        console.log("end");
    }
};
function handleMouseEnter(){
    console.log("mouse enter check");
};
function handleMouseLeave(){
    console.log("mouse leave check");
};
function handleWindowResize(){
    console.log("window resize");
    //document.body.style.backgroundColor = "cyan";
};
function handlewindowOffline(){
    console.log("need wifi");
    //document.body.style.backgroundColor = "cyan";
};
function handlewindowOnline(){
    //console.log("ok");
    document.body.style.backgroundColor = "cyan";
};
grain[0].addEventListener("click", handleGrainClick);
reset.onclick = resetClick;
reset.addEventListener("mouseenter", handleMouseEnter);
reset.addEventListener("mouseleave", handleMouseLeave);

window.onresize = handleWindowResize;
window.onoffline = handlewindowOffline;
window.ononline = handlewindowOnline;

const target = document.querySelector(".reaction h1");
const color = ["red", "orange", "yellow", "green", "blue", "navy", "purple"];
const superEventHandler = {
    handleMouseEnter: function(){
        target.innerText = "mouse enter";
        target.style.color = color[0];
    },handleMouseLeave: function(){
        target.innerText = "mouse leave";
        target.style.color = color[1];
    },handleWindowResize: function(){
        target.innerText = "winow resize";
        target.style.color = color[2];
    },handleauxclick: function(){
        target.innerText = "mouse right click";
        target.style.color = color[3];
    },
                
};

console.dir(target);


target.onmouseenter = superEventHandler.handleMouseEnter;
target.onmouseleave = superEventHandler.handleMouseLeave;
target.onauxclick = superEventHandler.handleauxclick;
window.onresize = superEventHandler.handleWindowResize;

const h1 = document.querySelector("div.reaction:first-child h1");



function handleTitleClick() {
    const h1Color = h1.style.color;
    let newColor;
    if(h1Color === "blue"){
        newColor = "tomato";
    }
    else{
        newColor = "blue";
    }
    h1.style.color = newColor;
    //console.log(h1Color);
}

h1.onclick = handleTitleClick;
*/
const bodyCss = document.body;
const windowWidth = window.innerWidth;
const ReSmall = "resizeSmall", ReLarge = "resizeLarge";

function bodyResize(){
        let nowsize = window.innerWidth;
        if(windowWidth+50 > nowsize && windowWidth-50 < nowsize){
            bodyCss.classList.remove(ReLarge);
            bodyCss.classList.remove(ReSmall);
        }
        else if(windowWidth+50 <= nowsize){
            bodyCss.classList.add(ReLarge);
            bodyCss.classList.remove(ReSmall);
        }
        else if(windowWidth-50 >= nowsize){
            bodyCss.classList.add(ReSmall);
            bodyCss.classList.remove(ReLarge);
        }
};
bodyCss.onresize = bodyResize;





