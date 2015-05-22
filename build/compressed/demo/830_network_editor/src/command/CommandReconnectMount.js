/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.CommandReconnectMount=function(con){draw2d.Command.call(this,"Reconnect Storage");this.con=con;this.oldSourceModel=con.getSourceModel();this.oldTargetModel=con.getTargetModel();};draw2d.CommandReconnectMount.prototype=new draw2d.Command();draw2d.CommandReconnectMount.prototype.type="draw2d.CommandReconnectMount";draw2d.CommandReconnectMount.prototype.canExecute=function(){return true;};draw2d.CommandReconnectMount.prototype.setNewPorts=function(_9e7,_9e8){this.newSourceModel=_9e7.getParent().getModel();this.newTargetModel=_9e8.getParent().getModel();};draw2d.CommandReconnectMount.prototype.execute=function(){this.redo();};draw2d.CommandReconnectMount.prototype.cancel=function(){this.con.setSourceModel(this.oldSourceModel);this.con.setTargetModel(this.oldTargetModel);};draw2d.CommandReconnectMount.prototype.undo=function(){this.con.setSourceModel(this.oldSourceModel);this.con.setTargetModel(this.oldTargetModel);};draw2d.CommandReconnectMount.prototype.redo=function(){this.con.setSourceModel(this.newSourceModel);this.con.setTargetModel(this.newTargetModel);};