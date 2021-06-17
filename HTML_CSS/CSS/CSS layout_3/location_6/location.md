<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [定位](#%E5%AE%9A%E4%BD%8D)
  - [文档流](#%E6%96%87%E6%A1%A3%E6%B5%81)
  - [介绍定位](#%E4%BB%8B%E7%BB%8D%E5%AE%9A%E4%BD%8D)
    - [静态定位](#%E9%9D%99%E6%80%81%E5%AE%9A%E4%BD%8D)
    - [相对定位](#%E7%9B%B8%E5%AF%B9%E5%AE%9A%E4%BD%8D)
    - [绝对定位](#%E7%BB%9D%E5%AF%B9%E5%AE%9A%E4%BD%8D)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# 定位  
定位允许您从正常的文档流布局中取出元素，并使它们具有不同的行为，例如放在另一个元素的上面，或者始终保持在浏览器视窗内的同一位置。  
## 文档流  
## 介绍定位  
### 静态定位
将元素放在它的文档布局流中的正常位置  
静态定位是默认行为！
### 相对定位  
相对定位是我们将要看的第一个位置类型。 它与静态定位非常相似，占据在正常的文档流中，除了你仍然可以修改它的最终位置，包括让它与页面上的其他元素重叠。
```css
position: relative;
```
如果您在此阶段保存并刷新，则结果根本不会发生变化。那么如何修改元素的位置呢？ 您需要使用top，bottom，left和right属性。  
相对定位就是说考虑一个看不见的力，推动盒子的一侧，使其向相反方向移动。  
- 所以例如，如果你指定 top: 30px;一个力推动框的顶部，使它向下移动30px。
### 绝对定位



