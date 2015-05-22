draw2d.CommandMoveCloudNode=function(model){
draw2d.Command.call(this,"Move Element");
this.model=model;
this.oldX=model.getPosition().getX();
this.oldY=model.getPosition().getY();
};
draw2d.CommandMoveCloudNode.prototype=new draw2d.Command();
draw2d.CommandMoveCloudNode.prototype.type="draw2d.CommandMoveCloudNode";
draw2d.CommandMoveCloudNode.prototype.setPosition=function(x,y){
this.newX=x;
this.newY=y;
};
draw2d.CommandMoveCloudNode.prototype.canExecute=function(){
return this.newX!==this.oldX||this.newY!==this.oldY;
};
draw2d.CommandMoveCloudNode.prototype.execute=function(){
this.redo();
};
draw2d.CommandMoveCloudNode.prototype.undo=function(){
this.model.setPosition(this.oldX,this.oldY);
};
draw2d.CommandMoveCloudNode.prototype.redo=function(){
this.model.setPosition(this.newX,this.newY);
};
