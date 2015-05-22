/*
 * Copyright (c) 2010 Andreas Herz. All rights reserved.
 */



/**
 * Common fly out menu on the right hand side of an selected object/node.
 *
 * @version 0.9.3
 * @author Andreas Herz
 * @constructor
 **/
draw2d.FlowMenu=function(/*:draw2d.Workflow*/ workflow)
{
  this.actionDelete = new draw2d.ButtonDelete(this);

  draw2d.ToolPalette.call(this);

  this.setDimension(20,20);
  this.setBackgroundColor(new  draw2d.Color(220,255,255));
  this.currentFigure = null;
  this.myworkflow = workflow;
  this.added = false;
  this.setDeleteable(false);
  this.setCanDrag(false);
  this.setResizeable(false);
  this.setSelectable(false);
  this.setBackgroundColor(null);
  this.setColor(null);
  this.scrollarea.style.borderBottom="0px";

  this.actionDelete.setPosition(0,0);

  this.addChild(this.actionDelete);
  this.setDropShadow(0);
};

draw2d.FlowMenu.prototype = new draw2d.ToolPalette();


/**
 * Reenable the setAlpha method. This has been disabled in the Window class.
 *
 **/
draw2d.FlowMenu.prototype.setAlpha=function(/*:float 0-1*/ percent)
{
   draw2d.Figure.prototype.setAlpha.call(this,percent);
};

/**
 * The FlowMenu has no title bar => return false.
 *
 * @returns Returns [true] if the window has a title bar
 * @type boolean
 **/
draw2d.FlowMenu.prototype.hasTitleBar=function()
{
  return false;
};

/**
 * Call back method of the framework if the selected object has been changed.
 *
 * @param {draw2d.Figure} figure the object which has been selected.
 **/
draw2d.FlowMenu.prototype.onSelectionChanged=function(/*:draw2d.Figure*/ figure)
{
  if(figure===this.currentFigure)
  {
     return;
  }

  if(figure instanceof draw2d.Line)
  {
     return;
  }
  
  if(this.added===true)
  {
     this.myworkflow.removeFigure(this);
     this.added=false;
  }

  if(figure!==null && this.added===false)
  {
     // The figure has been changed. Hide the FlowMenu. The addFigure(..) will increase the alpha 
     // with an internal timer. But only if the the smooth handling is enabled.
     //
     if(this.myworkflow.getEnableSmoothFigureHandling()===true)
     {
         this.setAlpha(0.01);
     }

     this.myworkflow.addFigure(this,100,100);
     this.added=true;
  }

  // deregister the moveListener from the old figure
  //
  if(this.currentFigure!==null)
  {
     this.currentFigure.detachMoveListener(this);
  }

  this.currentFigure = figure;
  // deregister the moveListener from the old figure
  //
  if(this.currentFigure!==null)
  {
     this.currentFigure.attachMoveListener(this);
     this.onOtherFigureMoved(this.currentFigure);
  }
};


draw2d.FlowMenu.prototype.setWorkflow= function( /*:draw2d.Workflow*/ workflow)
{
  // Call the Figure.setWorkflow(...) and NOT the ToolPalette!
  // Reson: the ToolPalette deregister the selectionListener from the workflow. But we need 
  // the selection listener event.
  draw2d.Figure.prototype.setWorkflow.call(this,workflow);
};



/**
 * Move the FlowMenu in synch with the corresponding figure.
 *
 * @param {draw2d.Figure} figure The figure which has changed its position
 * @private
 */
draw2d.FlowMenu.prototype.onOtherFigureMoved=function(/*:draw2d.Figure*/ figure)
{
   if(figure instanceof draw2d.Line)
   {
      return;
   }
   var pos = figure.getPosition();
   this.setPosition(pos.x+figure.getWidth()+7,pos.y-16);
};

