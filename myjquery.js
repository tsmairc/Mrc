
/*
 *  作者:	mairongchao
 * 	时间:	2017-05-27
 * 	描叙:	javaScript 封装库
 */
(function(window,undefined){
	//window:参数可压缩，节省查找window对象的时间
	//undefined:在低版本浏览器可从新赋值，没法保证它始终是undefined。目的是固定undefined
	//undefined:在老一辈的浏览器是不被支持的，直接使用会报错，js框架要考虑到兼容性，因此增加一个形参undefined。
	var Mrc = function(options,context){
		//每次调用实例化新的对象，在内存当中开辟一块新的存储空间
		return new Mrc.fn.init(options,context);
	},
	_Mrc = window.Mrc,
	_$ = window.$;
	Mrc.fn = Mrc.prototype = {
		constructor:Mrc,
		//构造函数
		init : function(options,context){
			if(Mrc.isArray(options)){
				Tween.test(options[0]);
				return this;
			}
			
		},
		Mrc:'0.0.1',
		length:0,
		size:function(){
			return this.length;
		}
	}
	
	//Mrc对象和原型上添加成员
	Mrc.extend = Mrc.fn.extend = function(o1,o2){
		var ag = arguments;
		if(ag.length === 1){
			for(var k in ag[0]){
				this[k] = ag[0][k];
			}
		}else if(ag.length === 2){
			for(var k in ag[1]){
				ag[0][k] = ag[1][k];
			}
		}
	}
	
	
	//判断数组
	Mrc.fn.extend({
		isArray: Array.isArray || function( obj ) {
			return jQuery.type(obj) === "array";
		}
	});
	
	//内部私有方法
	var Tween = {
		test: funtion(value){
			console.log(value);
		}
	}


	//自定义事件
	Mrc.each(['click','mouseover','mouseout','mousedown','mouseup','mouseenter','mouseleave','dblclick','keyup','keydown','submit','blur','focus','contextmenu','load','resize'],function(index,element){
		Mrc.fn[element] = function(fn){
			return this.on(element,fn);
		}
	});
	
	//屏蔽相同函数名
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
	
	//改变实例原型指向（指向Mrc.fn）
	Mrc.fn.init.prototype = Mrc.fn;
	//对外开放 $ 和 Mrc 变量
	window.$ = window.Mrc = Mrc;
})(window)