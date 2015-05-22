/*
 * Copyright (c) 2010 Andreas Herz. All rights reserved.
 */

/**
 * 
 * @version 0.9.3
 * @author Andreas Herz
 * @constructor
 */
draw2d.ToolbarButtonSave=function(/*:draw2d.Workflow*/ workflow)
{
  draw2d.AbstractToolbarButton.call(this, workflow, draw2d.I18N.TOOLBAR_BUTTON_SAVE_XML);
  this.saveTimer =-1;
};

draw2d.ToolbarButtonSave.prototype = new draw2d.AbstractToolbarButton();


/**
 * Execute function of the button. This method will be called if the user
 * clicks on the button.<br>
 * Inherited classes should override this method to implement more usefull functions. :-)
 * 
 * @public
 **/
draw2d.ToolbarButtonSave.prototype.execute=function()
{
  var showTransparentMessage = true;
  // autosave and the user is during a drag&drop operation.
  // Don't save now the model. XML serialization consumes too much performance and
  // Do it later
  if(this.saveTimer!==-1 && draw2d.Drag.current!==null)
  {
    var asyncSave = this.execute.bind(this);
    this.saveTimer = asyncSave.delay(draw2d.Configuration.AUTOSAVE_IN_SECONDS);
    return;
  }
  if(this.saveTimer!==-1)
    showTransparentMessage=false;
    
  this.saveTimer = -1;
  var content = draw2d.ModelXMLSerializer.toXML(editor.getModel());
  var req = new Ajax.Request(draw2d.Configuration.SAVE_XML,
  {
    method: 'post',
    parameters:
    {
      xml: documentId,
      content : content
    },
    onFailure: function (transport)
    { 
       alert(draw2d.I18N.ERRORMESSAGE_SAVE_ERROR_404);
    },
    onSuccess: function (transport)
    {
       if(showTransparentMessage==false)
         return;
         
       var msg =new TransparentMessage("saved");
       msg.show();
    }
  });
};


draw2d.ToolbarButtonSave.prototype.stackChanged=function(/*:draw2d.CommandStackEvent*/ event)
{
   // automatic save is disabled by configuration property
   //
   if(draw2d.Configuration.AUTOSAVE_IN_SECONDS===-1)
     return;
     
   var asyncSave = this.execute.bind(this);
   
   if(this.saveTimer!=-1)
   {
      window.clearTimeout(this.saveTimer);
   }
   this.saveTimer = asyncSave.delay(draw2d.Configuration.AUTOSAVE_IN_SECONDS);
};


