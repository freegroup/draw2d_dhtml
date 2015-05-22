draw2d.InputFieldFigure=function(){
draw2d.InputPort.call(this);
};
draw2d.InputFieldFigure.prototype=new draw2d.InputPort();
draw2d.InputFieldFigure.prototype.type="draw2d.InputFieldFigure";
draw2d.InputFieldFigure.prototype.createCommand=function(_1965){
if(_1965.getPolicy()==draw2d.EditPolicy.CONNECT){
if(_1965.source.parentNode.id==_1965.target.parentNode.id){
return null;
}
if(_1965.source instanceof draw2d.OutputPort){
return new draw2d.CommandConnect(_1965.canvas,_1965.source,_1965.target);
}
}
return draw2d.InputPort.prototype.createCommand.call(this,_1965);
};
