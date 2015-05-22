draw2d.ToolFormButton=function(_1735){
draw2d.ToolGeneric.call(this,_1735);
this.setDimension(25,25);
};
draw2d.ToolFormButton.prototype=new draw2d.ToolGeneric;
draw2d.ToolFormButton.prototype.type="ToolFormButton";
draw2d.ToolFormButton.prototype.execute=function(x,y){
var _1738=new draw2d.ButtonFigure();
_1738.setDimension(100,20);
var _1739=this.palette.workflow.getBestCompartmentFigure(x,y);
this.palette.workflow.getCommandStack().execute(new draw2d.CommandAdd(this.palette.workflow,_1738,x,y,_1739));
draw2d.ToolGeneric.prototype.execute.call(this,x,y);
};
