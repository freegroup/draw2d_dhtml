draw2d.ToolbarButtonGroup=function(){
this.buttons=new draw2d.ArrayList();
this.html=null;
};
draw2d.ToolbarButtonGroup.prototype.getHTMLElement=function(){
if(this.html===null){
this.html=new Element("ul");
this.html.className="toolbar_button_group";
}
return this.html;
};
draw2d.ToolbarButtonGroup.prototype.addElement=function(_1fc2){
this.getHTMLElement().appendChild(_1fc2.getHTMLElement());
if(this.buttons.getSize()===0){
this.buttons.add(_1fc2);
$(_1fc2.getHTMLElement()).addClassName("first_button");
}else{
if(this.buttons.getSize()===1){
this.buttons.add(_1fc2);
$(_1fc2.getHTMLElement()).addClassName("last_button");
}else{
var _1fc3=this.buttons.getLastElement();
$(_1fc3.getHTMLElement()).removeClassName("last_button");
$(_1fc3.getHTMLElement()).addClassName("center_button");
this.buttons.add(_1fc2);
$(_1fc2.getHTMLElement()).addClassName("last_button");
}
}
};
