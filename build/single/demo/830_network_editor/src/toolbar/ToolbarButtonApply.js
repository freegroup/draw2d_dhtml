draw2d.ToolbarButtonApply=function(_2029){
draw2d.AbstractToolbarButton.call(this,_2029,draw2d.I18N.TOOLBAR_BUTTON_APPLY_XML);
};
draw2d.ToolbarButtonApply.prototype=new draw2d.AbstractToolbarButton();
draw2d.ToolbarButtonApply.prototype.execute=function(){
var _202a=draw2d.ModelXMLSerializer.toXML(editor.getModel());
var req=new Ajax.Request(draw2d.Configuration.APPLY_XML,{method:"post",parameters:{xml:documentId,content:_202a},onFailure:function(_202c){
alert(draw2d.I18N.ERRORMESSAGE_APPLY_ERROR_404);
},onSuccess:function(_202d){
var msg=new TransparentMessage("Configuration Applied");
msg.show();
}});
};
