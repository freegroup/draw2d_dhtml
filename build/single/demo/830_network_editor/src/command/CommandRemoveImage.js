draw2d.CommandRemoveImage=function(view,_1b10,image){
draw2d.Command.call(this,"Remove Image from Server");
this.server=_1b10;
this.image=image;
this.view=view;
this.objToSelect=this.view.getCurrentSelection();
};
draw2d.CommandRemoveImage.prototype=new draw2d.Command();
draw2d.CommandRemoveImage.prototype.type="draw2d.CommandRemoveImage";
draw2d.CommandRemoveImage.prototype.canExecute=function(){
return true;
};
draw2d.CommandRemoveImage.prototype.execute=function(){
this.redo();
};
draw2d.CommandRemoveImage.prototype.redo=function(){
this.server.removeImageModel(this.image);
this.view.setCurrentSelection(null);
this.view.setCurrentSelection(this.objToSelect);
};
draw2d.CommandRemoveImage.prototype.undo=function(){
this.server.addImageModel(this.image);
this.view.setCurrentSelection(null);
this.view.setCurrentSelection(this.objToSelect);
};
