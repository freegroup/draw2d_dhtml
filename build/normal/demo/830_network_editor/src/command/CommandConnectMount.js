/*
 * Copyright (c) 2010 Andreas Herz. All rights reserved.
 */


/**
 * @version 0.9.3
 * @author Andreas Herz
 * @constructor
 **/
draw2d.CommandConnectMount=function(/*:draw2d.StorageModel*/ source, /*:draw2d.ServerModel*/target)
{
   draw2d.Command.call(this,"Connect Storage");
   this.source   = source;
   this.target   = target;
   this.model = null;
   if(this.source===null || this.target===null){
      throw "Source and target must be set to create a new  draw2d.CommandConnectNodes object";
   }
};

draw2d.CommandConnectMount.prototype = new draw2d.Command();
/** @private **/
draw2d.CommandConnectMount.prototype.type="draw2d.CommandConnectMount";

/**
 * Init the Command with my own implementation of a connection
 *
 **/
draw2d.CommandConnectMount.prototype.setConnection=function(/*:draw2d.Connection*/ connection)
{
   this.connection=connection;
};

/**
 * Execute the command the first time
 * 
 **/
draw2d.CommandConnectMount.prototype.execute=function()
{
   this.redo();
};

/**
 * Redo the command after the user has undo this command.
 *
 **/
draw2d.CommandConnectMount.prototype.redo=function()
{
   if(this.model===null){
      this.model= new draw2d.MountModel(this.source.getId(), this.target.getId());
   }
      
   this.source.addConnectionModel(this.model);
};

/** 
 * Undo the command.
 *
 **/
draw2d.CommandConnectMount.prototype.undo=function()
{
   this.source.removeConnectionModel(this.model);
};
