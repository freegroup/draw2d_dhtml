draw2d.ToolClear=function(_22ef){
draw2d.Button.call(this,_22ef);
this.setDimension(25,25);
};
draw2d.ToolClear.prototype=new draw2d.Button();
draw2d.ToolClear.prototype.type="ToolClear";
draw2d.ToolClear.prototype.execute=function(){
this.palette.workflow.clear();
draw2d.ToolGeneric.prototype.execute.call(this);
};
