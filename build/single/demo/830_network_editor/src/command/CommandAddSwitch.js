draw2d.CommandAddSwitch=function(_225f,x,y){
draw2d.Command.call(this,"Add Switch");
this.model=new draw2d.SwitchModel();
this.network=_225f;
this.x=x;
this.y=y;
};
draw2d.CommandAddSwitch.prototype=new draw2d.Command();
draw2d.CommandAddSwitch.prototype.type="draw2d.CommandAddSwitch";
draw2d.CommandAddSwitch.prototype.canExecute=function(){
return true;
};
draw2d.CommandAddSwitch.prototype.execute=function(){
this.redo();
};
draw2d.CommandAddSwitch.prototype.undo=function(){
this.network.removeCloudNodeModel(this.model);
};
draw2d.CommandAddSwitch.prototype.redo=function(){
this.network.addCloudNodeModel(this.model);
this.model.setPosition(this.x,this.y);
};
