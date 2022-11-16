colorlist=["red","blue","yellow","white","black"];
var numberMath=Math.random()*4;
var color=colorlist[Math.ceil(numberMath)];
for(let i = 0 ; i<=color.length;i++){
    document.write("<span id='"+i+"'>-</span>");
    if(i==color.length){
        document.getElementById(i).innerHTML="";
    }
}