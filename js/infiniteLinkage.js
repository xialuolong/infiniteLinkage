/********************************
|  infiniteLinkage类			 |
|  作者：halen					 |
|  infiniteone：省级ID			 |
|  infinitetwo：市级ID			 |
|  infinitethree：区级ID		 |
|  说明：要使用无限级的功能		 |
|  只需要对数据进行增加和加多	 |
|  个参数，最后在infinite_event	 |
|  在添加一个事件即可。			 |
**********************************/
function infiniteLinkage(infiniteone,infinitetwo,infinitethree){
	this.elementOne=document.getElementById(infiniteone);
	this.elementTwo=document.getElementById(infinitetwo);
	this.elementThree=document.getElementById(infinitethree);

	this.infinite_element(this.elementOne,this.infinite_data(addres,0));
};
//执行事件
infiniteLinkage.prototype.infinite_event = function() {
	//防止this冲突
	var newthis = this;
	this.elementOne.onchange=function(){
		newthis.event_content(newthis.elementOne,newthis.elementTwo);
	}
	this.elementTwo.onchange=function(){
		newthis.event_content(newthis.elementTwo,newthis.elementThree);
	}
};
//执行的内容 contentClick点击的值，contentChange改变的值
infiniteLinkage.prototype.event_content = function(contentClick,contentChange) {
	//防止this冲突
	var newthis = this;
	//获取option
	var selected=contentClick.options[contentClick.selectedIndex];
	//如果index索引值不为空
	if(selected.getAttribute("index")!=null){
		contentChange.innerHTML="<option>---请选择---</option>";
		newthis.infinite_element(contentChange,newthis.infinite_data(addres,selected.getAttribute("index")));
	}
	//如果index索引值为空
	if(selected.getAttribute("index")==null){
		contentChange.innerHTML="<option>---请选择---</option>";
	}
};
//获取数据
infiniteLinkage.prototype.infinite_data = function(data,son) {
	var result=new Array();
	for (var i = 0; i < data.length; i++) {
		if(data[i].parentid==son){
			//把数据塞到新的数组
			result.push(data[i]);
		}
	};
	return result;
};
//创建元素
infiniteLinkage.prototype.infinite_element = function(parent_element,data) {
	for (var i = 0; i < data.length; i++) {
		var element=document.createElement('option');
		element.setAttribute("index",data[i].id);
		element.innerHTML=data[i].name;
		parent_element.appendChild(element);
	};
};
//