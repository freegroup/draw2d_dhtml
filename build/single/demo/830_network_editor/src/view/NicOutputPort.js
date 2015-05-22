draw2d.NicOutputPort=function(){
draw2d.Port.call(this,new draw2d.ImageFigure(""+draw2d.Configuration.IMAGEPATH+"nic_port.png"));
this.setDimension(16,16);
this.setBackgroundColor(null);
this.setName("output");
};
draw2d.NicOutputPort.prototype=new draw2d.OutputPort();
draw2d.NicOutputPort.prototype.type="draw2d.NicOutputPort";
draw2d.NicOutputPort.prototype.createCommand=function(_1777){
if(_1777.getPolicy()==draw2d.EditPolicy.CONNECT){
if(_1777.source.parentNode.id==_1777.target.parentNode.id){
return null;
}
if(_1777.source instanceof draw2d.NicInputPort){
var _1778=_1777.source.getParent().getModel();
var _1779=_1777.target.getParent().getModel();
return new draw2d.CommandConnectNic(_1779,_1778);
}
return null;
}
return draw2d.OutputPort.prototype.createCommand.call(this,_1777);
};
