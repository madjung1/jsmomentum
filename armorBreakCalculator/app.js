const aromrBreakResult = document.querySelector("#result");
const aromrBreakInput = document.querySelector("#input");
const buffAromrBreak = document.querySelector("#buff_result");
const newP = document.createElement('p');
let nowArmorBreak = 0;         //현재방무
let compArmorBreak = 0;
let setNowAromr = 0;
let setCompAromr = 0;
let difArmorBreak= 0;
let bossArmor = 380;
let increaseDamge = 0
const index = {
    buffRadio : document.querySelector("#buff"),
    difRadio :  document.querySelector("#dif"),
    a380Radio : document.querySelector("#a380"),
    a300Radio : document.querySelector("#a300"),
    buffNow :   document.querySelector("#buffnow"),
    buffComp :  document.querySelector("#buffcomp"),
    difNow :    document.querySelector("#difnow"),
    difComp :   document.querySelector("#difcomp"),
    buffNowIn :   document.querySelector("#buffnow input"),
    buffCompIn :  document.querySelector("#buffcomp input"),
    difNowIn :    document.querySelector("#difnow input"),
    difCompIn :   document.querySelector("#difcomp input"),
    buffNowInput :   document.querySelector("#buffnow input"),
    buffCheck :   document.querySelector("#buff_check"),
    buffRadioEvent : function() {
        index.difNow.className="dp_off";
        index.difComp.className="dp_off";
        index.buffNow.className="";
        index.buffComp.className="";
        setRadioEvent();
    },
    difRadioEvent : function() {
        index.buffNow.className="dp_off";
        index.buffComp.className="dp_off";
        index.difNow.className="";
        index.difComp.className="";
        setRadioEvent();
    },
    a380RadioEvent : function(){
        bossArmor = 380;
        aromrBreakFnc.setApplyText();
    },
    a300RadioEvent : function(){
        bossArmor = 300;
        aromrBreakFnc.setApplyText();
    },
    
    buffNowBtnEvent : function(){
        let bNBtnValue = index.buffNowIn.value;
        aromrBreakFnc.buffApplyText();
        if((bNBtnValue>0&&bNBtnValue<100)||(bNBtnValue>-100&&bNBtnValue<0)){
            nowArmorBreak=parseFloat(bNBtnValue);          
        }
        else{
            alert("비교할 방무 재입력 ex) 스탯창 방무96.24% => 96.24");
            index.buffNowIn.value = "";
        };
        if(nowArmorBreak===0||compArmorBreak===0){
            console.log("now,comp not ready(0)");
            
        }else if(isNaN(nowArmorBreak)||isNaN(compArmorBreak)){
            console.log("now,comp not ready(isNan!)");
            
        }else{
            console.log("ready!"+nowArmorBreak+" , "+compArmorBreak);
            if(index.buffCheck.checked){
                
            }else{
                aromrBreakFnc.bossApply();
                aromrBreakFnc.buffApplyText();    
            }
        }

    },
    
    buffCompBtnEvent : function(){
        let bCBtnValue = index.buffCompIn.value;
        aromrBreakFnc.buffApplyText();
        if((bCBtnValue>0&&bCBtnValue<100)||(bCBtnValue>-100&&bCBtnValue<0)){
            compArmorBreak=parseFloat(bCBtnValue);          
        }
        else{
            alert("비교할 방무 재입력 ex) 스탯창 방무96.24% => 96.24");
            index.buffCompIn.value = "";
        };
        if(nowArmorBreak===0||compArmorBreak===0){
            console.log("now,comp not ready(0)");
            
        }else if(isNaN(nowArmorBreak)||isNaN(compArmorBreak)){
            console.log("now not ready(isNan!)");
            
        }
        else{
            console.log("ready!"+nowArmorBreak+" , "+compArmorBreak);
            //setNowComp()
            if(index.buffCheck.checked){
                
            }else{
                aromrBreakFnc.bossApply();
                aromrBreakFnc.buffApplyText();    
            }
            
        }

        //
    },
    difNowBtnEvent : function(){
        let dNBtnValue = index.difNowIn.value;
        aromrBreakFnc.difApplyText();
        if((dNBtnValue>0&&dNBtnValue<100)||(dNBtnValue>-100&&dNBtnValue<0)){
            nowArmorBreak=parseFloat(dNBtnValue);       
        }
        else{
            alert("비교할 방무 재입력 ex) 스탯창 방무85.00% => 85");
            index.difNowIn.value = "";
        };
        if(nowArmorBreak===0||compArmorBreak===0){
            console.log("now,comp not ready(0)");
            
        }else if(isNaN(nowArmorBreak)||isNaN(compArmorBreak)){
            console.log("now,comp not ready(isNan!)");
            
        }else{
            console.log("ready!"+nowArmorBreak+" , "+compArmorBreak);
            //setNowComp()
            if(index.buffCheck.checked){
                
            }else{
                aromrBreakFnc.bossApply();
                aromrBreakFnc.buffApplyText();    
            }
        }
        //
    },
    difCompBtnEvent : function(){
        let dCBtnValue = index.difCompIn.value;
        aromrBreakFnc.difApplyText();
        if((dCBtnValue>0&&dCBtnValue<100)||(dCBtnValue>-100&&dCBtnValue<0)){
            compArmorBreak=parseFloat(dCBtnValue);          
        }
        else{
            alert("비교할 방무 재입력ex) 방무 -30% => -30 입력");
            index.difCompIn.value = "";
        };
        if(nowArmorBreak===0||compArmorBreak===0){
            console.log("now,comp not ready(0)");
            
        }else if(isNaN(nowArmorBreak)||isNaN(compArmorBreak)){
            console.log("now,comp not ready(isNan!)");
            
        }else{
            console.log("ready!"+nowArmorBreak+" , "+compArmorBreak);
            //setNowComp()
            if(index.buffCheck.checked){

            }else{
                aromrBreakFnc.bossApply();
                aromrBreakFnc.buffApplyText();    
            }
        }
    },
    buffCheckEvent : function(){
        if(index.buffCheck.checked){
            addArmorBreaks();
            aromrBreakFnc.applyCount=1;
        }else{
            console.log("else");
            ramoveArmorBreaks();
        }
    }
    



};

