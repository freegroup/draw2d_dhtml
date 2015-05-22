/*
 * Copyright (c) 2010 Andreas Herz. All rights reserved.
 */

/**
 * 
 * @version 0.9.3
 * @author Andreas Herz
 * @constructor
 */
draw2d.AbstractToolbarButton=function(/*:draw2d.Workflow*/ workflow, /*:String*/ label)
{
  if(workflow===undefined)
  {
      return;
  }
      
  if(workflow instanceof draw2d.GraphicalEditor)
  {
     workflow = workflow.getGraphicalViewer();
  }
     
  this.html=null;
  this.label = label;
  this.workflow = workflow;
  this.enabled = false;
  this.workflow.addSelectionListener(this);
  this.workflow.getCommandStack().addCommandStackEventListener(this);
  
  this.executeBinding= this.execute.bindAsEventListener(this);

  // init the element
  this.getHTMLElement();
};

draw2d.AbstractToolbarButton.prototype = new draw2d.CommandStackEventListener();


/**
 * @private
 **/
draw2d.AbstractToolbarButton.prototype.getHTMLElement=function()
{
   if(this.html===null)
   {
      this.html = new Element("li");
      this.html.className="toolbar_button";
      this.a= new Element("a");
      this.a.className="toolbar_button";
      this.a.innerHTML = this.label;
      this.html.appendChild(this.a);
      this.setEnable(true);
  //    disableSelection(this.a);
   }
   return this.html;
};

/**
 * Returns the current assigned draw2d workflow object.<br>
 * 
 * @type draw2d.Workflow
 **/
draw2d.AbstractToolbarButton.prototype.getWorkflow=function()
{
  return this.workflow;
};

/**
 * Execute function of the button. This method will be called if the user
 * clicks on the button.<br>
 * Inherited classes should override this method to implement more usefull functions. :-)
 * 
 * @public
 **/
draw2d.AbstractToolbarButton.prototype.execute=function()
{
   alert("Default action for a Toolbarbutton called");
};


/**
 * Enable / disable this element.
 * 
 * @param {boolean} flag The enable flag
 * @final
 * @public
 **/
draw2d.AbstractToolbarButton.prototype.setEnable=function(/*:boolean*/ flag)
{
   // nothing todo
   if(this.enabled === flag)
   {
      return;
   }

   this.enabled = flag;
   if(this.enabled === true)
   {
     Event.observe(this.html, 'click',this.executeBinding);
     $(this.a).removeClassName("toolbar_button_disabled");
   }
   else
   {
     Event.stopObserving(this.html, 'click',this.executeBinding);
     $(this.a).addClassName("toolbar_button_disabled");
   }
};

/**
 * Set the tooltip of the button
 * 
 * @param {String} text The tooltip of the button
 * @final
 * @public
 **/
draw2d.AbstractToolbarButton.prototype.setTooltip=function(/*:String*/ text)
{
   this.getHTMLElement().title= text;
};

/**
 * Sent when the selection  has been changed.
 * Can be used to enable element in relation to the current selection.
 *
 **/
draw2d.AbstractToolbarButton.prototype.onSelectionChanged=function(/*:draw2d.ArrayList*/ currentSelection)
{
};


/**
 * Sent when an event occurs on the command stack. draw2d.CommandStackEvent.getDetail() 
 * can be used to identify the type of event which has occurred.
 * 
 **/
draw2d.AbstractToolbarButton.prototype.stackChanged=function(/*:draw2d.CommandStackEvent*/ event)
{
};
