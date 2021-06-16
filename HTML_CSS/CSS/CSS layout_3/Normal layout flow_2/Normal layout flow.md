# 正常布局流
## 默认情况下，元素是如何布局的？  
首先，取得元素的内容来放在一个独立的元素盒子中，然后在其周边加上内边距、边框和外边距 --- 就是我们之前看到的盒子模型。  
默认的，一个**块级元素**的内容宽度是其父元素的100%，其高度与其内容高度一致。**内联元素**的height width与内容一致。你无法设置内联元素的height width --- 它们就那样置于块级元素的内容里。 如果你想控制内联元素的尺寸，你需要为元素设置display: block; （或者，display: inline-block; inline-block 混合了inline 和 block的特性。)

这样解释了独立元素的布局，但是元素之间又是如何相互影响的呢？ 正常布局流（在布局介绍里提到过）是一套在浏览器视口内放置、组织元素的系统。默认的，块级元素按照基于其父元素的书写顺序(默认值: horizontal-tb)的块流动方向(block flow direction)放置 --- 每个块级元素会在上一个元素下面另起一行，它们会被设置好的margin 分隔。在英语，或者其他水平书写、自上而下模式里，块级元素是垂直组织的。

内联元素的表现有所不同 --- 它们不会另起一行；只要在其父级块级元素的宽度内有足够的空间，它们与其他内联元素、相邻的文本内容（或者被包裹的）被安排在同一行。如果空间不够，溢出的文本或元素将移到新的一行。

如果两个相邻的元素都设置了margin 并且两个margin有重叠，那么更大的设置会被保留，小的则会消失 --- 这被称为**外边距叠加**，我们之前见到过。