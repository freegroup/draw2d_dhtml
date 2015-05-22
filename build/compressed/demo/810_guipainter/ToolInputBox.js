/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.ToolInputBox=function(_b13){draw2d.ToolGeneric.call(this,_b13);this.setDimension(25,25);};draw2d.ToolInputBox.prototype=new draw2d.ToolGeneric;draw2d.ToolInputBox.prototype.type="ToolInputBox";draw2d.ToolInputBox.prototype.execute=function(x,y){var _b16=new draw2d.InputBoxFigure();_b16.setDimension(100,20);var _b17=this.palette.workflow.getBestCompartmentFigure(x,y);this.palette.workflow.getCommandStack().execute(new draw2d.CommandAdd(this.palette.workflow,_b16,x,y,_b17));draw2d.ToolGeneric.prototype.execute.call(this,x,y);};