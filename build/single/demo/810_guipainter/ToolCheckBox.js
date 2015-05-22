draw2d.ToolCheckBox=function(_2c8c){
draw2d.ToolGeneric.call(this,_2c8c);
this.setDimension(25,25);
};
draw2d.ToolCheckBox.prototype=new draw2d.ToolGeneric;
draw2d.ToolCheckBox.prototype.type="ToolCheckBox";
draw2d.ToolCheckBox.prototype.execute=function(x,y){
var _2c8f=new draw2d.CheckBoxFigure();
_2c8f.setDimension(100,20);
var _2c90=this.palette.workflow.getBestCompartmentFigure(x,y);
this.palette.workflow.getCommandStack().execute(new draw2d.CommandAdd(this.palette.workflow,_2c8f,x,y,_2c90));
draw2d.ToolGeneric.prototype.execute.call(this,x,y);
};
