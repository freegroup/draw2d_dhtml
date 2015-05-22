draw2d.ToolGroup=function(_18e3){
draw2d.ToolGeneric.call(this,_18e3);
this.setDimension(25,25);
this.setTooltip("Form Group");
};
draw2d.ToolGroup.prototype=new draw2d.ToolGeneric;
draw2d.ToolGroup.prototype.type="ToolGroup";
draw2d.ToolGroup.prototype.execute=function(x,y){
var _18e6=new draw2d.GroupFigure();
_18e6.setDimension(100,60);
var _18e7=this.palette.workflow.getBestCompartmentFigure(x,y);
this.palette.workflow.getCommandStack().execute(new draw2d.CommandAdd(this.palette.workflow,_18e6,x,y,_18e7));
draw2d.ToolGeneric.prototype.execute.call(this,x,y);
};
