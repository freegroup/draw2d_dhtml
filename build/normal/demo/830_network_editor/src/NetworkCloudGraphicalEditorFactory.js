/*
 * Copyright (c) 2010 Andreas Herz. All rights reserved.
 */

/**
 * @version 0.9.3
 * @author Andreas Herz
 * @constructor
 **/
draw2d.NetworkCloudGraphicalEditorFactory=function(/*:boolean*/ readonly)
{
   this.readonly = readonly;
   draw2d.EditPartFactory.call(this);
};

draw2d.NetworkCloudGraphicalEditorFactory.prototype = new draw2d.EditPartFactory();
/** @private **/
draw2d.NetworkCloudGraphicalEditorFactory.prototype.type="draw2d.NetworkCloudGraphicalEditorFactory";


/**
 * Creates a new Figure given the specified model.
 * @param {draw2d.AbstractObjectModel} mode - the model of the figure being created
 *
 * @type draw2d.Figure
 **/
draw2d.NetworkCloudGraphicalEditorFactory.prototype.createEditPart=function(/*:draw2d.AbstractObjectModel*/ model)
{
	   var figure=null;
	
	   if(model instanceof draw2d.ServerModel)
	   {
	      figure = new draw2d.ServerFigure();
	   }
	   else if(model instanceof draw2d.StorageModel)
	   {
	      figure = new draw2d.StorageFigure();
	   }
	   else if(model instanceof draw2d.SwitchModel)
	   {
	      figure = new draw2d.SwitchFigure();
	   }
	   else if(model instanceof draw2d.MountModel)
	   {
	      figure = new draw2d.MountFigure();
	   }
	   else if(model instanceof draw2d.NicConnectionModel)
	   {
	      figure = new draw2d.NicConnectionFigure();
	   }

	   if(figure===null)
	   {
	     throw "factory called with unknown model class:"+model.type;
	   }
	   
	   figure.setModel(model);
	   if(this.readonly)
	   {
	      figure.setDeleteable(false);
	      figure.setCanDrag(false);
	   }
	   return figure;
};

