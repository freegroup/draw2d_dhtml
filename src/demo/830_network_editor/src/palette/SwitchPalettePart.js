/*
 * Copyright (c) 2010 Andreas Herz. All rights reserved.
 */

/**
 * @version 0.9.3
 * @author Andreas Herz
 * @constructor
 **/
draw2d.SwitchPalettePart=function(/*:draw2d.VirtualNetworkCloudModel*/ networkModel)
{
  draw2d.AbstractPalettePart.call(this);
  this.networkModel = networkModel;
};

/** @private **/
draw2d.SwitchPalettePart.prototype = new draw2d.AbstractPalettePart();
/** @private **/
draw2d.SwitchPalettePart.prototype.type="draw2d.SwitchPalettePart";


/**
 * @private
 **/
draw2d.SwitchPalettePart.prototype.createHTMLElement=function()
{
    var item = draw2d.AbstractPalettePart.prototype.createHTMLElement.call(this);

    item.className = "palette_part_switch";
    item.innerHTML = draw2d.I18N.PALETTE_OBJECT_SWITCH_LABEL;
    item.title = draw2d.I18N.PALETTE_OBJECT_SWITCH_TOOLTIP;

    return item;
};


/**
 *
 **/
draw2d.SwitchPalettePart.prototype.execute=function(/*:int*/ x, /*:int*/ y)
{
    editor.getGraphicalViewer().getCommandStack().execute(new draw2d.CommandAddSwitch(this.networkModel, x-10,y-10));
};
