draw2d.shape.uml.Actor=function(name){
this.portRight=null;
draw2d.VectorFigure.call(this);
this.setName(name);
this.setDimension(50,90);
};
draw2d.shape.uml.Actor.prototype=new draw2d.VectorFigure();
draw2d.shape.uml.Actor.prototype.type="shape.uml.Actor";
draw2d.shape.uml.Actor.prototype.setName=function(name){
this.label.innerHTML=name;
};
draw2d.shape.uml.Actor.prototype.setWorkflow=function(_1c1a){
draw2d.VectorFigure.prototype.setWorkflow.call(this,_1c1a);
if(_1c1a!==null&&this.portRight===null){
this.portRight=new draw2d.Port();
this.portRight.setWorkflow(_1c1a);
this.addPort(this.portRight,this.width,this.height/2);
this.portLeft=new draw2d.Port();
this.portLeft.setWorkflow(_1c1a);
this.addPort(this.portLeft,0,this.height/2);
}
};
draw2d.shape.uml.Actor.prototype.createHTMLElement=function(){
var item=draw2d.Figure.prototype.createHTMLElement.call(this);
this.label=document.createElement("div");
this.label.style.width="100%";
this.label.style.height="20px";
this.label.style.position="absolute";
this.label.style.textAlign="center";
this.label.style.top="0px";
this.label.style.left="0px";
this.label.style.fontSize="8pt";
this.disableTextSelection(this.label);
return item;
};
draw2d.shape.uml.Actor.prototype.setDimension=function(w,h){
draw2d.VectorFigure.prototype.setDimension.call(this,w,h);
if(this.portRight!==null){
this.portRight.setPosition(this.width,this.height/2);
this.portLeft.setPosition(0,this.height/2);
}
};
draw2d.shape.uml.Actor.prototype.paint=function(){
draw2d.VectorFigure.prototype.paint.call(this);
var _1c1e=this.getWidth()/2;
var _1c1f=this.getWidth()/4;
var _1c20=this.getHeight()/2;
var _1c21=parseInt(this.label.style.height);
var _1c22=this.getWidth()*0.2;
var _1c23=this.getHeight()*0.1;
this.graphics.drawOval(_1c1e-_1c22/2,0,_1c22,_1c23);
this.graphics.drawLine(_1c1e,_1c23,_1c1e,_1c20);
this.graphics.drawLine(_1c1f,_1c23*2,this.getWidth()-_1c1f,_1c23*2);
this.graphics.drawLine(_1c1e,_1c20,_1c1f,this.getHeight()-_1c21);
this.graphics.drawLine(_1c1e,_1c20,this.getWidth()-_1c1f,this.getHeight()-_1c21);
this.graphics.paint();
this.label.style.top=(this.getHeight()-_1c21)+"px";
this.html.appendChild(this.label);
};
