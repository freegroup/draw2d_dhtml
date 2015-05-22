draw2d.MyCompartmentFigure=function(){
draw2d.CompartmentFigure.call(this);
this.defaultColor=new draw2d.Color(230,230,250);
this.setBackgroundColor(this.defaultColor);
};
draw2d.MyCompartmentFigure.prototype=new draw2d.CompartmentFigure();
draw2d.MyCompartmentFigure.prototype.onFigureLeave=function(_1f86){
draw2d.CompartmentFigure.prototype.onFigureLeave.call(this,_1f86);
if(_1f86 instanceof draw2d.CompartmentFigure){
_1f86.setBackgroundColor(_1f86.defaultColor);
}
};
draw2d.MyCompartmentFigure.prototype.onFigureDrop=function(_1f87){
draw2d.CompartmentFigure.prototype.onFigureDrop.call(this,_1f87);
if(_1f87 instanceof draw2d.CompartmentFigure){
_1f87.setBackgroundColor(this.getBackgroundColor().darker(0.1));
}
};
draw2d.MyCompartmentFigure.prototype.setBackgroundColor=function(color){
draw2d.CompartmentFigure.prototype.setBackgroundColor.call(this,color);
for(var i=0;i<this.children.getSize();i++){
var child=this.children.get(i);
if(child instanceof draw2d.CompartmentFigure){
child.setBackgroundColor(this.getBackgroundColor().darker(0.1));
}
}
};
