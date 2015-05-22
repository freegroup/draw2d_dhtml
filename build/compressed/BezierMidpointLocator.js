/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.BezierMidpointLocator=function(_5d1){draw2d.ConnectionLocator.call(this,_5d1);};draw2d.BezierMidpointLocator.prototype=new draw2d.ConnectionLocator;draw2d.BezierMidpointLocator.prototype.type="draw2d.BezierMidpointLocator";draw2d.BezierMidpointLocator.prototype.relocate=function(_5d2){var conn=this.getConnection();var p=new draw2d.Point();var _5d5=conn.getPoints();var _5d6=Math.floor((_5d5.getSize()-2)/2);if(_5d5.getSize()<=_5d6+1){return;}var p1=_5d5.get(_5d6);var p2=_5d5.get(_5d6+1);p.x=(p2.x-p1.x)/2+p1.x+5;p.y=(p2.y-p1.y)/2+p1.y+5;_5d2.setPosition(p.x,p.y);};