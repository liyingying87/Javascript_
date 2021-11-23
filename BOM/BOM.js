
// var age = 29;
let age = 29;
console.log(window.age);
console.log(age);
function origin() {
    // 把窗口移动到左上角
    window.moveTo(0, 0);
}
let windowObjectReference;
let strWindowFeatures = `
    menubar=yes,
    location=yes,
    resizable=yes,
    scrollbars=yes,
    status=yes
`;

function openRequestedPopup() {
    windowObjectReference =
        window.open(
            "http://www.cnn.com/",
            "CNN_WindowName",
            strWindowFeatures
        );
}
window.moveTo(200,0);