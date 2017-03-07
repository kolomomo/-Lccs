菜单div

<div class="dropdown">


下拉按钮，id用来给下拉菜单指向用的

<button type="button" class="btn dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown">


菜单列表，aria-labelledby="dropdownMenu1" 就是用来指向哪个菜单，因为有可能有多个菜单

<ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">

菜单项

<li><a href="#">HTML</a></li>

css sprite

为了减少http请求数量,加速网页内容显示,不过在自适应页面中使用雪碧图应用的场景却不多，
因为很多场景里自适应页面(移动端页面)的小图标啥的基本都做成字体图标了，操作起来也比较
方便.


屏幕过窄时，设置左边的文字被截断出现”…”

单行文字省略

单行文字的省略方案已经有比较主流又有效的解决方案，就是CSS3的text-overflow属性。该属性能够优
雅地完成所有单行文字省略的需求，而且覆盖了目前市场上几乎所有的浏览器版本（浏览器支持情况，请
参考： http://caniuse.com/#search=te... ）。

在使用中唯一需要注意的是要加上代码：

.truncation {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
white-space: nowrap 保证单行文字不会换行，若无此属性文字会自动换行而不会显示省略号。 overflow: hidden
 则不显示超出容器的文字内容，若无此属性，文字会显示超过容器而不省略。

 多行文字省略

 方案一：-webkit-line-clamp（仅适用于webkit内核浏览器）

 在webkit内核的浏览器中，多行文字省略可以采用CSS属性 -webkit-line-clamp 实现。

 .multiple-line {
       overflow: hidden;
       text-overflow: ellipsis;
       display: -webkit-box;
       -webkit-line-clamp: 2;
       -webkit-box-orient: vertical;
 }
 其中 overflow:hidden 保证超出行数的内容不显示； display: -webkit-box 与 -webkit-box-orient: vertical 表示采用-webkit-box显示，其行数方向为垂直。

 这种方法实现起来简单明了，缺点就是受用面太窄， 只适用于webkit内核浏览器 。而且，-webkit-box已经被flex替代，后续不太可能被其他内核浏览器支持。不过，由于大部分移动端浏览器（Safari, Android Browser, Chrome）都是webkit内核的，如果该页面仅在移动端浏览，那么这不失为一种最简单有效的方案。

 方案二：clamp.js

 CSS搞不定的事情，只能交给JS了。

 解决方案代码，请参考这个仓库~ https://github.com/yuanqing/l...

 基本思路

 先按单词截断，再按字符进行截断。单词与字符的截断方法类似，以截断字符的思路为例：

 每次循环减少element.innerHTML一个字符；

 观察此时的 element元素内容的高度 是否满足 要求的最大高度 ；

 其中元素内容的高度用 element.offsetHeight 获取；

 获取要求的最大高度：由于传入的是 最大行数 ，故而将其与 line-height 相乘得到（ line-height 可以由计算样式获得 window.getComputedStyle(element).lineHeight ）；

 function truncateByCharacter(element, maximumHeight, ellipsisCharacter) {
   const innerHTML = element.innerHTML;
   let length = innerHTML.length;

   while (length > 0) {
       element.innerHTML = innerHTML.substring(0, length).replace(TRAILING_WHITESPACE_REGEX, '') + ellipsisCharacter;
     if (element.offsetHeight <= maximumHeight) {
       return;
     }
     length--;
   }
 }
 JS的解决方案相比CSS的更加灵活，如需要隐藏或显示更多文字信息时，则应该采用clamp.js解决方案。

 总结

 本文介绍的多余文字省略方案，都是较为常用的。单行文字解决方案中的 text-overflow 已经足以应对各种场景各种浏览器；而多行省略文字的解决方案较简单的可采用 -webkit-line-clamp 方法，尤其是移动端，若存在兼容性问题则参考clamp.js用JS来解决。