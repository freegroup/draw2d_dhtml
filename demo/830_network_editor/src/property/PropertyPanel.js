draw2d.PropertyPanel=function(_229e){
try{
if(!_229e){
return;
}
this.html=$(_229e);
this.pages=new Hash();
this.currentPage=null;
this.pages.set(draw2d.ServerModel.prototype.type,new draw2d.ServerPropertyPage());
this.pages.set(draw2d.StorageModel.prototype.type,new draw2d.StoragePropertyPage());
this.pages.set(draw2d.SwitchModel.prototype.type,new draw2d.SwitchPropertyPage());
this.pages.set(draw2d.MountModel.prototype.type,new draw2d.MountPropertyPage());
this.pages.set(draw2d.NicConnectionModel.prototype.type,new draw2d.NicPropertyPage());
this.defaultPage=new draw2d.DefaultPropertyPage();
this.onSelectionChanged(null,null);
}
catch(e){
pushErrorStack(e,"draw2d.PropertyPanel=function(/*:String*/ contentDivId)");
}
};
draw2d.PropertyPanel.prototype.type="draw2d.PropertyPanel";
draw2d.PropertyPanel.prototype.setDimension=function(w,h){
this.html.style.width=w+"px";
this.html.style.height=h+"px";
this.pages.values().each(function(page){
page.onResize(w,h);
});
};
draw2d.PropertyPanel.prototype.onSelectionChanged=function(_22a2,model){
try{
if(this.currentPage!==null){
this.currentPage.deinit();
this.html.removeChild(this.currentPage.getHTMLElement());
this.currentPage=null;
}
this.html.innerHTML="";
if(model!==null){
var page=this.pages.get(model.type);
if(page){
this.html.appendChild(page.getHTMLElement());
page.init(model);
this.currentPage=page;
}
}else{
this.html.appendChild(this.defaultPage.getHTMLElement());
this.defaultPage.init(editor.getModel());
this.currentPage=this.defaultPage;
}
}
catch(e){
alert(e);
}
};
