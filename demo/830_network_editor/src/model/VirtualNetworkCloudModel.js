draw2d.VirtualNetworkCloudModel=function(id){
this.nodes=new draw2d.ArrayList();
this.id=id;
this.dbid="";
this.name=draw2d.Configuration.DEFAULT_NETWORK_NAME;
};
draw2d.VirtualNetworkCloudModel.prototype=new draw2d.AbstractObjectModel();
draw2d.VirtualNetworkCloudModel.prototype.type="draw2d.VirtualNetworkCloudModel";
draw2d.VirtualNetworkCloudModel.prototype.tag="vnetwork";
draw2d.VirtualNetworkCloudModel.prototype.getModelChildren=function(){
return this.nodes;
};
draw2d.VirtualNetworkCloudModel.prototype.setName=function(name){
var save=this.name;
if(save===name){
return;
}
this.name=name;
this.firePropertyChange(draw2d.AbstractCloudNodeModel.EVENT_PROPERTY_CHANGED,save,name);
};
draw2d.VirtualNetworkCloudModel.prototype.getName=function(){
return this.name;
};
draw2d.VirtualNetworkCloudModel.prototype.getConnectionModels=function(){
var _227b=new draw2d.ArrayList();
var count=this.nodes.getSize();
for(var i=0;i<count;i++){
var model=this.nodes.get(i);
_227b.addAll(model.getConnectionModels());
}
return _227b;
};
draw2d.VirtualNetworkCloudModel.prototype.getCloudNodeModels=function(){
return this.nodes;
};
draw2d.VirtualNetworkCloudModel.prototype.getServerModels=function(){
var _227f=new draw2d.ArrayList();
for(var i=0;i<this.nodes.getSize();i++){
var node=this.nodes.get(i);
if(node instanceof draw2d.ServerModel){
_227f.add(node);
}
}
return _227f;
};
draw2d.VirtualNetworkCloudModel.prototype.getSwitchModels=function(){
var _2282=new draw2d.ArrayList();
for(var i=0;i<this.nodes.getSize();i++){
var node=this.nodes.get(i);
if(node instanceof draw2d.SwitchModel){
_2282.add(node);
}
}
return _2282;
};
draw2d.VirtualNetworkCloudModel.prototype.getStorageModels=function(){
var _2285=new draw2d.ArrayList();
for(var i=0;i<this.nodes.getSize();i++){
var node=this.nodes.get(i);
if(node instanceof draw2d.StorageModel){
_2285.add(node);
}
}
return _2285;
};
draw2d.VirtualNetworkCloudModel.prototype.getMountModels=function(){
var _2288=new draw2d.ArrayList();
var cons=this.getConnectionModels();
for(var i=0;i<cons.getSize();i++){
var con=cons.get(i);
if(con instanceof draw2d.MountModel){
_2288.add(con);
}
}
return _2288;
};
draw2d.VirtualNetworkCloudModel.prototype.addCloudNodeModel=function(model){
this.nodes.add(model);
model.setModelParent(this);
this.firePropertyChange(draw2d.AbstractObjectModel.EVENT_ELEMENT_ADDED,null,model);
};
draw2d.VirtualNetworkCloudModel.prototype.removeCloudNodeModel=function(model){
if(this.nodes.remove(model)!==null){
model.setModelParent(null);
this.firePropertyChange(draw2d.AbstractObjectModel.EVENT_ELEMENT_REMOVED,model,null);
}
};
draw2d.VirtualNetworkCloudModel.prototype.getCloudNodeModel=function(_228e){
var count=this.nodes.getSize();
for(var i=0;i<count;i++){
var _2291=this.nodes.get(i);
if(_2291.getId()==_228e){
return _2291;
}
}
return null;
};
draw2d.VirtualNetworkCloudModel.prototype.getDbId=function(){
return this.dbid;
};
draw2d.VirtualNetworkCloudModel.prototype.getId=function(){
return this.id;
};
draw2d.VirtualNetworkCloudModel.prototype.setId=function(id){
this.id=id;
};
draw2d.VirtualNetworkCloudModel.prototype.getNetworkCloudModel=function(){
return this;
};
draw2d.VirtualNetworkCloudModel.prototype.getPersistentAttributes=function(){
var _2293=draw2d.AbstractCloudNodeModel.prototype.getPersistentAttributes.call(this);
_2293.attributes.id=this.id;
_2293.attributes.xmlns=this.xmlns;
_2293.attributes["xmlns:xsi"]=this["xmlns:xsi"];
_2293.attributes["xsi:schemaLocation"]=this["xsi:schemaLocation"];
if(this.dbid.length>0){
_2293.dbid=this.dbid;
}
_2293.name=this.name;
_2293.switches=this.getSwitchModels().asArray();
_2293.servers=this.getServerModels().asArray();
_2293.storage=this.getStorageModels().asArray();
_2293.mounts=this.getMountModels().asArray();
return _2293;
};
