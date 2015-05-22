draw2d.MyGraphicalEditorFactory=function(){
draw2d.EditPartFactory.call(this);
};
draw2d.MyGraphicalEditorFactory.prototype=new draw2d.EditPartFactory();
draw2d.MyGraphicalEditorFactory.prototype.type="draw2d.MyGraphicalEditorFactory";
draw2d.MyGraphicalEditorFactory.prototype.createEditPart=function(model){
var _1b54;
if(model instanceof draw2d.TableModel){
_1b54=new draw2d.TableFigure();
}
if(model instanceof draw2d.ForeignKeyModel){
_1b54=new draw2d.ForeignKeyFigure();
}
if(_1b54===null){
alert("factory called with unknown model class:"+model.type);
}
_1b54.setModel(model);
return _1b54;
};
