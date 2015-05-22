/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.EditPolicy=function(_309){this.policy=_309;};draw2d.EditPolicy.DELETE="DELETE";draw2d.EditPolicy.MOVE="MOVE";draw2d.EditPolicy.CONNECT="CONNECT";draw2d.EditPolicy.RESIZE="RESIZE";draw2d.EditPolicy.prototype.type="draw2d.EditPolicy";draw2d.EditPolicy.prototype.getPolicy=function(){return this.policy;};