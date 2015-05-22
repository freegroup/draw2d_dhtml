draw2d.ToolGroup=function(_2133){
draw2d.ToolGeneric.call(this,_2133);
this.setDimension(25,25);
this.setTooltip("Form Group");
};
draw2d.ToolGroup.prototype=new draw2d.ToolGeneric;
draw2d.ToolGroup.prototype.type="ToolGroup";
draw2d.ToolGroup.prototype.execute=function(x,y){
var _2136=new draw2d.GroupFigure();
_2136.setDimension(100,60);
this.palette.workflow.addFigure(_2136,x,y);
draw2d.ToolGeneric.prototype.execute.call(this,x,y);
};
