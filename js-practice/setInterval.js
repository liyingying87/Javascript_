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
//
// var num = 0;
// var max = 10;
// function incrementNumber(){
//     num++;
//     console.log(num);
//     //如果执行次数未达到max设定的值，则设置另一次超时调用
//     if(num < max){
//         setTimeout(incrementNumber,500);
//     }else{
//         console.log("done")
//     }
// // }
// setTimeout(incrementNumber,500);
console.log("first:"+new Date());
var timer = setTimeout(b, 1000)

function b() {

    var start=new Date().getTime();
    console.log("start:"+new Date(start));
    while(true){
        // console.log("new Date().getTime():"+new Date(new Date().getTime()));
        if(new Date().getTime()-start>1000){
            console.log("end:"+new Date());
            break;
        }
    }

    // console.log("first:"+new Date(start));
    timer = setTimeout(b, 1000)//再次调用
}

//
// var y=0;
// var z = new Date().getTime();
// console.log("z:"+new Date(z));
// var t=setTimeout(
//     function (){
//         y++;
//         console.log(y);
//         var start=new Date().getTime();
//         console.log("start:"+new Date(start));
//         while(true){
//             // console.log("new Date().getTime():"+new Date(new Date().getTime()));
//             if(new Date().getTime()-start>2000){
//                 break;
//             }
//         }
//         if(y>=10){
//             clearTimeout(t)
//         }else{
//             setTimeout(arguments.callee,500);
//         }
//         console.log(new Date().getTime()-z);
//     }
//     ,500);

// setTimeout(alert('hello world'),1000);
// //推荐的调用方式
// let timeout = setTimeout(function(){
//    console.log("hello world!");
// },1000);
// console.log(timeout);
// setInterval(function(){
//     console.log("hello world!");
// },2000);
//
// var num = 0;
// var max = 10;
// var intervalId = null;
//
// function incrementNumber(){
//     num++;
//     console.log(num);
//     //如果执行次数达到了max设定的值，则取消后续尚未执行的调用
//     if(num == max){
//         clearInterval(intervalId);
//         console.log("done")
//     }
// }
//
// intervalId = setInterval(incrementNumber,500);
//

