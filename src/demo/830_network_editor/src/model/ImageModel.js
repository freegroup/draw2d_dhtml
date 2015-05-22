/*
 * Copyright (c) 2010 Andreas Herz. All rights reserved.
 */


/**
 * @version 0.9.3
 * @author Andreas Herz
 * @constructor
 **/
draw2d.ImageModel=function(/*:String*/ id)
{
   draw2d.AbstractCloudNodeModel.call(this, id);

   // set some default values
   this.index=0;
   this.name=draw2d.Configuration.DEFAULT_IMAGE_NAME;
   this["file-name"]=draw2d.Configuration.DEFAULT_IMAGE_FILENAME;
   this["image-type"]=draw2d.Configuration.DEFAULT_IMAGE_IMAGETYPE;
   this.writeback=draw2d.Configuration.DEFAULT_IMAGE_WRITEBACK;
   this.dbid=null;
   this.order=draw2d.Configuration.DEFAULT_IMAGE_ORDER;
   this["boot-order"]=draw2d.Configuration.DEFAULT_IMAGE_BOOTORDER;
   this.readonly=draw2d.Configuration.DEFAULT_IMAGE_READONLY;
};

draw2d.ImageModel.prototype = new draw2d.AbstractCloudNodeModel();
/** @private **/
draw2d.ImageModel.prototype.type="draw2d.ImageModel";
draw2d.ImageModel.prototype.tag="image";

draw2d.ImageModel.TYPE= new draw2d.ArrayList();
draw2d.ImageModel.TYPE.add("cdrom");
draw2d.ImageModel.TYPE.add("fdd");
draw2d.ImageModel.TYPE.add("hdd");
draw2d.ImageModel.TYPE.add("usb");

draw2d.ImageModel.WRITEBACK= new draw2d.ArrayList();
draw2d.ImageModel.WRITEBACK.add("inplace");
draw2d.ImageModel.WRITEBACK.add("snapshot");
draw2d.ImageModel.WRITEBACK.add("none");

/**
 * Set the name of the image.
 *
 * @param {String} name The new name of the image.
 **/
draw2d.ImageModel.prototype.setName=function(/*:String*/ name)
{
   var save = this.name;
   if(save === name)
   {
      return;   
   }
   
   this.name = name;
   
   // inform all listener, mainly the visual representation, about the changes.
   this.firePropertyChange(draw2d.AbstractCloudNodeModel.EVENT_PROPERTY_CHANGED,save, name);
};


/**
 * Set the index of the image.
 *
 * @param {int} index The new index of the image.
 * @since 0.9.3
 **/
draw2d.ImageModel.prototype.setIndex=function(/*:String*/ index)
{
   var save = this.index;
   if(save === index)
   {
      return;   
   }
   
   this.index = index;
   
   // inform all listener, mainly the visual representation, about the changes.
   this.firePropertyChange(draw2d.AbstractCloudNodeModel.EVENT_PROPERTY_CHANGED,save, index);
};


/**
 * Return the index of the image.
 *
 * @type int the index of the image.
 * @public
 * @since 0.9.3
 **/
draw2d.ImageModel.prototype.getIndex=function()
{
   return this.index;
};


/**
 * Return the name of the image.
 *
 * @type String the name of the image.
 * @public
 **/
draw2d.ImageModel.prototype.getName=function()
{
   return this.name;
};


/**
 * Return the file name or path of the image.
 *
 * @type String the file name or path of the image.
 * @public
 **/
draw2d.ImageModel.prototype.getFileName=function()
{
   return this["file-name"];
};


/**
 * Set the filename or path of the image
 *
 * @param {String} the filename or path of the image
 **/
draw2d.ImageModel.prototype.setFileName=function(/*:String*/ filePath)
{
   var save = this.getFileName();
   if(save === filePath)
   {
      return;
   }
   this["file-name"] = filePath;
   
   // inform all listener, mainly the visual representation, about the changes.
   this.firePropertyChange(draw2d.AbstractCloudNodeModel.EVENT_PROPERTY_CHANGED,save, filePath);
};

/**
 * Return the image type (e.g. CD, fdd,..) of the image
 *
 * @type String the image type
 * @public
 **/
draw2d.ImageModel.prototype.getImageType=function()
{
   return this["image-type"];
};


/**
 * Set the write back of the image
 *
 * @param {String} the writeback attribute of the image
 **/
draw2d.ImageModel.prototype.setImageType=function(/*:String*/ imagetype)
{
   var save = this.getImageType();
   if(save === imagetype)
   {
      return;
   }
   
   if(draw2d.ImageModel.TYPE.indexOf(imagetype)===-1)
     throw "Invalid image type ["+imagetype+"] in [draw2d.ImageModel.prototype.setImageType]. Valid values "+draw2d.ImageModel.TYPE.asArray().toJSON();
     
   this["image-type"] = imagetype;
   
   // inform all listener, mainly the visual representation, about the changes.
   this.firePropertyChange(draw2d.AbstractCloudNodeModel.EVENT_PROPERTY_CHANGED,save, imagetype);
};

