/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.PropertyPage=function(){};draw2d.PropertyPage.prototype.type="draw2d.PropertyPage";draw2d.PropertyPage.prototype.init=function(_646){throw "Inherit classes must override the abstract function [PropertyPage.prototype.init]";};draw2d.PropertyPage.prototype.deinit=function(){throw "Inherit classes must override the abstract function [PropertyPage.prototype.deinit]";};draw2d.PropertyPage.prototype.getHTMLElement=function(){throw "Inherit classes must override the abstract function [PropertyPage.prototype.getHTMLElement]";};draw2d.PropertyPage.prototype.onResize=function(w,h){};draw2d.PropertyPage.prototype.createInputElement=function(x,y){var _64b=document.createElement("input");_64b.type="text";_64b.style.width="260px";_64b.style.left=x+"px";_64b.style.top=y+"px";_64b.style.font="normal 11px verdana";_64b.style.paddingLeft="5px";_64b.style.position="absolute";return _64b;};draw2d.PropertyPage.prototype.createLabelElement=function(text,x,y){var _64f=document.createElement("div");_64f.style.left=x+"px";_64f.style.top=y+"px";_64f.style.position="absolute";_64f.className="property_panel_label";_64f.innerHTML=text;return _64f;};