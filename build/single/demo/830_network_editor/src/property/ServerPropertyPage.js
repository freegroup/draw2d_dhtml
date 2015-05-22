draw2d.ServerPropertyPage=function(){
draw2d.PropertyPage.call(this);
this.html=document.createElement("div");
this.html.style.width="100%";
this.html.style.height="100%";
this.header=this.createLabelElement(draw2d.I18N.PROPERTYPANEL_HEADER_SERVER,0,0);
this.header.className="panel_header";
this.html.appendChild(this.header);
this.datarowLabel=this.createLabelElement(draw2d.I18N.PROPERTYPANEL_PROPERTYLABEL_NAME,10,45);
this.html.appendChild(this.datarowLabel);
this.nameText=document.createElement("input");
this.nameText.type="text";
var oThis=this;
if(editor.isReadonly()){
this.nameText.disabled="true";
}else{
Event.observe(this.nameText,"keyup",function(e){
var func=oThis.currentModel.setName.bind(oThis.currentModel);
var _19a9=new draw2d.CommandChangeProperty(editor.getGraphicalViewer(),func,oThis.currentModel.getName(),oThis.nameText.value);
editor.executeCommand(_19a9);
});
}
this.nameText.style.position="absolute";
this.nameText.style.width="210px";
this.nameText.style.top="65px";
this.nameText.style.left="10px";
this.html.appendChild(this.nameText);
this.cpuLabel=this.createLabelElement(draw2d.I18N.PROPERTYPANEL_PROPERTYLABEL_CPUUNITS,10,95);
this.html.appendChild(this.cpuLabel);
this.listboxCPU=document.createElement("select");
this.listboxCPU.style.position="absolute";
this.listboxCPU.style.overflow="auto";
this.listboxCPU.style.width="60px";
this.listboxCPU.style.top="115px";
this.listboxCPU.style.left="10px";
this.listboxCPU.size=1;
this.listboxCPU["onchange"]=function(){
var func=oThis.currentModel.setCpuUnits.bind(oThis.currentModel);
var _19ab=new draw2d.CommandChangeProperty(editor.getGraphicalViewer(),func,oThis.currentModel.getCpuUnits(),oThis.listboxCPU.selectedIndex+1);
editor.executeCommand(_19ab);
};
for(var i=1;i<8;i++){
var node=document.createElement("option");
node.value=""+i;
node.appendChild(document.createTextNode(""+i));
this.listboxCPU.appendChild(node);
}
this.html.appendChild(this.listboxCPU);
this.ramLabel=this.createLabelElement(draw2d.I18N.PROPERTYPANEL_PROPERTYLABEL_RAM_MB,100,95);
this.html.appendChild(this.ramLabel);
this.ramText=document.createElement("input");
this.ramText.type="text";
var _19ae=function(_19af){
var ram=parseInt(_19af.value,10);
if(isNaN(ram)){
ram=1024;
}
_19af.value=""+ram;
var func=this.currentModel.setRAM.bind(this.currentModel);
var _19b2=new draw2d.CommandChangeProperty(editor.getGraphicalViewer(),func,this.currentModel.getRAM(),_19af.value);
editor.executeCommand(_19b2);
};
_19ae=_19ae.bind(this,this.ramText);
Event.observe(this.ramText,"keyup",_19ae);
this.ramText.style.position="absolute";
this.ramText.style.width="110px";
this.ramText.style.top="115px";
this.ramText.style.left="100px";
this.html.appendChild(this.ramText);
this.imagesLabel=this.createLabelElement(draw2d.I18N.PROPERTYPANEL_PROPERTYLABEL_IMAGES,10,155);
this.imagesLabel.className="property_panel_image_header";
this.html.appendChild(this.imagesLabel);
this.imagesAddLabel=this.createLabelElement(" ",120,155);
this.imagesAddLabel.className="property_panel_image_add";
this.imagesAddLabel.title=draw2d.I18N.TOOLTIP_BUTTON_ADD_IMAGE;
this.html.appendChild(this.imagesAddLabel);
Event.observe(this.imagesAddLabel,"click",function(){
var _19b3=new draw2d.AddImageDialog("dialog_add_image",this.currentModel);
_19b3.show();
}.bind(this));
this.imageContainer=document.createElement("div");
this.imageContainer.style.position="absolute";
this.imageContainer.style.top="175px";
this.imageContainer.style.left="10px";
this.imageContainer.style.width="240px";
this.imageContainer.style.overflowX="hidden";
this.imageContainer.style.overflowY="auto";
this.imageContainer.className="property_panel_image_container";
this.html.appendChild(this.imageContainer);
};
draw2d.ServerPropertyPage.prototype=new draw2d.PropertyPage();
draw2d.ServerPropertyPage.prototype.type="draw2d.ServerPropertyPage";
draw2d.ServerPropertyPage.prototype.init=function(model){
this.currentModel=model;
this.nameText.value=model.getName();
this.ramText.value=model.getRAM();
this.listboxCPU.selectedIndex=parseInt(model.getCpuUnits(),10)-1;
this.imageContainer.innerHTML="";
var table=new Element("table");
table.style.position="absolute";
table.style.top="0px";
table.style.left="0px";
table.style.width="220px";
table.style.tableLayout="fixed";
table.cellspacing="0";
table.cellpadding="0";
var _19b6=model.getImagesModel().getImageModels();
this.imageContainer.appendChild(table);
for(var i=0;i<_19b6.getSize();i++){
var img=_19b6.get(i);
this.createNewImageHeader(table,img);
cell=this.createNewImageCell(table,draw2d.I18N.PROPERTYPANEL_PROPERTYLABEL_IMAGE_BOOTORDER);
var _19b9=document.createElement("select");
_19b9.style.overflow="auto";
_19b9.style.width="60px";
_19b9.size=1;
var _19ba=function(_19bb){
var func=this.setBootOrder.bind(this);
var _19bd=new draw2d.CommandChangeProperty(editor.getGraphicalViewer(),func,this.getBootOrder(),_19bb.selectedIndex+1);
editor.executeCommand(_19bd);
};
for(var ii=1;ii<10;ii++){
var node=document.createElement("option");
node.value=""+ii;
node.appendChild(document.createTextNode(""+ii));
_19b9.appendChild(node);
}
_19b9.selectedIndex=img.getBootOrder()-1;
cell.appendChild(_19b9);
_19ba=_19ba.bind(img,_19b9);
Event.observe(_19b9,"change",_19ba);
cell=this.createNewImageCell(table,draw2d.I18N.PROPERTYPANEL_PROPERTYLABEL_IMAGE_FILENAME);
cell.innerHTML=img.getFileName();
ellipsis(cell);
cell=this.createNewImageCell(table,draw2d.I18N.PROPERTYPANEL_PROPERTYLABEL_IMAGE_TYPE);
cell.innerHTML=img.getImageType();
cell=this.createNewImageCell(table,draw2d.I18N.PROPERTYPANEL_PROPERTYLABEL_IMAGE_WRITEBACK);
cell.innerHTML=img.getWriteback();
cell=this.createNewImageCell(table,draw2d.I18N.PROPERTYPANEL_PROPERTYLABEL_IMAGE_READONLY);
cell.innerHTML=img.getReadonly();
cell=this.createSeparator(table);
}
};
draw2d.ServerPropertyPage.prototype.onResize=function(w,h){
this.imageContainer.style.height=Math.max(10,h-parseInt(this.imageContainer.style.top,10))+"px";
};
draw2d.ServerPropertyPage.prototype.createNewImageHeader=function(_19c2,image){
var row=_19c2.insertRow(_19c2.rows.length);
var cell=row.insertCell(0);
cell.style.width="70px";
cell.innerHTML=image.getName()+"   ";
cell.className="property_panel_image_name";
cell.setAttribute("colspan","2");
var _19c6=document.createElement("span");
_19c6.style.whiteSpace="nowrap";
_19c6.className="property_panel_image_remove";
_19c6.title=draw2d.I18N.TOOLTIP_BUTTON_REMOVE_IMAGE;
_19c6.innerHTML=" ";
cell.appendChild(_19c6);
Event.observe(_19c6,"click",function(_19c7,image){
var _19c9=new draw2d.CommandRemoveImage(editor.getGraphicalViewer(),_19c7,image);
editor.getCommandStack().execute(_19c9);
}.bind(this,this.currentModel,image));
};
draw2d.ServerPropertyPage.prototype.createNewImageCell=function(_19ca,label){
var row=_19ca.insertRow(_19ca.rows.length);
var cell=row.insertCell(0);
cell.innerHTML=label;
cell.className="property_panel_label";
cell.style.width="70px";
var cell=row.insertCell(1);
cell.style.overflow="hidden";
cell.style.width="130px";
cell.className="property_panel_data";
var _19ce=document.createElement("div");
_19ce.style.whiteSpace="nowrap";
_19ce.style.overflow="hidden";
cell.appendChild(_19ce);
return _19ce;
};
draw2d.ServerPropertyPage.prototype.createSeparator=function(_19cf){
var row=_19cf.insertRow(_19cf.rows.length);
var cell=row.insertCell(0);
cell.innerHTML=" ";
cell.className="property_panel_image_separator";
cell.setAttribute("colspan","2");
};
draw2d.ServerPropertyPage.prototype.deinit=function(){
};
draw2d.ServerPropertyPage.prototype.getHTMLElement=function(){
return this.html;
};
