/*
 * Copyright (c) 2010 Andreas Herz. All rights reserved.
 */


/**
 * @version 0.9.3
 * @author Andreas Herz
 * @constructor
 **/
draw2d.NicConnectionModel=function( /*:String*/ sourceNodeId, /*:String*/ targetNodeId, /*:String*/ id)
{
  draw2d.AbstractConnectionModel.call(this);

  /** @private */
  this.sourceNodeId = sourceNodeId;
  /** @private */
  this.sourcePort = "output";
  /** @private */
  this.targetNodeId = targetNodeId;
  /** @private */
  this.targetPort = "input";

   if(id!==undefined && id!==null)
   {
     this.id = id;
     draw2d.IdGenerator.reserve(this.id);
   }
   else
   {
     this.id = draw2d.IdGenerator.getNext();
   }
   // Verweis auf die ID des nic vom Server. Eine NicConnection gibt es im XML/Datenmodel
   // nicht als eigenes Element (siehe Mount). Es ist nur ein Verweis im Server. Dieses Element
   // wird dan künstlich angelegt udn erhält die ID des nic im Server um diesen zu aktualiseren.
   // Wird benötigt wenn eine Verbindung aus der GUI gelöscht wird.
   this.nicModel = null;
   
   // set some default vaules for the XML serialization
   this.dbid = "";
};


draw2d.NicConnectionModel.EVENT_SOURCE_CHANGED  = "source changed";
draw2d.NicConnectionModel.EVENT_TARGET_CHANGED  = "target changed";
draw2d.NicConnectionModel.EVENT_PROPERTY_CHANGED  = "property changed";

draw2d.NicConnectionModel.prototype = new draw2d.AbstractConnectionModel();
/** @private */
draw2d.NicConnectionModel.prototype.type="draw2d.NicConnectionModel";
draw2d.NicConnectionModel.prototype.tag="<unused>";



/**
 * Set the ip of the nic.
 *
 * @param {String} name The new name of the server.
 **/
draw2d.NicConnectionModel.prototype.setIpAddress=function(/*:String*/ ip)
{
   // delegate to the NIC-Model below the related server
   this.nicModel.setIpAddress(ip);
};

/**
 * Return the ip of the NIC .
 *
 * @type String the ip address of the nic.
 * @public
 **/
draw2d.NicConnectionModel.prototype.getIpAddress=function()
{
   return this.nicModel.getIpAddress();
};


/**
 *
 **/
draw2d.NicConnectionModel.prototype.setSourceModel=function(/*:draw2d.AbstractCloudNodeModel*/ model)
{
   var save1 = this.sourceNodeId;
   var save2 = this.sourcePort;

   this.sourceNodeId = model.getId();
   this.sourcePort = "output";

   if(save1===this.sourceNodeId && save2===this.sourcePort)
   {
      return;
   }

   // inform all listener, mainly the visual representation, about the changes.
   this.firePropertyChange(draw2d.MountModel.EVENT_SOURCE_CHANGED,null, model);
};

/**
 *
 * @type draw2d.AbstractCloudNodeModel
 **/
draw2d.NicConnectionModel.prototype.getSourceModel=function()
{
   return this.getNetworkCloudModel().getCloudNodeModel(this.sourceNodeId);
};


/**
 *
 **/
draw2d.NicConnectionModel.prototype.setTargetModel=function(/*:draw2d.AbstractCloudNodeModel*/ model)
{
   var save1 = this.targetNodeId;
   var save2 = this.targetPort;

   this.targetNodeId = model.getId();
   this.targetField = "input";

   if(save1 ===this.targetNodeId && save2===this.targetPort)
   {
      return;
   }

   // inform all listener, mainly the visual representation, about the changes.
   this.firePropertyChange(draw2d.MountModel.EVENT_TARGET_CHANGED,null, model);
};


/**
 *
 * @type draw2d.AbstractCloudNodeModel
 **/
draw2d.NicConnectionModel.prototype.getTargetModel=function()
{
   return this.getNetworkCloudModel().getCloudNodeModel(this.targetNodeId);
};


/**
 *
 * @type String
 **/
draw2d.NicConnectionModel.prototype.getSourcePortName=function()
{
   return this.sourcePort;
};

/**
 *
 * @type String
 **/
draw2d.NicConnectionModel.prototype.getTargetPortName=function()
{
   return this.targetPort;
};


/**
 * @type draw2d.VirtualNetworkCloudModel
 **/
draw2d.NicConnectionModel.prototype.getNetworkCloudModel=function()
{
   return this.getModelParent().getNetworkCloudModel();
};


/**
 * Returns all attributes which are relevant for serialization.
 * 
 * @return The list of persistend attribute.
 **/
draw2d.NicConnectionModel.prototype.getPersistentAttributes=function()
{
   var memento = {attributes:{}};


   return memento;
};
