draw2d.TableFigure=function(){
this.table=null;
this.header=null;
draw2d.Node.call(this);
this.setResizeable(false);
};
draw2d.TableFigure.prototype=new draw2d.Node();
draw2d.TableFigure.prototype.type="draw2d.TableFigure";
draw2d.TableFigure.prototype.paint=function(){
var model=this.getModel();
this.setPosition(model.getPosition().x,model.getPosition().y);
this.header.innerHTML=model.getName();
this.setDimension(this.getWidth(),this.getHeight());
var _22b2=this.model.getFieldModels();
for(var i=0;i<_22b2.getSize();i++){
this.addColumn(_22b2.get(i).getName(),_22b2.get(i).getExtendedDescriptionLabel());
}
};
draw2d.TableFigure.prototype.propertyChange=function(event){
switch(event.property){
case draw2d.TableModel.EVENT_POSITION_CHANGED:
this.setPosition(event.newValue.x,event.newValue.y);
break;
case draw2d.TableModel.EVENT_FIELD_ADDED:
this.addColumn(event.newValue.getName(),event.newValue.getExtendedDescriptionLabel());
break;
case draw2d.TableModel.EVENT_KEY_ADDED:
this.refreshConnections();
break;
case draw2d.TableModel.EVENT_NAME_CHANGED:
this.header.innerHTML=model.getName();
break;
}
};
draw2d.TableFigure.prototype.createCommand=function(_22b5){
if(_22b5.getPolicy()==draw2d.EditPolicy.MOVE){
if(!this.canDrag){
return null;
}
return new draw2d.CommandMoveTable(this.model);
}
return null;
};
draw2d.TableFigure.prototype.createHTMLElement=function(){
var item=draw2d.Node.prototype.createHTMLElement.call(this);
item.style.width="100px";
item.style.height="100px";
item.style.margin="0px";
item.style.padding="0px";
this.table=document.createElement("table");
this.table.style.fontSize="8pt";
this.table.style.margin="0px";
this.table.style.padding="0px";
this.table.cellPadding="0";
this.table.cellSpacing="0";
var row=this.table.insertRow(0);
this.header=row.insertCell(0);
this.header.innerHTML="";
this.header.colSpan="2";
this.header.style.background="transparent url(header.png) repeat-x";
this.header.style.height="25px";
this.header.style.paddingLeft="5px";
this.header.style.paddingRight="5px";
this.disableTextSelection(this.header);
item.appendChild(this.table);
return item;
};
draw2d.TableFigure.prototype.getWidth=function(){
if(this.table===null){
return 10;
}
if(window.getComputedStyle){
return parseInt(getComputedStyle(this.table,"").getPropertyValue("width"));
}
return (this.table.clientWidth);
};
draw2d.TableFigure.prototype.getHeight=function(){
if(this.table===null){
return 10;
}
if(window.getComputedStyle){
return parseInt(getComputedStyle(this.table,"").getPropertyValue("height"));
}
return (this.table.clientHeight);
};
draw2d.TableFigure.prototype.addColumn=function(name,label){
var x=this.table.insertRow(this.table.rows.length);
var y=x.insertCell(0);
y.innerHTML=label;
y.style.backgroundColor="gray";
y.style.whiteSpace="nowrap";
y.style.padding="2px";
this.disableTextSelection(y);
this.setDimension(this.getWidth(),this.getHeight());
var port=new draw2d.InputFieldFigure();
port.setWorkflow(this.workflow);
port.setName("in_"+name);
this.addPort(port,-5,y.offsetTop+y.clientHeight/2);
port.paint();
var port=new draw2d.OutputFieldFigure();
port.setWorkflow(this.workflow);
port.setName("out_"+name);
this.addPort(port,y.offsetWidth+5,y.offsetTop+y.clientHeight/2);
port.paint();
};
draw2d.TableFigure.prototype.getModelSourceConnections=function(){
return this.getModel().getForeignKeyModels();
};
