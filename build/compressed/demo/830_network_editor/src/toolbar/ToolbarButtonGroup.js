/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.ToolbarButtonGroup=function(){this.buttons=new draw2d.ArrayList();this.html=null;};draw2d.ToolbarButtonGroup.prototype.getHTMLElement=function(){if(this.html===null){this.html=new Element("ul");this.html.className="toolbar_button_group";}return this.html;};draw2d.ToolbarButtonGroup.prototype.addElement=function(_9ae){this.getHTMLElement().appendChild(_9ae.getHTMLElement());if(this.buttons.getSize()===0){this.buttons.add(_9ae);$(_9ae.getHTMLElement()).addClassName("first_button");}else{if(this.buttons.getSize()===1){this.buttons.add(_9ae);$(_9ae.getHTMLElement()).addClassName("last_button");}else{var _9af=this.buttons.getLastElement();$(_9af.getHTMLElement()).removeClassName("last_button");$(_9af.getHTMLElement()).addClassName("center_button");this.buttons.add(_9ae);$(_9ae.getHTMLElement()).addClassName("last_button");}}};