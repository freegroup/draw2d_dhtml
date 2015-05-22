/*
 * Copyright (c) 2010 Andreas Herz. All rights reserved.
 */

/**
 * @version 0.9.3
 * @author Andreas Herz
 * @constructor
 **/
draw2d.ServerModel=function(/*:String*/ id)
{
   draw2d.AbstractCloudNodeModel.call(this, id);
   // set some default values. Will be overriden during deserialization
   this.dbid = "";
   this.name = draw2d.Configuration.DEFAULT_SERVER_NAME;
   this["cpu-units"] = draw2d.Configuration.DEFAULT_SERVER_CPUS;
   this["ram-in-mb"] = draw2d.Configuration.DEFAULT_SERVER_RAM;
   
   this.representation = new draw2d.RepresentationModel(42,42);
   this.images = new draw2d.ImagesModel();
   this.nics = new draw2d.NicsModel();
};

draw2d.ServerModel.prototype = new draw2d.AbstractCloudNodeModel();
/** @private **/
draw2d.ServerModel.prototype.type="draw2d.ServerModel";
draw2d.ServerModel.prototype.tag="server";



draw2d.ServerModel.prototype.createReferenceModel=function()
{
   return new draw2d.ServerReferenceModel(this.id);
};



/**
 * Set the position attribute of the model. This will enforce a redraw of the corresponding
 * figure (if existing).
 *
 * @param {int} xPos The x coordinate for the model
 * @param {int} yPos The y coordinate for the model
 **/
draw2d.ServerModel.prototype.setPosition=function(/*:int*/ xPos , /*:int*/ yPos )
{
  // Don't move ELements outside the left or top canvas border
  //
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
draw2d.ServerModel.prototype.getPosition=function()
{
   return new draw2d.Point(parseInt(this.representation.x,10),parseInt(this.representation.y,10));
};

/**
 * Set the name of the Server node.
 *
 * @param {String} name The new name of the server.
 **/
draw2d.ServerModel.prototype.setName=function(/*:String*/ name)
{
   var save = this["name"];
   if(save === name)
   {
      return;   
   }
   
   this["name"] = name;
   
   // inform all listener, mainly the visual representation, about the changes.
   this.firePropertyChange(draw2d.AbstractCloudNodeModel.EVENT_PROPERTY_CHANGED,save, name);
};

/**
 * Return the name of the server.
 *
 * @type String the name of the server.
 * @public
 **/
draw2d.ServerModel.prototype.getName=function()
{
   return this["name"];
};


/**
 * Return the Nic container model object.
 *
 * @type NicsModel the container object.
 * @public
 **/
draw2d.ServerModel.prototype.getNicsModel=function()
{
   return this.nics;
};

/**
 * Set CPU count of the server
 *
 * @param {String} cpu The count of cpu inside the server
 **/
draw2d.ServerModel.prototype.setCpuUnits=function(/*:String*/ cpu)
{
   var save = this["cpu-units"];
   if(save === cpu)
   {
      return;
   }
   this["cpu-units"] = cpu;
   
   // inform all listener, mainly the visual representation, about the changes.
   this.firePropertyChange(draw2d.AbstractCloudNodeModel.EVENT_PROPERTY_CHANGED,save, cpu);
};

/**
 * Return the count of CPU of the server.
 *
 * @type String the name of the server.
 * @public
 **/
draw2d.ServerModel.prototype.getCpuUnits=function()
{
   return this["cpu-units"];
};


/**
 * Set the RAM in MB of the server.
 *
 * @param {String} name The new name of the server.
 **/
draw2d.ServerModel.prototype.setRAM=function(/*:String*/ ram)
{
   ram = ""+parseInt(ram,10);
   
   var save = this["ram-in-mb"];
   if(save === ram)
   {
      return;
   }
   this["ram-in-mb"] = ram;
   
   // inform all listener, mainly the visual representation, about the changes.
   this.firePropertyChange(draw2d.AbstractCloudNodeModel.EVENT_PROPERTY_CHANGED,save, ram);
};

/**
 * Return the RAM in MB of the server.
 *
 * @type String the name of the server.
 * @public
 **/
draw2d.ServerModel.prototype.getRAM=function()
{
   return this["ram-in-mb"];
};

/**
 * Return the Images container model object.
 *
 * @type ImagesModel the container object.
 * @public
 **/
draw2d.ServerModel.prototype.getImagesModel=function()
{
   return this.images;
};

/**
 * Add a new image to the server
 *
 * @public
 **/
draw2d.ServerModel.prototype.addImageModel=function(/*:draw2d.ImageModel*/ image)
{
   this.images.addImageModel(image);;
   // inform all listener, mainly the visual representation, about the changes.
   this.firePropertyChange(draw2d.AbstractCloudNodeModel.EVENT_PROPERTY_CHANGED,null, image);
};


/**
 * Remove a new image to the server
 *
 * @public
 **/
draw2d.ServerModel.prototype.removeImageModel=function(/*:draw2d.ImageModel*/ image)
{
   this.images.removeImageModel(image);;
   // inform all listener, mainly the visual representation, about the changes.
   this.firePropertyChange(draw2d.AbstractCloudNodeModel.EVENT_PROPERTY_CHANGED, image, null);
};

/**
 * Returns all attributes which are relevant for serialization.
 * 
 * @return The list of persistent attribute.
 **/
draw2d.ServerModel.prototype.getPersistentAttributes=function()
{
   var memento = draw2d.AbstractCloudNodeModel.prototype.getPersistentAttributes.call(this);

   // enrich the base attributes with the class/instance specific properties
   memento["name"]= this["name"];
   memento["cpu-units"]= this["cpu-units"];
   memento["ram-in-mb"]= this["ram-in-mb"];
   if(this.dbid.length>0)
   {
  	 memento.dbid = this.dbid;
   }
   memento.images= this.images;
   memento.nics= this.nics;
   memento.representation = this.representation;
   
   memento.attributes.id= this.id;

   return memento;
};
