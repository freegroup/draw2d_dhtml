draw2d.ToolInputBox=function(_1b6d){
draw2d.ToolGeneric.call(this,_1b6d);
this.setDimension(25,25);
};
draw2d.ToolInputBox.prototype=new draw2d.ToolGeneric;
draw2d.ToolInputBox.prototype.type="ToolInputBox";
draw2d.ToolInputBox.prototype.execute=function(x,y){
var _1b70=new draw2d.InputBoxFigure();
_1b70.setDimension(100,20);
this.palette.workflow.addFigure(_1b70,x,y);
var _1b71=this.palette.workflow.getBestCompartmentFigure(x,y);
if(_1b71){
_1b71.addChild(_1b70);
}
draw2d.ToolGeneric.prototype.execute.call(this,x,y);
};
