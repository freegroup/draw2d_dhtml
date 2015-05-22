/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.CommandAddImage=function(view,_65b,_65c){draw2d.Command.call(this,"Add Image to Server");this.server=_65b;this.image=_65c;this.view=view;this.objToSelect=this.view.getCurrentSelection();};draw2d.CommandAddImage.prototype=new draw2d.Command();draw2d.CommandAddImage.prototype.type="draw2d.CommandAddImage";draw2d.CommandAddImage.prototype.canExecute=function(){return true;};draw2d.CommandAddImage.prototype.execute=function(){this.redo();};draw2d.CommandAddImage.prototype.undo=function(){this.server.removeImageModel(this.image);this.view.setCurrentSelection(null);this.view.setCurrentSelection(this.objToSelect);};draw2d.CommandAddImage.prototype.redo=function(){this.server.addImageModel(this.image);this.view.setCurrentSelection(null);this.view.setCurrentSelection(this.objToSelect);};