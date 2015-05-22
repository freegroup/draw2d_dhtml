/*
 * Copyright (c) 2010 Andreas Herz. All rights reserved.
 */

/**
 * @version 0.9.3
 * @author Andreas Herz
 * @constructor
 **/
draw2d.MountFigure=function()
{
  draw2d.Connection.call(this);
//  this.setTargetDecorator(new draw2d.ArrowConnectionDecorator());
//  this.getTargetDecorator().setColor(draw2d.MountFigure.DEFAULT_COLOR);
//  this.setRouter(new draw2d.BezierConnectionRouter());
  this.setRouter(new draw2d.NullConnectionRouter());
  this.setColor(draw2d.MountFigure.DEFAULT_COLOR);
  
  // install a Label decorator which display the "order" attribute of the mount
  // Create any Draw2D figure as decoration for the connection
  //
  this.orderLabel = new draw2d.Label("1");
  this.orderLabel.setBorder(new draw2d.LineBorder(1));
  this.orderLabel.setWordwrap(false);
  this.orderLabel.setAlpha(0.5);
  this.addFigure(this.orderLabel, new draw2d.BezierMidpointLocator(this));
};

/** @private **/
draw2d.MountFigure.prototype = new draw2d.Connection();
/** @private **/
draw2d.MountFigure.prototype.type="draw2d.MountFigure";
draw2d.MountFigure.DEFAULT_COLOR = new draw2d.Color(95,95,95);


draw2d.MountFigure.prototype.paint=function()
{
   draw2d.Connection.prototype.paint.call(this);
   try
   {
	 var model = this.getModel();
	 if(model.getOrder()==="")
	 {
     	this.orderLabel.setText("Order: - ");
     }
     else	 
     {
     	this.orderLabel.setText("Order: "+model.getOrder());
     }
   }
   catch(e)
   {
	  pushErrorStack(e,"draw2d.MountFigure.prototype.paint=function()");
   }
};

draw2d.MountFigure.prototype.propertyChange=function( /*:draw2d.PropertyChangeEvent*/ event)
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
draw2d.MountFigure.prototype.createCommand=function(/*:draw2d.EditPolicy*/ request)
{
  if(request.getPolicy() === draw2d.EditPolicy.MOVE)
  {
    return new draw2d.CommandReconnectMount(this.model);
  }

  if(request.getPolicy() === draw2d.EditPolicy.DELETE)
  {
    if(this.isDeleteable()===true)
    {
      return new draw2d.CommandDisconnectMount(this.getModel());
    }
    return null;
  }

  return null;
};
