draw2d.ToolUndo=function(_1a4d){
draw2d.Button.call(this,_1a4d);
this.setDimension(25,25);
};
draw2d.ToolUndo.prototype=new draw2d.Button();
draw2d.ToolUndo.prototype.type="ToolUndo";
draw2d.ToolUndo.prototype.execute=function(){
this.palette.workflow.getCommandStack().undo();
draw2d.ToolGeneric.prototype.execute.call(this);
};
