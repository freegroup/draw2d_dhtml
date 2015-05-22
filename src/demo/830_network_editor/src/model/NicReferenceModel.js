/*
 * Copyright (c) 2010 Andreas Herz. All rights reserved.
 */


/**
 * @version 0.9.3
 * @author Andreas Herz
 * @constructor
 **/
draw2d.NicReferenceModel=function(/*:String*/ reference)
{
   draw2d.AbstractCloudNodeModel.call(this);
   
   this.reference = reference;
};

draw2d.NicReferenceModel.prototype = new draw2d.AbstractCloudNodeModel();
/** @private **/
draw2d.NicReferenceModel.prototype.type="draw2d.NicReferenceModel";
draw2d.NicReferenceModel.prototype.tag="nic";




/**
 * Returns all attributes which are relevant for serialization.
 * 
 * @return The list of persistent attribute.
 * @since 0.9.15
 **/
draw2d.NicReferenceModel.prototype.getPersistentAttributes=function()
{
   var memento = {attributes:{}};

   // enrich the base attributes with the class/instance specific properties
   memento.attributes.reference = this.reference;
   
   return memento;
};
