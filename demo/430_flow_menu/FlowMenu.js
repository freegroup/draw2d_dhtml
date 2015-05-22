draw2d.FlowMenu=function(_192c){
this.actionDelete=new draw2d.ButtonDelete(this);
this.actionFront=new draw2d.ButtonMoveFront(this);
this.actionBack=new draw2d.ButtonMoveBack(this);
draw2d.ToolPalette.call(this);
this.setDropShadow(0);
this.setDimension(20,60);
this.setBackgroundColor(new draw2d.Color(220,255,255));
this.currentFigure=null;
this.myworkflow=_192c;
this.added=false;
this.setDeleteable(false);
this.setCanDrag(false);
this.setResizeable(false);
this.setSelectable(false);
this.setBackgroundColor(null);
this.setColor(null);
this.scrollarea.style.borderBottom="0px";
this.actionDelete.setPosition(0,0);
this.actionFront.setPosition(0,18);
this.actionBack.setPosition(0,36);
this.addChild(this.actionDelete);
this.addChild(this.actionFront);
this.addChild(this.actionBack);
};
draw2d.FlowMenu.prototype=new draw2d.ToolPalette();
draw2d.FlowMenu.prototype.setAlpha=function(_192d){
draw2d.Figure.prototype.setAlpha.call(this,_192d);
};
draw2d.FlowMenu.prototype.hasTitleBar=function(){
return false;
};
draw2d.FlowMenu.prototype.onSelectionChanged=function(_192e){
if(_192e==this.currentFigure){
return;
}
if(_192e instanceof draw2d.Line){
return;
}
if(this.added==true){
this.myworkflow.removeFigure(this);
this.added=false;
}
if(_192e!==null&&this.added==false){
if(this.myworkflow.getEnableSmoothFigureHandling()==true){
this.setAlpha(0.01);
}
this.myworkflow.addFigure(this,100,100);
this.added=true;
}
if(this.currentFigure!==null){
this.currentFigure.detachMoveListener(this);
}
this.currentFigure=_192e;
if(this.currentFigure!==null){
this.currentFigure.attachMoveListener(this);
this.onOtherFigureMoved(this.currentFigure);
}
};
draw2d.FlowMenu.prototype.setWorkflow=function(_192f){
draw2d.Figure.prototype.setWorkflow.call(this,_192f);
};
draw2d.FlowMenu.prototype.onOtherFigureMoved=function(_1930){
var pos=_1930.getPosition();
this.setPosition(pos.x+_1930.getWidth()+7,pos.y-16);
};
