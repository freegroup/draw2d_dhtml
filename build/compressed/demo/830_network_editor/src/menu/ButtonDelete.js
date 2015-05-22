/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.ButtonDelete=function(_3fa){draw2d.GenericButton.call(this,_3fa,16,16);};draw2d.ButtonDelete.prototype=new draw2d.GenericButton();draw2d.ButtonDelete.prototype.type="draw2d.ButtonDelete";draw2d.ButtonDelete.prototype.execute=function(){this.palette.workflow.getCommandStack().execute(new draw2d.CommandRemoveCloudNode(this.palette.workflow.getCurrentSelection().getModel()));draw2d.ToolGeneric.prototype.execute.call(this);};