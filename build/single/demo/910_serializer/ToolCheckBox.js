draw2d.ToolCheckBox=function(_2b8d){
draw2d.ToolGeneric.call(this,_2b8d);
this.setDimension(25,25);
};
draw2d.ToolCheckBox.prototype=new draw2d.ToolGeneric;
draw2d.ToolCheckBox.prototype.type="ToolCheckBox";
draw2d.ToolCheckBox.prototype.execute=function(x,y){
var _2b90=new draw2d.CheckBoxFigure();
_2b90.setDimension(100,20);
this.palette.workflow.addFigure(_2b90,x,y);
var _2b91=this.palette.workflow.getBestCompartmentFigure(x,y);
if(_2b91){
_2b91.addChild(_2b90);
}
draw2d.ToolGeneric.prototype.execute.call(this,x,y);
};