const aromrBreakFnc = {
    buffName:"",
    buffPercent:0,
    applyCount:1, 
    buffApply:function(bName, bPercent){
        aromrBreakFnc.buffName = bName;
        aromrBreakFnc.buffPercent= bPercent;
        nowArmorBreak= nowArmorBreak + (100-nowArmorBreak)*bPercent/100;
        compArmorBreak= compArmorBreak + (100-compArmorBreak)*bPercent/100;
        aromrBreakFnc.checkApplyText(bName, bPercent);
        

    },
    difApply:function(dif){//컴프아머 = 나우아머*디프아머
        console.log(dif);
        difArmorBreak = dif/100;
        if(difArmorBreak===0){
            console.log("difApply() 입력값이 0입니다.")
        }else if(difArmorBreak>0){
            compArmorBreak=nowArmorBreak +(100-nowArmorBreak)*difArmorBreak;
        }else if(difArmorBreak<0){  
            compArmorBreak=(nowArmorBreak-(100*-difArmorBreak))/(1+difArmorBreak);
        }else{
            console.log("difApply(숫자) 다시 시도해주세요.");
        }       
    }
    ,
    bossApply:function(){
        
        nowAromrBreakDamage = 100 - ((bossArmor/100)*(100-nowArmorBreak));//3*80
        compArmorBreakDamge = 100 - ((bossArmor/100)*(100-compArmorBreak));//60
        increaseDamge = ((compArmorBreakDamge/nowAromrBreakDamage)-1)*100;
        

    },
    setApplyText:function(){
        aromrBreakResult.children[0].innerText = 
            `보스방어율 : ${bossArmor}%`;
    },
    buffApplyText:function(){
        aromrBreakFnc.setApplyText();
        aromrBreakResult.children[1].innerText = 
        `비교전 방무 : ${nowArmorBreak.toFixed(2)}% 비교후 방무 : ${compArmorBreak.toFixed(2)}%
          최종데미지 증가량 ${increaseDamge.toFixed(2)}%`;
    },
    difApplyText:function(){
        aromrBreakFnc.setApplyText();
        aromrBreakResult.children[1].innerText = 
        `[방무 ${difArmorBreak*100}% 최종데미지 증가량 ${increaseDamge.toFixed(2)}%]`;
    },
    checkApplyText:function(bName, bPercent){
        buffAromrBreak.children[aromrBreakFnc.applyCount].classList.remove("dp_off");
        buffAromrBreak.children[aromrBreakFnc.applyCount].innerText =
        `추가방무 ${bName} ${bPercent}% 적용 : (전)${nowArmorBreak.toFixed(3)}% `+
        `(후)${compArmorBreak.toFixed(3)}%`;
        aromrBreakFnc.applyCount = aromrBreakFnc.applyCount+1;
    },

        };
    const armorEvent = {

    }
