draw2d.MountInputPort=function(){
draw2d.Port.call(this,new draw2d.ImageFigure(""+draw2d.Configuration.IMAGEPATH+"mount_port.png"));
this.setDimension(16,16);
this.setBackgroundColor(null);
this.setName("input");
};
draw2d.MountInputPort.prototype=new draw2d.InputPort();
draw2d.MountInputPort.prototype.type="draw2d.MountInputPort";
draw2d.MountInputPort.prototype.createCommand=function(_213d){
if(_213d.getPolicy()===draw2d.EditPolicy.CONNECT){
if(_213d.source.parentNode.id===_213d.target.parentNode.id){
return null;
}
if(_213d.source instanceof draw2d.MountOutputPort){
var _213e=_213d.source.getParent().getModel();
var _213f=_213d.target.getParent().getModel();
return new draw2d.CommandConnectMount(_213e,_213f);
}
return null;
}
return draw2d.InputPort.prototype.createCommand.call(this,_213d);
};
