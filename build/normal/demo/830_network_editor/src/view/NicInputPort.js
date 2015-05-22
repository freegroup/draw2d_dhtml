/*
 * Copyright (c) 2010 Andreas Herz. All rights reserved.
 */

/**
 * @version 0.9.3
 * @author Andreas Herz
 * @constructor
 **/
draw2d.NicInputPort=function()
{
  draw2d.Port.call(this, new draw2d.ImageFigure(""+draw2d.Configuration.IMAGEPATH+"nic_port.png"));
  this.setDimension(16,16);
  this.setBackgroundColor(null);
  this.setName("input");
};


draw2d.NicInputPort.prototype = new draw2d.InputPort();
/** @private **/
draw2d.NicInputPort.prototype.type="draw2d.NicInputPort";


/**
 * Returns the Command to perform the specified Request or null.<br>
 * Inherited figures can override this method to return the own implementation
 * of the request.<br>
 *
 * @param {draw2d.EditPolicy} request describes the Command being requested
 * @return null or a draw2d.Command
 * @type draw2d.Command 
 **/
draw2d.NicInputPort.prototype.createCommand=function(/*:draw2d.EditPolicy*/ request)
{
   // Connect request between two ports
   //
   if(request.getPolicy() ===draw2d.EditPolicy.CONNECT)
   {
     // loopback connections are not valid
     if(request.source.parentNode.id == request.target.parentNode.id)
     {
        return null;
     }

     if(request.source instanceof draw2d.NicOutputPort)
     {
        // This is the different to the OutputPort implementation of createCommand
        var sourceModel = request.source.getParent().getModel();
        var targetModel = request.target.getParent().getModel();
        return new draw2d.CommandConnectNic(sourceModel,targetModel);
     }
     return null;
   }

   // ...else call the base class
   return draw2d.InputPort.prototype.createCommand.call(this,request);
};
