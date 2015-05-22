draw2d.StoragePropertyPage=function(){
draw2d.PropertyPage.call(this);
this.html=document.createElement("div");
this.html.style.width="100%";
this.html.style.height="100%";
this.header=this.createLabelElement(draw2d.I18N.PROPERTYPANEL_HEADER_STORAGE,0,0);
this.header.className="panel_header";
this.html.appendChild(this.header);
var oThis=this;
this.storageLabel=this.createLabelElement(draw2d.I18N.PROPERTYPANEL_PROPERTYLABEL_STORAGE_MB,10,45);
this.storageLabel.style.color="gray";
this.html.appendChild(this.storageLabel);
this.storageText=document.createElement("input");
this.storageText.type="text";
if(editor.isReadonly()){
this.storageText.disabled="true";
}else{
Event.observe(this.storageText,"keyup",function(e){
var ram=parseInt(oThis.storageText.value,10);
if(isNaN(ram)){
ram=1024;
}
oThis.storageText.value=""+ram;
var func=oThis.currentModel.setStorage.bind(oThis.currentModel);
var _1b23=new draw2d.CommandChangeProperty(editor.getGraphicalViewer(),func,oThis.currentModel.getStorage(),oThis.storageText.value);
editor.executeCommand(_1b23);
});
}
this.storageText.style.position="absolute";
this.storageText.style.width="110px";
this.storageText.style.top="65px";
this.storageText.style.left="10px";
this.html.appendChild(this.storageText);
this.qualifierLabel=this.createLabelElement(draw2d.I18N.PROPERTYPANEL_PROPERTYLABEL_QUALIFIER,10,95);
this.qualifierLabel.style.color="gray";
this.html.appendChild(this.qualifierLabel);
this.qualifier=document.createElement("select");
this.qualifier.style.position="absolute";
this.qualifier.style.overflow="auto";
this.qualifier.style.width="110px";
this.qualifier.style.top="115px";
this.qualifier.style.left="10px";
this.qualifier.size=1;
this.qualifier["onchange"]=function(){
var func=oThis.currentModel.setQualifier.bind(oThis.currentModel);
var _1b25=new draw2d.CommandChangeProperty(editor.getGraphicalViewer(),func,oThis.currentModel.getQualifier(),oThis.qualifier.value);
editor.executeCommand(_1b25);
};
for(var i=0;i<draw2d.StorageModel.QUALIFIER.getSize();i++){
var node=document.createElement("option");
node.value=draw2d.StorageModel.QUALIFIER.get(i);
node.appendChild(document.createTextNode(node.value));
this.qualifier.appendChild(node);
}
this.html.appendChild(this.qualifier);
};
draw2d.StoragePropertyPage.prototype=new draw2d.PropertyPage();
draw2d.StoragePropertyPage.prototype.type="draw2d.StoragePropertyPage";
draw2d.StoragePropertyPage.prototype.init=function(model){
this.currentModel=model;
this.storageText.value=model.getStorage();
this.qualifier.selectedIndex=draw2d.StorageModel.QUALIFIER.indexOf(model.getQualifier());
};
draw2d.StoragePropertyPage.prototype.deinit=function(){
};
draw2d.StoragePropertyPage.prototype.getHTMLElement=function(){
return this.html;
};