function setNowComp(){
    aromrBreakResult.children[0].innerText = 
    `보스방어율 : ${bossArmor}%`;
    aromrBreakResult.children[1].innerText = 
    "(스텟창)비교전방무 : " + nowArmorBreak.toFixed(2) + "% " + "비교할방무 : " + compArmorBreak.toFixed(2)+"%";
};
function setInputValue(){
    index.buffNowIn.value = "";
    index.buffCompIn.value = "";
    index.difNowIn.value = "";
    index.difCompIn.value = "";
};
function setRadioEvent(){
        nowArmorBreak=0;
        compArmorBreak=0;
        difArmorBreak=0;
        setNowAromr=0;
        setCompAromr=0;
        index.buffCheck.checked = false;
        ramoveArmorBreaks();
        setNowComp();
        setInputValue();
}

function addArmorBreaks(){
    setNowAromr = nowArmorBreak;
    setCompAromr = compArmorBreak;
    
    aromrBreakFnc.buffApply("퍼지",40);
    aromrBreakFnc.buffApply("엔젤릭터치",44);
    aromrBreakFnc.buffApply("모법링크",9);
    //aromrBreakFnc.buffApply("위협",50);
    aromrBreakFnc.buffApply("서포터웨이버",10);
    aromrBreakFnc.buffApply("트루사이트",10);
    aromrBreakFnc.bossApply();
};
function ramoveArmorBreaks(){
    nowArmorBreak = setNowAromr;
    compArmorBreak = setCompAromr;
    aromrBreakFnc.bossApply();
    buffAromrBreak.children[1].classList.add("dp_off");
    buffAromrBreak.children[2].classList.add("dp_off");
    buffAromrBreak.children[3].classList.add("dp_off");
    buffAromrBreak.children[4].classList.add("dp_off");
    buffAromrBreak.children[5].classList.add("dp_off");
    buffAromrBreak.children[6].classList.add("dp_off");  
};
index.buffRadio.onclick = index.buffRadioEvent;
index.difRadio.onclick = index.difRadioEvent;
index.a380Radio.onclick = index.a380RadioEvent;
index.a300Radio.onclick = index.a300RadioEvent;
index.buffCheck.onclick = index.buffCheckEvent;
index.buffNow.children[1].onclick = index.buffNowBtnEvent;
index.buffComp.children[1].onclick = index.buffCompBtnEvent;
index.difNow.children[1].onclick = index.difNowBtnEvent;
index.difComp.children[1].onclick = index.difCompBtnEvent;


setNowComp();
console.log(index.buffCheck.checked);
/*
function buffNowBtnEvent(){
    console.dir(index.buffNowIn);
    console.log(index.buffNowIn.value);
    //aromrBreakFnc.bossApply();
};
*/

//addArmorBreaks();
//aromrBreakFnc.difApply(30);
//aromrBreakFnc.bossApply();
//console.dir(index.buffNow.children[0]);



