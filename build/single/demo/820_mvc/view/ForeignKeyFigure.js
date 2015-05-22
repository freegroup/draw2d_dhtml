draw2d.ForeignKeyFigure=function(){
draw2d.Connection.call(this);
this.setRouter(new draw2d.ManhattanConnectionRouter());
};
draw2d.ForeignKeyFigure.prototype=new draw2d.Connection();
draw2d.ForeignKeyFigure.prototype.type="draw2d.ForeignKeyFigure";
