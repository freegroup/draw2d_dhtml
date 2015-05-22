draw2d.ToolbarButtonSave=function(_226e){
draw2d.AbstractToolbarButton.call(this,_226e,draw2d.I18N.TOOLBAR_BUTTON_SAVE_XML);
this.saveTimer=-1;
};
draw2d.ToolbarButtonSave.prototype=new draw2d.AbstractToolbarButton();
draw2d.ToolbarButtonSave.prototype.execute=function(){
var _226f=true;
if(this.saveTimer!==-1&&draw2d.Drag.current!==null){
var _2270=this.execute.bind(this);
this.saveTimer=_2270.delay(draw2d.Configuration.AUTOSAVE_IN_SECONDS);
return;
}
if(this.saveTimer!==-1){
_226f=false;
}
this.saveTimer=-1;
var _2271=draw2d.ModelXMLSerializer.toXML(editor.getModel());
var req=new Ajax.Request(draw2d.Configuration.SAVE_XML,{method:"post",parameters:{xml:documentId,content:_2271},onFailure:function(_2273){
alert(draw2d.I18N.ERRORMESSAGE_SAVE_ERROR_404);
},onSuccess:function(_2274){
if(_226f==false){
return;
}
var msg=new TransparentMessage("saved");
msg.show();
}});
};
draw2d.ToolbarButtonSave.prototype.stackChanged=function(event){
if(draw2d.Configuration.AUTOSAVE_IN_SECONDS===-1){
return;
}
var _2277=this.execute.bind(this);
if(this.saveTimer!=-1){
window.clearTimeout(this.saveTimer);
}
this.saveTimer=_2277.delay(draw2d.Configuration.AUTOSAVE_IN_SECONDS);
};
