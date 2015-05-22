/*
 * Copyright (c) 2010 Andreas Herz. All rights reserved.
 */

/**
 * @version 0.9.3
 * @author Andreas Herz
 * @constructor
 **/
draw2d.SwitchFigure=function()
{
  draw2d.AbstractCloudNodeFigure.call(this);
};

draw2d.SwitchFigure.prototype = new draw2d.AbstractCloudNodeFigure();
draw2d.SwitchFigure.prototype.type="draw2d.SwitchFigure";


draw2d.SwitchFigure.prototype.paint=function()
{
   draw2d.AbstractCloudNodeFigure.prototype.paint.call(this);
   try
   {
	 var model = this.getModel();
     this.header.innerHTML  = model.getName();
     this.setDimension(this.getWidth(),this.getHeight());
   }
   catch(e)
   {
	  pushErrorStack(e,"draw2d.SwitchFigure.prototype.paint=function()");
   }
};


/**
 * Create the HTML Element for the visual representation.
 *
 * @private
 **/
draw2d.SwitchFigure.prototype.createHTMLElement=function()
{
 var item = draw2d.AbstractCloudNodeFigure.prototype.createHTMLElement.call(this);
 
 item.className = "switch_frame";
 this.header.className="switch_header";
 item.style.border="";

 this.setDimension(this.getWidth(),this.getHeight());

 return item;
};


/**
 * @private
 **/
draw2d.SwitchFigure.prototype.initPorts=function()
{
   try
   {
      if(this.inputPort!==null)
      {
        return;
      }
        
      this.inputPort = new draw2d.NicInputPort();
      this.inputPort.setWorkflow(this.workflow);
      this.inputPort.setCanDrag(this.getCanDrag());
      this.addPort(this.inputPort,0, 0);
      this.inputPort.paint();

      this.setDimension(this.getWidth(),this.getHeight());
   }
   catch(e)
   {
      pushErrorStack(e,"draw2d.SwitchFigure.prototype.initPorts=function()");
   }
};




/**
 * Set the new width and height of the figure. 
 *
 * @see #getMinWidth
 * @see #getMinHeight
 * @param {int} w The new width of the figure
 * @param {int} h The new height of the figure
 **/
draw2d.SwitchFigure.prototype.setDimension=function(/*:int*/ w, /*:int*/ h)
{
  draw2d.AbstractCloudNodeFigure.prototype.setDimension.call(this,w,h);

  if(this.inputPort===null)
  {
     return;
  }
  
  this.inputPort.setPosition(-5,h/2);
};