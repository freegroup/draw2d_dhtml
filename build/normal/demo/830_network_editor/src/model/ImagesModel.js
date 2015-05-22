/*
 * Copyright (c) 2010 Andreas Herz. All rights reserved.
 */

/**
 * @version 0.9.3
 * @author Andreas Herz
 * @constructor
 **/
draw2d.ImagesModel=function()
{
   draw2d.AbstractCloudNodeModel.call(this);
   
   this.images = new draw2d.ArrayList();
};

draw2d.ImagesModel.prototype = new draw2d.AbstractCloudNodeModel();
/** @private **/
draw2d.ImagesModel.prototype.type="draw2d.ImagesModel";
draw2d.ImagesModel.prototype.tag="images";


/**
 * Add a new RecordSourceModel to the Converter model
 *
 **/
draw2d.ImagesModel.prototype.addImageModel=function(/*:draw2d.ImageModel*/ model)
{
   this.images.add(model);
   // inform all listener, mainly the visual representation, about the changes.
   this.firePropertyChange(draw2d.AbstractObjectModel.EVENT_ELEMENT_ADDED,null, model);
};

/**
 * Remove the hands over image from the server.
 *
 **/
draw2d.ImagesModel.prototype.removeImageModel=function(/*:draw2d.ImageModell*/ model)
{
   if(this.images.remove(model)!==null)
   {
     // inform all listener, mainly the visual representation, about the changes.
     this.firePropertyChange(draw2d.AbstractObjectModel.EVENT_ELEMENT_REMOVED,model,null);
   }
};

/**
 * @type draw2d.ArrayList
 **/
draw2d.ImagesModel.prototype.getImageModels=function()
{
   return this.images;
};

/**
 * Renumber the internal image model sequenze from [0-...].
 * @private
 * @since 0.9.3
 **/
draw2d.ImagesModel.prototype.renumber=function()
{
   for(var i=0;i<this.images.getSize();i++)
   {
       this.images.get(i).setIndex(i);
   }
};

/**
 * Returns all attributes which are relevant for serialization.
 * 
 * @return The list of persistent attribute.
 **/
draw2d.ImagesModel.prototype.getPersistentAttributes=function()
{
   var memento = draw2d.AbstractCloudNodeModel.prototype.getPersistentAttributes.call(this);

   // @since 0.9.3
   // renumber the images before serialization
   this.renumber();
   
   // enrich the base attributes with the class/instance specific properties
   memento.img = this.images.asArray();
   
   return memento;
};
