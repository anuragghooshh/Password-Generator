function uCase(){
    var uAlpha ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return uAlpha[Math.floor(Math.random() * 26)];
}
function lCase(){
    var lAlpha = 'abcdefghijklmnopqrstuvwxyz';
    return lAlpha[Math.floor(Math.random() * 26)];
}
function symBol(){
    var sym = '~`!@#$%^&*()_-+={[}]|\\:;\"\'<,>.?/';
    return sym[Math.floor(Math.random() * 32)];
}
function numB(){
    var num = '0123456789';
    return num[Math.floor(Math.random() * 9)];
}
function genP(){
    var len = (function(){
        var no = document.getElementById("length").value;
        return no;
    }());
    var password = new String;
    if(len<8){
        alert('Password Size must be more than 7.');
        return;
    }
    else if(len>14){
        alert('Password Size must not exceed 14.');
        return;
    }
    for(let i=0; i<len; i++){
        switch(Math.floor(Math.random()*4)){
            case 0: password=password+uCase();
                    break;
            case 1: password=password+lCase();
                    break;
            case 2: password=password+symBol();
                    break;
            case 3: password=password+numB();
            break;
        }
    }
    alert('Password Successfully Generated!');
    document.getElementById("oPut").innerHTML = password;
}
document.getElementById("generate").onclick = function(){genP()};