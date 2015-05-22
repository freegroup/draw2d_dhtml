/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.ToolOval=function(_1497){draw2d.ToolGeneric.call(this,_1497);this.setDimension(24,24);};draw2d.ToolOval.prototype=new draw2d.ToolGeneric();draw2d.ToolOval.prototype.type="ToolOval";draw2d.ToolOval.prototype.execute=function(x,y){var _149a=new draw2d.Oval();_149a.setDimension(100,60);_149a.setBackgroundColor(new draw2d.Color(255,255,255));this.palette.workflow.getCommandStack().execute(new draw2d.CommandAdd(this.palette.workflow,_149a,x,y));draw2d.ToolGeneric.prototype.execute.call(this,x,y);};