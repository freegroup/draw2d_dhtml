draw2d.XMLSerializer_01=function(){
};
draw2d.XMLSerializer_01.prototype.type="XMLSerializer_01";
draw2d.XMLSerializer_01.prototype.toXML=function(_1bd4){
var xml="<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?>\n";
xml=xml+"<form>\n";
var _1bd6=_1bd4.getFigures();
for(var i=0;i<_1bd6.getSize();i++){
var _1bd8=_1bd6.get(i);
xml=xml+"<"+_1bd8.type+" x=\""+_1bd8.getX()+"\" y=\""+_1bd8.getY()+"\" id=\""+_1bd8.getId()+"\">\n";
xml=xml+this.getPropertyXML(_1bd8,"   ");
if(_1bd8 instanceof draw2d.CompartmentFigure){
xml=xml+this.getChildXML(_1bd8,"   ");
}
xml=xml+"</"+_1bd8.type+">\n";
}
xml=xml+"</form>\n";
return xml;
};
draw2d.XMLSerializer_01.prototype.getChildXML=function(_1bd9,_1bda){
var xml="";
var _1bdc=_1bd9.getChildren();
for(var i=0;i<_1bdc.getSize();i++){
var _1bde=_1bdc.get(i);
xml=xml+_1bda+"<"+_1bde.type+" x=\""+_1bde.getX()+"\" y=\""+_1bde.getY()+"\" id=\""+_1bde.getId()+"\">\n";
xml=xml+this.getPropertyXML(_1bde,"   "+_1bda);
if(_1bde instanceof draw2d.CompartmentFigure){
xml=xml+this.getChildXML(_1bde,"   "+_1bda);
}
xml=xml+_1bda+"</"+_1bde.type+">\n";
}
return xml;
};
draw2d.XMLSerializer_01.prototype.getPropertyXML=function(_1bdf,_1be0){
var xml="";
var _1be2=_1bdf.getProperties();
for(key in _1be2){
var value=_1be2[key];
if(value!==null){
xml=xml+_1be0+"<property name=\""+key+"\" value=\""+value+"\">\n";
}
}
return xml;
};
