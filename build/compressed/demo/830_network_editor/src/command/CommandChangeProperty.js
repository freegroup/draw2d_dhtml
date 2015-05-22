/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.CommandChangeProperty=function(view,func,_1b1,_1b2){draw2d.Command.call(this,"Change Property");this.func=func;this.oldValue=_1b1;this.newValue=_1b2;this.view=view;this.objToSelect=this.view.getCurrentSelection();};draw2d.CommandChangeProperty.prototype=new draw2d.Command();draw2d.CommandChangeProperty.prototype.type="draw2d.CommandChangeProperty";draw2d.CommandChangeProperty.prototype.canExecute=function(){return true;};draw2d.CommandChangeProperty.prototype.execute=function(){this.func(this.newValue);};draw2d.CommandChangeProperty.prototype.redo=function(){this.func(this.newValue);this.view.setCurrentSelection(this.objToSelect);};draw2d.CommandChangeProperty.prototype.undo=function(){this.func(this.oldValue);this.view.setCurrentSelection(this.objToSelect);};