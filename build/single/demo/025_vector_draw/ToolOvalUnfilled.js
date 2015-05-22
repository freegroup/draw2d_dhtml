draw2d.ToolOvalUnfilled=function(_1973){
draw2d.ToolGeneric.call(this,_1973);
this.setDimension(24,24);
};
draw2d.ToolOvalUnfilled.prototype=new draw2d.ToolGeneric();
draw2d.ToolOvalUnfilled.prototype.type="ToolOvalUnfilled";
draw2d.ToolOvalUnfilled.prototype.execute=function(x,y){
var _1976=new draw2d.Oval();
_1976.setDimension(100,60);
this.palette.workflow.getCommandStack().execute(new draw2d.CommandAdd(this.palette.workflow,_1976,x,y));
draw2d.ToolGeneric.prototype.execute.call(this,x,y);
};
