draw2d.ToolOval=function(_2b89){
draw2d.ToolGeneric.call(this,_2b89);
this.setDimension(24,24);
};
draw2d.ToolOval.prototype=new draw2d.ToolGeneric();
draw2d.ToolOval.prototype.type="ToolOval";
draw2d.ToolOval.prototype.execute=function(x,y){
var _2b8c=new draw2d.Oval();
_2b8c.setDimension(100,60);
_2b8c.setBackgroundColor(new draw2d.Color(255,255,255));
this.palette.workflow.getCommandStack().execute(new draw2d.CommandAdd(this.palette.workflow,_2b8c,x,y));
draw2d.ToolGeneric.prototype.execute.call(this,x,y);
};
