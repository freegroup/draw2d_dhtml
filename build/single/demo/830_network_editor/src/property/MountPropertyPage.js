draw2d.MountPropertyPage=function(){
draw2d.PropertyPage.call(this);
this.html=document.createElement("div");
this.html.style.width="100%";
this.html.style.height="100%";
this.header=this.createLabelElement(draw2d.I18N.PROPERTYPANEL_HEADER_MOUNT,0,0);
this.header.className="panel_header";
this.html.appendChild(this.header);
var oThis=this;
this.orderLabel=this.createLabelElement(draw2d.I18N.PROPERTYPANEL_PROPERTYLABEL_ORDERINDEX,10,45);
this.orderLabel.style.color="gray";
this.html.appendChild(this.orderLabel);
this.orderText=document.createElement("input");
this.orderText.type="text";
if(editor.isReadonly()){
this.orderText.disabled="true";
}else{
Event.observe(this.orderText,"keyup",function(e){
var order=parseInt(oThis.orderText.value,10);
if(isNaN(order)){
order="";
}
oThis.orderText.value=""+order;
var func=oThis.currentModel.setOrder.bind(oThis.currentModel);
var _1707=new draw2d.CommandChangeProperty(editor.getGraphicalViewer(),func,oThis.currentModel.getOrder(),oThis.orderText.value);
editor.executeCommand(_1707);
});
}
this.orderText.style.position="absolute";
this.orderText.style.width="110px";
this.orderText.style.top="65px";
this.orderText.style.left="10px";
this.html.appendChild(this.orderText);
};
draw2d.MountPropertyPage.prototype=new draw2d.PropertyPage();
draw2d.MountPropertyPage.prototype.type="draw2d.MountPropertyPage";
draw2d.MountPropertyPage.prototype.init=function(model){
this.currentModel=model;
this.orderText.value=model.getOrder();
};
draw2d.MountPropertyPage.prototype.deinit=function(){
};
draw2d.MountPropertyPage.prototype.getHTMLElement=function(){
return this.html;
};
