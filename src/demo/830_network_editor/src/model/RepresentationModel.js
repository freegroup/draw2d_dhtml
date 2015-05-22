/*
 * Copyright (c) 2010 Andreas Herz. All rights reserved.
 */

/**
 * @version 0.9.3
 * @author Andreas Herz
 * @constructor
 **/
draw2d.RepresentationModel=function(/*:int*/ x, /*:int*/ y)
{
   draw2d.AbstractCloudNodeModel.call(this);
   
   if(x!==undefined && x!==null)
   {
      this.x = parseInt(x,10);
   }     
   else 
   {
      this.x=42;
   }     

   if(y!==undefined && y!==null)
   {
      this.y = parseInt(y,10);
   }     
   else 
   {
      this.y=42;
   }     
};

draw2d.RepresentationModel.prototype = new draw2d.AbstractCloudNodeModel();
/** @private **/
draw2d.RepresentationModel.prototype.type="draw2d.RepresentationModel";
draw2d.RepresentationModel.prototype.tag="representation";




/**
 * Returns all attributes which are relevant for serialization.
 * 
 * @return The list of persistent attribute.
 * @since 0.9.15
 **/
draw2d.RepresentationModel.prototype.getPersistentAttributes=function()
{
   var memento = draw2d.AbstractCloudNodeModel.prototype.getPersistentAttributes.call(this);

   // enrich the base attributes with the class/instance specific properties
   memento.attributes.x = this.x;
   memento.attributes.y = this.y;
   
   return memento;
};
