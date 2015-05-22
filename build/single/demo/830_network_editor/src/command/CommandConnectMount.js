draw2d.CommandConnectMount=function(_1ac5,_1ac6){
draw2d.Command.call(this,"Connect Storage");
this.source=_1ac5;
this.target=_1ac6;
this.model=null;
if(this.source===null||this.target===null){
throw "Source and target must be set to create a new  draw2d.CommandConnectNodes object";
}
};
draw2d.CommandConnectMount.prototype=new draw2d.Command();
draw2d.CommandConnectMount.prototype.type="draw2d.CommandConnectMount";
draw2d.CommandConnectMount.prototype.setConnection=function(_1ac7){
this.connection=_1ac7;
};
draw2d.CommandConnectMount.prototype.execute=function(){
this.redo();
};
draw2d.CommandConnectMount.prototype.redo=function(){
if(this.model===null){
this.model=new draw2d.MountModel(this.source.getId(),this.target.getId());
}
this.source.addConnectionModel(this.model);
};
draw2d.CommandConnectMount.prototype.undo=function(){
this.source.removeConnectionModel(this.model);
};
