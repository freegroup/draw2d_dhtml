/*
 * Copyright (c) 2010 Andreas Herz. All rights reserved.
 */

/**
 * @version 0.9.3
 * @author Andreas Herz
 * @constructor
 **/
draw2d.NicConnectionFigure=function()
{
  draw2d.Connection.call(this);
//  this.setTargetDecorator(new draw2d.ArrowConnectionDecorator());
//  this.getTargetDecorator().setColor(draw2d.MountFigure.DEFAULT_COLOR);
  this.setRouter(new draw2d.FanConnectionRouter());
  this.setColor(draw2d.MountFigure.DEFAULT_COLOR);
};

draw2d.NicConnectionFigure.prototype = new draw2d.Connection();
/** @private **/
draw2d.NicConnectionFigure.prototype.type="draw2d.NicConnectionFigure";
draw2d.NicConnectionFigure.DEFAULT_COLOR = new draw2d.Color(164,164,164);


draw2d.NicConnectionFigure.prototype.propertyChange=function( /*:draw2d.PropertyChangeEvent*/ event)
{
  switch(event.property)
  {
    case draw2d.MountModel.EVENT_PROPERTY_CHANGED:
        this.paint();
        break;
    case draw2d.MountModel.EVENT_SOURCE_CHANGED:
        this.refreshSourcePort();
        break;
    case draw2d.MountModel.EVENT_TARGET_CHANGED:
        this.refreshTargetPort();
        break;
    default:
        break;
   }
};



/**
 * Returns the Command to perform the specified Request or null.
  *
 * @param {draw2d.EditPolicy} request describes the Command being requested
 * @return null or a Command
 * @type draw2d.Command 
 **/
draw2d.NicConnectionFigure.prototype.createCommand=function(/*:draw2d.EditPolicy*/ request)
{
  if(request.getPolicy() === draw2d.EditPolicy.MOVE)
  {
    return new draw2d.CommandReconnectNic(this.model);
  }

  if(request.getPolicy() == draw2d.EditPolicy.DELETE)
  {
    if(this.isDeleteable()===true)
    {
      return new draw2d.CommandDisconnectNic(this.getModel());
    }
    return null;
  }

  return  null;
};
