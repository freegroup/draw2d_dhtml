/*
 * Copyright (c) 2010 Andreas Herz. All rights reserved.
 */


/**
 * @version 0.9.3
 * @author Andreas Herz
 * @constructor
 **/
draw2d.CommandReconnectMount=function(/*:draw2d.MountModel*/ con)
{
   draw2d.Command.call(this,"Reconnect Storage");
   this.con = con;
   this.oldSourceModel = con.getSourceModel();
   this.oldTargetModel = con.getTargetModel();
};

draw2d.CommandReconnectMount.prototype = new draw2d.Command();
/** @private **/
draw2d.CommandReconnectMount.prototype.type="draw2d.CommandReconnectMount";

/**
 * Returns [true] if the command can be execute and the execution of the
 * command modify the model. A CommandMove with [startX,startX] == [endX,endY] should
 * return false. <br>
 * the execution of the Command doesn't modify the model.
 *
 * @type boolean
 **/
draw2d.CommandReconnectMount.prototype.canExecute=function()
{
  // return false if we doesn't modify the model => NOP Command
  return true;
};

/**
 * called by the framework
 **/
draw2d.CommandReconnectMount.prototype.setNewPorts=function(/*:draw2d.Port*/ source, /*:draw2d.Port*/ target)
{
  this.newSourceModel = source.getParent().getModel();
  this.newTargetModel = target.getParent().getModel();
};

/**
 * Execute the command the first time
 * 
 **/
draw2d.CommandReconnectMount.prototype.execute=function()
{
   this.redo();
};

/**
 * Execute the command the first time
 * 
 **/
draw2d.CommandReconnectMount.prototype.cancel=function()
{
  this.con.setSourceModel(this.oldSourceModel);
  this.con.setTargetModel(this.oldTargetModel);
};

/**
 * Undo the command
 *
 **/
draw2d.CommandReconnectMount.prototype.undo=function()
{
  this.con.setSourceModel(this.oldSourceModel);
  this.con.setTargetModel(this.oldTargetModel);
};

/** 
 * Redo the command after the user has undo this command
 *
 **/
draw2d.CommandReconnectMount.prototype.redo=function()
{
  this.con.setSourceModel(this.newSourceModel);
  this.con.setTargetModel(this.newTargetModel);
};
