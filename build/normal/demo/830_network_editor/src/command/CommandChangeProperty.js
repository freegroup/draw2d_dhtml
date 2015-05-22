/*
 * Copyright (c) 2010 Andreas Herz. All rights reserved.
 */


/**
 * @version 0.9.3
 * @author Andreas Herz
 * @constructor
 **/
draw2d.CommandChangeProperty=function(/*:GraphicalViewer*/ view, /*:Function*/ func, /*:Object*/ oldValue, /*:Object*/ newValue)
{
   draw2d.Command.call(this,"Change Property");
   this.func = func;
   this.oldValue = oldValue;
   this.newValue = newValue;
   this.view = view;
   this.objToSelect = this.view.getCurrentSelection();
};

draw2d.CommandChangeProperty.prototype = new draw2d.Command();
/** @private **/
draw2d.CommandChangeProperty.prototype.type="draw2d.CommandChangeProperty";



/**
 * Returns [true] if the command can be execute and the execution of the
 * command modify the model. A CommandMove with [startX,startX] == [endX,endY] should
 * return false. <br>
 * the execution of the Command doesn't modify the model.
 *
 * @type boolean
 **/
draw2d.CommandChangeProperty.prototype.canExecute=function()
{
  return true;
};

/**
 * Execute the command the first time
 * 
 **/
draw2d.CommandChangeProperty.prototype.execute=function()
{
   this.func(this.newValue);
};

/** Redo the command after the user has undo this command
 *
 **/
draw2d.CommandChangeProperty.prototype.redo=function()
{
   this.func(this.newValue);
   this.view.setCurrentSelection(this.objToSelect);
};

/**
 * Undo the command
 *
 **/
draw2d.CommandChangeProperty.prototype.undo=function()
{
   this.func(this.oldValue);
   this.view.setCurrentSelection(this.objToSelect);
};

