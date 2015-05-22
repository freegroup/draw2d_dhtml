/*
 * Copyright (c) 2010 Andreas Herz. All rights reserved.
 */


/**
 * @version 0.9.3
 * @author Andreas Herz
 * @constructor
 **/
draw2d.CommandAddStorage=function(/*:draw2d.VirtualNetworkCloudModel*/ network, /*:int*/ x, /*:int*/ y)
{
   draw2d.Command.call(this,"Add Storage");
   this.model = new draw2d.StorageModel();

   this.network = network;
   this.x = x;
   this.y = y;
};

draw2d.CommandAddStorage.prototype = new draw2d.Command();
/** @private **/
draw2d.CommandAddStorage.prototype.type="draw2d.CommandAddStorage";



/**
 * Returns [true] if the command can be execute and the execution of the
 * command modify the model. A CommandMove with [startX,startX] == [endX,endY] should
 * return false. <br>
 * the execution of the Command doesn't modify the model.
 *
 * @type boolean
 **/
draw2d.CommandAddStorage.prototype.canExecute=function()
{
  return true;
};

/**
 * Execute the command the first time
 * 
 **/
draw2d.CommandAddStorage.prototype.execute=function()
{
   this.redo();
};

/**
 * Undo the command
 *
 **/
draw2d.CommandAddStorage.prototype.undo=function()
{
   this.network.removeCloudNodeModel(this.model);
};

/** Redo the command after the user has undo this command
 *
 **/
draw2d.CommandAddStorage.prototype.redo=function()
{
    this.network.addCloudNodeModel(this.model);
    this.model.setPosition(this.x,this.y);
};
