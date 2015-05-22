draw2d.ImagesModel=function(){
draw2d.AbstractCloudNodeModel.call(this);
this.images=new draw2d.ArrayList();
};
draw2d.ImagesModel.prototype=new draw2d.AbstractCloudNodeModel();
draw2d.ImagesModel.prototype.type="draw2d.ImagesModel";
draw2d.ImagesModel.prototype.tag="images";
draw2d.ImagesModel.prototype.addImageModel=function(model){
this.images.add(model);
this.firePropertyChange(draw2d.AbstractObjectModel.EVENT_ELEMENT_ADDED,null,model);
};
draw2d.ImagesModel.prototype.removeImageModel=function(model){
if(this.images.remove(model)!==null){
this.firePropertyChange(draw2d.AbstractObjectModel.EVENT_ELEMENT_REMOVED,model,null);
}
};
draw2d.ImagesModel.prototype.getImageModels=function(){
return this.images;
};
draw2d.ImagesModel.prototype.renumber=function(){
for(var i=0;i<this.images.getSize();i++){
this.images.get(i).setIndex(i);
}
};
draw2d.ImagesModel.prototype.getPersistentAttributes=function(){
var _22d0=draw2d.AbstractCloudNodeModel.prototype.getPersistentAttributes.call(this);
this.renumber();
_22d0.img=this.images.asArray();
return _22d0;
};
