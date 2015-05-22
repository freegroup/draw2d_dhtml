draw2d.MyOutputPort=function(_22c3){
draw2d.OutputPort.call(this,_22c3);
};
draw2d.MyOutputPort.prototype=new draw2d.OutputPort();
draw2d.MyOutputPort.prototype.onDrop=function(port){
if(this.getMaxFanOut()<=this.getFanOut()){
return;
}
if(this.parentNode.id==port.parentNode.id){
}else{
var _22c5=new draw2d.CommandConnect(this.parentNode.workflow,this,port);
_22c5.setConnection(new draw2d.DoubleclickConnection());
this.parentNode.workflow.getCommandStack().execute(_22c5);
}
};