/**
 * Return the writeback attribute of the image
 *
 * @type String writeback
 * @public
 **/
draw2d.ImageModel.prototype.getWriteback=function()
{
   return this.writeback;
};


/**
 * Set the write back of the image
 *
 * @param {String} the writeback attribute of the image
 **/
draw2d.ImageModel.prototype.setWriteback=function(/*:String*/ writeback)
{
   var save = this.getWriteback();
   if(save === writeback)
   {
      return;
   }

   if(draw2d.ImageModel.WRITEBACK.indexOf(writeback)===-1)
     throw "Invalid writeback type ["+writeback+"] in [draw2d.ImageModel.prototype.setWriteback]. Valid values "+draw2d.ImageModel.WRITEBACK.asArray().toJSON();

   this.writeback = writeback;
   
   // inform all listener, mainly the visual representation, about the changes.
   this.firePropertyChange(draw2d.AbstractCloudNodeModel.EVENT_PROPERTY_CHANGED,save, writeback);
};

/**
 * Return the order of the image
 *
 * @type String order
 * @public
 **/
draw2d.ImageModel.prototype.getOrder=function()
{
   return this.order;
};

/**
 * Set order attribute of the image
 *
 * @param {String} the order attribute of the image
 **/
draw2d.ImageModel.prototype.setOrder=function(/*:String*/ order)
{
   // enshure that the order is an int
   order = parseInt(order,10);
   if(isNaN(order))
   {
      return;
   }
   
   var save = this.getOrder();
   if(save === order)
   {
      return;
   }
   this.order = order;
   
   // inform all listener, mainly the visual representation, about the changes.
   this.firePropertyChange(draw2d.AbstractCloudNodeModel.EVENT_PROPERTY_CHANGED,save, order);
};


/**
 * Return the priority of the image during the boot sequence
 *
 * @type String boot order
 * @public
 **/
draw2d.ImageModel.prototype.getBootOrder=function()
{
   var order = parseInt(this["boot-order"],10);
   if(isNaN(order))
     order =1;
   return order;
};

/**
 * Set boot order of the image
 *
 * @param {int} The boot order index for this image
 **/
draw2d.ImageModel.prototype.setBootOrder=function(/*:int*/ order)
{
   // enshure that the order is an int
   order = parseInt(order,10);
   if(isNaN(order))
   {
      return;
   }
   
   var save = this.getBootOrder();
   if(save === order)
   {
      return;
   }
   this["boot-order"] = order;
   
   // inform all listener, mainly the visual representation, about the changes.
   this.firePropertyChange(draw2d.AbstractCloudNodeModel.EVENT_PROPERTY_CHANGED,save, order);
};

/**
 * Return the file name or path of the image.
 *
 * @type String the file name or path of the image.
 * @public
 **/
draw2d.ImageModel.prototype.getReadonly=function()
{
   return this.readonly;
};


/**
 * Set the readonly attribute of the image
 *
 * @param {int} the readonly flag
 **/
draw2d.ImageModel.prototype.setReadonly=function(/*:int*/ readonly)
{
   var save = this.getReadonly();
   if(save === readonly)
   {
      return;
   }
   this.readonly = readonly;
   
   // inform all listener, mainly the visual representation, about the changes.
   this.firePropertyChange(draw2d.AbstractCloudNodeModel.EVENT_PROPERTY_CHANGED,save, readonly);
};

/**
 * Returns all attributes which are relevant for serialization.
 * 
 * @return The list of persistent attribute.
 **/
draw2d.ImageModel.prototype.getPersistentAttributes=function()
{
   var memento = draw2d.AbstractCloudNodeModel.prototype.getPersistentAttributes.call(this);

   // enrich the base attributes with the class/instance specific properties
   
   // XML Properties
   memento.attributes.id = this.id;
   
   // @since 0.9.2
   // write the index of the ImageType as attribute
   memento.attributes.index = this.index;
   
   // XML child nodes
   memento.name= this.name;
   memento["file-name"]= this["file-name"];
   memento["image-type"]= this["image-type"];
   memento.writeback= this.writeback;
   
   if(this.dbid)
      memento.dbid= this.dbid;
      
   memento.order= this.order;
   
   if(this["boot-order"])
      memento["boot-order"]= this["boot-order"];

   if(this.index!==null)
      memento["index"]= this.index;
      
   memento.readonly= this.readonly;
   
   return memento;
};
