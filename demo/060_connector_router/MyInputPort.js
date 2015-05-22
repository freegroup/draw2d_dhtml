draw2d.MyInputPort=function(_1fa3){
draw2d.InputPort.call(this,_1fa3);
};
draw2d.MyInputPort.prototype=new draw2d.InputPort();
draw2d.MyInputPort.prototype.type="MyInputPort";
draw2d.MyInputPort.prototype.onDrop=function(port){
if(port.getMaxFanOut&&port.getMaxFanOut()<=port.getFanOut()){
return;
}
if(this.parentNode.id==port.parentNode.id){
}else{
var _1fa5=new draw2d.CommandConnect(this.parentNode.workflow,port,this);
_1fa5.setConnection(new draw2d.ContextmenuConnection());
this.parentNode.workflow.getCommandStack().execute(_1fa5);
}
};
