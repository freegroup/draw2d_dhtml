/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.CommandDisconnectMount=function(_1219){draw2d.Command.call(this,"Disconnect Storage");this.connection=_1219;this.source=this.connection.getModelParent();};draw2d.CommandDisconnectMount.prototype=new draw2d.Command();draw2d.CommandDisconnectMount.prototype.type="draw2d.CommandDisconnectMount";draw2d.CommandDisconnectMount.prototype.execute=function(){this.redo();};draw2d.CommandDisconnectMount.prototype.redo=function(){this.source.removeConnectionModel(this.connection);};draw2d.CommandDisconnectMount.prototype.undo=function(){this.source.addConnectionModel(this.connection);};