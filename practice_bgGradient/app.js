const colorBtn = document.querySelector("button");
const blueprint =  [
    "#" + Math.round(Math.random()*0xffffff).toString(16),
    "#" + Math.round(Math.random()*0xffffff).toString(16)

];

function checkColor() {
    if(blueprint[0]===blueprint[1]){
        blueprint[1]= "#" + Math.round(Math.random()*0xffffff).toString(16);
        checkColor();
    }else{
        document.body.style.background = `linear-gradient(45deg,${blueprint[0]},${blueprint[1]})`;
        resetColor();

    }
};
function resetColor(){
    blueprint[0]="#" + Math.round(Math.random()*0xffffff).toString(16);
    blueprint[1]="#" + Math.round(Math.random()*0xffffff).toString(16);
    }
colorBtn.onclick = checkColor;

console.log(blueprint);