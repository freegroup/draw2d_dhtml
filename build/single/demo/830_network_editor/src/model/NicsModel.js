draw2d.NicsModel=function(){
draw2d.AbstractCloudNodeModel.call(this);
this.nics=new draw2d.ArrayList();
};
draw2d.NicsModel.prototype=new draw2d.AbstractCloudNodeModel();
draw2d.NicsModel.prototype.type="draw2d.NicsModel";
draw2d.NicsModel.prototype.tag="nics";
draw2d.NicsModel.prototype.addNicModel=function(model){
this.nics.add(model);
this.firePropertyChange(draw2d.AbstractObjectModel.EVENT_ELEMENT_ADDED,null,model);
};
draw2d.NicsModel.prototype.removeNicModel=function(model){
if(this.nics.remove(model)!==null){
this.firePropertyChange(draw2d.AbstractObjectModel.EVENT_ELEMENT_REMOVED,model,null);
}
};
draw2d.NicsModel.prototype.removeNic=function(nicId){
for(var i=0;i<this.nics.getSize();i++){
var nic=this.nics.get(i);
if(nic.getId()===nicId){
this.removeNicModel(nic);
break;
}
}
};
draw2d.NicsModel.prototype.getNicModel=function(nicId){
for(var i=0;i<this.nics.getSize();i++){
var nic=this.nics.get(i);
if(nic.getId()===nicId){
return nic;
}
}
return null;
};
draw2d.NicsModel.prototype.getPersistentAttributes=function(){
var _16da=draw2d.AbstractCloudNodeModel.prototype.getPersistentAttributes.call(this);
_16da.attributes.id=this.id;
_16da.nics=this.nics.asArray();
return _16da;
};
