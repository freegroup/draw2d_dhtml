draw2d.StoragePalettePart=function(_2925){
draw2d.AbstractPalettePart.call(this);
this.networkModel=_2925;
};
draw2d.StoragePalettePart.prototype.type="draw2d.StoragePalettePart";
draw2d.StoragePalettePart.prototype=new draw2d.AbstractPalettePart();
draw2d.StoragePalettePart.prototype.createHTMLElement=function(){
var item=draw2d.AbstractPalettePart.prototype.createHTMLElement.call(this);
item.className="palette_part_storage";
item.innerHTML=draw2d.I18N.PALETTE_OBJECT_STORAGE_LABEL;
item.title=draw2d.I18N.PALETTE_OBJECT_STORAGE_TOOLTIP;
return item;
};
draw2d.StoragePalettePart.prototype.execute=function(x,y){
editor.getGraphicalViewer().getCommandStack().execute(new draw2d.CommandAddStorage(this.networkModel,x-10,y-10));
};
