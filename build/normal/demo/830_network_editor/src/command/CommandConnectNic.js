/*
 * Copyright (c) 2010 Andreas Herz. All rights reserved.
 */

/**
 * @version 0.9.3
 * @author Andreas Herz
 * @constructor
 **/
draw2d.CommandConnectNic=function(/*:draw2d.ServerModel*/ source, /*:draw2d.StorageModel*/target)
{
   draw2d.Command.call(this,"Connect Switch");
   if(source===null || target===null){
      throw "Source and target must be set to create a new  draw2d.CommandConnectNodes object (draw2d.CommandConnectNic.constructor)";
   }
   
   if(!(source instanceof draw2d.ServerModel)){
       throw "Source must be type of class draw2d.ServerModel. (draw2d.CommandConnectNic.constructor)";
   }
       
   if(!(target instanceof draw2d.SwitchModel)){
       throw "Target must be type of class draw2d.SwitchModel. (draw2d.CommandConnectNic.constructor)";
   }

   this.source   = source;
   this.target   = target;
   this.model = null;
};

draw2d.CommandConnectNic.prototype = new draw2d.Command();
/** @private **/
draw2d.CommandConnectNic.prototype.type="draw2d.CommandConnectNic";

/**
 * Init the Command with my own implementation of a connection
 *
 **/

draw2d.CommandConnectNic.prototype.setConnection=function(/*:draw2d.Connection*/ connection)
{
   this.connection=connection;
};

/**
 * Execute the command the first time
 * 
 **/
draw2d.CommandConnectNic.prototype.execute=function()
{
   this.redo();
};

/**
 * Redo the command after the user has undo this command.
 *
 **/
draw2d.CommandConnectNic.prototype.redo=function()
{
  if(this.model===null)
  {
     this.model = new draw2d.NicConnectionModel(this.source.getId(), this.target.getId());
     var nic = new draw2d.NicModel();
     nic.setServerReferenceModel(new draw2d.ServerReferenceModel(this.source.getId()));
     nic.setSwitchReferenceModel(new draw2d.SwitchReferenceModel(this.target.getId()));
     this.model.nicModel= nic;
  }

  this.source.getNicsModel().addNicModel(this.model.nicModel);
  this.source.addConnectionModel(this.model);
};

/** 
 * Undo the command.
 *
 **/
draw2d.CommandConnectNic.prototype.undo=function()
{
   this.source.removeConnectionModel(this.model);
   this.source.getNicsModel().removeNicModel(this.model.nicModel);
};
