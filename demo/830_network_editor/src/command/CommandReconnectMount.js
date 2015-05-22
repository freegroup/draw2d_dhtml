draw2d.CommandReconnectMount=function(con){
draw2d.Command.call(this,"Reconnect Storage");
this.con=con;
this.oldSourceModel=con.getSourceModel();
this.oldTargetModel=con.getTargetModel();
};
draw2d.CommandReconnectMount.prototype=new draw2d.Command();
draw2d.CommandReconnectMount.prototype.type="draw2d.CommandReconnectMount";
draw2d.CommandReconnectMount.prototype.canExecute=function(){
return true;
};
draw2d.CommandReconnectMount.prototype.setNewPorts=function(_1ffb,_1ffc){
this.newSourceModel=_1ffb.getParent().getModel();
this.newTargetModel=_1ffc.getParent().getModel();
};
draw2d.CommandReconnectMount.prototype.execute=function(){
this.redo();
};
draw2d.CommandReconnectMount.prototype.cancel=function(){
this.con.setSourceModel(this.oldSourceModel);
this.con.setTargetModel(this.oldTargetModel);
};
draw2d.CommandReconnectMount.prototype.undo=function(){
this.con.setSourceModel(this.oldSourceModel);
this.con.setTargetModel(this.oldTargetModel);
};
draw2d.CommandReconnectMount.prototype.redo=function(){
this.con.setSourceModel(this.newSourceModel);
this.con.setTargetModel(this.newTargetModel);
};
