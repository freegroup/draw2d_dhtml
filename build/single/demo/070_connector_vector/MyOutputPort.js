draw2d.MyOutputPort=function(_2169){
draw2d.OutputPort.call(this,_2169);
};
draw2d.MyOutputPort.prototype=new draw2d.OutputPort();
draw2d.MyOutputPort.prototype.onDrop=function(port){
if(this.getMaxFanOut()<=this.getFanOut()){
return;
}
if(this.parentNode.id==port.parentNode.id){
}else{
var _216b=new draw2d.CommandConnect(this.parentNode.workflow,this,port);
_216b.setConnection(new draw2d.ArrowConnection());
this.parentNode.workflow.getCommandStack().execute(_216b);
}
};
