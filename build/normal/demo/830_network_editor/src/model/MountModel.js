/*
 * Copyright (c) 2010 Andreas Herz. All rights reserved.
 */


/**
 * @version 0.9.3
 * @author Andreas Herz
 * @constructor
 **/
draw2d.MountModel=function( /*:String*/ sourceNodeId, /*:String*/ targetNodeId, /*:String*/ id)
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
   
   // set some default vaules for the XML serialization
   this.dbid = "";
   this.order= draw2d.Configuration.DEFAULT_MOUNT_ORDER;
};


draw2d.MountModel.EVENT_SOURCE_CHANGED  = "source changed";
draw2d.MountModel.EVENT_TARGET_CHANGED  = "target changed";
draw2d.MountModel.EVENT_PROPERTY_CHANGED  = "property changed";

draw2d.MountModel.prototype = new draw2d.AbstractConnectionModel();
/** @private */
draw2d.MountModel.prototype.type="draw2d.MountModel";
draw2d.MountModel.prototype.tag="mount";


/**
 * Set the name of the Server node.
 *
 * @param {String} name The new name of the server.
 **/
draw2d.MountModel.prototype.setOrder=function(/*:String*/ order)
{
   var save = this.order;
   if(save === order)
   {
      return;
   }
   this.order = order;
   
   // inform all listener, mainly the visual representation, about the changes.
   this.firePropertyChange(draw2d.MountModel.EVENT_PROPERTY_CHANGED,save, this.order);
};

/**
 * Return the name of the server.
 *
 * @type String the name of the server.
 * @public
 **/
draw2d.MountModel.prototype.getOrder=function()
{
   return this.order;
};


/**
 *
 **/
draw2d.MountModel.prototype.setSourceModel=function(/*:draw2d.AbstractCloudNodeModel*/ model)
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
draw2d.MountModel.prototype.getSourceModel=function()
{
   return this.getNetworkCloudModel().getCloudNodeModel(this.sourceNodeId);
};


/**
 *
 **/
draw2d.MountModel.prototype.setTargetModel=function(/*:draw2d.AbstractCloudNodeModel*/ model)
{
   var save1 = this.targetNodeId;
   var save2 = this.targetPort;

   this.targetNodeId = model.getId();
   this.targetField = "input";

   if(save1 ==this.targetNodeId && save2==this.targetPort)
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
draw2d.MountModel.prototype.getTargetModel=function()
{
   return this.getNetworkCloudModel().getCloudNodeModel(this.targetNodeId);
};


/**
 *
 * @type String
 **/
draw2d.MountModel.prototype.getSourcePortName=function()
{
   return this.sourcePort;
};

/**
 *
 * @type String
 **/
draw2d.MountModel.prototype.getTargetPortName=function()
{
   return this.targetPort;
};


/**
 * @type draw2d.VirtualNetworkCloudModel
 **/
draw2d.MountModel.prototype.getNetworkCloudModel=function()
{
   return this.getModelParent().getNetworkCloudModel();
};


/**
 * Returns all attributes which are relevant for serialization.
 * 
 * @return The list of persistend attribute.
 **/
draw2d.MountModel.prototype.getPersistentAttributes=function()
{
   var memento = {attributes:{}};

   // enrich the base attributes with the class/instance specific properties
   memento.attributes.id = this.id;

   memento.storage = this.getSourceModel().createReferenceModel();
   memento.server = this.getTargetModel().createReferenceModel();
   
   if(this.order.length>0)
   {
  	 memento.order = this.order;
   }
   
   if(this.dbid.length>0)
   {
  	 memento.dbid = this.dbid;
   }
 
   return memento;
};
