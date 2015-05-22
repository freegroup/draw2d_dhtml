/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.CommandAddServer=function(_3c6,x,y){draw2d.Command.call(this,"Add Server");this.model=new draw2d.ServerModel();this.network=_3c6;this.x=x;this.y=y;};draw2d.CommandAddServer.prototype=new draw2d.Command();draw2d.CommandAddServer.prototype.type="draw2d.CommandAddServer";draw2d.CommandAddServer.prototype.canExecute=function(){return true;};draw2d.CommandAddServer.prototype.execute=function(){this.redo();};draw2d.CommandAddServer.prototype.undo=function(){this.network.removeCloudNodeModel(this.model);};draw2d.CommandAddServer.prototype.redo=function(){this.network.addCloudNodeModel(this.model);this.model.setPosition(this.x,this.y);};