/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.ToolGroup=function(_b1f){draw2d.ToolGeneric.call(this,_b1f);this.setDimension(25,25);this.setTooltip("Form Group");};draw2d.ToolGroup.prototype=new draw2d.ToolGeneric;draw2d.ToolGroup.prototype.type="ToolGroup";draw2d.ToolGroup.prototype.execute=function(x,y){var _b22=new draw2d.GroupFigure();_b22.setDimension(100,60);this.palette.workflow.addFigure(_b22,x,y);draw2d.ToolGeneric.prototype.execute.call(this,x,y);};