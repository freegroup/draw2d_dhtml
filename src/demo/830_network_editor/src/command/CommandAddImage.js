/*
 * Copyright (c) 2010 Andreas Herz. All rights reserved.
 */


/**
 * @version 0.9.3
 * @author Andreas Herz
 * @constructor
 **/
draw2d.CommandAddImage=function(/*:GraphicalViewer*/ view,/*:draw2d.ServerModel*/ server, /*:draw2d.ImageModel*/ image)
{
   draw2d.Command.call(this,"Add Image to Server");
   
   this.server = server;
   this.image = image;
   this.view = view;
   this.objToSelect = this.view.getCurrentSelection();
};

draw2d.CommandAddImage.prototype = new draw2d.Command();
/** @private **/
draw2d.CommandAddImage.prototype.type="draw2d.CommandAddImage";



/**
 * Returns [true] if the command can be execute and the execution of the
 * command modify the model. A CommandMove with [startX,startX] == [endX,endY] should
 * return false. <br>
 * the execution of the Command doesn't modify the model.
 *
 * @type boolean
 **/
draw2d.CommandAddImage.prototype.canExecute=function()
{
  return true;
};

/**
 * Execute the command the first time
 * 
 **/
draw2d.CommandAddImage.prototype.execute=function()
{
   this.redo();
};

/**
 * Undo the command
 *
 **/
draw2d.CommandAddImage.prototype.undo=function()
{
   this.server.removeImageModel(this.image);
   this.view.setCurrentSelection(null);
   this.view.setCurrentSelection(this.objToSelect);
};

/** Redo the command after the user has undo this command
 *
 **/
draw2d.CommandAddImage.prototype.redo=function()
{
   this.server.addImageModel(this.image);
   this.view.setCurrentSelection(null);
   this.view.setCurrentSelection(this.objToSelect);
};
