draw2d.NicInputPort=function(){
draw2d.Port.call(this,new draw2d.ImageFigure(""+draw2d.Configuration.IMAGEPATH+"nic_port.png"));
this.setDimension(16,16);
this.setBackgroundColor(null);
this.setName("input");
};
draw2d.NicInputPort.prototype=new draw2d.InputPort();
draw2d.NicInputPort.prototype.type="draw2d.NicInputPort";
draw2d.NicInputPort.prototype.createCommand=function(_2180){
if(_2180.getPolicy()===draw2d.EditPolicy.CONNECT){
if(_2180.source.parentNode.id==_2180.target.parentNode.id){
return null;
}
if(_2180.source instanceof draw2d.NicOutputPort){
var _2181=_2180.source.getParent().getModel();
var _2182=_2180.target.getParent().getModel();
return new draw2d.CommandConnectNic(_2181,_2182);
}
return null;
}
return draw2d.InputPort.prototype.createCommand.call(this,_2180);
};
