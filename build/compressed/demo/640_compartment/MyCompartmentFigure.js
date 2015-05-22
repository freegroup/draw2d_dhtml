/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.MyCompartmentFigure=function(){draw2d.CompartmentFigure.call(this);this.defaultColor=new draw2d.Color(230,230,250);this.setBackgroundColor(this.defaultColor);};draw2d.MyCompartmentFigure.prototype=new draw2d.CompartmentFigure();draw2d.MyCompartmentFigure.prototype.onFigureLeave=function(_972){draw2d.CompartmentFigure.prototype.onFigureLeave.call(this,_972);if(_972 instanceof draw2d.CompartmentFigure){_972.setBackgroundColor(_972.defaultColor);}};draw2d.MyCompartmentFigure.prototype.onFigureDrop=function(_973){draw2d.CompartmentFigure.prototype.onFigureDrop.call(this,_973);if(_973 instanceof draw2d.CompartmentFigure){_973.setBackgroundColor(this.getBackgroundColor().darker(0.1));}};draw2d.MyCompartmentFigure.prototype.setBackgroundColor=function(_974){draw2d.CompartmentFigure.prototype.setBackgroundColor.call(this,_974);for(var i=0;i<this.children.getSize();i++){var _976=this.children.get(i);if(_976 instanceof draw2d.CompartmentFigure){_976.setBackgroundColor(this.getBackgroundColor().darker(0.1));}}};