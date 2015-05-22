/*
 * Copyright (c) 2010 Andreas Herz. All rights reserved.
 */

/**
 * @version 0.9.3
 * @author Andreas Herz
 * @constructor
 **/
draw2d.SwitchModel=function(/*:String*/ id)
{
   draw2d.AbstractCloudNodeModel.call(this, id);
   
   // set some default values.
   this.dbid = "";
   this.name =draw2d.Configuration.DEFAULT_SWITCH_NAME;
   this.representation = new draw2d.RepresentationModel(42,42);
};

draw2d.SwitchModel.prototype = new draw2d.AbstractCloudNodeModel();
/** @private **/
draw2d.SwitchModel.prototype.type="draw2d.SwitchModel";
draw2d.SwitchModel.prototype.tag="switch";



/**
 * Set the name of the switch.
 *
 * @param {String} name The new name of the network.
 **/
draw2d.SwitchModel.prototype.setName=function(/*:String*/ name)
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
 * Return the name of the switch.
 *
 * @type String the name of the network.
 * @public
 **/
draw2d.SwitchModel.prototype.getName=function()
{
   return this.name;
};

/**
 * Set the position attribute of the model. This will enforce a redraw of the corresponding
 * figure (if existing).
 *
 * @param {int} xPos The x coordinate for the model
 * @param {int} yPos The y coordinate for the model
 **/
draw2d.SwitchModel.prototype.setPosition=function(/*:int*/ xPos , /*:int*/ yPos )
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
draw2d.SwitchModel.prototype.getPosition=function()
{
   return new draw2d.Point(parseInt(this.representation.x,10),parseInt(this.representation.y,10));
};

/**
 * Returns all attributes which are relevant for serialization.
 * 
 * @return The list of persistent attribute.
 * @since 0.9.15
 **/
draw2d.SwitchModel.prototype.getPersistentAttributes=function()
{
   var memento = draw2d.AbstractCloudNodeModel.prototype.getPersistentAttributes.call(this);

   // enrich the base attributes with the class/instance specific properties
   memento.attributes.id= this.id;
   if(this.dbid.length>0)
   {
  	 memento.dbid = this.dbid;
   }
   memento.name = this.name;
   memento.representation = this.representation;
   
   return memento;
};
