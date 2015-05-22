draw2d.ServerModel=function(id){
draw2d.AbstractCloudNodeModel.call(this,id);
this.dbid="";
this.name=draw2d.Configuration.DEFAULT_SERVER_NAME;
this["cpu-units"]=draw2d.Configuration.DEFAULT_SERVER_CPUS;
this["ram-in-mb"]=draw2d.Configuration.DEFAULT_SERVER_RAM;
this.representation=new draw2d.RepresentationModel(42,42);
this.images=new draw2d.ImagesModel();
this.nics=new draw2d.NicsModel();
};
draw2d.ServerModel.prototype=new draw2d.AbstractCloudNodeModel();
draw2d.ServerModel.prototype.type="draw2d.ServerModel";
draw2d.ServerModel.prototype.tag="server";
draw2d.ServerModel.prototype.createReferenceModel=function(){
return new draw2d.ServerReferenceModel(this.id);
};
draw2d.ServerModel.prototype.setPosition=function(xPos,yPos){
xPos=Math.max(0,xPos);
yPos=Math.max(0,yPos);
var save=this.representation;
if(save.x===xPos&&save.y===yPos){
return;
}
this.representation=new draw2d.RepresentationModel(xPos,yPos);
this.firePropertyChange(draw2d.AbstractCloudNodeModel.EVENT_POSITION_CHANGED,save,this.representation);
};
draw2d.ServerModel.prototype.getPosition=function(){
return new draw2d.Point(parseInt(this.representation.x,10),parseInt(this.representation.y,10));
};
draw2d.ServerModel.prototype.setName=function(name){
var save=this["name"];
if(save===name){
return;
}
this["name"]=name;
this.firePropertyChange(draw2d.AbstractCloudNodeModel.EVENT_PROPERTY_CHANGED,save,name);
};
draw2d.ServerModel.prototype.getName=function(){
return this["name"];
};
draw2d.ServerModel.prototype.getNicsModel=function(){
return this.nics;
};
draw2d.ServerModel.prototype.setCpuUnits=function(cpu){
var save=this["cpu-units"];
if(save===cpu){
return;
}
this["cpu-units"]=cpu;
this.firePropertyChange(draw2d.AbstractCloudNodeModel.EVENT_PROPERTY_CHANGED,save,cpu);
};
draw2d.ServerModel.prototype.getCpuUnits=function(){
return this["cpu-units"];
};
draw2d.ServerModel.prototype.setRAM=function(ram){
ram=""+parseInt(ram,10);
var save=this["ram-in-mb"];
if(save===ram){
return;
}
this["ram-in-mb"]=ram;
this.firePropertyChange(draw2d.AbstractCloudNodeModel.EVENT_PROPERTY_CHANGED,save,ram);
};
draw2d.ServerModel.prototype.getRAM=function(){
return this["ram-in-mb"];
};
draw2d.ServerModel.prototype.getImagesModel=function(){
return this.images;
};
draw2d.ServerModel.prototype.addImageModel=function(image){
this.images.addImageModel(image);
this.firePropertyChange(draw2d.AbstractCloudNodeModel.EVENT_PROPERTY_CHANGED,null,image);
};
draw2d.ServerModel.prototype.removeImageModel=function(image){
this.images.removeImageModel(image);
this.firePropertyChange(draw2d.AbstractCloudNodeModel.EVENT_PROPERTY_CHANGED,image,null);
};
draw2d.ServerModel.prototype.getPersistentAttributes=function(){
var _1769=draw2d.AbstractCloudNodeModel.prototype.getPersistentAttributes.call(this);
_1769["name"]=this["name"];
_1769["cpu-units"]=this["cpu-units"];
_1769["ram-in-mb"]=this["ram-in-mb"];
if(this.dbid.length>0){
_1769.dbid=this.dbid;
}
_1769.images=this.images;
_1769.nics=this.nics;
_1769.representation=this.representation;
_1769.attributes.id=this.id;
return _1769;
};
