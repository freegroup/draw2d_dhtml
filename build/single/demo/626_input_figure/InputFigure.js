draw2d.InputFigure=function(){
this.outputPort=null;
draw2d.Node.call(this);
this.setDimension(150,50);
this.setResizeable(false);
this.setBackgroundColor(new draw2d.Color(100,100,100));
};
draw2d.InputFigure.prototype=new draw2d.Node();
draw2d.InputFigure.prototype.type="InputFigure";
draw2d.InputFigure.prototype.setWorkflow=function(_2902){
draw2d.Node.prototype.setWorkflow.call(this,_2902);
if(_2902!==null&&this.outputPort===null){
this.outputPort=new draw2d.OutputPort();
this.outputPort.setWorkflow(_2902);
this.addPort(this.outputPort,this.width,this.height/2);
}
};
draw2d.InputFigure.prototype.createHTMLElement=function(){
var item=draw2d.Node.prototype.createHTMLElement.call(this);
this.label=document.createElement("div");
this.label.innerHTML="Input Field";
this.label.style.fontSize="12px";
this.label.style.color="white";
this.label.style.margin="5px";
item.appendChild(this.label);
this.input=document.createElement("input");
this.input.style.width="80px";
this.input.style.marginLeft="5px";
this.input.style.zIndex=""+draw2d.Figure.ZOrderBaseIndex+1;
var _2904=function(e){
e.stopPropagation();
};
if(this.input.addEventListener){
this.input.addEventListener("mousedown",_2904,false);
}else{
if(this.input.attachEvent){
this.input.attachEvent("onmousedown",_2904);
}
}
item.appendChild(this.input);
return item;
};
