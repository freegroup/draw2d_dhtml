/*
 * Copyright (c) 2010 Andreas Herz. All rights reserved.
 */

/**
 * @version 0.9.3
 * @author Andreas Herz
 * @constructor
 **/
draw2d.StoragePalettePart=function(/*:draw2d.VirtualNetworkCloudModel*/ networkModel)
{
  draw2d.AbstractPalettePart.call(this);
  this.networkModel = networkModel;
};

/** @private **/
draw2d.StoragePalettePart.prototype.type="draw2d.StoragePalettePart";
draw2d.StoragePalettePart.prototype = new draw2d.AbstractPalettePart();


/**
 * @private
 **/
draw2d.StoragePalettePart.prototype.createHTMLElement=function()
{
    var item = draw2d.AbstractPalettePart.prototype.createHTMLElement.call(this);
    item.className = "palette_part_storage";
    item.innerHTML = draw2d.I18N.PALETTE_OBJECT_STORAGE_LABEL;
    item.title = draw2d.I18N.PALETTE_OBJECT_STORAGE_TOOLTIP;
    return item;
};


/**
 *
 **/
draw2d.StoragePalettePart.prototype.execute=function(/*:int*/ x, /*:int*/ y)
{
    editor.getGraphicalViewer().getCommandStack().execute(new draw2d.CommandAddStorage(this.networkModel, x-10,y-10));
};
