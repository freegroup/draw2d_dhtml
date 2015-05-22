/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.CommandAddStorage=function(_1da,x,y){draw2d.Command.call(this,"Add Storage");this.model=new draw2d.StorageModel();this.network=_1da;this.x=x;this.y=y;};draw2d.CommandAddStorage.prototype=new draw2d.Command();draw2d.CommandAddStorage.prototype.type="draw2d.CommandAddStorage";draw2d.CommandAddStorage.prototype.canExecute=function(){return true;};draw2d.CommandAddStorage.prototype.execute=function(){this.redo();};draw2d.CommandAddStorage.prototype.undo=function(){this.network.removeCloudNodeModel(this.model);};draw2d.CommandAddStorage.prototype.redo=function(){this.network.addCloudNodeModel(this.model);this.model.setPosition(this.x,this.y);};