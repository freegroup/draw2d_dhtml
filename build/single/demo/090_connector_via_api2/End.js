draw2d.End=function(){
draw2d.ImageFigure.call(this,this.type+".png");
this.inputPort=null;
this.setDimension(50,50);
return this;
};
draw2d.End.prototype=new draw2d.ImageFigure();
draw2d.End.prototype.type="End";
draw2d.End.prototype.setWorkflow=function(_22a5){
draw2d.ImageFigure.prototype.setWorkflow.call(this,_22a5);
if(_22a5!==null&&this.inputPort===null){
this.inputPort=new draw2d.InputPort();
this.inputPort.setWorkflow(_22a5);
this.inputPort.setBackgroundColor(new draw2d.Color(115,115,245));
this.inputPort.setColor(null);
this.inputPort.setName("input");
this.addPort(this.inputPort,0,this.height/2);
}
};
