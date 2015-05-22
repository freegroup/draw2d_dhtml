draw2d.RepresentationModel=function(x,y){
draw2d.AbstractCloudNodeModel.call(this);
if(x!==undefined&&x!==null){
this.x=parseInt(x,10);
}else{
this.x=42;
}
if(y!==undefined&&y!==null){
this.y=parseInt(y,10);
}else{
this.y=42;
}
};
draw2d.RepresentationModel.prototype=new draw2d.AbstractCloudNodeModel();
draw2d.RepresentationModel.prototype.type="draw2d.RepresentationModel";
draw2d.RepresentationModel.prototype.tag="representation";
draw2d.RepresentationModel.prototype.getPersistentAttributes=function(){
var _1964=draw2d.AbstractCloudNodeModel.prototype.getPersistentAttributes.call(this);
_1964.attributes.x=this.x;
_1964.attributes.y=this.y;
return _1964;
};
