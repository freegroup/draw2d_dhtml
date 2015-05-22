/*
 * Copyright (c) 2010 Andreas Herz. All rights reserved.
 */

/**
 * 
 * @version 0.9.3
 * @author Andreas Herz
 * @constructor
 */
draw2d.ToolbarButtonApply=function(/*:draw2d.Workflow*/ workflow)
{
  draw2d.AbstractToolbarButton.call(this, workflow, draw2d.I18N.TOOLBAR_BUTTON_APPLY_XML);
};

draw2d.ToolbarButtonApply.prototype = new draw2d.AbstractToolbarButton();


/**
 * Execute function of the button. This method will be called if the user
 * clicks on the button.<br>
 * Inherited classes should override this method to implement more usefull functions. :-)
 * 
 * @public
 **/
draw2d.ToolbarButtonApply.prototype.execute=function()
{
  var content = draw2d.ModelXMLSerializer.toXML(editor.getModel());
  var req = new Ajax.Request(draw2d.Configuration.APPLY_XML,
  {
    method: 'post',
    parameters:
    {
      xml: documentId,
      content : content
    },
    onFailure: function (transport)
    { 
       alert(draw2d.I18N.ERRORMESSAGE_APPLY_ERROR_404);
    },
    onSuccess: function (transport)
    {
       
       var msg =new TransparentMessage("Configuration Applied");
       msg.show();
    }
  });
};



