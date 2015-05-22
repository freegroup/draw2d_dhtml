/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.CommandRemoveImage=function(view,_566,_567){draw2d.Command.call(this,"Remove Image from Server");this.server=_566;this.image=_567;this.view=view;this.objToSelect=this.view.getCurrentSelection();};draw2d.CommandRemoveImage.prototype=new draw2d.Command();draw2d.CommandRemoveImage.prototype.type="draw2d.CommandRemoveImage";draw2d.CommandRemoveImage.prototype.canExecute=function(){return true;};draw2d.CommandRemoveImage.prototype.execute=function(){this.redo();};draw2d.CommandRemoveImage.prototype.redo=function(){this.server.removeImageModel(this.image);this.view.setCurrentSelection(null);this.view.setCurrentSelection(this.objToSelect);};draw2d.CommandRemoveImage.prototype.undo=function(){this.server.addImageModel(this.image);this.view.setCurrentSelection(null);this.view.setCurrentSelection(this.objToSelect);};