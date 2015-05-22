/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.ManhattanMidpointLocator=function(_c52){draw2d.ConnectionLocator.call(this,_c52);};draw2d.ManhattanMidpointLocator.prototype=new draw2d.ConnectionLocator;draw2d.ManhattanMidpointLocator.prototype.type="draw2d.ManhattanMidpointLocator";draw2d.ManhattanMidpointLocator.prototype.relocate=function(_c53){var conn=this.getConnection();var p=new draw2d.Point();var _c56=conn.getPoints();var _c57=Math.floor((_c56.getSize()-2)/2);if(_c56.getSize()<=_c57+1){return;}var p1=_c56.get(_c57);var p2=_c56.get(_c57+1);p.x=(p2.x-p1.x)/2+p1.x+5;p.y=(p2.y-p1.y)/2+p1.y+5;_c53.setPosition(p.x,p.y);};