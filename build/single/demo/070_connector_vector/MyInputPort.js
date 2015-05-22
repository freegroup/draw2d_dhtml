draw2d.MyInputPort=function(_25ef){
draw2d.InputPort.call(this,_25ef);
};
draw2d.MyInputPort.prototype=new draw2d.InputPort();
draw2d.MyInputPort.prototype.onDrop=function(port){
if(port.getMaxFanOut&&port.getMaxFanOut()<=port.getFanOut()){
return;
}
if(this.parentNode.id==port.parentNode.id){
}else{
var _25f1=new draw2d.CommandConnect(this.parentNode.workflow,port,this);
_25f1.setConnection(new draw2d.ArrowConnection());
this.parentNode.workflow.getCommandStack().execute(_25f1);
}
};
