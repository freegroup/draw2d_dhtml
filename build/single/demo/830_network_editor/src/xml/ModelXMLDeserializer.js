function removeTextNodes(nodes){
var _1a78=new draw2d.ArrayList();
for(var i=0;i<nodes.length;i++){
var child=nodes.item(i);
var _1a7b=child.nodeName;
if(_1a7b==="#text"){
continue;
}
_1a78.add(child);
}
return _1a78.asArray();
}
draw2d.ModelXMLDeserializer=function(){
alert("do not init this class. Use the static methods instead");
};
draw2d.ModelXMLDeserializer.fromXML=function(node,_1a7d,_1a7e){
var _1a7f=""+node.nodeName;
var value=node.nodeValue;
if(value===null){
if(node.nodeTypedValue){
value=node.nodeTypedValue;
}else{
value=node.textContent;
}
}
var obj=null;
var _1a82=false;
switch(_1a7f.toLowerCase()){
case "vnetwork":
obj=new draw2d.VirtualNetworkCloudModel(node.getAttribute("id"));
_1a7e=obj;
break;
case "server":
if(_1a7d instanceof draw2d.MountModel){
obj=new draw2d.ServerReferenceModel(node.getAttribute("reference"));
}else{
if(_1a7d instanceof draw2d.NicModel){
obj=new draw2d.ServerReferenceModel(node.getAttribute("reference"));
}else{
obj=new draw2d.ServerModel(node.getAttribute("id"));
}
}
break;
case "storage":
if(_1a7d instanceof draw2d.MountModel){
obj=new draw2d.StorageReferenceModel(node.getAttribute("reference"));
}else{
obj=new draw2d.StorageModel(node.getAttribute("id"));
}
break;
case "switch":
if(_1a7d instanceof draw2d.NicModel){
obj=new draw2d.SwitchReferenceModel(node.getAttribute("reference"));
}else{
obj=new draw2d.SwitchModel(node.getAttribute("id"));
}
break;
case "representation":
obj=new draw2d.RepresentationModel();
break;
case "nics":
obj=new draw2d.NicsModel();
break;
case "nic":
if(_1a7d instanceof draw2d.SwitchModel){
obj=new draw2d.NicReferenceModel(node.getAttribute("reference"));
}else{
obj=new draw2d.NicModel(node.getAttribute("id"));
_1a7d.addNicModel(obj);
_1a82=true;
}
break;
case "images":
obj=new draw2d.ImagesModel();
break;
case "image":
obj=new draw2d.ImageModel(node.getAttribute("id"));
_1a7d.addImageModel(obj);
break;
case "mount":
var _1a83=removeTextNodes(node.childNodes);
if(_1a83[0].nodeName==="server"){
obj=new draw2d.MountModel(_1a83[1].getAttribute("reference"),_1a83[0].getAttribute("reference"),node.getAttribute("id"));
}else{
obj=new draw2d.MountModel(_1a83[0].getAttribute("reference"),_1a83[1].getAttribute("reference"),node.getAttribute("id"));
}
break;
default:
return value;
}
if(_1a7d!==undefined&&obj.setModelParent!==undefined){
obj.setModelParent(_1a7d);
}
var _1a84=removeTextNodes(node.childNodes);
var _1a85=0;
for(var i=0;i<_1a84.length;i++){
var child=_1a84[i];
var _1a88=child.nodeName;
if(obj instanceof Array){
_1a88=_1a85;
}
var _1a89=draw2d.ModelXMLDeserializer.fromXML(child,obj instanceof draw2d.AbstractObjectModel?obj:_1a7d,_1a7e);
if(_1a89 instanceof draw2d.AbstractCloudNodeModel&&obj instanceof draw2d.VirtualNetworkCloudModel){
obj.addCloudNodeModel(_1a89);
}else{
if(_1a89 instanceof draw2d.AbstractConnectionModel){
_1a89.getSourceModel().addConnectionModel(_1a89);
}else{
obj[_1a88]=_1a89;
}
}
_1a85++;
}
var _1a8a=node.attributes;
for(var ii=0;ii<_1a8a.length;ii++){
var _1a8c=_1a8a.item(ii);
obj[_1a8c.nodeName]=_1a8c.nodeValue;
}
if(_1a82===true){
var _1a8d=obj.getSwitchReferenceModel();
var _1a8e=obj.getServerReferenceModel();
if(_1a8d!==null){
var sw=_1a7e.getCloudNodeModel(_1a8d.getReference());
if(sw===null){
sw=new draw2d.SwitchModel(_1a8d.getReference());
_1a7e.addCloudNodeModel(sw);
}
if(_1a8e!==null){
var _1a90=obj.getModelParent().getModelParent();
if(_1a90 instanceof draw2d.ServerModel){
var con=new draw2d.NicConnectionModel(_1a90.getId(),sw.getId());
con.nicModel=obj;
_1a90.addConnectionModel(con);
}
}
}
}
return obj;
};
