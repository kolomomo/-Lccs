## content

## 栅格布局

    （row）必须包含在`` .container ``（固定宽度）或 ``.container-fluid ``（100% 宽度）中。
    （row）在水平方向创建一组 列（column），可嵌套。

### 栅格参数

   `` .col-xs-`` 小屏幕，始终水平排列。

   `` .col-sm-`` >=750px 水平，< 堆叠。

   `` .col-md-`` >=970px

   `` .col-lg-`` >=1170px

   Q:

   ```
   <div class="row">
     <div class="col-xs-12 col-md-8">.col-xs-12 .col-md-8</div>
     <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
   </div>
   ```
   什么意思？

 ### offset

 ## css 画圆

 ```
  border-radius: 50%;
     width: 10px;
     height: 10px;
     background: #69d1e9;
     /* 宽度和高度需要相等 */
 ```

## dropdown hover

Q： 为什么有的js必须放在尾部？

## 透明

 一、使用 opacity + Alpha Filter

    最外层，最内层和文字，都被设置了 opacity（alpha 也是使用 opacity ）

 二、最佳实践：rgba色彩 + Gradient Filter

    选用 background-color: rgba() 来实现，同样可以实现透明效果，并且只应用于当前元素，不继承。
