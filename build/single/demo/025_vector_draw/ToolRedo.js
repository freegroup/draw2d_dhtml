draw2d.ToolRedo=function(_2b80){
draw2d.Button.call(this,_2b80);
this.setDimension(24,24);
};
draw2d.ToolRedo.prototype=new draw2d.Button();
draw2d.ToolRedo.prototype.type="ToolRedo";
draw2d.ToolRedo.prototype.execute=function(){
this.getWorkflow().getCommandStack().redo();
};
