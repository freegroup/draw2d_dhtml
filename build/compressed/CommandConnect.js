/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.CommandConnect=function(_67f,_680,_681){draw2d.Command.call(this,"create connection");this.workflow=_67f;this.source=_680;this.target=_681;this.connection=null;};draw2d.CommandConnect.prototype=new draw2d.Command();draw2d.CommandConnect.prototype.type="draw2d.CommandConnect";draw2d.CommandConnect.prototype.setConnection=function(_682){this.connection=_682;};draw2d.CommandConnect.prototype.execute=function(){if(this.connection===null){this.connection=new draw2d.Connection();}this.connection.setSource(this.source);this.connection.setTarget(this.target);this.workflow.addFigure(this.connection);};draw2d.CommandConnect.prototype.redo=function(){this.workflow.addFigure(this.connection);this.connection.reconnect();};draw2d.CommandConnect.prototype.undo=function(){this.workflow.removeFigure(this.connection);};