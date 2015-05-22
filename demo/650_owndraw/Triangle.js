draw2d.Triangle=function(width,_1fbf){
draw2d.VectorFigure.call(this);
if(width&&_1fbf){
this.setDimension(width,_1fbf);
}
};
draw2d.Triangle.prototype=new draw2d.VectorFigure();
draw2d.Triangle.prototype.paint=function(){
draw2d.VectorFigure.prototype.paint.call(this);
var x=new Array(this.getWidth()/2,this.getWidth(),0);
var y=new Array(0,this.getHeight(),this.getHeight());
this.graphics.setStroke(this.stroke);
if(this.bgColor!==null){
this.graphics.setColor(this.bgColor.getHTMLStyle());
this.graphics.fillPolygon(x,y);
}
if(this.lineColor!==null){
this.graphics.setColor(this.lineColor.getHTMLStyle());
this.graphics.drawPolygon(x,y);
}
this.graphics.paint();
};
