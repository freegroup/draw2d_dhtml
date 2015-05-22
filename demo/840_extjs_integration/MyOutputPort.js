draw2d.MyOutputPort=function(_2b81){
draw2d.OutputPort.call(this,_2b81);
};
draw2d.MyOutputPort.prototype=new draw2d.OutputPort();
draw2d.MyOutputPort.prototype.type="MyOutputPort";
draw2d.MyOutputPort.prototype.onDrop=function(port){
if(this.getMaxFanOut()<=this.getFanOut()){
return;
}
if(this.parentNode.id==port.parentNode.id){
}else{
var _2b83=new draw2d.CommandConnect(this.parentNode.workflow,this,port);
_2b83.setConnection(new draw2d.ContextmenuConnection());
this.parentNode.workflow.getCommandStack().execute(_2b83);
}
};
