/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.ToolCheckBox=function(_149b){draw2d.ToolGeneric.call(this,_149b);this.setDimension(25,25);};draw2d.ToolCheckBox.prototype=new draw2d.ToolGeneric;draw2d.ToolCheckBox.prototype.type="ToolCheckBox";draw2d.ToolCheckBox.prototype.execute=function(x,y){var _149e=new draw2d.CheckBoxFigure();_149e.setDimension(100,20);this.palette.workflow.addFigure(_149e,x,y);var _149f=this.palette.workflow.getBestCompartmentFigure(x,y);if(_149f){_149f.addChild(_149e);}draw2d.ToolGeneric.prototype.execute.call(this,x,y);};