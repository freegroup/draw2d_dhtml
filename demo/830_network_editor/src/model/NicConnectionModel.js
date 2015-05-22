draw2d.NicConnectionModel=function(_1b03,_1b04,id){
draw2d.AbstractConnectionModel.call(this);
this.sourceNodeId=_1b03;
this.sourcePort="output";
this.targetNodeId=_1b04;
this.targetPort="input";
if(id!==undefined&&id!==null){
this.id=id;
draw2d.IdGenerator.reserve(this.id);
}else{
this.id=draw2d.IdGenerator.getNext();
}
this.nicModel=null;
this.dbid="";
};
draw2d.NicConnectionModel.EVENT_SOURCE_CHANGED="source changed";
draw2d.NicConnectionModel.EVENT_TARGET_CHANGED="target changed";
draw2d.NicConnectionModel.EVENT_PROPERTY_CHANGED="property changed";
draw2d.NicConnectionModel.prototype=new draw2d.AbstractConnectionModel();
draw2d.NicConnectionModel.prototype.type="draw2d.NicConnectionModel";
draw2d.NicConnectionModel.prototype.tag="<unused>";
draw2d.NicConnectionModel.prototype.setIpAddress=function(ip){
this.nicModel.setIpAddress(ip);
};
draw2d.NicConnectionModel.prototype.getIpAddress=function(){
return this.nicModel.getIpAddress();
};
draw2d.NicConnectionModel.prototype.setSourceModel=function(model){
var save1=this.sourceNodeId;
var save2=this.sourcePort;
this.sourceNodeId=model.getId();
this.sourcePort="output";
if(save1===this.sourceNodeId&&save2===this.sourcePort){
return;
}
this.firePropertyChange(draw2d.MountModel.EVENT_SOURCE_CHANGED,null,model);
};
draw2d.NicConnectionModel.prototype.getSourceModel=function(){
return this.getNetworkCloudModel().getCloudNodeModel(this.sourceNodeId);
};
draw2d.NicConnectionModel.prototype.setTargetModel=function(model){
var save1=this.targetNodeId;
var save2=this.targetPort;
this.targetNodeId=model.getId();
this.targetField="input";
if(save1===this.targetNodeId&&save2===this.targetPort){
return;
}
this.firePropertyChange(draw2d.MountModel.EVENT_TARGET_CHANGED,null,model);
};
draw2d.NicConnectionModel.prototype.getTargetModel=function(){
return this.getNetworkCloudModel().getCloudNodeModel(this.targetNodeId);
};
draw2d.NicConnectionModel.prototype.getSourcePortName=function(){
return this.sourcePort;
};
draw2d.NicConnectionModel.prototype.getTargetPortName=function(){
return this.targetPort;
};
draw2d.NicConnectionModel.prototype.getNetworkCloudModel=function(){
return this.getModelParent().getNetworkCloudModel();
};
draw2d.NicConnectionModel.prototype.getPersistentAttributes=function(){
var _1b0d={attributes:{}};
return _1b0d;
};
