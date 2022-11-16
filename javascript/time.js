var yes = false;
var m = 2;
var s = 60;
function time() {
    s = s-1;
    if(m==0&&s==0){
        yes=true;
        m=0;
        s=0;
        clearInterval(t);
        document.getElementById("span1").innerHTML="0"+":"+"0";
        document.getElementById("body").style.backgroundColor="red";
        document.getElementById("input1").type="hidden";
        show1=false
    }
    if(s == 0){
        m = m-1;
        s = 60;
    }
    if(yes==false){
        document.getElementById("span1").innerHTML=m+":"+s;
    }
}
var t = setInterval(time,1000);