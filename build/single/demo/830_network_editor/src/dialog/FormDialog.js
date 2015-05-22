function bodyWidth(){
return document.body.offsetWidth||window.innerWidth||document.documentElement.clientWidth||0;
}
function bodyHeight(){
return document.body.offsetHeight||window.innerHeight||document.documentElement.clientHeight||0;
}
draw2d.FormDialog=function(id){
if(id===undefined){
return;
}
this.createOverlay();
this.dialog_box=$(id);
this.parent_element=this.dialog_box.parentNode;
this.dialog_box.style.position="absolute";
var _1c5e=Element.getDimensions(this.dialog_box);
var _1c5f=Element.getDimensions(this.overlay);
this.dialog_box.style.left=((_1c5f.width/2)-(_1c5e.width/2))+"px";
this.dialog_box.style.top="40px";
this.dialog_box.style.zIndex=this.overlay.style.zIndex+1;
};
draw2d.FormDialog.prototype.type="draw2d.FormDialog";
draw2d.FormDialog.prototype.createOverlay=function(){
if($("dialog_overlay")){
this.overlay=$("dialog_overlay");
}else{
this.overlay=document.createElement("div");
this.overlay.id="dialog_overlay";
Object.extend(this.overlay.style,{position:"absolute",top:0,left:0,zIndex:50001,width:"100%",backgroundColor:"black",display:"none"});
document.body.appendChild(this.overlay);
}
};
draw2d.FormDialog.prototype.moveDialogBox=function(where){
Element.remove(this.dialog_box);
if(where=="back"){
this.dialog_box=this.parent_element.appendChild(this.dialog_box);
}else{
this.dialog_box=this.overlay.parentNode.insertBefore(this.dialog_box,this.overlay);
}
};
draw2d.FormDialog.prototype.show=function(){
this.overlay.style.height=bodyHeight()+"px";
this.moveDialogBox("out");
this.overlay.onclick=this.hide.bind(this);
var x=new fx.Opacity(this.overlay).setOpacity(0.3);
this.overlay.style.display="";
this.dialog_box.style.display="";
this.dialog_box.style.left="0px";
var _1c62=Element.getDimensions(this.dialog_box);
this.dialog_box.style.left=((this.winWidth()/2)-(_1c62.width)/2)+"px";
this.dialog_box.style.top="40px";
this.okButton=this.dialog_box.select(".draw2d_window_button_ok")[0];
this.cancelButton=this.dialog_box.select(".draw2d_window_button_cancel")[0];
this.cancelButton.onclick=function(){
this.hide();
this.onCancel();
}.bind(this);
this.okButton.onclick=function(){
this.hide();
this.onOk();
}.bind(this);
};
draw2d.FormDialog.prototype.onOk=function(){
};
draw2d.FormDialog.prototype.onCancel=function(){
};
draw2d.FormDialog.prototype.getScrollTop=function(){
return (window.pageYOffset)?window.pageYOffset:(document.documentElement&&document.documentElement.scrollTop)?document.documentElement.scrollTop:document.body.scrollTop;
};
draw2d.FormDialog.prototype.hide=function(){
this.overlay.style.display="none";
this.dialog_box.style.display="none";
this.moveDialogBox("back");
$A(this.dialog_box.getElementsByTagName("input")).each(function(e){
if(e.type!="submit"){
e.value="";
}
});
};
draw2d.FormDialog.prototype.winWidth=function(){
var _1c64;
if(typeof window.innerWidth!="undefined"){
_1c64=window.innerWidth;
}else{
if(typeof document.documentElement!="undefined"&&typeof document.documentElement.clientWidth!="undefined"&&document.documentElement.clientWidth!=0){
_1c64=document.documentElement.clientWidth;
}else{
_1c64=document.getElementsByTagName("body")[0].clientWidth;
}
}
return _1c64;
};
draw2d.FormDialog.prototype.winHeight=function(){
var _1c65;
if(typeof window.innerHeight!="undefined"){
_1c65=window.innerHeight;
}else{
if(typeof document.documentElement!="undefined"&&typeof document.documentElement.clientHeight!="undefined"&&document.documentElement.clientHeight!=0){
_1c65=document.documentElement.clientHeight;
}else{
_1c65=document.getElementsByTagName("body")[0].clientHeight;
}
}
return _1c65;
};
