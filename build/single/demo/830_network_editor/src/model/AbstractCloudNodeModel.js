draw2d.AbstractCloudNodeModel=function(id){
draw2d.AbstractObjectModel.call(this);
if(id!==undefined&&id!==null){
this.id=id;
draw2d.IdGenerator.reserve(this.id);
}else{
this.id=draw2d.IdGenerator.getNext();
}
this.connections=new draw2d.ArrayList();
};
draw2d.AbstractCloudNodeModel.EVENT_PROPERTY_CHANGED="property changed";
draw2d.AbstractCloudNodeModel.EVENT_POSITION_CHANGED="position changed";
draw2d.AbstractCloudNodeModel.prototype=new draw2d.AbstractObjectModel();
draw2d.AbstractCloudNodeModel.prototype.type="draw2d.AbstractCloudNodeModel";
draw2d.AbstractCloudNodeModel.prototype.setId=function(id){
var save=this.id;
this.id=id;
this.firePropertyChange(draw2d.AbstractCloudNodeModel.EVENT_ID_CHANGED,save,this.id);
};
draw2d.AbstractCloudNodeModel.prototype.getId=function(){
return this.id;
};
draw2d.AbstractCloudNodeModel.prototype.getNetworkCloudModel=function(){
return this.getModelParent().getNetworkCloudModel();
};
draw2d.AbstractCloudNodeModel.prototype.getConnectionModels=function(){
return this.connections;
};
draw2d.AbstractCloudNodeModel.prototype.addConnectionModel=function(_22c0){
if(!(_22c0 instanceof draw2d.AbstractConnectionModel)){
throw "Invalid parameter type in [AbstractCloudNodeModel.prototype.addConnectionModel]";
}
if(this.connections.indexOf(_22c0)===-1){
this.connections.add(_22c0);
_22c0.setModelParent(this);
this.firePropertyChange(draw2d.AbstractObjectModel.EVENT_CONNECTION_ADDED,null,_22c0);
}
};
draw2d.AbstractCloudNodeModel.prototype.removeConnectionModel=function(_22c1){
if(!(_22c1 instanceof draw2d.AbstractConnectionModel)){
throw "Invalid parameter type in [AbstractCloudNodeModel.prototype.removeConnectionModel]";
}
if(this.connections.remove(_22c1)!==null){
_22c1.setModelParent(null);
this.firePropertyChange(draw2d.AbstractObjectModel.EVENT_CONNECTION_REMOVED,_22c1,null);
}
};
draw2d.AbstractCloudNodeModel.prototype.getPersistentAttributes=function(){
var _22c2={attributes:{}};
return _22c2;
};
