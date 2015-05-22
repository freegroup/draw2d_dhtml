/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.SnapToGrid=function(_984){draw2d.SnapToHelper.call(this,_984);};draw2d.SnapToGrid.prototype=new draw2d.SnapToHelper();draw2d.SnapToGrid.prototype.type="draw2d.SnapToGrid";draw2d.SnapToGrid.prototype.snapPoint=function(_985,_986,_987){_987.x=this.workflow.gridWidthX*Math.floor(((_986.x+this.workflow.gridWidthX/2)/this.workflow.gridWidthX));_987.y=this.workflow.gridWidthY*Math.floor(((_986.y+this.workflow.gridWidthY/2)/this.workflow.gridWidthY));return 0;};draw2d.SnapToGrid.prototype.snapRectangle=function(_988,_989){_989.x=_988.x;_989.y=_988.y;_989.w=_988.w;_989.h=_988.h;return 0;};