draw2d.CommandReconnectNic=function(con){
draw2d.Command.call(this,"Reconnect Switch");
this.con=con;
this.oldSourceModel=con.getSourceModel();
this.oldTargetModel=con.getTargetModel();
};
draw2d.CommandReconnectNic.prototype=new draw2d.Command();
draw2d.CommandReconnectNic.prototype.type="draw2d.CommandReconnectNic";
draw2d.CommandReconnectNic.prototype.canExecute=function(){
return true;
};
draw2d.CommandReconnectNic.prototype.setNewPorts=function(_15ac,_15ad){
this.newSourceModel=_15ac.getParent().getModel();
this.newTargetModel=_15ad.getParent().getModel();
};
draw2d.CommandReconnectNic.prototype.execute=function(){
this.redo();
};
draw2d.CommandReconnectNic.prototype.cancel=function(){
this.con.setSourceModel(this.oldSourceModel);
this.con.setTargetModel(this.oldTargetModel);
};
draw2d.CommandReconnectNic.prototype.undo=function(){
this.con.setSourceModel(this.oldSourceModel);
this.con.setTargetModel(this.oldTargetModel);
};
draw2d.CommandReconnectNic.prototype.redo=function(){
this.con.setSourceModel(this.newSourceModel);
this.con.setTargetModel(this.newTargetModel);
};
