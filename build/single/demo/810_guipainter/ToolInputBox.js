draw2d.ToolInputBox=function(_2127){
draw2d.ToolGeneric.call(this,_2127);
this.setDimension(25,25);
};
draw2d.ToolInputBox.prototype=new draw2d.ToolGeneric;
draw2d.ToolInputBox.prototype.type="ToolInputBox";
draw2d.ToolInputBox.prototype.execute=function(x,y){
var _212a=new draw2d.InputBoxFigure();
_212a.setDimension(100,20);
var _212b=this.palette.workflow.getBestCompartmentFigure(x,y);
this.palette.workflow.getCommandStack().execute(new draw2d.CommandAdd(this.palette.workflow,_212a,x,y,_212b));
draw2d.ToolGeneric.prototype.execute.call(this,x,y);
};
