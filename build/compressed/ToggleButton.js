/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.ToggleButton=function(_6bc){draw2d.Button.call(this,_6bc);this.isDownFlag=false;};draw2d.ToggleButton.prototype=new draw2d.Button();draw2d.ToggleButton.prototype.type="draw2d.ToggleButton";draw2d.ToggleButton.prototype.createHTMLElement=function(){var item=document.createElement("div");item.id=this.id;item.style.position="absolute";item.style.left=this.x+"px";item.style.top=this.y+"px";item.style.height="24px";item.style.width="24px";item.style.margin="0px";item.style.padding="0px";if(this.getImageUrl()!==null){item.style.backgroundImage="url("+this.getImageUrl()+")";}else{item.style.backgroundImage="";}var _6be=this;this.omousedown=function(_6bf){if(_6be.enabled){if(!_6be.isDown()){draw2d.Button.prototype.setActive.call(_6be,true);}}_6bf.cancelBubble=true;_6bf.returnValue=false;};this.omouseup=function(_6c0){if(_6be.enabled){if(_6be.isDown()){draw2d.Button.prototype.setActive.call(_6be,false);}_6be.isDownFlag=!_6be.isDownFlag;_6be.execute();}_6c0.cancelBubble=true;_6c0.returnValue=false;};if(item.addEventListener){item.addEventListener("mousedown",this.omousedown,false);item.addEventListener("mouseup",this.omouseup,false);}else{if(item.attachEvent){item.attachEvent("onmousedown",this.omousedown);item.attachEvent("onmouseup",this.omouseup);}}return item;};draw2d.ToggleButton.prototype.isDown=function(){return this.isDownFlag;};draw2d.ToggleButton.prototype.setActive=function(flag){draw2d.Button.prototype.setActive.call(this,flag);this.isDownFlag=flag;};draw2d.ToggleButton.prototype.execute=function(){};