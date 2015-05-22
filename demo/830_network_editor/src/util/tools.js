function ellipsis(e){
var w=e.getWidth()-10;
var t=e.innerHTML;
var title=t.replace(/<br>/g,"");
var _18ee=false;
e.innerHTML="<span>"+t+"</span>";
e=e.down();
var cut=0;
while(t.length>0&&e.getWidth()>=w){
var _18f0=(t.length-cut/2);
text="..."+t.substr(cut,t.length-1);
e.innerHTML=text;
_18ee=true;
cut+=1;
}
if(_18ee){
e.setAttribute("title",title);
}
}
draw2d.IdGenerator=function(){
alert("Don't create an instance of this class. Call draw2d.IdGenerator.getNext()");
};
draw2d.IdGenerator.nextId=0;
draw2d.IdGenerator.getNext=function(){
draw2d.IdGenerator.nextId+=1;
return draw2d.IdGenerator.nextId-1;
};
draw2d.IdGenerator.reserve=function(id){
id=parseInt(id,10);
if(isNaN(id)){
id=0;
}
draw2d.IdGenerator.nextId=Math.max(draw2d.IdGenerator.nextId,id+1);
};
function urlParam(_18f2){
_18f2=_18f2.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");
var _18f3="[\\?&]"+_18f2+"=([^&#]*)";
var regex=new RegExp(_18f3);
var _18f5=regex.exec(window.location.href);
if(_18f5===null){
return "";
}
return _18f5[1];
}
function loadDocument(docId){
var req=new Ajax.Request(draw2d.Configuration.GET_XML+"?xml="+docId,{method:"get",onFailure:function(_18f8){
editor=new draw2d.NetworkCloudGraphicalEditor("paintarea",true);
editor.setModel(new draw2d.VirtualNetworkCloudModel());
editor.setFatalError(draw2d.I18N.ERRORMESSAGE_WRONG_MODELURL+draw2d.Configuration.GET_XML+"?xml="+docId);
resize();
},onSuccess:function(_18f9){
try{
var model=null;
var _18fb=null;
if(_18f9.responseText.indexOf("<vnetwork")!==-1){
model=draw2d.ModelXMLDeserializer.fromXML(_18f9.responseXML.firstChild);
}
if(model===null){
model=new draw2d.VirtualNetworkCloudModel();
_18fb=draw2d.I18N.ERRORMESSAGE_NULL_MODEL;
}
editor=new draw2d.NetworkCloudGraphicalEditor("paintarea",false);
editor.setModel(model);
if(_18fb!=null){
editor.setFatalError(_18fb);
}
resize();
}
catch(e){
alert("Edit Document\n"+e+"\n"+_errorStack_+"\n");
}
}});
}
function TransparentMessage(msg){
this.msg=msg;
}
TransparentMessage.prototype.show=function(){
var _18fd=$("body");
this.center=document.createElement("center");
this.center.id="transparentMessage";
this.center.style.padding="20px";
this.center.style.position="absolute";
this.center.style.top="0px";
this.center.style.width="100%";
this.center.style.opacity="0.001";
this.center.style.filter="alpha(opacity=1)";
var _18fe=document.createElement("div");
this.center.appendChild(_18fe);
_18fe.innerHTML=this.msg;
_18fe.className="transparent_message";
_18fe.style.backgroundColor="#8CC73F";
_18fe.style.color="white";
_18fe.style.width="300px";
_18fe.style.fontWeight="bold";
_18fe.style.fontSize="15pt";
_18fe.style.position="relative";
_18fd.appendChild(this.center);
var x=new fx.Opacity("transparentMessage",{duration:300}).custom(0.001,0.8);
var y=new fx.Interval(function(){
try{
var z1=new fx.Opacity("transparentMessage",{duration:1000}).custom(0.8,0);
var z2=new fx.Top("transparentMessage",{duration:1500,onComplete:function(){
$("transparentMessage").remove();
}}).custom(0,-100);
}
catch(e){
alert(e);
}
},1);
};
