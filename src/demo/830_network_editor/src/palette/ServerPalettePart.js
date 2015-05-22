/*
 * Copyright (c) 2010 Andreas Herz. All rights reserved.
 */
 
/**
 * Base class for elements which can be inserted into an external
 * tool palette.<br>
 * Objects of this class can be drag&drop around the hole web page. An event will
 * be fired if the element has been dropped into the canvas.<br>
 * Inherited classes should override the execute event method to implement
 * special behaviour.
 *
 * @version 0.9.3
 * @author Andreas Herz
 * @constructor
 **/
draw2d.ServerPalettePart=function(/*:draw2d.VirtualNetworkCloudModel*/ networkModel)
{
  draw2d.AbstractPalettePart.call(this);
  this.networkModel = networkModel;
};

draw2d.ServerPalettePart.prototype = new draw2d.AbstractPalettePart();
/** @private **/
draw2d.ServerPalettePart.prototype.type="draw2d.ServerPalettePart";


/**
 * @private
 **/
draw2d.ServerPalettePart.prototype.createHTMLElement=function()
{
    var item = draw2d.AbstractPalettePart.prototype.createHTMLElement.call(this);
    item.className = "palette_part_server";
    item.innerHTML = draw2d.I18N.PALETTE_OBJECT_SERVER_LABEL;
    item.title = draw2d.I18N.PALETTE_OBJECT_SERVER_TOOLTIP;
    return item;
};


/**
 *
 **/
draw2d.ServerPalettePart.prototype.execute=function(/*:int*/ x, /*:int*/ y)
{
    editor.getGraphicalViewer().getCommandStack().execute(new draw2d.CommandAddServer(this.networkModel, x-10,y-10));
};
