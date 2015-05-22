draw2d.ButtonDelete=function(_28fa){
draw2d.Button.call(this,_28fa,16,16);
};
draw2d.ButtonDelete.prototype=new draw2d.Button();
draw2d.ButtonDelete.prototype.type="ButtonDelete";
draw2d.ButtonDelete.prototype.execute=function(){
this.palette.workflow.getCommandStack().execute(new draw2d.CommandDelete(this.palette.workflow.getCurrentSelection()));
draw2d.ToolGeneric.prototype.execute.call(this);
};
