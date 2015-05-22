/*
 * Copyright (c) 2010 Andreas Herz. All rights reserved.
 */

/**
 * @version 0.9.3
 * @author Andreas Herz
 * @constructor
 **/
draw2d.CommandDisconnectNic=function(/*:draw2d.NicConnectionModel*/ connection)
{
   draw2d.Command.call(this,"Disconnect Switch");
   this.connection = connection;
   this.source = this.connection.getModelParent();
};

draw2d.CommandDisconnectNic.prototype = new draw2d.Command();
/** @private **/
draw2d.CommandDisconnectNic.prototype.type="draw2d.CommandDisconnectNic";


/**
 * Execute the command the first time
 * 
 **/
draw2d.CommandDisconnectNic.prototype.execute=function()
{
	this.redo();
};

/**
 * Redo the command after the user has undo this command.
 *
 **/
draw2d.CommandDisconnectNic.prototype.redo=function()
{
  this.source.removeConnectionModel(this.connection);
  this.source.getNicsModel().removeNicModel(this.connection.nicModel);
};

/** 
 * Undo the command.
 *
 **/
draw2d.CommandDisconnectNic.prototype.undo=function()
{
  this.source.addConnectionModel(this.connection);
  this.source.getNicsModel().addNicModel(this.connection.nicModel);
};
