/*
 * Copyright (c) 2010 Andreas Herz. All rights reserved.
 */

/**
 * @version 0.9.3
 * @author Andreas Herz
 * @constructor
 **/
draw2d.CommandDisconnectMount=function(/*:draw2d.MountModel*/ connection)
{
   draw2d.Command.call(this,"Disconnect Storage");
   
   this.connection = connection;
   this.source = this.connection.getModelParent();
};

draw2d.CommandDisconnectMount.prototype = new draw2d.Command();
/** @private **/
draw2d.CommandDisconnectMount.prototype.type="draw2d.CommandDisconnectMount";


/**
 * Execute the command the first time
 * 
 **/
draw2d.CommandDisconnectMount.prototype.execute=function()
{
   this.redo();
};

/**
 * Redo the command after the user has undo this command.
 *
 **/
draw2d.CommandDisconnectMount.prototype.redo=function()
{
  this.source.removeConnectionModel(this.connection);
};

/** 
 * Undo the command.
 *
 **/
draw2d.CommandDisconnectMount.prototype.undo=function()
{
   this.source.addConnectionModel(this.connection);
};
