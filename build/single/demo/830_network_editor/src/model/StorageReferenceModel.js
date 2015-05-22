draw2d.StorageReferenceModel=function(_2010){
draw2d.AbstractCloudNodeModel.call(this);
this.reference=_2010;
};
draw2d.StorageReferenceModel.prototype=new draw2d.AbstractCloudNodeModel();
draw2d.StorageReferenceModel.prototype.type="draw2d.StorageReferenceModel";
draw2d.StorageReferenceModel.prototype.tag="storage";
draw2d.StorageReferenceModel.prototype.getPersistentAttributes=function(){
var _2011=draw2d.AbstractCloudNodeModel.prototype.getPersistentAttributes.call(this);
_2011.attributes.reference=this.reference;
return _2011;
};
