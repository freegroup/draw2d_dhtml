draw2d.StorageModel=function(id){
draw2d.AbstractCloudNodeModel.call(this,id);
this.dbid="";
this["storage-in-mb"]=draw2d.Configuration.DEFAULT_STORAGE_MB;
this.qualifier=draw2d.Configuration.DEFAULT_STORAGE_QUALIFIER;
this.representation=new draw2d.RepresentationModel(42,42);
};
draw2d.StorageModel.prototype=new draw2d.AbstractCloudNodeModel();
draw2d.StorageModel.prototype.type="draw2d.StorageModel";
draw2d.StorageModel.prototype.tag="storage";
draw2d.StorageModel.QUALIFIER=new draw2d.ArrayList();
draw2d.StorageModel.QUALIFIER.add("ultra-fast");
draw2d.StorageModel.QUALIFIER.add("fast");
draw2d.StorageModel.QUALIFIER.add("normal");
draw2d.StorageModel.QUALIFIER.add("slow");
draw2d.StorageModel.QUALIFIER.add("dead-slow");
draw2d.StorageModel.QUALIFIER.add("i-dont-care");
draw2d.StorageModel.prototype.createReferenceModel=function(){
return new draw2d.StorageReferenceModel(this.id);
};
draw2d.StorageModel.prototype.setPosition=function(xPos,yPos){
xPos=Math.max(0,xPos);
yPos=Math.max(0,yPos);
var save=this.representation;
if(save.x===xPos&&save.y===yPos){
return;
}
this.representation=new draw2d.RepresentationModel(xPos,yPos);
this.firePropertyChange(draw2d.AbstractCloudNodeModel.EVENT_POSITION_CHANGED,save,this.representation);
};
draw2d.StorageModel.prototype.getPosition=function(){
return new draw2d.Point(parseInt(this.representation.x,10),parseInt(this.representation.y,10));
};
draw2d.StorageModel.prototype.setStorage=function(_28b7){
_28b7=""+parseInt(_28b7,10);
var save=this["storage-in-mb"];
if(save===_28b7){
return;
}
this["storage-in-mb"]=_28b7;
this.firePropertyChange(draw2d.AbstractCloudNodeModel.EVENT_PROPERTY_CHANGED,save,_28b7);
};
draw2d.StorageModel.prototype.getStorage=function(){
return this["storage-in-mb"];
};
draw2d.StorageModel.prototype.setQualifier=function(_28b9){
var save=this.qualifier;
if(save===_28b9){
return;
}
if(draw2d.StorageModel.QUALIFIER.indexOf(_28b9)===-1){
return;
}
this.qualifier=_28b9;
this.firePropertyChange(draw2d.AbstractCloudNodeModel.EVENT_PROPERTY_CHANGED,save,_28b9);
};
draw2d.StorageModel.prototype.getQualifier=function(){
return this.qualifier;
};
draw2d.StorageModel.prototype.getPersistentAttributes=function(){
var _28bb=draw2d.AbstractCloudNodeModel.prototype.getPersistentAttributes.call(this);
_28bb["storage-in-mb"]=this["storage-in-mb"];
_28bb.representation=this.representation;
_28bb.attributes.id=this.id;
_28bb.attributes.qualifier=this.qualifier;
return _28bb;
};
