draw2d.Start=function(){
this.outputPort1=null;
this.outputPort2=null;
draw2d.Node.call(this);
this.setDimension(50,50);
};
draw2d.Start.prototype=new draw2d.Node;
draw2d.Start.prototype.type="Start";
draw2d.Start.prototype.setWorkflow=function(_2263){
draw2d.Node.prototype.setWorkflow.call(this,_2263);
if(_2263!==null){
this.outputPort1=new draw2d.OutputPort();
this.outputPort1.setMaxFanOut(1);
this.outputPort1.setWorkflow(_2263);
this.outputPort1.setBackgroundColor(new draw2d.Color(245,115,115));
this.addPort(this.outputPort1,this.width,this.height/3);
this.outputPort2=new draw2d.OutputPort();
this.outputPort2.setMaxFanOut(1);
this.outputPort2.setWorkflow(_2263);
this.outputPort2.setBackgroundColor(new draw2d.Color(245,115,115));
this.addPort(this.outputPort2,this.width,this.height/3*2);
}
};
draw2d.Start.prototype.setDimension=function(w,h){
draw2d.Node.prototype.setDimension.call(this,w,h);
if(this.outputPort1!==null){
this.outputPort1.setPosition(this.width,this.height/3);
this.outputPort2.setPosition(this.width,this.height/3*2);
}
};
