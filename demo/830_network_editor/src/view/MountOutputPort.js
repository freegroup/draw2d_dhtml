draw2d.MountOutputPort=function(){
draw2d.Port.call(this,new draw2d.ImageFigure(""+draw2d.Configuration.IMAGEPATH+"mount_port.png"));
this.setDimension(16,16);
this.setBackgroundColor(null);
this.setName("output");
};
draw2d.MountOutputPort.prototype=new draw2d.OutputPort();
draw2d.MountOutputPort.prototype.type="draw2d.MountOutputPort";
draw2d.MountOutputPort.prototype.createCommand=function(_2922){
if(_2922.getPolicy()===draw2d.EditPolicy.CONNECT){
if(_2922.source.parentNode.id===_2922.target.parentNode.id){
return null;
}
if(_2922.source instanceof draw2d.MountInputPort){
var _2923=_2922.source.getParent().getModel();
var _2924=_2922.target.getParent().getModel();
return new draw2d.CommandConnectMount(_2924,_2923);
}
return null;
}
return draw2d.OutputPort.prototype.createCommand.call(this,_2922);
};
