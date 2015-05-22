draw2d.SwitchReferenceModel=function(_22a6){
draw2d.AbstractCloudNodeModel.call(this);
this.reference=_22a6;
};
draw2d.SwitchReferenceModel.prototype=new draw2d.AbstractCloudNodeModel();
draw2d.SwitchReferenceModel.prototype.type="draw2d.SwitchReferenceModel";
draw2d.SwitchReferenceModel.prototype.tag="switch";
draw2d.SwitchReferenceModel.prototype.getReference=function(){
return this.reference;
};
draw2d.SwitchReferenceModel.prototype.getPersistentAttributes=function(){
var _22a7=draw2d.AbstractCloudNodeModel.prototype.getPersistentAttributes.call(this);
_22a7.attributes.reference=this.reference;
return _22a7;
};
