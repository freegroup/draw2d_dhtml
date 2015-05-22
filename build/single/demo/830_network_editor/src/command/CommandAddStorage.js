draw2d.CommandAddStorage=function(_1784,x,y){
draw2d.Command.call(this,"Add Storage");
this.model=new draw2d.StorageModel();
this.network=_1784;
this.x=x;
this.y=y;
};
draw2d.CommandAddStorage.prototype=new draw2d.Command();
draw2d.CommandAddStorage.prototype.type="draw2d.CommandAddStorage";
draw2d.CommandAddStorage.prototype.canExecute=function(){
return true;
};
draw2d.CommandAddStorage.prototype.execute=function(){
this.redo();
};
draw2d.CommandAddStorage.prototype.undo=function(){
this.network.removeCloudNodeModel(this.model);
};
draw2d.CommandAddStorage.prototype.redo=function(){
this.network.addCloudNodeModel(this.model);
this.model.setPosition(this.x,this.y);
};
