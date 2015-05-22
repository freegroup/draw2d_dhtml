/*
 * Copyright (c) 2010 Andreas Herz. All rights reserved.
 */


/**
 * @version 0.9.3
 * @author Andreas Herz
 * @constructor
 **/
draw2d.ServerReferenceModel=function(/*:String*/ reference)
{
   draw2d.AbstractCloudNodeModel.call(this);
   this.reference = reference;
};

draw2d.ServerReferenceModel.prototype = new draw2d.AbstractCloudNodeModel();
/** @private **/
draw2d.ServerReferenceModel.prototype.type="draw2d.ServerReferenceModel";
draw2d.ServerReferenceModel.prototype.tag="server";



draw2d.ServerReferenceModel.prototype.getReference=function()
{
   return this.reference;
};

/**
 * Returns all attributes which are relevant for serialization.
 * 
 * @return The list of persistent attribute.
 * @since 0.9.15
 **/
draw2d.ServerReferenceModel.prototype.getPersistentAttributes=function()
{
   var memento = draw2d.AbstractCloudNodeModel.prototype.getPersistentAttributes.call(this);

   // enrich the base attributes with the class/instance specific properties
   memento.attributes.reference = this.reference;

   return memento;
};
