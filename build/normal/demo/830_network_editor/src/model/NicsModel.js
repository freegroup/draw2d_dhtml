/*
 * Copyright (c) 2010 Andreas Herz. All rights reserved.
 */


/**
 * @version 0.9.3
 * @author Andreas Herz
 * @constructor
 **/
draw2d.NicsModel=function()
{
   draw2d.AbstractCloudNodeModel.call(this);
   
   this.nics = new draw2d.ArrayList();
};

draw2d.NicsModel.prototype = new draw2d.AbstractCloudNodeModel();
/** @private **/
draw2d.NicsModel.prototype.type="draw2d.NicsModel";
draw2d.NicsModel.prototype.tag="nics";




/**
 * Add a new RecordSourceModel to the Converter model
 *
 **/
draw2d.NicsModel.prototype.addNicModel=function(/*:draw2d.NicModel*/ model)
{
   this.nics.add(model);
   // inform all listener, mainly the visual representation, about the changes.
   this.firePropertyChange(draw2d.AbstractObjectModel.EVENT_ELEMENT_ADDED,null, model);
};

/**
 **/
draw2d.NicsModel.prototype.removeNicModel=function(/*:draw2d.NicModell*/ model)
{
   if(this.nics.remove(model)!==null)
   {
     // inform all listener, mainly the visual representation, about the changes.
     this.firePropertyChange(draw2d.AbstractObjectModel.EVENT_ELEMENT_REMOVED,model,null);
   }

};

/**
 **/
draw2d.NicsModel.prototype.removeNic=function(/*:String*/ nicId)
{
   for(var i=0;i<this.nics.getSize();i++)
   {
      var nic = this.nics.get(i);
      if(nic.getId()===nicId)
      {
         this.removeNicModel(nic);
         break;
      }
   }
};

/**
 **/
draw2d.NicsModel.prototype.getNicModel=function(/*:String*/ nicId)
{
   for(var i=0;i<this.nics.getSize();i++)
   {
      var nic = this.nics.get(i);
      if(nic.getId()===nicId)
      {
        return nic;
      }
   }
   return null;
};

/**
 * Returns all attributes which are relevant for serialization.
 * 
 * @return The list of persistent attribute.
 * @since 0.9.15
 **/
draw2d.NicsModel.prototype.getPersistentAttributes=function()
{
   var memento = draw2d.AbstractCloudNodeModel.prototype.getPersistentAttributes.call(this);

   memento.attributes.id = this.id;
   
   // enrich the base attributes with the class/instance specific properties
   memento.nics = this.nics.asArray();
   
   return memento;
};
