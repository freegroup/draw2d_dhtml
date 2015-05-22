draw2d.ModelXMLSerializer=function(){
alert("do not init this class. Use the static methods instead");
};
draw2d.ModelXMLSerializer.toXML=function(obj,_1714,_1715){
if(obj===undefined){
return "";
}
if(_1714===undefined){
_1714=obj.tag;
}
_1715=_1715?_1715:"";
var _1716=_1715+"   ";
var t=draw2d.ModelXMLSerializer.getTypeName(obj);
var _1718="";
var _1719="";
var _171a=false;
var _171b=true;
switch(t){
case "int":
case "number":
case "boolean":
_1718=obj;
_171b=false;
break;
case "string":
_1718=draw2d.ModelXMLSerializer.xmlEncode(obj);
_171b=false;
break;
case "date":
_1718=obj.toLocaleString();
_171b=false;
break;
case "Array":
case "array":
_171a=true;
_1718="";
for(var i=0;i<obj.length;i++){
var _171d=obj[i];
if(_171d===undefined){
continue;
}
_1718+=draw2d.ModelXMLSerializer.toXML(_171d,_171d.tag,_1716);
_171b=false;
}
_1718+=_1715;
break;
default:
if(obj!==null){
var _171e=obj.getPersistentAttributes();
var _171f=_171e.attributes;
var _1720=_171e;
for(var name in _1720){
if(name==="attributes"||name===undefined){
continue;
}
_171b=false;
_1718+=draw2d.ModelXMLSerializer.toXML(_1720[name],name,_1716);
}
_1718+="\n"+_1715;
for(var name in _171f){
var _1722=_171f[name];
if(_1722===undefined){
continue;
}
if(_1722===null){
_1722="";
}
_1719=_1719+" "+name+"="+"\""+draw2d.ModelXMLSerializer.xmlEncode(_1722)+"\"";
}
if(_1719.length>0){
_1719+=" ";
}
}
break;
}
if(_171a){
return _1718;
}
var s="";
if(_171b){
s="\n"+_1715+"<"+_1714+_1719+"/>";
}else{
s="\n"+_1715+"<"+_1714+_1719+">";
s+=_1718;
s+="</"+_1714+">";
}
return s;
};
draw2d.ModelXMLSerializer.isSimpleVar=function(t){
switch(t){
case "int":
case "string":
case "String":
case "Number":
case "number":
case "Boolean":
case "boolean":
case "bool":
case "dateTime":
case "Date":
case "date":
case "float":
return true;
}
return false;
};
draw2d.ModelXMLSerializer.getTypeName=function(obj){
if(obj===null){
return "undefined";
}
if(obj instanceof Array){
return "Array";
}
if(obj instanceof Date){
return "Date";
}
var t=typeof (obj);
if(t==="number"){
return (parseInt(obj,10).toString()==obj)?"int":"number";
}
if(draw2d.ModelXMLSerializer.isSimpleVar(t)){
return t;
}
return obj.type;
};
draw2d.ModelXMLSerializer.xmlEncode=function(_1727){
var t=typeof (_1727);
if(t=="number"){
return ""+_1727;
}
var _1729=_1727;
var amp=/&/gi;
var gt=/>/gi;
var lt=/</gi;
var quot=/"/gi;
var apos=/'/gi;
var _172f="&#62;";
var _1730="&#38;#60;";
var _1731="&#38;#38;";
var _1732="&#34;";
var _1733="&#39;";
_1729=_1729.replace(amp,_1731);
_1729=_1729.replace(quot,_1732);
_1729=_1729.replace(lt,_1730);
_1729=_1729.replace(gt,_172f);
_1729=_1729.replace(apos,_1733);
return _1729;
};
