draw2d.GenericButton=function(_22b0){
draw2d.Button.call(this,_22b0,16,16);
};
draw2d.GenericButton.prototype=new draw2d.Button();
draw2d.GenericButton.prototype.type="draw2d.GenericButton";
draw2d.GenericButton.prototype.getImageUrl=function(){
if(this.enabled){
return draw2d.Configuration.IMAGEPATH+this.type+".png";
}else{
return draw2d.Configuration.IMAGEPATH+this.type+"_disabled.png";
}
};
