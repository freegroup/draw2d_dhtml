draw2d.SelectionHighlighter=function(_174d){
this.workflow=_174d;
this.counter=0;
this.black=new draw2d.Color(0,0,0);
this.gray=new draw2d.Color(200,200,200);
};
draw2d.SelectionHighlighter.prototype.type="SelectionHighlighter";
draw2d.SelectionHighlighter.prototype.onSelectionChanged=function(_174e){
this.counter++;
debugLabel.setText("Count:"+this.counter);
var alpha=(_174e===null)?1:0.2;
var color=(_174e===null)?this.black:this.gray;
var doc=this.workflow.getDocument();
var _1752=doc.getFigures();
for(var i=0;i<_1752.getSize();i++){
_1752.get(i).setAlpha(alpha);
}
var lines=doc.getLines();
for(var i=0;i<lines.getSize();i++){
lines.get(i).setColor(color);
}
if(_174e!==null){
_174e.setAlpha(1);
if(_174e instanceof draw2d.Node){
var ports=_174e.getPorts();
for(var i=0;i<ports.getSize();i++){
var port=ports.get(i);
var _1757=port.getConnections();
for(var j=0;j<_1757.getSize();j++){
_1757.get(j).setColor(this.black);
}
}
}
}
};
