# 样式化表格
## 表格样式小贴士
- 使您的表格标记尽可能简单，并且保持灵活性，例如使用百分比，这样设计就更有响应性。
- 使用 table-layout: fixed 创建更可控的表布局，可以通过在标题width中设置width来轻松设置列的宽度。
- 使用 border-collapse: collapse 使表元素边框合并，生成一个更整洁、更易于控制的外观。
- 使用<thead>, <tbody> (en-US)和<tfoot> 将表格分割成逻辑块，并提供额外的应用CSS的地方，因此如果需要的话，可以更容易地将样式层叠在一起。
- 使用斑马线来让其他行更容易阅读。
- 使用 text-align直线对齐您的<th>和<td>文本，使内容更整洁、更易于跟随。
```css

table {
    font-size: 100%;
    border-top: 1px solid darkgrey;
    border-bottom: 1px solid grey;
    border-collapse: collapse;
}
tr :nth-child(2),
tr :nth-child(3){
    text-align: right;
}
tr :first-child,
tr :last-child {
    text-align: left;
}
tfoot th[colspan="2"] {
    text-align: right;
}
tfoot td[colspan="2"] {
    text-align: left;
}
tbody tr:nth-child(odd) {
    background-color: lightgrey;
}
tfoot {
    border-top: 1px solid lightgrey;
}

```
