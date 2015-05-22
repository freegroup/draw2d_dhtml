/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.ToolbarButtonRedo=function(_317){draw2d.AbstractToolbarButton.call(this,_317,draw2d.I18N.TOOLBAR_BUTTON_REDO);this.setEnable(false);};draw2d.ToolbarButtonRedo.prototype=new draw2d.AbstractToolbarButton();draw2d.ToolbarButtonRedo.prototype.execute=function(){this.getWorkflow().getCommandStack().redo();};draw2d.ToolbarButtonRedo.prototype.stackChanged=function(_318){this.setEnable(this.getWorkflow().getCommandStack().canRedo());this.setTooltip("Redo: "+this.getWorkflow().getCommandStack().getRedoLabel());};