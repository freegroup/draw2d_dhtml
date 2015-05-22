/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.ArrowConnectionDecorator=function(_550,_551){draw2d.ConnectionDecorator.call(this);if(_550===undefined||_550<1){this.lenght=15;}if(_551===undefined||_551<1){this.width=10;}};draw2d.ArrowConnectionDecorator.prototype=new draw2d.ConnectionDecorator();draw2d.ArrowConnectionDecorator.prototype.type="draw2d.ArrowConnectionDecorator";draw2d.ArrowConnectionDecorator.prototype.paint=function(g){if(this.backgroundColor!==null){g.setColor(this.backgroundColor);g.fillPolygon([3,this.lenght,this.lenght,3],[0,(this.width/2),-(this.width/2),0]);}g.setColor(this.color);g.setStroke(1);g.drawPolygon([3,this.lenght,this.lenght,3],[0,(this.width/2),-(this.width/2),0]);};draw2d.ArrowConnectionDecorator.prototype.setDimension=function(l,_554){this.width=w;this.lenght=l;};