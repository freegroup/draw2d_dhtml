/*
 * Copyright (c) 2010 Andreas Herz. All rights reserved.
 */


/**
 * @version 0.9.3
 * @author Andreas Herz
 * @constructor
 **/
draw2d.SwitchReferenceModel=function(/*:String*/ reference)
{
   draw2d.AbstractCloudNodeModel.call(this);
   this.reference = reference;
};

draw2d.SwitchReferenceModel.prototype = new draw2d.AbstractCloudNodeModel();
/** @private **/
draw2d.SwitchReferenceModel.prototype.type="draw2d.SwitchReferenceModel";
draw2d.SwitchReferenceModel.prototype.tag="switch";



draw2d.SwitchReferenceModel.prototype.getReference=function()
{
   return this.reference;
};

/**
 * Returns all attributes which are relevant for serialization.
 * 
 * @return The list of persistent attribute.
 * @since 0.9.15
 **/
draw2d.SwitchReferenceModel.prototype.getPersistentAttributes=function()
{
   var memento = draw2d.AbstractCloudNodeModel.prototype.getPersistentAttributes.call(this);

   // enrich the base attributes with the class/instance specific properties
   memento.attributes.reference = this.reference;

   return memento;
};
