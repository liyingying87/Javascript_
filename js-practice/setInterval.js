// function newInterval(func,millisecond){
//     function inside(){
//         func();
//         setTimeout(inside,millisecond);
//     }
//     setTimeout(inside,millisecond);
//     // inside();
// }
// newInterval(like,1000);
// function like(){
//     console.log("你好");
// }

var y=0;
var z = new Date().getTime();
var t=setTimeout(b,500);
function b(){
    y++;
    sleep(2000)
    if(y>=10){
        clearTimeout(t)
    }else{
        setTimeout(arguments.callee,500);
    }
    console.log(new Date().getTime()-z);
}
function sleep(sleepTime){
    var start=new Date().getTime();
    while(true){
        if(new Date().getTime()-start>sleepTime){
            break;
        }
    }
}
