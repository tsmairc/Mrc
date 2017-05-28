### 本项目目的主要是学习jquery的整体架构

#### 因为学习的目的，我把jQuery改成Mrc。
```javascript
var Mrc = function(options,context){
  //每次调用实例化新的对象，在内存当中开辟一块新的存储空间
  return new Mrc.fn.init(options,context);
}
//改变实例原型指向（指向Mrc.fn），这里init实例就可以使用Mrc原型里的方法
Mrc.fn.init.prototype = Mrc.fn;
```
这里每次都返回一个Mrc原型init的对象，然后再把init的原型指向Mrc的原型。这样做的好处就是，在闭包内写的一些方法就是当前框架的内部方法，不会被外部所用。
```javascript
//内部私有方法
var Tween = {
  test: funtion(value){
    console.log(value);
  }
}
```

#### 命名冲突解决
下面代码中，如果noConflict参数为空时，当前Mrc会放弃$这个引用，当为true时，Mrc所有引用都被放弃。
```javascript
_Mrc = window.Mrc,
_$ = window.$;
Mrc.fn.extend({
  noConflict: function(deep){
    if(window.Mrc === Mrc){
      window.$ = _$;
    }
    if(deep && window.Mrc === Mrc){
      window.Mrc = Mrc;
    }
  }
});
```
