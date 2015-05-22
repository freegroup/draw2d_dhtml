draw2d.OutputFieldFigure=function(){
draw2d.OutputPort.call(this);
};
draw2d.OutputFieldFigure.prototype=new draw2d.OutputPort();
draw2d.OutputFieldFigure.prototype.createCommand=function(_27df){
if(_27df.getPolicy()==draw2d.EditPolicy.CONNECT){
if(_27df.source.parentNode.id==_27df.target.parentNode.id){
return null;
}
if(_27df.source instanceof draw2d.InputPort){
return new draw2d.CommandConnect(_27df.canvas,_27df.target,_27df.source);
}
return null;
}
return draw2d.Port.prototype.createCommand.call(this,_27df);
};
