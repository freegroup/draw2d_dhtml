/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.Menu=function(){this.menuItems=new draw2d.ArrayList();draw2d.Figure.call(this);this.setSelectable(false);this.setDeleteable(false);this.setCanDrag(false);this.setResizeable(false);this.setSelectable(false);this.setZOrder(10000);this.dirty=false;};draw2d.Menu.prototype=new draw2d.Figure();draw2d.Menu.prototype.type="draw2d.Menu";draw2d.Menu.prototype.createHTMLElement=function(){var item=document.createElement("div");item.style.position="absolute";item.style.left=this.x+"px";item.style.top=this.y+"px";item.style.margin="0px";item.style.padding="0px";item.style.zIndex=""+draw2d.Figure.ZOrderBaseIndex;item.style.border="1px solid gray";item.style.background="lavender";item.style.cursor="pointer";item.style.width="auto";item.style.height="auto";item.style.borderRadius="2px";item.className="Menu";return item;};draw2d.Menu.prototype.setWorkflow=function(_589){this.workflow=_589;};draw2d.Menu.prototype.setDimension=function(w,h){};draw2d.Menu.prototype.appendMenuItem=function(item){this.menuItems.add(item);item.parentMenu=this;this.dirty=true;};draw2d.Menu.prototype.getHTMLElement=function(){var html=draw2d.Figure.prototype.getHTMLElement.call(this);if(this.dirty){this.createList();}return html;};draw2d.Menu.prototype.createList=function(){this.dirty=false;this.html.innerHTML="";var _58e=this;for(var i=0;i<this.menuItems.getSize();i++){var item=this.menuItems.get(i);var li=document.createElement("a");li.innerHTML=item.getLabel();li.style.display="block";li.style.fontFamily="Verdana, Arial, Helvetica, sans-serif";li.style.fontSize="9pt";li.style.color="dimgray";li.style.borderBottom="1px solid silver";li.style.paddingLeft="5px";li.style.paddingRight="5px";li.style.whiteSpace="nowrap";li.style.cursor="pointer";li.className="MenuItem";this.html.appendChild(li);li.menuItem=item;if(li.addEventListener){li.addEventListener("click",function(_592){var _593=arguments[0]||window.event;_593.cancelBubble=true;_593.returnValue=false;var _594=_593.clientX;var _595=_593.clientY;var _596=document.body.parentNode.scrollLeft;var _597=document.body.parentNode.scrollTop;this.menuItem.execute(_594+_596,_595+_597);},false);li.addEventListener("mouseup",function(_598){_598.cancelBubble=true;_598.returnValue=false;},false);li.addEventListener("mousedown",function(_599){_599.cancelBubble=true;_599.returnValue=false;},false);li.addEventListener("mouseover",function(_59a){this.style.backgroundColor="silver";},false);li.addEventListener("mouseout",function(_59b){this.style.backgroundColor="transparent";},false);}else{if(li.attachEvent){li.attachEvent("onclick",function(_59c){var _59d=arguments[0]||window.event;_59d.cancelBubble=true;_59d.returnValue=false;var _59e=_59d.clientX;var _59f=_59d.clientY;var _5a0=document.body.parentNode.scrollLeft;var _5a1=document.body.parentNode.scrollTop;_59c.srcElement.menuItem.execute(_59e+_5a0,_59f+_5a1);});li.attachEvent("onmousedown",function(_5a2){_5a2.cancelBubble=true;_5a2.returnValue=false;});li.attachEvent("onmouseup",function(_5a3){_5a3.cancelBubble=true;_5a3.returnValue=false;});li.attachEvent("onmouseover",function(_5a4){_5a4.srcElement.style.backgroundColor="silver";});li.attachEvent("onmouseout",function(_5a5){_5a5.srcElement.style.backgroundColor="transparent";});}}}};