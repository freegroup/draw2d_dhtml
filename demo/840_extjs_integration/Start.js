draw2d.Start=function(){
draw2d.ImageFigure.call(this,"Start.png");
this.outputPort=null;
this.setDimension(50,50);
return this;
};
draw2d.Start.prototype=new draw2d.ImageFigure();
draw2d.Start.prototype.type="draw2d.Start";
draw2d.Start.prototype.setWorkflow=function(_233a){
draw2d.ImageFigure.prototype.setWorkflow.call(this,_233a);
if(_233a!==null&&this.outputPort===null){
this.outputPort=new draw2d.MyOutputPort();
this.outputPort.setWorkflow(_233a);
this.outputPort.setMaxFanOut(4);
this.outputPort.setBackgroundColor(new draw2d.Color(245,115,115));
this.addPort(this.outputPort,this.width,this.height/2);
this.outputPort1=new draw2d.MyOutputPort();
this.outputPort1.setWorkflow(_233a);
this.outputPort1.setMaxFanOut(4);
this.outputPort1.setBackgroundColor(new draw2d.Color(245,115,115));
this.addPort(this.outputPort1,this.width/2,0);
this.outputPort2=new draw2d.MyOutputPort();
this.outputPort2.setWorkflow(_233a);
this.outputPort2.setMaxFanOut(4);
this.outputPort2.setBackgroundColor(new draw2d.Color(245,115,115));
this.addPort(this.outputPort2,this.width/2,this.height);
this.outputPort3=new draw2d.MyOutputPort();
this.outputPort3.setWorkflow(_233a);
this.outputPort3.setMaxFanOut(4);
this.outputPort3.setBackgroundColor(new draw2d.Color(245,115,115));
this.addPort(this.outputPort3,0,this.height/2);
}
};
