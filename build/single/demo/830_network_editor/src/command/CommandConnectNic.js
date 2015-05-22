draw2d.CommandConnectNic=function(_202f,_2030){
draw2d.Command.call(this,"Connect Switch");
if(_202f===null||_2030===null){
throw "Source and target must be set to create a new  draw2d.CommandConnectNodes object (draw2d.CommandConnectNic.constructor)";
}
if(!(_202f instanceof draw2d.ServerModel)){
throw "Source must be type of class draw2d.ServerModel. (draw2d.CommandConnectNic.constructor)";
}
if(!(_2030 instanceof draw2d.SwitchModel)){
throw "Target must be type of class draw2d.SwitchModel. (draw2d.CommandConnectNic.constructor)";
}
this.source=_202f;
this.target=_2030;
this.model=null;
};
draw2d.CommandConnectNic.prototype=new draw2d.Command();
draw2d.CommandConnectNic.prototype.type="draw2d.CommandConnectNic";
draw2d.CommandConnectNic.prototype.setConnection=function(_2031){
this.connection=_2031;
};
draw2d.CommandConnectNic.prototype.execute=function(){
this.redo();
};
draw2d.CommandConnectNic.prototype.redo=function(){
if(this.model===null){
this.model=new draw2d.NicConnectionModel(this.source.getId(),this.target.getId());
var nic=new draw2d.NicModel();
nic.setServerReferenceModel(new draw2d.ServerReferenceModel(this.source.getId()));
nic.setSwitchReferenceModel(new draw2d.SwitchReferenceModel(this.target.getId()));
this.model.nicModel=nic;
}
this.source.getNicsModel().addNicModel(this.model.nicModel);
this.source.addConnectionModel(this.model);
};
draw2d.CommandConnectNic.prototype.undo=function(){
this.source.removeConnectionModel(this.model);
this.source.getNicsModel().removeNicModel(this.model.nicModel);
};
