/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.ToolCheckBox=function(_159a){draw2d.ToolGeneric.call(this,_159a);this.setDimension(25,25);};draw2d.ToolCheckBox.prototype=new draw2d.ToolGeneric;draw2d.ToolCheckBox.prototype.type="ToolCheckBox";draw2d.ToolCheckBox.prototype.execute=function(x,y){var _159d=new draw2d.CheckBoxFigure();_159d.setDimension(100,20);var _159e=this.palette.workflow.getBestCompartmentFigure(x,y);this.palette.workflow.getCommandStack().execute(new draw2d.CommandAdd(this.palette.workflow,_159d,x,y,_159e));draw2d.ToolGeneric.prototype.execute.call(this,x,y);};