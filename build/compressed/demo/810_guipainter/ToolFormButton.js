/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.ToolFormButton=function(_18b){draw2d.ToolGeneric.call(this,_18b);this.setDimension(25,25);};draw2d.ToolFormButton.prototype=new draw2d.ToolGeneric;draw2d.ToolFormButton.prototype.type="ToolFormButton";draw2d.ToolFormButton.prototype.execute=function(x,y){var _18e=new draw2d.ButtonFigure();_18e.setDimension(100,20);var _18f=this.palette.workflow.getBestCompartmentFigure(x,y);this.palette.workflow.getCommandStack().execute(new draw2d.CommandAdd(this.palette.workflow,_18e,x,y,_18f));draw2d.ToolGeneric.prototype.execute.call(this,x,y);};