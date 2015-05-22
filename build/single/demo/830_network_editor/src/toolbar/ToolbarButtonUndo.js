draw2d.ToolbarButtonUndo=function(_2140){
draw2d.AbstractToolbarButton.call(this,_2140,draw2d.I18N.TOOLBAR_BUTTON_UNDO);
this.setEnable(false);
};
draw2d.ToolbarButtonUndo.prototype=new draw2d.AbstractToolbarButton();
draw2d.ToolbarButtonUndo.prototype.execute=function(){
this.getWorkflow().getCommandStack().undo();
};
draw2d.ToolbarButtonUndo.prototype.stackChanged=function(event){
this.setEnable(this.getWorkflow().getCommandStack().canUndo());
this.setTooltip("Undo: "+this.getWorkflow().getCommandStack().getUndoLabel());
};
