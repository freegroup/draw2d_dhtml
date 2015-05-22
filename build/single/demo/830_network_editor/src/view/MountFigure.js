draw2d.MountFigure=function(){
draw2d.Connection.call(this);
this.setRouter(new draw2d.NullConnectionRouter());
this.setColor(draw2d.MountFigure.DEFAULT_COLOR);
this.orderLabel=new draw2d.Label("1");
this.orderLabel.setBorder(new draw2d.LineBorder(1));
this.orderLabel.setWordwrap(false);
this.orderLabel.setAlpha(0.5);
this.addFigure(this.orderLabel,new draw2d.BezierMidpointLocator(this));
};
draw2d.MountFigure.prototype=new draw2d.Connection();
draw2d.MountFigure.prototype.type="draw2d.MountFigure";
draw2d.MountFigure.DEFAULT_COLOR=new draw2d.Color(95,95,95);
draw2d.MountFigure.prototype.paint=function(){
draw2d.Connection.prototype.paint.call(this);
try{
var model=this.getModel();
if(model.getOrder()===""){
this.orderLabel.setText("Order: - ");
}else{
this.orderLabel.setText("Order: "+model.getOrder());
}
}
catch(e){
pushErrorStack(e,"draw2d.MountFigure.prototype.paint=function()");
}
};
draw2d.MountFigure.prototype.propertyChange=function(event){
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
draw2d.MountFigure.prototype.createCommand=function(_1c03){
if(_1c03.getPolicy()===draw2d.EditPolicy.MOVE){
return new draw2d.CommandReconnectMount(this.model);
}
if(_1c03.getPolicy()===draw2d.EditPolicy.DELETE){
if(this.isDeleteable()===true){
return new draw2d.CommandDisconnectMount(this.getModel());
}
return null;
}
return null;
};
