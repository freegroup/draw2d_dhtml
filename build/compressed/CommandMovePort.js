/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.CommandMovePort=function(port){draw2d.Command.call(this,"move port");this.port=port;};draw2d.CommandMovePort.prototype=new draw2d.Command();draw2d.CommandMovePort.prototype.type="draw2d.CommandMovePort";draw2d.CommandMovePort.prototype.execute=function(){this.port.setAlpha(1);this.port.setPosition(this.port.originX,this.port.originY);this.port.parentNode.workflow.hideConnectionLine();};draw2d.CommandMovePort.prototype.undo=function(){};draw2d.CommandMovePort.prototype.redo=function(){};draw2d.CommandMovePort.prototype.setPosition=function(x,y){};