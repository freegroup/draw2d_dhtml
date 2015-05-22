draw2d.OverviewWindow=function(name){
draw2d.WindowFigure.call(this,"Overview Window");
this.setDimension(180,150);
this.servers={};
this.name=name;
};
draw2d.OverviewWindow.prototype=new draw2d.WindowFigure();
draw2d.OverviewWindow.prototype.type="OverviewWindow";
draw2d.OverviewWindow.prototype.createHTMLElement=function(){
var item=draw2d.WindowFigure.prototype.createHTMLElement.call(this);
this.inputDiv=document.createElement("div");
this.inputDiv.style.position="absolute";
this.inputDiv.style.left="10px";
this.inputDiv.style.top="20px";
this.inputDiv.style.overflow="auto";
this.inputDiv.style.border="1px solid black";
this.inputDiv.style.font="normal 10px verdana";
item.appendChild(this.inputDiv);
return item;
};
draw2d.OverviewWindow.prototype.setDimension=function(w,h){
draw2d.WindowFigure.prototype.setDimension.call(this,w,h);
if(this.inputDiv!==null){
this.inputDiv.style.height=Math.max(1,(h-30))+"px";
this.inputDiv.style.width=Math.max(1,(w-20))+"px";
}
};
draw2d.OverviewWindow.prototype.addServer=function(_1912){
this.servers[_1912.id]=_1912;
this.createList();
};
draw2d.OverviewWindow.prototype.removeServer=function(_1913){
this.servers[_1913.id]=null;
this.createList();
};
draw2d.OverviewWindow.prototype.createList=function(){
this.inputDiv.innerHTML="";
var list=document.createElement("ul");
for(key in this.servers){
var _1915=this.servers[key];
if(_1915!==null){
var li=document.createElement("li");
var a=document.createElement("a");
a.href="javascript:draw2d.OverviewWindow.scrollTo('"+_1915.id+"')";
a.innerHTML=_1915.ip;
li.appendChild(a);
if(_1915.isReachable()){
a.style.color="green";
}else{
a.style.color="red";
a.style.fontWeight="bold";
}
list.appendChild(li);
}
}
this.inputDiv.appendChild(list);
};
draw2d.OverviewWindow.scrollTo=function(id){
var _1919=workflow.getFigure(id);
workflow.scrollTo(_1919.getX()-draw2d.OverviewWindow.screenWidth()/2,_1919.getY()-draw2d.OverviewWindow.screenHeight()/2);
};
draw2d.OverviewWindow.prototype.onDragend=function(){
draw2d.WindowFigure.prototype.onDragend.call(this);
};
draw2d.OverviewWindow.screenWidth=function(){
var _191a=0;
if(typeof (window.innerWidth)=="number"){
_191a=window.innerWidth;
}else{
if(document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)){
_191a=document.documentElement.clientWidth;
}else{
if(document.body&&(document.body.clientWidth||document.body.clientHeight)){
_191a=document.body.clientWidth;
}
}
}
return _191a;
};
draw2d.OverviewWindow.screenHeight=function(){
var _191b=0;
if(typeof (window.innerWidth)=="number"){
_191b=window.innerHeight;
}else{
if(document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)){
_191b=document.documentElement.clientHeight;
}else{
if(document.body&&(document.body.clientWidth||document.body.clientHeight)){
_191b=document.body.clientHeight;
}
}
}
return _191b;
};
