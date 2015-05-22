/*
 * Copyright (c) 2010 Andreas Herz. All rights reserved.
 */


/**
 * Base model class for all XML elements. Each XML node will be mapped to an 
 * AbstractCloudNodeModel object. Done by the ModelXMLDeserializer.
 *
 * @version 0.9.3
 * @author Andreas Herz
 * @constructor
 * @see draw2d.ModelXMLDeserializer#fromXML
 **/
draw2d.AbstractCloudNodeModel=function(/*:String*/ id)
{
   draw2d.AbstractObjectModel.call(this);

   if(id!==undefined && id!==null)
   {
     this.id = id;
     draw2d.IdGenerator.reserve(this.id);
   }
   else
   {
     this.id = draw2d.IdGenerator.getNext();
   }
   
   this.connections = new draw2d.ArrayList();
};

draw2d.AbstractCloudNodeModel.EVENT_PROPERTY_CHANGED  = "property changed";
draw2d.AbstractCloudNodeModel.EVENT_POSITION_CHANGED  = "position changed";

/** @private **/
draw2d.AbstractCloudNodeModel.prototype = new draw2d.AbstractObjectModel();
/** @private **/
draw2d.AbstractCloudNodeModel.prototype.type="draw2d.AbstractCloudNodeModel";


/**
 * Set the new id of the cloude node element.
 *
 * @param {String} if The new id of the model element
 **/
draw2d.AbstractCloudNodeModel.prototype.setId=function(/*:String*/ id )
{
  var save = this.id;
  this.id = id;

  this.firePropertyChange(draw2d.AbstractCloudNodeModel.EVENT_ID_CHANGED,save, this.id);
};

/**
 * Return the id of the cloud node.
 * 
 * @type String
 **/
draw2d.AbstractCloudNodeModel.prototype.getId=function()
{
   return this.id;
};


/**
 * Return the root  element of the model.
 *
 * @type draw2d.ConverterModel
 **/
draw2d.AbstractCloudNodeModel.prototype.getNetworkCloudModel=function()
{
   return this.getModelParent().getNetworkCloudModel();
};


/**
 * Return all connections from the record source model.
 *
 * @type draw2d.ArrayList
 **/
draw2d.AbstractCloudNodeModel.prototype.getConnectionModels=function()
{
  return this.connections;
};


/**
 * Add a connection between two columns of two different tables
 *
 * @param {draw2d.AbstractConnectionModel}
 **/
draw2d.AbstractCloudNodeModel.prototype.addConnectionModel=function(/*:draw2d.AbstractConnectionModel*/ connection)
{
  if(!(connection instanceof draw2d.AbstractConnectionModel))
  {
    throw "Invalid parameter type in [AbstractCloudNodeModel.prototype.addConnectionModel]";
  }

  if(this.connections.indexOf(connection)===-1)
  {
    this.connections.add(connection);
    connection.setModelParent(this);
    // inform all listener, mainly the visual representation, about the changes.
    this.firePropertyChange(draw2d.AbstractObjectModel.EVENT_CONNECTION_ADDED,null,connection);
  }
};

/**
 * Remove a connection between two columns of two different tables
 *
 * @param {draw2d.MountModel}
 **/
draw2d.AbstractCloudNodeModel.prototype.removeConnectionModel=function(/*:draw2d.MountModel*/ connection)
{
  if(!(connection instanceof draw2d.AbstractConnectionModel))
  {
    throw "Invalid parameter type in [AbstractCloudNodeModel.prototype.removeConnectionModel]";
  }

  if(this.connections.remove(connection)!==null)
  {
    connection.setModelParent(null);
    // inform all listener, mainly the visual representation, about the changes.
    this.firePropertyChange(draw2d.AbstractObjectModel.EVENT_CONNECTION_REMOVED,connection,null);
  }
};


/**
 * Returns all attributes which are relevatn for serialization.
 * 
 * @return The list of persistend attribute.
 * @since 0.9.15
 **/
draw2d.AbstractCloudNodeModel.prototype.getPersistentAttributes=function()
{
   var memento = {attributes:{}};
   
   // enrich the base attributes with the class/instance specific properties

   return memento;
};

