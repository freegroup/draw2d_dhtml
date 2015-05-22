/*
 * Copyright (c) 2010 Andreas Herz. All rights reserved.
 */


/**
 * @version 0.9.3
 * @author Andreas Herz
 * @constructor
 **/
draw2d.CommandMoveCloudNode=function(/*:draw2d.FunnelModel*/ model)
{
   draw2d.Command.call(this,"Move Element");
   this.model = model;
   this.oldX  = model.getPosition().getX();
   this.oldY  = model.getPosition().getY();
};

draw2d.CommandMoveCloudNode.prototype = new draw2d.Command();
/** @private **/
draw2d.CommandMoveCloudNode.prototype.type="draw2d.CommandMoveCloudNode";


/**
 * Execute the command the first time
 * 
 **/
draw2d.CommandMoveCloudNode.prototype.setPosition=function(/*:int*/ x, /*:int*/ y)
{
   this.newX = x;
   this.newY = y;
};

/**
 * Returns [true] if the command can be execute and the execution of the
 * command modify the model. A CommandMove with [startX,startX] == [endX,endY] should
 * return false. <br>
 * the execution of the Command doesn't modify the model.
 *
 * @type boolean
 **/
draw2d.CommandMoveCloudNode.prototype.canExecute=function()
{
  // return false if we doesn't modify the model => NOP Command
  return this.newX!==this.oldX || this.newY!==this.oldY;
};

/**
 * Execute the command the first time
 * 
 **/
draw2d.CommandMoveCloudNode.prototype.execute=function()
{
   this.redo();
};

/**
 * Undo the command
 *
 **/
draw2d.CommandMoveCloudNode.prototype.undo=function()
{
   this.model.setPosition(this.oldX, this.oldY);
};

/** Redo the command after the user has undo this command
 *
 **/
draw2d.CommandMoveCloudNode.prototype.redo=function()
{
   this.model.setPosition(this.newX, this.newY);
};
