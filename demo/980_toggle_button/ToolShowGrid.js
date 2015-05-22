draw2d.ToolShowGrid=function(_2294){
draw2d.ToggleButton.call(this,_2294);
};
draw2d.ToolShowGrid.prototype=new draw2d.ToggleButton();
draw2d.ToolShowGrid.prototype.type="ToolShowGrid";
draw2d.ToolShowGrid.prototype.execute=function(){
if(this.isDown()){
this.getToolPalette().getWorkflow().setBackgroundImage("grid_10.png",true);
}else{
this.getToolPalette().getWorkflow().setBackgroundImage(null,false);
}
};
