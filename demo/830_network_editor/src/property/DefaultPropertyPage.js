draw2d.DefaultPropertyPage=function(){
draw2d.PropertyPage.call(this);
this.html=document.createElement("div");
this.html.style.width="100%";
this.html.style.height="100%";
this.header=this.createLabelElement(draw2d.I18N.PROPERTYPANEL_HEADER_DEFAULT,0,0);
this.header.className="panel_header";
this.html.appendChild(this.header);
this.nameLabel=this.createLabelElement(draw2d.I18N.PROPERTYPANEL_PROPERTYLABEL_NAME,10,45);
this.nameLabel.style.color="gray";
this.html.appendChild(this.nameLabel);
this.nameText=document.createElement("input");
this.nameText.type="text";
var oThis=this;
if(editor.isReadonly()){
this.nameText.disabled="true";
}else{
Event.observe(this.nameText,"keyup",function(e){
var func=oThis.currentModel.setName.bind(oThis.currentModel);
var _1f66=new draw2d.CommandChangeProperty(editor.getGraphicalViewer(),func,oThis.currentModel.getName(),oThis.nameText.value);
editor.executeCommand(_1f66);
});
}
this.nameText.style.position="absolute";
this.nameText.style.width="110px";
this.nameText.style.top="65px";
this.nameText.style.left="10px";
this.html.appendChild(this.nameText);
if(draw2d.Configuration.DEBUG===true){
var label=this.createLabelElement("Debug Information",10,125);
this.html.appendChild(label);
this.dbidLabel=this.createLabelElement("DBID",15,145);
this.html.appendChild(this.dbidLabel);
this.idLabel=this.createLabelElement("ID",15,165);
this.html.appendChild(this.idLabel);
}
};
draw2d.DefaultPropertyPage.prototype=new draw2d.PropertyPage();
draw2d.DefaultPropertyPage.prototype.type="draw2d.DefaultPropertyPage";
draw2d.DefaultPropertyPage.prototype.init=function(model){
this.currentModel=model;
this.nameText.value=model.getName();
if(draw2d.Configuration.DEBUG===true){
if(model.getDbId()===""){
this.dbidLabel.firstChild.data="DBID: -keine-";
}else{
this.dbidLabel.firstChild.data="DBID: "+model.getDbId();
}
if(model.getId()===""){
this.idLabel.firstChild.data="ID: -keine-";
}else{
this.idLabel.firstChild.data="ID: "+model.getId();
}
}
};
draw2d.DefaultPropertyPage.prototype.deinit=function(){
};
draw2d.DefaultPropertyPage.prototype.getHTMLElement=function(){
return this.html;
};
