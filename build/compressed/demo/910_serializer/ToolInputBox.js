/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.ToolInputBox=function(_5c3){draw2d.ToolGeneric.call(this,_5c3);this.setDimension(25,25);};draw2d.ToolInputBox.prototype=new draw2d.ToolGeneric;draw2d.ToolInputBox.prototype.type="ToolInputBox";draw2d.ToolInputBox.prototype.execute=function(x,y){var _5c6=new draw2d.InputBoxFigure();_5c6.setDimension(100,20);this.palette.workflow.addFigure(_5c6,x,y);var _5c7=this.palette.workflow.getBestCompartmentFigure(x,y);if(_5c7){_5c7.addChild(_5c6);}draw2d.ToolGeneric.prototype.execute.call(this,x,y);};