btn = document.getElementById("submitButton")




btn.onclick = function(){

    var temp = document.getElementById("sum");
    var evro = document.getElementById("eButton");
    var dollar = document.getElementById("dButton"); 
    var leva = document.getElementById("lvButton");
    var result= document.getElementById("tempLabel");

    var evro2 = document.getElementById("e2Button");
    var dollar2 = document.getElementById("d2Button"); 
    var leva2 = document.getElementById("lv2Button");

    if(leva.checked  && evro2.checked){
        temp = Number(temp.value);
        temp = lvToEvro(temp);
        result.innerHTML = temp;
    }
    else if(evro.checked && leva2.checked){

        temp = Number(temp.value);
        temp = evroToLv(temp);
        result.innerHTML =temp;
    }
    else if(dollar.checked && leva2.checked){

        temp = Number(temp.value);
        temp = dollarToLv(temp);
        result.innerHTML =temp;
    }
    else if(leva.checked && dollar2.checked){

        temp = Number(temp.value);
        temp = dollarToLv(temp);
        result.innerHTML =temp;
    }
    else if(dollar.checked && evro2.checked){

        temp = Number(temp.value);
        temp = dollarToEvro(temp);
        result.innerHTML =temp;
    }
    else if(evro.checked && dollar2.checked){

        temp = Number(temp.value);
        temp = dollarToEvro(temp);
        result.innerHTML =temp;
    }
    else{
        result.innerHTML = "Select a unit";
    }
}

function lvToDolar(temp){
    return temp * 1.82;
}

function lvToEvro(temp){
    return temp * 1.95;
}
function dollarToLv(temp){
    return temp /1.82;
}

function dollarToEvro(temp){
    return temp * 0.91;
}

function evroToLv(temp){
    return temp / 1.95;
}
function evroToDollar(temp){
    return temp * 1.10;
}




rBtn = document.getElementById("reload");
rBtn.onclick=function(){
    location.reload();
};