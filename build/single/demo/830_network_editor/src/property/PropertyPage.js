draw2d.PropertyPage=function(){
};
draw2d.PropertyPage.prototype.type="draw2d.PropertyPage";
draw2d.PropertyPage.prototype.init=function(model){
throw "Inherit classes must override the abstract function [PropertyPage.prototype.init]";
};
draw2d.PropertyPage.prototype.deinit=function(){
throw "Inherit classes must override the abstract function [PropertyPage.prototype.deinit]";
};
draw2d.PropertyPage.prototype.getHTMLElement=function(){
throw "Inherit classes must override the abstract function [PropertyPage.prototype.getHTMLElement]";
};
draw2d.PropertyPage.prototype.onResize=function(w,h){
};
draw2d.PropertyPage.prototype.createInputElement=function(x,y){
var _1bf5=document.createElement("input");
_1bf5.type="text";
_1bf5.style.width="260px";
_1bf5.style.left=x+"px";
_1bf5.style.top=y+"px";
_1bf5.style.font="normal 11px verdana";
_1bf5.style.paddingLeft="5px";
_1bf5.style.position="absolute";
return _1bf5;
};
draw2d.PropertyPage.prototype.createLabelElement=function(text,x,y){
var _1bf9=document.createElement("div");
_1bf9.style.left=x+"px";
_1bf9.style.top=y+"px";
_1bf9.style.position="absolute";
_1bf9.className="property_panel_label";
_1bf9.innerHTML=text;
return _1bf9;
};
