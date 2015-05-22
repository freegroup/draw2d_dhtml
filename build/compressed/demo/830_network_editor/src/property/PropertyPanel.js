/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.PropertyPanel=function(_c8a){try{if(!_c8a){return;}this.html=$(_c8a);this.pages=new Hash();this.currentPage=null;this.pages.set(draw2d.ServerModel.prototype.type,new draw2d.ServerPropertyPage());this.pages.set(draw2d.StorageModel.prototype.type,new draw2d.StoragePropertyPage());this.pages.set(draw2d.SwitchModel.prototype.type,new draw2d.SwitchPropertyPage());this.pages.set(draw2d.MountModel.prototype.type,new draw2d.MountPropertyPage());this.pages.set(draw2d.NicConnectionModel.prototype.type,new draw2d.NicPropertyPage());this.defaultPage=new draw2d.DefaultPropertyPage();this.onSelectionChanged(null,null);}catch(e){pushErrorStack(e,"draw2d.PropertyPanel=function(/*:String*/ contentDivId)");}};draw2d.PropertyPanel.prototype.type="draw2d.PropertyPanel";draw2d.PropertyPanel.prototype.setDimension=function(w,h){this.html.style.width=w+"px";this.html.style.height=h+"px";this.pages.values().each(function(page){page.onResize(w,h);});};draw2d.PropertyPanel.prototype.onSelectionChanged=function(_c8e,_c8f){try{if(this.currentPage!==null){this.currentPage.deinit();this.html.removeChild(this.currentPage.getHTMLElement());this.currentPage=null;}this.html.innerHTML="";if(_c8f!==null){var page=this.pages.get(_c8f.type);if(page){this.html.appendChild(page.getHTMLElement());page.init(_c8f);this.currentPage=page;}}else{this.html.appendChild(this.defaultPage.getHTMLElement());this.defaultPage.init(editor.getModel());this.currentPage=this.defaultPage;}}catch(e){alert(e);}};