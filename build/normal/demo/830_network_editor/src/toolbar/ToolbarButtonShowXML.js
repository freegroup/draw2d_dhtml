/*
 * Copyright (c) 2010 Andreas Herz. All rights reserved.
 */

/**
 * 
 * @version 0.9.3
 * @author Andreas Herz
 * @constructor
 */
draw2d.ToolbarButtonShowXML=function(/*:draw2d.Workflow*/ workflow)
{
  draw2d.AbstractToolbarButton.call(this, workflow, draw2d.I18N.TOOLBAR_BUTTON_SHOW_XML);
};

draw2d.ToolbarButtonShowXML.prototype = new draw2d.AbstractToolbarButton();


/**
 * Execute function of the button. This method will be called if the user
 * clicks on the button.<br>
 * Inherited classes should override this method to implement more usefull functions. :-)
 * 
 * @public
 **/
draw2d.ToolbarButtonShowXML.prototype.execute=function()
{
  var content = draw2d.ModelXMLSerializer.toXML(editor.getModel());
  var res = "<?xml version=\"1.0\" encoding=\"ISO-8859-2\"?>\n"+content;
  var newWindow = window.open("","new");
  newWindow.document.open("text/xml");
  newWindow.document.write(res); 
};
