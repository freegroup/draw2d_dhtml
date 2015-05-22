draw2d.RoundCornerFigure=function(){
this.cornerWidth=15;
this.cornerHeight=15;
this.outputPort=null;
this.inputPort=null;
draw2d.Node.call(this);
this.setDimension(250,150);
this.originalHeight=-1;
};
draw2d.RoundCornerFigure.prototype=new draw2d.Node();
draw2d.RoundCornerFigure.prototype.type="RoundCornerFigure";
draw2d.RoundCornerFigure.prototype.createHTMLElement=function(){
var item=document.createElement("div");
item.id=this.id;
item.style.position="absolute";
item.style.left=this.x+"px";
item.style.top=this.y+"px";
item.style.height=this.width+"px";
item.style.width=this.height+"px";
item.style.margin="0px";
item.style.padding="0px";
item.style.outline="none";
item.style.zIndex=""+draw2d.Figure.ZOrderBaseIndex;
this.top_left=document.createElement("div");
this.top_left.style.background="url(circle.png) no-repeat top left";
this.top_left.style.position="absolute";
this.top_left.style.width=this.cornerWidth+"px";
this.top_left.style.height=this.cornerHeight+"px";
this.top_left.style.left="0px";
this.top_left.style.top="0px";
this.top_left.style.fontSize="2px";
this.top_right=document.createElement("div");
this.top_right.style.background="url(circle.png) no-repeat top right";
this.top_right.style.position="absolute";
this.top_right.style.width=this.cornerWidth+"px";
this.top_right.style.height=this.cornerHeight+"px";
this.top_right.style.left="0px";
this.top_right.style.top="0px";
this.top_right.style.fontSize="2px";
this.bottom_left=document.createElement("div");
this.bottom_left.style.background="url(circle.png) no-repeat bottom left";
this.bottom_left.style.position="absolute";
this.bottom_left.style.width=this.cornerWidth+"px";
this.bottom_left.style.height=this.cornerHeight+"px";
this.bottom_left.style.left="0px";
this.bottom_left.style.top="0px";
this.bottom_left.style.fontSize="2px";
this.bottom_right=document.createElement("div");
this.bottom_right.style.background="url(circle.png) no-repeat bottom right";
this.bottom_right.style.position="absolute";
this.bottom_right.style.width=this.cornerWidth+"px";
this.bottom_right.style.height=this.cornerHeight+"px";
this.bottom_right.style.left="0px";
this.bottom_right.style.top="0px";
this.bottom_right.style.fontSize="2px";
this.header=document.createElement("div");
this.header.style.position="absolute";
this.header.style.left=this.cornerWidth+"px";
this.header.style.top="0px";
this.header.style.height=(this.cornerHeight)+"px";
this.header.style.backgroundColor="#1e1b57";
this.header.style.borderTop="3px solid #1e1b57";
this.header.style.fontSize="9px";
this.header.style.color="white";
this.header.style.textAlign="center";
this.disableTextSelection(this.header);
this.textarea=document.createElement("div");
this.textarea.style.position="absolute";
this.textarea.style.left="0px";
this.textarea.style.top=this.cornerHeight+"px";
this.textarea.style.background="url(bg.png)";
this.textarea.style.borderTop="2px solid #d98e3e";
this.textarea.style.borderBottom="2px solid white";
this.textarea.style.borderLeft="1px solid #1e1b57";
this.textarea.style.borderRight="1px solid #1e1b57";
this.textarea.style.overflow="auto";
this.textarea.style.fontSize="9pt";
this.textarea.style.color="white";
this.disableTextSelection(this.textarea);
this.footer=document.createElement("div");
this.footer.style.position="absolute";
this.footer.style.left=this.cornerWidth+"px";
this.footer.style.top="0px";
this.footer.style.height=(this.cornerHeight-1)+"px";
this.footer.style.backgroundColor="#1e1b57";
this.footer.style.borderBottom="1px solid #1e1b57";
this.footer.style.fontSize="2px";
item.appendChild(this.top_left);
item.appendChild(this.header);
item.appendChild(this.top_right);
item.appendChild(this.textarea);
item.appendChild(this.bottom_left);
item.appendChild(this.footer);
item.appendChild(this.bottom_right);
return item;
};
draw2d.RoundCornerFigure.prototype.setDimension=function(w,h){
draw2d.Node.prototype.setDimension.call(this,w,h);
if(this.top_left!==null){
this.top_right.style.left=Math.max(1,(this.width-this.cornerWidth))+"px";
this.bottom_right.style.left=Math.max(1,(this.width-this.cornerWidth))+"px";
this.bottom_right.style.top=Math.max(1,(this.height-this.cornerHeight))+"px";
this.bottom_left.style.top=Math.max(1,(this.height-this.cornerHeight))+"px";
this.textarea.style.width=Math.max(1,(this.width-2))+"px";
this.textarea.style.height=Math.max(1,(this.height-this.cornerHeight*2))+"px";
this.header.style.width=Math.max(1,(this.width-this.cornerWidth*2))+"px";
this.footer.style.width=Math.max(1,(this.width-this.cornerWidth*2))+"px";
this.footer.style.top=Math.max(1,(this.height-this.cornerHeight))+"px";
}
if(this.outputPort!==null){
this.outputPort.setPosition(this.width+5,this.height/2);
}
if(this.inputPort!==null){
this.inputPort.setPosition(-5,this.height/2);
}
};
draw2d.RoundCornerFigure.prototype.setTitle=function(title){
this.header.innerHTML=title;
};
draw2d.RoundCornerFigure.prototype.setContent=function(_1f80){
this.textarea.innerHTML=_1f80;
};
draw2d.RoundCornerFigure.prototype.onDragstart=function(x,y){
var _1f83=draw2d.Node.prototype.onDragstart.call(this,x,y);
if(this.header===null){
return false;
}
if(y<this.cornerHeight&&x<this.width&&x>(this.width-this.cornerWidth)){
this.toggle();
return false;
}
if(this.originalHeight==-1){
if(this.canDrag===true&&x<parseInt(this.header.style.width)&&y<parseInt(this.header.style.height)){
return true;
}
}else{
return _1f83;
}
};
draw2d.RoundCornerFigure.prototype.setCanDrag=function(flag){
draw2d.Node.prototype.setCanDrag.call(this,flag);
this.html.style.cursor="";
if(this.header===null){
return;
}
if(flag){
this.header.style.cursor="move";
}else{
this.header.style.cursor="";
}
};
draw2d.RoundCornerFigure.prototype.setWorkflow=function(_1f85){
draw2d.Node.prototype.setWorkflow.call(this,_1f85);
if(_1f85!==null&&this.inputPort===null){
this.inputPort=new draw2d.InputPort();
this.inputPort.setWorkflow(_1f85);
this.inputPort.setName("input");
this.addPort(this.inputPort,-5,this.height/2);
this.outputPort=new draw2d.OutputPort();
this.outputPort.setMaxFanOut(5);
this.outputPort.setWorkflow(_1f85);
this.outputPort.setName("output");
this.addPort(this.outputPort,this.width+5,this.height/2);
}
};
draw2d.RoundCornerFigure.prototype.toggle=function(){
if(this.originalHeight==-1){
this.originalHeight=this.height;
this.setDimension(this.width,this.cornerHeight*2);
this.setResizeable(false);
}else{
this.setDimension(this.width,this.originalHeight);
this.originalHeight=-1;
this.setResizeable(true);
}
};
