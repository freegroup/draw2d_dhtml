/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.CommandMoveTable=function(model){draw2d.Command.call(this,"move model");this.model=model;this.oldX=model.getPosition().getX();this.oldY=model.getPosition().getY();};draw2d.CommandMoveTable.prototype=new draw2d.Command();draw2d.CommandMoveTable.prototype.type="draw2d.CommandMoveTable";draw2d.CommandMoveTable.prototype.setPosition=function(x,y){this.newX=x;this.newY=y;};draw2d.CommandMoveTable.prototype.canExecute=function(){return this.newX!=this.oldX||this.newY!=this.oldY;};draw2d.CommandMoveTable.prototype.execute=function(){this.redo();};draw2d.CommandMoveTable.prototype.undo=function(){this.model.setPosition(this.oldX,this.oldY);};draw2d.CommandMoveTable.prototype.redo=function(){this.model.setPosition(this.newX,this.newY);};