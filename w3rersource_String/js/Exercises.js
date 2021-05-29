//1.Write a JavaScript function to check whether an `input` is a string or not.
let test1 = (input) => {
    if (typeof (input) == "string")
        return true;
    else
        return false;
};
console.log(test1("w3resource"));
console.log(test1([1, 2, 4, 0]));
//2.Write a JavaScript function to check whether a string is blank or not.
let test2 = (input) => {
    // if(input.match(/\s+/g))
    if (input.length == 0)
        return true;
    else
        return false;
}//人家只说是不是blank，没说空格啥的
console.log(test2(''));
console.log(test2('abc'));
//3.Write a JavaScript function to split a string and convert it into an array of words.
let string_to_array = (input) => {
    return input.trim().split(' ');
    //自己写的没有加trim
}
console.log(string_to_array("Robin Singh"));
//4.Write a JavaScript function to extract a specified number of characters from a string
let truncate_string = (input, n) => {
    return input.substr(0, n);
}
console.log(truncate_string("Robin Singh", 4));
//5.Write a JavaScript function to convert a string in abbreviated form.
//先将字符串搞成数组，然后返回
let abbrev_name = (input) => {
    let arry = input.trim().split(' ');
    //console.log(arry);
    return arry[0] + " " + arry[1].charAt(0) + '.';
}
console.log(abbrev_name("Robin Singh"));
//6.Write a JavaScript function to hide email addresses to protect from unauthorized user.
let protect_email = (input) => {
    let arry = input.trim().split('_');
    //  console.log(arry);
    let arry_again = arry[1].split('@');
    //  console.log(arry_again);
    return arry[0] + '...@' + arry_again[1];
}
console.log(protect_email("robin_singh@example.com"));
//7.Write a JavaScript function to parameterize a string.
let string_parameterize = (input) => {
    //  return input.trim().toLowerCase().replaceAll(' ','-');//我会多输出一个点
    return input.trim().slice(0, input.length - 1).toLowerCase().replaceAll(' ', '-');
//这就好了
}
console.log(string_parameterize("Robin Singh from USA."));
//"robin-singh-from-usa"
//8.Write a JavaScript function to capitalize the first letter of a string.
let capitalize = (input) => {
    return input.charAt(0).toUpperCase() + input.slice(1, input.length);
}
console.log(capitalize('js string exercises'));
//"Js string exercises"
//9.Write a JavaScript function to capitalize the first letter of each word in a string.
let capitalize_Words = (str) => {
//     let arry = input.split(' ');
//     console.log(arry);
//   //  arry.forEach(element=>console.log(element.charAt(0).toUpperCase()+element.slice(1,element.length)+""));
// return arry;//自己写的这个吧整成数组了
    // return str.replace(/\w\S*/g, "00");//*表示多次或者不出现。\w想匹配大小写字母、数字和下划线（也就是所有单词字符）.\S表示不想匹配空格水平制表符等\s取反。
    return str.replace(/\w\S*/g, function (text) {
        return text.charAt(0).toUpperCase() + text.substr(1);
    });//*表示多次或者不出现。\w想匹配大小写字母、数字和下划线（也就是所有单词字符）.\S表示不想匹配空格水平制表符等\s取反。
}//答案的做法，我觉得还是很好的！简便的将字符串按照空格给分开几个部分，再分别处理这小的部分。
console.log(capitalize_Words('js string exercises'));
let capitalize_Words1 = (input) => {
    let arry = input.split(' ');
    //   console.log(arry);
    for (let i = 0; i < arry.length; i++) {
        arry[i] = (arry[i].charAt(0).toUpperCase() + arry[i].slice(1, arry[i].length));
    }//foreach无法改变数组的值
    return arry.toString().replaceAll(',',' ');
}
console.log(capitalize_Words1('js string exercises'));
//"Js String Exercises"
//10.Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case.
let swapcase =(input)=>{
    let center = input.replace(/[a-z]/g,function (text) {
        return text.toUpperCase();
    });
   // console.log(center);
    return center.replace(/[A-Z]/g,function (text) {
        return text.toLowerCase();
    });
}
console.log(swapcase('AaBbc'));//第十题看人接写的多好，哈哈
//"aAbBC"
swapcase1 = function swapcase1(str) {
    return str.replace(/([a-z]+)|([A-Z]+)/g, function(match,chr) {
        return chr ? match.toUpperCase() : match.toLowerCase();
    });
}
console.log(swapcase1('AaBbc'));
//11.
