/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.CommandMoveCloudNode=function(_cb3){draw2d.Command.call(this,"Move Element");this.model=_cb3;this.oldX=_cb3.getPosition().getX();this.oldY=_cb3.getPosition().getY();};draw2d.CommandMoveCloudNode.prototype=new draw2d.Command();draw2d.CommandMoveCloudNode.prototype.type="draw2d.CommandMoveCloudNode";draw2d.CommandMoveCloudNode.prototype.setPosition=function(x,y){this.newX=x;this.newY=y;};draw2d.CommandMoveCloudNode.prototype.canExecute=function(){return this.newX!==this.oldX||this.newY!==this.oldY;};draw2d.CommandMoveCloudNode.prototype.execute=function(){this.redo();};draw2d.CommandMoveCloudNode.prototype.undo=function(){this.model.setPosition(this.oldX,this.oldY);};draw2d.CommandMoveCloudNode.prototype.redo=function(){this.model.setPosition(this.newX,this.newY);};