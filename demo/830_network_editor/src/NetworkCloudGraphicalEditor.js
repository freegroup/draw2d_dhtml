draw2d.NetworkCloudGraphicalEditor=function(id,_1ac9){
draw2d.GraphicalEditor.call(this,id);
this.readonly=_1ac9;
};
draw2d.NetworkCloudGraphicalEditor.prototype=new draw2d.GraphicalEditor();
draw2d.NetworkCloudGraphicalEditor.prototype.type="draw2d.NetworkCloudGraphicalEditor";
draw2d.NetworkCloudGraphicalEditor.prototype.setModel=function(model){
try{
this.model=model;
this.getGraphicalViewer().setModel(this.model);
this.getGraphicalViewer().setEditPartFactory(new draw2d.NetworkCloudGraphicalEditorFactory(this.readonly));
this.getGraphicalViewer().setViewPort("scrollarea");
this.getGraphicalViewer().setPanning(true);
this.getGraphicalViewer().setCurrentSelection(null);
var _1acb=new draw2d.ExternalPalette(this.getGraphicalViewer(),"object_panel");
var part1=new draw2d.ServerPalettePart(model);
var part2=new draw2d.StoragePalettePart(model);
var part3=new draw2d.SwitchPalettePart(model);
_1acb.addPalettePart(part1);
part1.setPosition(20,40);
_1acb.addPalettePart(part2);
part2.setPosition(20,90);
_1acb.addPalettePart(part3);
part3.setPosition(20,140);
var _1acf=new draw2d.Toolbar("toolbar");
var _1ad0=new draw2d.ToolbarButtonGroup();
_1acf.addElement(_1ad0);
_1ad0.addElement(new draw2d.ToolbarButtonSave(this));
if(draw2d.Configuration.APPLY_XML!==null){
_1ad0.addElement(new draw2d.ToolbarButtonApply(this));
}
_1ad0.addElement(new draw2d.ToolbarButtonShowXML(this));
var _1ad1=new draw2d.ToolbarButtonGroup();
_1acf.addElement(_1ad1);
_1ad1.addElement(new draw2d.ToolbarButtonUndo(this));
_1ad1.addElement(new draw2d.ToolbarButtonRedo(this));
this.getGraphicalViewer().addSelectionListener(new draw2d.FlowMenu(editor.getGraphicalViewer()));
this.propertyPanel=new draw2d.PropertyPanel("property_panel");
this.getGraphicalViewer().addSelectionListener(this.propertyPanel);
}
catch(e){
pushErrorStack(e,"draw2d.NetworkCloudGraphicalEditor.prototype.setModel=function()");
}
};
draw2d.NetworkCloudGraphicalEditor.prototype.getCommandStack=function(){
return this.getGraphicalViewer().getCommandStack();
};
draw2d.NetworkCloudGraphicalEditor.prototype.setFatalError=function(_1ad2){
var _1ad3=document.createElement("div");
var _1ad4=document.createElement("div");
_1ad4.className="fatal_error_message";
_1ad3.className="fatal_error_overlay";
_1ad4.innerHTML="<br><br><br><br><br>"+_1ad2;
document.body.appendChild(_1ad3);
document.body.appendChild(_1ad4);
new fx.Opacity(_1ad3).setOpacity(0.3);
_1ad3.style.display="";
};
draw2d.NetworkCloudGraphicalEditor.prototype.isReadonly=function(){
return this.readonly;
};
draw2d.NetworkCloudGraphicalEditor.prototype.getModel=function(){
return this.model;
};
