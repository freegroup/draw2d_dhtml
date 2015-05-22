/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.ToolGroup=function(_339){draw2d.ToolGeneric.call(this,_339);this.setDimension(25,25);this.setTooltip("Form Group");};draw2d.ToolGroup.prototype=new draw2d.ToolGeneric;draw2d.ToolGroup.prototype.type="ToolGroup";draw2d.ToolGroup.prototype.execute=function(x,y){var _33c=new draw2d.GroupFigure();_33c.setDimension(100,60);var _33d=this.palette.workflow.getBestCompartmentFigure(x,y);this.palette.workflow.getCommandStack().execute(new draw2d.CommandAdd(this.palette.workflow,_33c,x,y,_33d));draw2d.ToolGeneric.prototype.execute.call(this,x,y);};