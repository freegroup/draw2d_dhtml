/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.ToolRectangle=function(_49f){draw2d.ToolGeneric.call(this,_49f);this.setDimension(24,24);};draw2d.ToolRectangle.prototype=new draw2d.ToolGeneric;draw2d.ToolRectangle.prototype.type="ToolRectangle";draw2d.ToolRectangle.prototype.execute=function(x,y){var _4a2=new draw2d.Rectangle();_4a2.setDimension(100,60);_4a2.setBackgroundColor(new draw2d.Color(255,255,255));this.palette.workflow.getCommandStack().execute(new draw2d.CommandAdd(this.palette.workflow,_4a2,x,y));draw2d.ToolGeneric.prototype.execute.call(this,x,y);};