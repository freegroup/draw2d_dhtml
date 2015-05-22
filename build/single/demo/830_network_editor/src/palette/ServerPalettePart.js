draw2d.ServerPalettePart=function(_1aff){
draw2d.AbstractPalettePart.call(this);
this.networkModel=_1aff;
};
draw2d.ServerPalettePart.prototype=new draw2d.AbstractPalettePart();
draw2d.ServerPalettePart.prototype.type="draw2d.ServerPalettePart";
draw2d.ServerPalettePart.prototype.createHTMLElement=function(){
var item=draw2d.AbstractPalettePart.prototype.createHTMLElement.call(this);
item.className="palette_part_server";
item.innerHTML=draw2d.I18N.PALETTE_OBJECT_SERVER_LABEL;
item.title=draw2d.I18N.PALETTE_OBJECT_SERVER_TOOLTIP;
return item;
};
draw2d.ServerPalettePart.prototype.execute=function(x,y){
editor.getGraphicalViewer().getCommandStack().execute(new draw2d.CommandAddServer(this.networkModel,x-10,y-10));
};
