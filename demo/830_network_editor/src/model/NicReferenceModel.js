draw2d.NicReferenceModel=function(_28f7){
draw2d.AbstractCloudNodeModel.call(this);
this.reference=_28f7;
};
draw2d.NicReferenceModel.prototype=new draw2d.AbstractCloudNodeModel();
draw2d.NicReferenceModel.prototype.type="draw2d.NicReferenceModel";
draw2d.NicReferenceModel.prototype.tag="nic";
draw2d.NicReferenceModel.prototype.getPersistentAttributes=function(){
var _28f8={attributes:{}};
_28f8.attributes.reference=this.reference;
return _28f8;
};
