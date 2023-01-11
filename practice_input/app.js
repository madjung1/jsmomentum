/*
const loginForm = document.getElementById("login_form");
console.log(loginForm);
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const userInfo = {
    userName:"",
    userToto:["ex1", "ex2", "ex3"],

};
console.dir(loginForm.onsubmit);
loginForm.onsubmit = true;
//loginForm.autocomplete = "off";
function loginButtonClick(){
    
    console.log("button click");
    const loginValue = loginInput.value
    
    if(loginValue === ""){
        loginInput.placeholder = "please write your name.";
        
    }
    else if(loginValue.length > 15){
        loginInput.placeholder = "your name is too long.";
        
    }
    else{
        loginInput.placeholder = "ready";
        userInfo.userName = loginValue;
        
    }
    
    userInfo.userName = loginValue;
    
    //loginInput.value = "";
    console.dir(loginInput);
    console.dir(userInfo);
}
loginButton.onclick = loginButtonClick;
*/

const maxForm = document.querySelector("#max_form");
const guessForm = document.querySelector("#guess_form");
const maxInput = document.querySelector("#max_form input");
const guessInput = document.querySelector("#guess_form input");
const guessBtn = document.querySelector("#guess_form buttnon");
const allDiv = document.querySelectorAll("div");


function onGuessSubmit(event) {
    event.preventDefault();
    let maxNum = maxInput.value;
    let guessResult = Math.round(Math.random()*maxNum);
    let guessNum = guessInput.value;
    
    if(isNaN(maxNum)===false && maxNum>=1 ){
        allDiv[1].children[0].innerText = `당신의 선택 : ${guessNum} 랜덤생성된 숫자 : ${guessResult}`;
        checkNumber(guessNum,guessResult);
        allDiv[1].classList.remove("dp_off");
        
    }else{
        allDiv[1].classList.add("dp_off");
        alert("숫자를 정확히 입력해주세요");
    }
    
    
};
function checkNumber(guess,guessRe){
    let maxNum = maxInput.value;
    console.log(typeof(guess));
    console.log(typeof(guessRe));
    console.log(typeof(maxNum));
    if(parseInt(guess) > parseInt(maxNum) || parseInt(guess)<0){
        allDiv[1].children[1].innerText = "맨위에 입력한 숫자 사의의 수를 추측하세요";
    }
    else if(guess==guessRe){
        allDiv[1].children[1].innerText = "you win";
    }else{
        allDiv[1].children[1].innerText = "you lost";
    }
};

guessForm.onsubmit = onGuessSubmit;

 