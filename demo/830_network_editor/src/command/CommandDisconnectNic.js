draw2d.CommandDisconnectNic=function(_1710){
draw2d.Command.call(this,"Disconnect Switch");
this.connection=_1710;
this.source=this.connection.getModelParent();
};
draw2d.CommandDisconnectNic.prototype=new draw2d.Command();
draw2d.CommandDisconnectNic.prototype.type="draw2d.CommandDisconnectNic";
draw2d.CommandDisconnectNic.prototype.execute=function(){
this.redo();
};
draw2d.CommandDisconnectNic.prototype.redo=function(){
this.source.removeConnectionModel(this.connection);
this.source.getNicsModel().removeNicModel(this.connection.nicModel);
};
draw2d.CommandDisconnectNic.prototype.undo=function(){
this.source.addConnectionModel(this.connection);
this.source.getNicsModel().addNicModel(this.connection.nicModel);
};
