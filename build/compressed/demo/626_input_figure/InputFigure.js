/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.InputFigure=function(){this.outputPort=null;draw2d.Node.call(this);this.setDimension(150,50);this.setResizeable(false);this.setBackgroundColor(new draw2d.Color(100,100,100));};draw2d.InputFigure.prototype=new draw2d.Node();draw2d.InputFigure.prototype.type="InputFigure";draw2d.InputFigure.prototype.setWorkflow=function(_1210){draw2d.Node.prototype.setWorkflow.call(this,_1210);if(_1210!==null&&this.outputPort===null){this.outputPort=new draw2d.OutputPort();this.outputPort.setWorkflow(_1210);this.addPort(this.outputPort,this.width,this.height/2);}};draw2d.InputFigure.prototype.createHTMLElement=function(){var item=draw2d.Node.prototype.createHTMLElement.call(this);this.label=document.createElement("div");this.label.innerHTML="Input Field";this.label.style.fontSize="12px";this.label.style.color="white";this.label.style.margin="5px";item.appendChild(this.label);this.input=document.createElement("input");this.input.style.width="80px";this.input.style.marginLeft="5px";this.input.style.zIndex=""+draw2d.Figure.ZOrderBaseIndex+1;var _1212=function(e){e.stopPropagation();};if(this.input.addEventListener){this.input.addEventListener("mousedown",_1212,false);}else{if(this.input.attachEvent){this.input.attachEvent("onmousedown",_1212);}}item.appendChild(this.input);return item;};