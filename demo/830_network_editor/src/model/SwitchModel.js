draw2d.SwitchModel=function(id){
draw2d.AbstractCloudNodeModel.call(this,id);
this.dbid="";
this.name=draw2d.Configuration.DEFAULT_SWITCH_NAME;
this.representation=new draw2d.RepresentationModel(42,42);
};
draw2d.SwitchModel.prototype=new draw2d.AbstractCloudNodeModel();
draw2d.SwitchModel.prototype.type="draw2d.SwitchModel";
draw2d.SwitchModel.prototype.tag="switch";
draw2d.SwitchModel.prototype.setName=function(name){
var save=this.name;
if(save===name){
return;
}
this.name=name;
this.firePropertyChange(draw2d.AbstractCloudNodeModel.EVENT_PROPERTY_CHANGED,save,name);
};
draw2d.SwitchModel.prototype.getName=function(){
return this.name;
};
draw2d.SwitchModel.prototype.setPosition=function(xPos,yPos){
xPos=Math.max(0,xPos);
yPos=Math.max(0,yPos);
var save=this.representation;
if(save.x===xPos&&save.y===yPos){
return;
}
this.representation=new draw2d.RepresentationModel(xPos,yPos);
this.firePropertyChange(draw2d.AbstractCloudNodeModel.EVENT_POSITION_CHANGED,save,this.representation);
};
draw2d.SwitchModel.prototype.getPosition=function(){
return new draw2d.Point(parseInt(this.representation.x,10),parseInt(this.representation.y,10));
};
draw2d.SwitchModel.prototype.getPersistentAttributes=function(){
var _225e=draw2d.AbstractCloudNodeModel.prototype.getPersistentAttributes.call(this);
_225e.attributes.id=this.id;
if(this.dbid.length>0){
_225e.dbid=this.dbid;
}
_225e.name=this.name;
_225e.representation=this.representation;
return _225e;
};
