draw2d.LabelConnection=function(){
draw2d.Connection.call(this);
var label=new draw2d.Label("Message");
label.setBackgroundColor(new draw2d.Color(230,230,250));
label.setBorder(new draw2d.LineBorder(1));
this.addFigure(label,new draw2d.ManhattanMidpointLocator(this));
};
draw2d.LabelConnection.prototype=new draw2d.Connection();
draw2d.LabelConnection.prototype.type="draw2d.LabelConnection";
