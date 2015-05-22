/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.ChopboxConnectionAnchor=function(_6a3){draw2d.ConnectionAnchor.call(this,_6a3);};draw2d.ChopboxConnectionAnchor.prototype=new draw2d.ConnectionAnchor();draw2d.ChopboxConnectionAnchor.prototype.type="draw2d.ChopboxConnectionAnchor";draw2d.ChopboxConnectionAnchor.prototype.getLocation=function(_6a4){var r=new draw2d.Dimension();r.setBounds(this.getBox());r.translate(-1,-1);r.resize(1,1);var _6a6=r.x+r.w/2;var _6a7=r.y+r.h/2;if(r.isEmpty()||(_6a4.x==_6a6&&_6a4.y==_6a7)){return new Point(_6a6,_6a7);}var dx=_6a4.x-_6a6;var dy=_6a4.y-_6a7;var _6aa=0.5/Math.max(Math.abs(dx)/r.w,Math.abs(dy)/r.h);dx*=_6aa;dy*=_6aa;_6a6+=dx;_6a7+=dy;return new draw2d.Point(Math.round(_6a6),Math.round(_6a7));};draw2d.ChopboxConnectionAnchor.prototype.getBox=function(){return this.getOwner().getParent().getBounds();};draw2d.ChopboxConnectionAnchor.prototype.getReferencePoint=function(){return this.getBox().getCenter();};