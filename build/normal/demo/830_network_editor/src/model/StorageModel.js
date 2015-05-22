/*
 * Copyright (c) 2010 Andreas Herz. All rights reserved.
 */


/**
 * @version 0.9.3
 * @author Andreas Herz
 * @constructor
 **/
draw2d.StorageModel=function(/*:String*/ id)
{
   draw2d.AbstractCloudNodeModel.call(this, id);
   
   // set some default values. This will be overriden during deserialization
   this.dbid = "";
   this["storage-in-mb"] = draw2d.Configuration.DEFAULT_STORAGE_MB;
   this.qualifier = draw2d.Configuration.DEFAULT_STORAGE_QUALIFIER;
   this.representation = new draw2d.RepresentationModel(42,42);
};

draw2d.StorageModel.prototype = new draw2d.AbstractCloudNodeModel();
/** @private **/
draw2d.StorageModel.prototype.type="draw2d.StorageModel";
draw2d.StorageModel.prototype.tag="storage";

draw2d.StorageModel.QUALIFIER= new draw2d.ArrayList();
draw2d.StorageModel.QUALIFIER.add("ultra-fast");
draw2d.StorageModel.QUALIFIER.add("fast");
draw2d.StorageModel.QUALIFIER.add("normal");
draw2d.StorageModel.QUALIFIER.add("slow");
draw2d.StorageModel.QUALIFIER.add("dead-slow");
draw2d.StorageModel.QUALIFIER.add("i-dont-care");
            
draw2d.StorageModel.prototype.createReferenceModel=function()
{
   return new draw2d.StorageReferenceModel(this.id);
};

/**
 * Set the position attribute of the model. This will enforce a redraw of the corresponding
 * figure (if existing).
 *
 * @param {int} xPos The x coordinate for the model
 * @param {int} yPos The y coordinate for the model
 **/
draw2d.StorageModel.prototype.setPosition=function(/*:int*/ xPos , /*:int*/ yPos )
{
  // Don't move Elements outside the left or top canvas border
  // @since 0.9.1
  xPos = Math.max(0,xPos);
  yPos = Math.max(0,yPos);
  
  var save = this.representation;
  if(save.x===xPos && save.y===yPos)
  {
      return;
  }

  this.representation = new draw2d.RepresentationModel(xPos,yPos);

  this.firePropertyChange(draw2d.AbstractCloudNodeModel.EVENT_POSITION_CHANGED,save, this.representation);
};



/**
 * Return the x/y position of the table in the database graphical layout.
 *
 * @type draw2d.Point
 **/
draw2d.StorageModel.prototype.getPosition=function()
{
   return new draw2d.Point(parseInt(this.representation.x,10),parseInt(this.representation.y,10));
};


/**
 * Return the storage of the element. Unit is MB
 *
 * @param {String} storage The new storage in MB
 **/
draw2d.StorageModel.prototype.setStorage=function(/*:String*/ storage)
{
   storage = ""+parseInt(storage,10);
   
   var save = this["storage-in-mb"];
   if(save === storage)
   {
      return;
   }
   this["storage-in-mb"] = storage;
   
   // inform all listener, mainly the visual representation, about the changes.
   this.firePropertyChange(draw2d.AbstractCloudNodeModel.EVENT_PROPERTY_CHANGED,save, storage);
};

/**
 * Return the storage of the element.
 *
 * @type String the storage in MB
 * @public
 **/
draw2d.StorageModel.prototype.getStorage=function()
{
   return this["storage-in-mb"];
};


/**
 * Set the storage quality/performance
 *
 * @param {String} qualifier of the storage
 **/
draw2d.StorageModel.prototype.setQualifier=function(/*:String*/ qualifier)
{
   var save = this.qualifier;
   if(save === qualifier)
   {
      return;
   }
      
   // check for invalid qualifier
   if(draw2d.StorageModel.QUALIFIER.indexOf(qualifier)===-1)
   {
      return;
   }
      
   this.qualifier = qualifier;
   
   // inform all listener, mainly the visual representation, about the changes.
   this.firePropertyChange(draw2d.AbstractCloudNodeModel.EVENT_PROPERTY_CHANGED,save, qualifier);
};

/**
 * Return the quality of the storage
 *
 * @type String the qualifier of the storage
 * @public
 **/
draw2d.StorageModel.prototype.getQualifier=function()
{
   return this.qualifier;
};

/**
 * Returns all attributes which are relevant for serialization.
 * 
 * @return The list of persistent attribute.
 **/
draw2d.StorageModel.prototype.getPersistentAttributes=function()
{
   var memento = draw2d.AbstractCloudNodeModel.prototype.getPersistentAttributes.call(this);

   // enrich the base attributes with the class/instance specific properties
   memento["storage-in-mb"]= this["storage-in-mb"];
   memento.representation = this.representation;
   
   memento.attributes.id= this.id;
   memento.attributes.qualifier = this.qualifier;
   
   return memento;
};
