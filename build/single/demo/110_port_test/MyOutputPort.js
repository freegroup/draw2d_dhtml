draw2d.MyOutputPort=function(_26e9){
draw2d.OutputPort.call(this,_26e9);
};
draw2d.MyOutputPort.prototype=new draw2d.OutputPort();
draw2d.MyOutputPort.prototype.onDrop=function(port){
if(this.getMaxFanOut()<=this.getFanOut()){
return;
}
if(this.parentNode.id==port.parentNode.id){
}else{
var _26eb=new draw2d.CommandConnect(this.parentNode.workflow,this,port);
_26eb.setConnection(new draw2d.DecoratedConnection());
this.parentNode.workflow.getCommandStack().execute(_26eb);
}
};
