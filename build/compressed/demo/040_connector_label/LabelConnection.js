/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.LabelConnection=function(){draw2d.Connection.call(this);var _c9b=new draw2d.Label("Message");_c9b.setBackgroundColor(new draw2d.Color(230,230,250));_c9b.setBorder(new draw2d.LineBorder(1));this.addFigure(_c9b,new draw2d.ManhattanMidpointLocator(this));};draw2d.LabelConnection.prototype=new draw2d.Connection();draw2d.LabelConnection.prototype.type="draw2d.LabelConnection";