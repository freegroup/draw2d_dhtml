/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.Point=function(x,y){this.x=x;this.y=y;};draw2d.Point.prototype.type="draw2d.Point";draw2d.Point.prototype.getX=function(){return this.x;};draw2d.Point.prototype.getY=function(){return this.y;};draw2d.Point.prototype.getPosition=function(p){var dx=p.x-this.x;var dy=p.y-this.y;if(Math.abs(dx)>Math.abs(dy)){if(dx<0){return draw2d.PositionConstants.WEST;}return draw2d.PositionConstants.EAST;}if(dy<0){return draw2d.PositionConstants.NORTH;}return draw2d.PositionConstants.SOUTH;};draw2d.Point.prototype.equals=function(o){return this.x==o.x&&this.y==o.y;};draw2d.Point.prototype.getDistance=function(_4ad){return Math.sqrt((this.x-_4ad.x)*(this.x-_4ad.x)+(this.y-_4ad.y)*(this.y-_4ad.y));};draw2d.Point.prototype.getTranslated=function(_4ae){return new draw2d.Point(this.x+_4ae.x,this.y+_4ae.y);};draw2d.Point.prototype.getPersistentAttributes=function(){return {x:this.x,y:this.y};};