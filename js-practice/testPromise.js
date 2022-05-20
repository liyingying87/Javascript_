// var promise = new Promise(function(resolve,reject){
//     // if(false){
//         // resolve('success');
//     // } 
//     // else{
//         reject('fail');
//     // }
// });
// var a= promise.then(function(res){
//     console.log("res:"+res);
// }).catch((err)=>{
//     console.log("err:"+err)
// })
// console.log(a);
// console.log("kaishikaishi");
// async function f1(){
//     return "abc";
// }
// // f1();
// console.log(f1());
// console.log("之后的")

async function f3(){
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            reslove("abcd")
        },2000)
    });
}
function f4(){
    return "f4";
}
async function f5(){
    var c = await f3();//等待f3完全执行完毕才执行下面的代码
    console.log(c);
    var c = await f3().then(function(res){
            console.log("res:"+res);
        }).catch((err)=>{
            console.log("err:"+err)
        });//等待f3完全执行完毕才执行下面的代码
    
    console.log("qqq")
    // var d = await f4();
    // console.log(c,d);
}
console.log(f5());