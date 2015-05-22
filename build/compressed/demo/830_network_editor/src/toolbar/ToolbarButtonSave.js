/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.ToolbarButtonSave=function(_c5a){draw2d.AbstractToolbarButton.call(this,_c5a,draw2d.I18N.TOOLBAR_BUTTON_SAVE_XML);this.saveTimer=-1;};draw2d.ToolbarButtonSave.prototype=new draw2d.AbstractToolbarButton();draw2d.ToolbarButtonSave.prototype.execute=function(){var _c5b=true;if(this.saveTimer!==-1&&draw2d.Drag.current!==null){var _c5c=this.execute.bind(this);this.saveTimer=_c5c.delay(draw2d.Configuration.AUTOSAVE_IN_SECONDS);return;}if(this.saveTimer!==-1){_c5b=false;}this.saveTimer=-1;var _c5d=draw2d.ModelXMLSerializer.toXML(editor.getModel());var req=new Ajax.Request(draw2d.Configuration.SAVE_XML,{method:"post",parameters:{xml:documentId,content:_c5d},onFailure:function(_c5f){alert(draw2d.I18N.ERRORMESSAGE_SAVE_ERROR_404);},onSuccess:function(_c60){if(_c5b==false){return;}var msg=new TransparentMessage("saved");msg.show();}});};draw2d.ToolbarButtonSave.prototype.stackChanged=function(_c62){if(draw2d.Configuration.AUTOSAVE_IN_SECONDS===-1){return;}var _c63=this.execute.bind(this);if(this.saveTimer!=-1){window.clearTimeout(this.saveTimer);}this.saveTimer=_c63.delay(draw2d.Configuration.AUTOSAVE_IN_SECONDS);};