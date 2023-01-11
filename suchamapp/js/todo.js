const todo = document.querySelector("#todo_form");
const todoIn = todo.querySelector("input");
const todoBtn = todo.querySelector("button");
const todoClear = document.querySelector("#todo_clear");
const todoText = document.querySelector("#todo_text");    
const login = document.querySelector("#login_form");
const loginIn = login.querySelector("input");
const loginText = document.querySelector("#login_text");
const dpoff = "dpoff";
let todoVal = todoIn.value;
let loginVal = loginIn.value;
let tdCount = localStorage.length;
const tdForm = {
    tdText : "",
    count : 1,
    newLi : function(tdno){
        if(tdno === 0 ){
            console.log("로그인되있지않음")
        }else{
        const newLi = document.createElement("li");
        this.getTd(tdno);
        newLi.id =`li${tdno}`;
        newLi.innerHTML = this.tdText;
        todoText.appendChild(newLi);
        }
    },
    getTd : function(call){
        let getText = localStorage.getItem(`td${call}`);
        this.tdText = getText;
    },
    dpOff : function(){
        todo.classList.add(dpoff);
        todoText.classList.add(dpoff);
    },
    dpOn : function(){
        todo.classList.remove(dpoff);
        todoText.classList.remove(dpoff);
    },
    
    


};

const logForm = {
    name : null,
    setId : function(){
        loginVal = loginIn.value
        localStorage.setItem("ID",loginVal);
        
    },
    getId : function(){
        this.name = localStorage.getItem("ID");
    },      
    dpOff : function(){
        login.classList.add(dpoff); //로그인폼 dpoff
        loginText.classList.remove(dpoff); //로그인텍스트 dpon
    },
    dpOn : function(){
        login.classList.remove(dpoff);
        loginText.classList.add(dpoff);
    },
    


    /*
    새로고침(페이지열었을때)
    체크아이디를 통해 스토리지에 ID가 있는지확인
    id가 있을경우 > tdCount = tdCount-1
    스토리지에서 ID값을 가져오기 ID로 DIV 출력
    todo리스트 display on
    id가 없을경우 > 로그인요청, todo리스트 display hiiden

    로그인 버튼을 눌렀을때 >
    스토리지 안에 id를 넣기
    스토리지에서 ID값을 가져오기 ID로 DIV 출력
    todo리스트 display on
    */   
};


function checkId(){
    nowId = localStorage.getItem("ID");
    if(nowId == null){
        tdForm.dpOff();
        logForm.dpOn();
        console.log("nowid now null");
    }else{
        tdForm.dpOn();
        logForm.dpOff();
        console.log(nowId);
        loginText.innerHTML=`${nowId}님 환영합니다!`;
    }
};


function createTodo(){
    logForm.getId();
    if(logForm.name === null){
        tdCount = localStorage.length;
        for (tdForm.count=1; tdForm.count <= tdCount; tdForm.count++) {
            tdForm.newLi(tdForm.count);
            console.log(tdForm.count);
        };
        checkId();
    }else{
        tdCount = localStorage.length-1;
        for (tdForm.count=1; tdForm.count <= tdCount; tdForm.count++) {
            tdForm.newLi(tdForm.count);
            console.log(tdForm.count);
        };
        checkId();
    }
};
function removeTodo(){
    tdCount=localStorage.length-1;
    for (tdForm.count=1; tdForm.count <= tdCount; tdForm.count++) {
        let delLiId = `#li${tdForm.count}`
        const delLi = document.querySelector(delLiId);
        delLi.remove();
    };
}
function todoGet() {
    todoVal = todoIn.value;
    todoIn.value="";
    console.log(todoVal);
    if(todoVal===""){
        console.log("todo인풋에 값이 입력되지 않음");
    }else{
        tdCount= localStorage.length;
        localStorage.setItem(`td${tdCount}`,todoVal);
        
    }
    tdCount=localStorage.length-1;
    tdForm.newLi(tdCount);
    

};
function loginSubmitEvent(event){
    event.preventDefault();
    logForm.setId();
    checkId();
    console.log("lo submit");
    
};
function todoSubmitEvent(event){
    event.preventDefault();
    todoGet();
    
    
};
function todoClearEvent(event){
    event.preventDefault();
    logForm.getId();
    removeTodo();
    localStorage.clear();
    localStorage.setItem("ID",logForm.name);
};
todo.onsubmit = todoSubmitEvent;
login.onsubmit = loginSubmitEvent;
todoClear.onclick = todoClearEvent;
checkId();
createTodo();


