draw2d.NicConnectionFigure=function(){
draw2d.Connection.call(this);
this.setRouter(new draw2d.FanConnectionRouter());
this.setColor(draw2d.MountFigure.DEFAULT_COLOR);
};
draw2d.NicConnectionFigure.prototype=new draw2d.Connection();
draw2d.NicConnectionFigure.prototype.type="draw2d.NicConnectionFigure";
draw2d.NicConnectionFigure.DEFAULT_COLOR=new draw2d.Color(164,164,164);
draw2d.NicConnectionFigure.prototype.propertyChange=function(event){
switch(event.property){
case draw2d.MountModel.EVENT_PROPERTY_CHANGED:
this.paint();
break;
case draw2d.MountModel.EVENT_SOURCE_CHANGED:
this.refreshSourcePort();
break;
case draw2d.MountModel.EVENT_TARGET_CHANGED:
this.refreshTargetPort();
break;
default:
break;
}
};
draw2d.NicConnectionFigure.prototype.createCommand=function(_1a50){
if(_1a50.getPolicy()===draw2d.EditPolicy.MOVE){
return new draw2d.CommandReconnectNic(this.model);
}
if(_1a50.getPolicy()==draw2d.EditPolicy.DELETE){
if(this.isDeleteable()===true){
return new draw2d.CommandDisconnectNic(this.getModel());
}
return null;
}
return null;
};
