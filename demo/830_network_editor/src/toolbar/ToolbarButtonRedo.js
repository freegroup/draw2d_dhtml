draw2d.ToolbarButtonRedo=function(_18c1){
draw2d.AbstractToolbarButton.call(this,_18c1,draw2d.I18N.TOOLBAR_BUTTON_REDO);
this.setEnable(false);
};
draw2d.ToolbarButtonRedo.prototype=new draw2d.AbstractToolbarButton();
draw2d.ToolbarButtonRedo.prototype.execute=function(){
this.getWorkflow().getCommandStack().redo();
};
draw2d.ToolbarButtonRedo.prototype.stackChanged=function(event){
this.setEnable(this.getWorkflow().getCommandStack().canRedo());
this.setTooltip("Redo: "+this.getWorkflow().getCommandStack().getRedoLabel());
};
