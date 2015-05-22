/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.CommandDisconnectNic=function(_166){draw2d.Command.call(this,"Disconnect Switch");this.connection=_166;this.source=this.connection.getModelParent();};draw2d.CommandDisconnectNic.prototype=new draw2d.Command();draw2d.CommandDisconnectNic.prototype.type="draw2d.CommandDisconnectNic";draw2d.CommandDisconnectNic.prototype.execute=function(){this.redo();};draw2d.CommandDisconnectNic.prototype.redo=function(){this.source.removeConnectionModel(this.connection);this.source.getNicsModel().removeNicModel(this.connection.nicModel);};draw2d.CommandDisconnectNic.prototype.undo=function(){this.source.addConnectionModel(this.connection);this.source.getNicsModel().addNicModel(this.connection.nicModel);};