let numeric=Math.floor(Math.random()*100);
let count=1;
function check(){
    let a=document.getElementById("number");
    if(a.value==numeric&&count<=10){
        document.getElementById("para").innerHTML="YOU FOUNT IT";
        window.location.href="./winner.gif"
    }
    else if(a.value>=numeric&&count<=10){
        document.getElementById("para").innerHTML="please enter mini value";
        document.getElementById("def").innerHTML=count;
        count++;
    }
    else if(a.value<=numeric&&count<=10){
        document.getElementById("para").innerHTML="please enter max value";
        document.getElementById("def").innerHTML=count;
        count++;
    }
    else if(a.value!=numeric&&count>10){
        document.getElementById("para").innerHTML="Your attempt finished";
        window.location.href="./1.gif"
    }
}
function reset(){
    location.reload();
}