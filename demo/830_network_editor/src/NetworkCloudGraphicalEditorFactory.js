draw2d.NetworkCloudGraphicalEditorFactory=function(_1faf){
this.readonly=_1faf;
draw2d.EditPartFactory.call(this);
};
draw2d.NetworkCloudGraphicalEditorFactory.prototype=new draw2d.EditPartFactory();
draw2d.NetworkCloudGraphicalEditorFactory.prototype.type="draw2d.NetworkCloudGraphicalEditorFactory";
draw2d.NetworkCloudGraphicalEditorFactory.prototype.createEditPart=function(model){
var _1fb1=null;
if(model instanceof draw2d.ServerModel){
_1fb1=new draw2d.ServerFigure();
}else{
if(model instanceof draw2d.StorageModel){
_1fb1=new draw2d.StorageFigure();
}else{
if(model instanceof draw2d.SwitchModel){
_1fb1=new draw2d.SwitchFigure();
}else{
if(model instanceof draw2d.MountModel){
_1fb1=new draw2d.MountFigure();
}else{
if(model instanceof draw2d.NicConnectionModel){
_1fb1=new draw2d.NicConnectionFigure();
}
}
}
}
}
if(_1fb1===null){
throw "factory called with unknown model class:"+model.type;
}
_1fb1.setModel(model);
if(this.readonly){
_1fb1.setDeleteable(false);
_1fb1.setCanDrag(false);
}
return _1fb1;
};
