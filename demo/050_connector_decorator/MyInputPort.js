draw2d.MyInputPort=function(_176a){
draw2d.InputPort.call(this,_176a);
};
draw2d.MyInputPort.prototype=new draw2d.InputPort();
draw2d.MyInputPort.prototype.type="MyInputPort";
draw2d.MyInputPort.prototype.onDrop=function(port){
if(port.getMaxFanOut&&port.getMaxFanOut()<=port.getFanOut()){
return;
}
if(this.parentNode.id==port.parentNode.id){
}else{
var _176c=new draw2d.CommandConnect(this.parentNode.workflow,port,this);
_176c.setConnection(new draw2d.DecoratedConnection());
this.parentNode.workflow.getCommandStack().execute(_176c);
}
};
