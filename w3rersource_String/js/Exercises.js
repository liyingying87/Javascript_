//1.Write a JavaScript function to check whether an `input` is a string or not.
let test1 = (input) => {
    if (typeof (input) == "string")
        return true;
    else
        return false;
};

//注释十一时
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
    return arry.toString().replaceAll(',', ' ');
}
console.log(capitalize_Words1('js string exercises'));
//"Js String Exercises"
//10.Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case.
let swapcase = (input) => {
    let center = input.replace(/[a-z]/g, function (text) {
        return text.toUpperCase();
    });
    // console.log(center);
    return center.replace(/[A-Z]/g, function (text) {
        return text.toLowerCase();
    });
}
console.log(swapcase('AaBbc'));//第十题看人接写的多好，哈哈
//"aAbBC"
swapcase1 = function swapcase1(str) {
    return str.replace(/([a-z]+)|([A-Z]+)/g, function (match, chr) {
        return chr ? match.toUpperCase() : match.toLowerCase();
    });
}
console.log(swapcase1('AaBbc'));
//11.Write a JavaScript function to convert a string into camel case.
let camelize = (input) => {
    let center = input.replace(/\w\S*/g, function (text) {
        return text.charAt(0).toUpperCase() + text.substr(1);
    });
    return center.trim().replace(/\s*/g, "");
}
console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));
// "JavaScriptExercises"
// "JavaScriptExercises"
// "JavaScriptExercises"
//12.Write a JavaScript function to uncamelize a string.
let uncamelize = (input, mark) => {
    if (typeof (mark) == "undefined") {
        mark = " ";
    }
    //正则表达式 '/^'表示匹配输入字符串的开始位置    $/结尾
    // let test =input.replace("/^" + mark + "/", '');
    // console.log(test+"++");
    let center = input.replace(/[A-Z]/g, function (char) {
        return mark + char.toLowerCase();
    });
    return center;
}
console.log(uncamelize('helloWorld'));
console.log(uncamelize('helloWorld', '-'));
console.log(uncamelize('helloWorld', '_'));
// "hello world"
// "hello-world"
// "hello_world"
//13.Write a JavaScript function to concatenates a given string n times (default is 1).
repeat = function repeat(input, n) {
    if (typeof (n) == "undefined") {
        n = 1;
    }
    return input.repeat(n);
}
console.log(repeat('Ha!'));
console.log(repeat('Ha!', 2));
console.log(repeat('Ha!', 3));
// "Ha!"
// "Ha!Ha!"
// "Ha!Ha!Ha!"
//答案：
repeat1 = function repeat1(input, n) {
    if (typeof (n) == "undefined") {
        n = 1;
    }
    return n < 1 ? "" : new Array(n + 1).join(input);
    //新建一个数组，长度是n+1，在n+1中间插入几个input并转成string
}
console.log(repeat1('Ha!'));
console.log(repeat1('Ha!', 2));
console.log(repeat1('Ha!', 3));
//14.Write a JavaScript function to insert a string within a string at a particular position (default is 1)
let insert = (input, insert_, mark) => {
    if (typeof (insert_) == "undefined") {
        return input;
    }
    if (typeof (mark) == "undefined") {
        mark = 0;
        return input.slice(0, mark) + insert_ + input.slice(mark);
    }
    return input.slice(0, mark) + insert_ + input.slice(mark);
}
console.log(insert('We are doing some exercises.'));
console.log(insert('We are doing some exercises.', 'JavaScript '));
console.log(insert('We are doing some exercises.', 'JavaScript ', 18));
// "We are doing some exercises."
// "JavaScript We are doing some exercises."
// "We are doing some JavaScript exercises."
//15.Write a JavaScript function to humanized number (Formats a number to a human-readable string.) with the correct suffix such as 1st, 2nd, 3rd or 4th.
let humanize_format = (n) => {
    if (typeof (n) == "undefined") {
        return;
    }
    if (n % 100 >= 11 && n % 100 <= 13)
        return n + "th";
    switch (n % 10) {
        case 1:
            return n + "st";
        case 2:
            return n + "nd";
        case 3:
            return n + "rd";
    }
    return n + "th";
}//这个说不上哪里，感觉有些奇怪.
console.log(humanize_format());
console.log(humanize_format(1));
console.log(humanize_format(8));
console.log(humanize_format(301));
console.log(humanize_format(402));
console.log(humanize_format(412));
// "1st"
// "8th"
// "301st"
// "402nd"
//16. Write a JavaScript function to truncates a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("…") (by default) or specified characters.
let text_truncate = (input,num,new_insert)=>{
    if (typeof (num) == "undefined") {
        return input;
    }
    if (typeof (new_insert) == "undefined") {
        return input.slice(0,num-4)+" ...";
    }
    else {
        return  input.slice(0,num-new_insert.length)+new_insert;
    }
}
console.log(text_truncate('We are doing JS string exercises.'))
console.log(text_truncate('We are doing JS string exercises.',19))
console.log(text_truncate('We are doing JS string exercises.',15,'!!'))
// "We are doing JS string exercises."
// "We are doing JS ..."
// "We are doing !!"
//17.Write a JavaScript function to chop a string into chunks of a given length. 看答案了..
let string_chop =(input,num)=>{
    if(typeof (num)=="undefined"){
        return new Array(input);
    }
    else{
        return input.match(new RegExp('.{1,'+num+'}','g'));//这就是正则表达式用法
    }
}
console.log(string_chop('w3resource'));
console.log(string_chop('w3resource',2));
console.log(string_chop('w3resource',3));
// ["w3resource"]
//     ["w3", "re", "so", "ur", "ce"]
//     ["w3r", "eso", "urc", "e"]
//18.Write a JavaScript function to count the occurrence of a substring in a string.看答案..false是什么意思？
let count = (main_str,sub_str)=>{
    main_str += '';
    sub_str += '';
    console.log(main_str+".");
    console.log(sub_str+".");
    if (sub_str.length <= 0)
    {
        return main_str.length + 1;
    }
   // subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return (main_str.match(new RegExp(sub_str, 'gi')) || []).length;
}
console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
// Output :
//     2
console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
// Output :
//     1
//19.Write a JavaScript function to escape a HTML string.  放弃此题
function escape_HTML(html_str) {
    // 'use strict';

    return html_str.replace(/[&<>"]/g, function (tag) {
        var chars_to_replace = {
            '&': '&',
            '<': '<',
            '>': '>',
            '"': '"'
        };

        return chars_to_replace[tag] || tag;
    });
}
console.log(escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">'));
// Output :
//     "&lt;a href=&quot;javascript-string-exercise-17.php&quot; target=&quot;_blank&quot;&gt;"
//20.Write a JavaScript function that can pad (left, right) a string to get to a determined length.
let formatted_string = (pad,user_str,pad_pos)=>{

    if(typeof (user_str)=="undefined")
        return pad;
    if(pad_pos=="l"){
        return (pad+user_str).slice(-pad.length);//倒着数
    }
    else {
        return (user_str+pad).slice(0,pad.length);
    }
}
console.log(formatted_string('0000',123,'l'));
console.log(formatted_string('00000000',123,''));
// Output :
//     "0123"
// "12300000"
//21.Write a JavaScript function to repeat a string a specified times.
let repeat_string = (pad,n)=>{
    if (typeof (n)=="undefined")
    {
        return "Error in string or count.";
    }
    else{
        return pad.repeat(n);
    }
}
console.log(repeat_string('a', 4));
console.log(repeat_string('a'));
// Output :
//     "aaaa"
// "Error in string or count."
//22.Write a JavaScript function to get a part of a string after a specified character.
let subStrAfterChars =(pad,mark,flag)=>{
    if(flag=='a'){
     return pad.slice(0,pad.indexOf(mark));
    }
    if(flag=='b'){
        return pad.slice(pad.indexOf(mark)+1,pad.length);
    }
}
console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':','a'));
console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E','b'));
// Output :
//     "w3resource"
// "xercises"
//23. Write a JavaScript function to strip leading and trailing spaces from a string.
let strip = (pad)=>{
    return pad.trim();
}
console.log(strip('w3resource '));
console.log(strip(' w3resource'));
console.log(strip(' w3resource '));
// Output :
//     "w3resource"
// "w3resource"
// "w3resource"
//24.Write a JavaScript function to truncate a string to a certain number of words.
let truncate =(pad,n)=>{
    let arry = pad.split(' ');
    console.log(arry);
    let arry_ = arry.splice(0,n);
    console.log(arry_);
    return arry_.join().replaceAll(',',' ');
}
console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
// Output :
//     "The quick brown fox"
//25.Write a JavaScript function to alphabetize a given string.不会，看答案..
let alphabetize_string =(pad)=>{
    return pad.split('').sort().join('').trim();//join('')可以没有逗号
}
console.log(alphabetize_string('United States'));
// Output :
//     "SUadeeinsttt"
//26.Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.
let remove_first_occurrence = (pad,mark)=>{
    let arry = pad.split(" ");
    let arry_ = arry.filter(a=>a!=mark);
    return arry_.join(' ').trim();
}
console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
// Output :
//     "The quick brown fox jumps over lazy dog"
//27.Write a JavaScript function to convert ASCII to Hexadecimal format.看答案了
let ascii_to_hexa =(n)=>{

}
console.log(ascii_to_hexa('12'));
console.log(ascii_to_hexa('100'));
// Output :
//     "3132"
// "313030"
