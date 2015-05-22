/*
 * Copyright (c) 2010 Andreas Herz. All rights reserved.
 */

/**
 * @version 0.9.3
 * @author Andreas Herz
 * @constructor
 **/
draw2d.NicPropertyPage=function()
{
   draw2d.PropertyPage.call(this);
   
   this.html = document.createElement("div");
   this.html.style.width="100%";
   this.html.style.height="100%";
  
   this.header = this.createLabelElement(draw2d.I18N.PROPERTYPANEL_HEADER_NIC,0,0);
   this.header.className="panel_header";
   this.html.appendChild(this.header);
   
   
   var oThis = this;

   // IP Address of the NIC
   //
   this.ipAddressLabel = this.createLabelElement(draw2d.I18N.PROPERTYPANEL_PROPERTYLABEL_IPADDRESS,10,45);
   this.ipAddressLabel.style.color="gray";
   this.html.appendChild(this.ipAddressLabel);

   this.ipAddressText = document.createElement("input");
   this.ipAddressText.type = "text";
   if(editor.isReadonly())
   {
      this.ipAddressText.disabled ="true";
   }
   else
   {
      Event.observe(this.ipAddressText,"keyup",function(e)
      {
         var func = oThis.currentModel.setIpAddress.bind(oThis.currentModel);
         var command = new draw2d.CommandChangeProperty(editor.getGraphicalViewer(),func,oThis.currentModel.getIpAddress(),oThis.ipAddressText.value);
         editor.executeCommand(command);
      });
   }
   this.ipAddressText.style.position="absolute";
   this.ipAddressText.style.width="110px";
   this.ipAddressText.style.top="65px";
   this.ipAddressText.style.left="10px";
   this.html.appendChild(this.ipAddressText);
};

draw2d.NicPropertyPage.prototype = new draw2d.PropertyPage();
/** @private **/
draw2d.NicPropertyPage.prototype.type="draw2d.NicPropertyPage";


/**
 *
 **/
draw2d.NicPropertyPage.prototype.init=function(/*:draw2d.AbstractObjectModel*/ model)
{
   this.currentModel = model;
   this.ipAddressText.value = model.getIpAddress();
};

/**
 *
 **/
draw2d.NicPropertyPage.prototype.deinit=function()
{
};

/**
 * @abstract
 * @type HTMLElement
 * @private
 **/
draw2d.NicPropertyPage.prototype.getHTMLElement=function()
{
  return this.html;
};
