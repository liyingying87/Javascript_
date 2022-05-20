
const request = require('request');
const { logInstallSummary } = require('selenium-standalone/');

//想实现的功能：s获取到body.result作为返回值
async function get_token(){
    return  new Promise(
        (resolve, reject)=>{
              request.post('http://10.15.110.18:6069/sdata/rest/system/authority/login', {
    json: {
        username:'admin',
        password:'EJfTVnefh+VNqSbzYMhLi10ADf2ZGOSq+lBH49x2RXCeyw0cXobuCGmxJ6+6E3gvmOUuhvHPJeCJ2xu85OzaQw=='
    }}, (error, res, body)=>{
    if (error) {
        console.error("error:"+error)
       reject(error)
    }
      resolve(body.result);
    });  
    }
    );
}
async function a(){
    let token2 = await get_token().then(function (res) {
      console.log("res:"+res);
       return res
});
 
    return token2;
}
let a3= a();
console.log("a3:"+a3)

