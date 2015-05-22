draw2d.AbstractToolbarButton=function(_1709,label){
if(_1709===undefined){
return;
}
if(_1709 instanceof draw2d.GraphicalEditor){
_1709=_1709.getGraphicalViewer();
}
this.html=null;
this.label=label;
this.workflow=_1709;
this.enabled=false;
this.workflow.addSelectionListener(this);
this.workflow.getCommandStack().addCommandStackEventListener(this);
this.executeBinding=this.execute.bindAsEventListener(this);
this.getHTMLElement();
};
draw2d.AbstractToolbarButton.prototype=new draw2d.CommandStackEventListener();
draw2d.AbstractToolbarButton.prototype.getHTMLElement=function(){
if(this.html===null){
this.html=new Element("li");
this.html.className="toolbar_button";
this.a=new Element("a");
this.a.className="toolbar_button";
this.a.innerHTML=this.label;
this.html.appendChild(this.a);
this.setEnable(true);
}
return this.html;
};
draw2d.AbstractToolbarButton.prototype.getWorkflow=function(){
return this.workflow;
};
draw2d.AbstractToolbarButton.prototype.execute=function(){
alert("Default action for a Toolbarbutton called");
};
draw2d.AbstractToolbarButton.prototype.setEnable=function(flag){
if(this.enabled===flag){
return;
}
this.enabled=flag;
if(this.enabled===true){
Event.observe(this.html,"click",this.executeBinding);
$(this.a).removeClassName("toolbar_button_disabled");
}else{
Event.stopObserving(this.html,"click",this.executeBinding);
$(this.a).addClassName("toolbar_button_disabled");
}
};
draw2d.AbstractToolbarButton.prototype.setTooltip=function(text){
this.getHTMLElement().title=text;
};
draw2d.AbstractToolbarButton.prototype.onSelectionChanged=function(_170d){
};
draw2d.AbstractToolbarButton.prototype.stackChanged=function(event){
};
