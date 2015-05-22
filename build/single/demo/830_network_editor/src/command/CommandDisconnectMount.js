draw2d.CommandDisconnectMount=function(_290b){
draw2d.Command.call(this,"Disconnect Storage");
this.connection=_290b;
this.source=this.connection.getModelParent();
};
draw2d.CommandDisconnectMount.prototype=new draw2d.Command();
draw2d.CommandDisconnectMount.prototype.type="draw2d.CommandDisconnectMount";
draw2d.CommandDisconnectMount.prototype.execute=function(){
this.redo();
};
draw2d.CommandDisconnectMount.prototype.redo=function(){
this.source.removeConnectionModel(this.connection);
};
draw2d.CommandDisconnectMount.prototype.undo=function(){
this.source.addConnectionModel(this.connection);
};
