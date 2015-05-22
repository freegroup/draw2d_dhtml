draw2d.ToolRectangleUnfilled=function(_2929){
draw2d.ToolGeneric.call(this,_2929);
this.setDimension(24,24);
};
draw2d.ToolRectangleUnfilled.prototype=new draw2d.ToolGeneric;
draw2d.ToolRectangleUnfilled.prototype.type="ToolRectangleUnfilled";
draw2d.ToolRectangleUnfilled.prototype.execute=function(x,y){
var _292c=new draw2d.Rectangle();
_292c.setDimension(100,60);
this.palette.workflow.getCommandStack().execute(new draw2d.CommandAdd(this.palette.workflow,_292c,x,y));
draw2d.ToolGeneric.prototype.execute.call(this,x,y);
};
