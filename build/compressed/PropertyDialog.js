/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.PropertyDialog=function(_153,_154,_155){this.figure=_153;this.propertyName=_154;this.label=_155;draw2d.Dialog.call(this);this.setDimension(400,120);};draw2d.PropertyDialog.prototype=new draw2d.Dialog();draw2d.PropertyDialog.prototype.type="draw2d.PropertyDialog";draw2d.PropertyDialog.prototype.createHTMLElement=function(){var item=draw2d.Dialog.prototype.createHTMLElement.call(this);var _157=document.createElement("form");_157.style.position="absolute";_157.style.left="10px";_157.style.top="30px";_157.style.width="375px";_157.style.font="normal 10px verdana";item.appendChild(_157);this.labelDiv=document.createElement("div");this.labelDiv.innerHTML=this.label;this.disableTextSelection(this.labelDiv);_157.appendChild(this.labelDiv);this.input=document.createElement("input");this.input.style.border="1px solid gray";this.input.style.font="normal 10px verdana";this.input.type="text";var _158=this.figure.getProperty(this.propertyName);if(_158){this.input.value=_158;}else{this.input.value="";}this.input.style.width="100%";_157.appendChild(this.input);this.input.focus();return item;};draw2d.PropertyDialog.prototype.onOk=function(){draw2d.Dialog.prototype.onOk.call(this);this.figure.setProperty(this.propertyName,this.input.value);};