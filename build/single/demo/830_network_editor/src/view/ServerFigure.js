draw2d.ServerFigure=function(){
draw2d.AbstractCloudNodeFigure.call(this);
};
draw2d.ServerFigure.prototype=new draw2d.AbstractCloudNodeFigure();
draw2d.ServerFigure.prototype.type="draw2d.ServerFigure";
draw2d.ServerFigure.prototype.paint=function(){
draw2d.AbstractCloudNodeFigure.prototype.paint.call(this);
try{
var model=this.getModel();
this.header.innerHTML=model.getName();
this.cpuUnits.innerHTML=this.getModel().getCpuUnits();
this.ram.innerHTML=this.getModel().getRAM()+" MB";
this.setDimension(this.getWidth(),this.getHeight());
}
catch(e){
pushErrorStack(e,"draw2d.ServerFigure.prototype.paint=function()");
}
};
draw2d.ServerFigure.prototype.createHTMLElement=function(){
var item=draw2d.AbstractCloudNodeFigure.prototype.createHTMLElement.call(this);
item.className="server_frame";
item.style.border="";
this.header.className="server_header";
var x=this.table.insertRow(this.table.rows.length);
this.cpuLabel=x.insertCell(0);
this.cpuLabel.innerHTML=draw2d.I18N.PROPERTYPANEL_FIGURE_LABEL_SERVER_CPUUNITS;
this.cpuLabel.className="server_label";
this.disableTextSelection(this.cpuLabel);
this.cpuUnits=x.insertCell(1);
this.cpuUnits.className="server_data";
this.disableTextSelection(this.cpuUnits);
x=this.table.insertRow(this.table.rows.length);
this.ramLabel=x.insertCell(0);
this.ramLabel.innerHTML=draw2d.I18N.PROPERTYPANEL_FIGURE_LABEL_SERVER_RAM;
this.ramLabel.className="server_label";
this.disableTextSelection(this.ramLabel);
this.ram=x.insertCell(1);
this.ram.className="server_data";
this.disableTextSelection(this.ram);
this.setDimension(this.getWidth(),this.getHeight());
return item;
};
draw2d.ServerFigure.prototype.initPorts=function(){
try{
if(this.inputPort!==null){
return;
}
this.inputPort=new draw2d.MountInputPort();
this.inputPort.setWorkflow(this.workflow);
this.inputPort.setCanDrag(this.getCanDrag());
this.addPort(this.inputPort,0,0);
this.inputPort.paint();
this.outputPort=new draw2d.NicOutputPort();
this.outputPort.setWorkflow(this.workflow);
this.outputPort.setCanDrag(this.getCanDrag());
this.addPort(this.outputPort,0,0);
this.outputPort.paint();
this.setDimension(this.getWidth(),this.getHeight());
}
catch(e){
pushErrorStack(e,"draw2d.ServerFigure.prototype.initPorts=function()");
}
};
draw2d.ServerFigure.prototype.setDimension=function(w,h){
draw2d.AbstractCloudNodeFigure.prototype.setDimension.call(this,w,h);
if(this.outputPort===null){
return;
}
this.inputPort.setPosition(-5,h/2);
this.outputPort.setPosition(w+5,h/2);
};
