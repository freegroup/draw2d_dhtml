/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.NicPropertyPage=function(){draw2d.PropertyPage.call(this);this.html=document.createElement("div");this.html.style.width="100%";this.html.style.height="100%";this.header=this.createLabelElement(draw2d.I18N.PROPERTYPANEL_HEADER_NIC,0,0);this.header.className="panel_header";this.html.appendChild(this.header);var _97f=this;this.ipAddressLabel=this.createLabelElement(draw2d.I18N.PROPERTYPANEL_PROPERTYLABEL_IPADDRESS,10,45);this.ipAddressLabel.style.color="gray";this.html.appendChild(this.ipAddressLabel);this.ipAddressText=document.createElement("input");this.ipAddressText.type="text";if(editor.isReadonly()){this.ipAddressText.disabled="true";}else{Event.observe(this.ipAddressText,"keyup",function(e){var func=_97f.currentModel.setIpAddress.bind(_97f.currentModel);var _982=new draw2d.CommandChangeProperty(editor.getGraphicalViewer(),func,_97f.currentModel.getIpAddress(),_97f.ipAddressText.value);editor.executeCommand(_982);});}this.ipAddressText.style.position="absolute";this.ipAddressText.style.width="110px";this.ipAddressText.style.top="65px";this.ipAddressText.style.left="10px";this.html.appendChild(this.ipAddressText);};draw2d.NicPropertyPage.prototype=new draw2d.PropertyPage();draw2d.NicPropertyPage.prototype.type="draw2d.NicPropertyPage";draw2d.NicPropertyPage.prototype.init=function(_983){this.currentModel=_983;this.ipAddressText.value=_983.getIpAddress();};draw2d.NicPropertyPage.prototype.deinit=function(){};draw2d.NicPropertyPage.prototype.getHTMLElement=function(){return this.html;};