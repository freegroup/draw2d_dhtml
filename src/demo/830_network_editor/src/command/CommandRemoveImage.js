/*
 * Copyright (c) 2010 Andreas Herz. All rights reserved.
 */


/**
 * @version 0.9.3
 * @author Andreas Herz
 * @constructor
 **/
draw2d.CommandRemoveImage=function(/*:GraphicalViewer*/ view,/*:draw2d.ServerModel*/ server, /*:draw2d.ImageModel*/ image)
{
   draw2d.Command.call(this,"Remove Image from Server");
   
   this.server = server;
   this.image = image;
   this.view = view;
   this.objToSelect = this.view.getCurrentSelection();
};

draw2d.CommandRemoveImage.prototype = new draw2d.Command();
/** @private **/
draw2d.CommandRemoveImage.prototype.type="draw2d.CommandRemoveImage";



/**
 * Returns [true] if the command can be execute and the execution of the
 * command modify the model. A CommandMove with [startX,startX] == [endX,endY] should
 * return false. <br>
 * the execution of the Command doesn't modify the model.
 *
 * @type boolean
 **/
draw2d.CommandRemoveImage.prototype.canExecute=function()
{
  return true;
};

/**
 * Execute the command the first time
 * 
 **/
draw2d.CommandRemoveImage.prototype.execute=function()
{
   this.redo();
};

/**
 * Undo the command
 *
 **/
draw2d.CommandRemoveImage.prototype.redo=function()
{
   this.server.removeImageModel(this.image);
   this.view.setCurrentSelection(null);
   this.view.setCurrentSelection(this.objToSelect);
};

/** Redo the command after the user has undo this command
 *
 **/
draw2d.CommandRemoveImage.prototype.undo=function()
{
   this.server.addImageModel(this.image);
   this.view.setCurrentSelection(null);
   this.view.setCurrentSelection(this.objToSelect);
};
