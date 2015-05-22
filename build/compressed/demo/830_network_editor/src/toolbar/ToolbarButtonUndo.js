/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.ToolbarButtonUndo=function(_b2c){draw2d.AbstractToolbarButton.call(this,_b2c,draw2d.I18N.TOOLBAR_BUTTON_UNDO);this.setEnable(false);};draw2d.ToolbarButtonUndo.prototype=new draw2d.AbstractToolbarButton();draw2d.ToolbarButtonUndo.prototype.execute=function(){this.getWorkflow().getCommandStack().undo();};draw2d.ToolbarButtonUndo.prototype.stackChanged=function(_b2d){this.setEnable(this.getWorkflow().getCommandStack().canUndo());this.setTooltip("Undo: "+this.getWorkflow().getCommandStack().getUndoLabel());};