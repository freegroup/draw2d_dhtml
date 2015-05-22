draw2d.ButtonDelete=function(_19a4){
draw2d.GenericButton.call(this,_19a4,16,16);
};
draw2d.ButtonDelete.prototype=new draw2d.GenericButton();
draw2d.ButtonDelete.prototype.type="draw2d.ButtonDelete";
draw2d.ButtonDelete.prototype.execute=function(){
this.palette.workflow.getCommandStack().execute(new draw2d.CommandRemoveCloudNode(this.palette.workflow.getCurrentSelection().getModel()));
draw2d.ToolGeneric.prototype.execute.call(this);
};
