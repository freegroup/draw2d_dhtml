draw2d.ToolRectangle=function(_1a49){
draw2d.ToolGeneric.call(this,_1a49);
this.setDimension(24,24);
};
draw2d.ToolRectangle.prototype=new draw2d.ToolGeneric;
draw2d.ToolRectangle.prototype.type="ToolRectangle";
draw2d.ToolRectangle.prototype.execute=function(x,y){
var _1a4c=new draw2d.Rectangle();
_1a4c.setDimension(100,60);
_1a4c.setBackgroundColor(new draw2d.Color(255,255,255));
this.palette.workflow.getCommandStack().execute(new draw2d.CommandAdd(this.palette.workflow,_1a4c,x,y));
draw2d.ToolGeneric.prototype.execute.call(this,x,y);
};
