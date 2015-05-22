/*
 * Copyright (c) 2010 Andreas Herz. All rights reserved.
 */

/**
 * 
 * @version 0.9.3
 * @author Andreas Herz
 * @constructor
 */
draw2d.Toolbar=function(/*:String*/ divId)
{
   this.groups = new draw2d.ArrayList();
   this.divId = divId;
};


/**
 * @private
 **/
draw2d.Toolbar.prototype.getHTMLElement=function()
{
   return $(this.divId);
};


draw2d.Toolbar.prototype.addElement=function(/*:draw2d.ToolbarButtonGroup*/ group)
{
   this.groups.add(group);

   this.getHTMLElement().appendChild(group.getHTMLElement());
};

