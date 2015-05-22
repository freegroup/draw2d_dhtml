draw2d.NicModel=function(id){
draw2d.AbstractCloudNodeModel.call(this,id);
this.ipaddress=draw2d.Configuration.DEFAULT_NIC_IPADDRESS;
this.dbid="";
this.server=null;
this["switch"]=null;
};
draw2d.NicModel.prototype=new draw2d.AbstractCloudNodeModel();
draw2d.NicModel.prototype.type="draw2d.NicModel";
draw2d.NicModel.prototype.tag="nic";
draw2d.NicModel.prototype.getSwitchReferenceModel=function(){
return this["switch"];
};
draw2d.NicModel.prototype.getServerReferenceModel=function(){
return this.server;
};
draw2d.NicModel.prototype.setSwitchReferenceModel=function(_1861){
this["switch"]=_1861;
};
draw2d.NicModel.prototype.setServerReferenceModel=function(_1862){
this.server=_1862;
};
draw2d.NicModel.prototype.setIpAddress=function(ip){
this.ipaddress=ip;
};
draw2d.NicModel.prototype.getIpAddress=function(){
return this.ipaddress;
};
draw2d.NicModel.prototype.getPersistentAttributes=function(){
var _1864=draw2d.AbstractCloudNodeModel.prototype.getPersistentAttributes.call(this);
_1864.attributes.id=this.id;
if(this.dbid.length>0){
_1864.dbid=this.dbid;
}
if(this.ipaddress.length>0){
_1864.ipaddress=this.ipaddress;
}
if(this.server!==null){
_1864.server=this.server;
}
if(this["switch"]!==null){
_1864["switch"]=this["switch"];
}
return _1864;
};
