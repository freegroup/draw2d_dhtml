/*
 * Copyright (c) 2010 Andreas Herz. All rights reserved.
 */

/**
 * @version 0.9.3
 * @author Andreas Herz
 * @constructor
 **/
draw2d.SwitchPropertyPage=function()
{
   draw2d.PropertyPage.call(this);
   
   this.html = document.createElement("div");
   this.html.style.width="100%";
   this.html.style.height="100%";
  
   this.header = this.createLabelElement(draw2d.I18N.PROPERTYPANEL_HEADER_SWITCH,0,0);
   this.header.className="panel_header";
   this.html.appendChild(this.header);
   
   // The Name of the Swtich
   //
   this.nameLabel = this.createLabelElement(draw2d.I18N.PROPERTYPANEL_PROPERTYLABEL_NAME,10,45);
   this.nameLabel.style.color="gray";
   this.html.appendChild(this.nameLabel);

   this.nameText = document.createElement("input");
   this.nameText.type = "text";
   var oThis = this;
   if(editor.isReadonly())
   {
      this.nameText.disabled ="true";
   }
   else
   {
      Event.observe(this.nameText,"keyup",function(e)
      {
         var func = oThis.currentModel.setName.bind(oThis.currentModel);
         var command = new draw2d.CommandChangeProperty(editor.getGraphicalViewer(),func,oThis.currentModel.getName(),oThis.nameText.value);
         editor.executeCommand(command);
      });
   }
   this.nameText.style.position="absolute";
   this.nameText.style.width="110px";
   this.nameText.style.top="65px";
   this.nameText.style.left="10px";
   this.html.appendChild(this.nameText);
};

/** @private **/
draw2d.SwitchPropertyPage.prototype = new draw2d.PropertyPage();
/** @private **/
draw2d.SwitchPropertyPage.prototype.type="draw2d.SwitchPropertyPage";


/**
 *
 **/
draw2d.SwitchPropertyPage.prototype.init=function(/*:draw2d.AbstractObjectModel*/ model)
{
   this.currentModel = model;
   this.nameText.value = model.getName();
};

/**
 *
 **/
draw2d.SwitchPropertyPage.prototype.deinit=function()
{
};

/**
 * @abstract
 * @type HTMLElement
 * @private
 **/
draw2d.SwitchPropertyPage.prototype.getHTMLElement=function()
{
  return this.html;
};