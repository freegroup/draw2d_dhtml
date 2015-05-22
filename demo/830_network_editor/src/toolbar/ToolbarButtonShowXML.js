draw2d.ToolbarButtonShowXML=function(_1b55){
draw2d.AbstractToolbarButton.call(this,_1b55,draw2d.I18N.TOOLBAR_BUTTON_SHOW_XML);
};
draw2d.ToolbarButtonShowXML.prototype=new draw2d.AbstractToolbarButton();
draw2d.ToolbarButtonShowXML.prototype.execute=function(){
var _1b56=draw2d.ModelXMLSerializer.toXML(editor.getModel());
var res="<?xml version=\"1.0\" encoding=\"ISO-8859-2\"?>\n"+_1b56;
var _1b58=window.open("","new");
_1b58.document.open("text/xml");
_1b58.document.write(res);
};
