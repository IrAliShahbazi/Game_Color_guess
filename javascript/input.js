var win=0;
var gameover=0;
var show;
function get1() {
    show1=true;
    document.getElementById("input1").type="hidden";
    var yes1=false;
    var char1=document.getElementById("input1").value;
    document.getElementById("input1").value="";
    for(let i = 0;i<=color.length;i++){
        if(color[i]==char1){
            win = win+1;
            document.getElementById(i).innerHTML=char1;
            yes1=true;
        }else{
            if(yes1==false){
                if(i==color.length){
                    gameover=gameover+1;
                    document.getElementById("span2").innerHTML=gameover+":"+gamefinish;
                }
            }
        }
        if (win == color.length){
            show1 = false;
            document.getElementById("body").style.backgroundColor="green";
            document.getElementById("input1").type="hidden";
            clearInterval(t)
        }
        if(gameover == gamefinish){
            show1 = false;
            document.getElementById("body").style.backgroundColor="red";
            document.getElementById("input1").type="hidden";
            clearInterval(t)
        }
    }
    if(show1==true){
        document.getElementById("input1").type="text";
    }
}