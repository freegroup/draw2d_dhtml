draw2d.FieldTypeModel=function(name){
draw2d.AbstractObjectModel.call(this);
this.name=name;
this.parent=null;
};
draw2d.FieldTypeModel.prototype=new draw2d.AbstractObjectModel();
draw2d.FieldTypeModel.prototype.type="draw2d.FieldTypeModel";
draw2d.FieldTypeModel.prototype.getName=function(){
return this.name;
};
draw2d.FieldTypeModel.prototype.getDatabaseModel=function(){
return this.getModelParent().getDatabaseModel();
};
draw2d.FieldTypeModel.prototype.getPersistentAttributes=function(){
var att=draw2d.AbstractObjectModel.prototype.getPersistentAttributes.call(this);
att.name=this.name;
return att;
};
