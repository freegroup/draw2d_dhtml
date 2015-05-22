draw2d.AbstractCloudNodeFigure=function(){
this.inputPort=null;
this.outputPort=null;
this.table=null;
this.header=null;
draw2d.Node.call(this);
this.setDimension(75,75);
this.setResizeable(false);
};
draw2d.AbstractCloudNodeFigure.prototype=new draw2d.Node();
draw2d.AbstractCloudNodeFigure.prototype.type="draw2d.AbstractCloudNodeFigure";
draw2d.AbstractCloudNodeFigure.prototype.propertyChange=function(event){
switch(event.property){
case draw2d.AbstractCloudNodeModel.EVENT_PROPERTY_CHANGED:
this.paint();
break;
case draw2d.AbstractCloudNodeModel.EVENT_POSITION_CHANGED:
this.setPosition(event.newValue.x,event.newValue.y);
break;
case draw2d.AbstractObjectModel.EVENT_CONNECTION_ADDED:
this.refreshConnections();
break;
case draw2d.AbstractObjectModel.EVENT_CONNECTION_REMOVED:
this.refreshConnections();
break;
default:
break;
}
};
draw2d.AbstractCloudNodeFigure.prototype.createHTMLElement=function(){
var item=draw2d.Node.prototype.createHTMLElement.call(this);
item.style.width="100px";
item.style.height="100px";
item.style.margin="0px";
item.style.padding="0px";
this.table=document.createElement("table");
this.table.style.margin="0px";
this.table.style.padding="0px";
this.table.cellPadding="0";
this.table.cellSpacing="0";
var row=this.table.insertRow(0);
this.header=row.insertCell(0);
this.header.innerHTML="";
this.header.colSpan="2";
this.disableTextSelection(this.header);
item.appendChild(this.table);
return item;
};
draw2d.AbstractCloudNodeFigure.prototype.paint=function(){
try{
var pos=this.getModel().getPosition();
this.setPosition(pos.x,pos.y);
this.setDimension(this.getWidth(),this.getHeight());
this.initPorts();
}
catch(e){
pushErrorStack(e,"draw2d.AbstractCloudNodeFigure.prototype.paint=function()");
}
};
draw2d.AbstractCloudNodeFigure.prototype.getWidth=function(){
if(this.table===null){
return 10;
}
if(window.getComputedStyle){
return parseInt(getComputedStyle(this.table,"").getPropertyValue("width"),10);
}
return this.table.clientWidth;
};
draw2d.AbstractCloudNodeFigure.prototype.getHeight=function(){
if(this.table===null){
return 10;
}
if(window.getComputedStyle){
return parseInt(getComputedStyle(this.table,"").getPropertyValue("height"),10);
}
return this.table.clientHeight;
};
draw2d.AbstractCloudNodeFigure.prototype.createCommand=function(_1bff){
if(_1bff.getPolicy()===draw2d.EditPolicy.MOVE){
if(!this.canDrag){
return null;
}
return new draw2d.CommandMoveCloudNode(this.model);
}else{
if(_1bff.getPolicy()===draw2d.EditPolicy.DELETE){
return new draw2d.CommandRemoveCloudNode(this.model);
}
}
return draw2d.Node.prototype.createCommand.call(this,_1bff);
};
draw2d.AbstractCloudNodeFigure.prototype.initPorts=function(){
};
draw2d.AbstractCloudNodeFigure.prototype.getModelSourceConnections=function(){
return this.getModel().getConnectionModels();
};
