draw2d.CommandAddServer=function(_1970,x,y){
draw2d.Command.call(this,"Add Server");
this.model=new draw2d.ServerModel();
this.network=_1970;
this.x=x;
this.y=y;
};
draw2d.CommandAddServer.prototype=new draw2d.Command();
draw2d.CommandAddServer.prototype.type="draw2d.CommandAddServer";
draw2d.CommandAddServer.prototype.canExecute=function(){
return true;
};
draw2d.CommandAddServer.prototype.execute=function(){
this.redo();
};
draw2d.CommandAddServer.prototype.undo=function(){
this.network.removeCloudNodeModel(this.model);
};
draw2d.CommandAddServer.prototype.redo=function(){
this.network.addCloudNodeModel(this.model);
this.model.setPosition(this.x,this.y);
};
