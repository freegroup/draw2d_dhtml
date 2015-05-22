draw2d.FieldModel=function(name){
draw2d.AbstractObjectModel.call(this);
this.name=name;
this.typeModel=new draw2d.FieldTypeModelBoolean(false);
};
draw2d.FieldModel.prototype=new draw2d.AbstractObjectModel();
draw2d.FieldModel.prototype.type="draw2d.FieldModel";
draw2d.FieldModel.DBTYPE_TEXT="TEXT";
draw2d.FieldModel.DBTYPE_DOCUMENT="DOCUMENT";
draw2d.FieldModel.DBTYPE_INTEGER="INTEGER";
draw2d.FieldModel.DBTYPE_LONG="LONG";
draw2d.FieldModel.DBTYPE_FLOAT="FLOAT";
draw2d.FieldModel.DBTYPE_DOUBLE="DOUBLE";
draw2d.FieldModel.DBTYPE_DECIMAL="DECIMAL";
draw2d.FieldModel.DBTYPE_DATE="DATE";
draw2d.FieldModel.DBTYPE_TIME="TIME";
draw2d.FieldModel.DBTYPE_TIMESTAMP="TIMESTAMP";
draw2d.FieldModel.DBTYPE_LONGTEXT="LONGTEXT";
draw2d.FieldModel.DBTYPE_BINARY="BINARY";
draw2d.FieldModel.DBTYPE_ENUM="ENUM";
draw2d.FieldModel.DBTYPE_BOOLEAN="BOOLEAN";
draw2d.FieldModel.prototype.getName=function(){
return this.name;
};
draw2d.FieldModel.prototype.getExtendedDescriptionLabel=function(){
if(this.getTypeName()==draw2d.FieldModel.DBTYPE_TEXT){
return this.getName()+" "+this.getTypeName()+"<"+this.getLengthAsString()+">";
}
return this.getName()+" "+this.getTypeName();
};
draw2d.FieldModel.prototype.getTypeName=function(){
return this.typeModel.getName();
};
draw2d.FieldModel.prototype.setTypeModel=function(_1a93){
if(!(_1a93 instanceof draw2d.FieldTypeModel)){
throw "Invalid parameter type in [FieldModel.prototype.setTypeModel]";
}
this.typeModel=_1a93;
this.typeModel.setModelParent(this);
};
draw2d.FieldModel.prototype.getTypeModel=function(){
return this.typeModel;
};
draw2d.FieldModel.prototype.getLengthAsString=function(){
var _1a94="";
if(draw2d.FieldModel.DBTYPE_TEXT==this.getTypeName()){
_1a94=Integer.toString(this.getTypeModel().getMaxLength());
if(this.getTypeModel().getFixeLength()){
_1a94="["+_1a94+"]";
}
}
return _1a94;
};
draw2d.FieldModel.prototype.getDatabaseModel=function(){
return this.getModelParent().getDatabaseModel();
};
draw2d.FieldModel.prototype.getPersistentAttributes=function(){
var att=draw2d.AbstractObjectModel.prototype.getPersistentAttributes.call(this);
att.name=this.name;
att.typeModel=this.typeModel;
return att;
};
