
const request = require('request');
const { logInstallSummary } = require('selenium-standalone/');

let  username = 'admin';
let password = 'EJfTVnefh+VNqSbzYMhLi10ADf2ZGOSq+lBH49x2RXCeyw0cXobuCGmxJ6+6E3gvmOUuhvHPJeCJ2xu85OzaQw==';


 // 想实现的功能：s获取到body.result作为返回值
function get_token(){
    // let s
    request.post({
        url: 'http://10.15.110.18:6069/sdata/rest/system/authority/login',
        json: {
            username:'admin',
            password:'EJfTVnefh+VNqSbzYMhLi10ADf2ZGOSq+lBH49x2RXCeyw0cXobuCGmxJ6+6E3gvmOUuhvHPJeCJ2xu85OzaQw=='
        }}, (error, res, body)=>{
        if (error) {
            console.error(error)
            return
        }
        console.log(res)
        return body;
        });
    // console.log(s());
    // return s();
}
// console.log(areacode);
let token=get_token();
console.log(token);
