draw2d.SwitchPalettePart=function(_28fb){
draw2d.AbstractPalettePart.call(this);
this.networkModel=_28fb;
};
draw2d.SwitchPalettePart.prototype=new draw2d.AbstractPalettePart();
draw2d.SwitchPalettePart.prototype.type="draw2d.SwitchPalettePart";
draw2d.SwitchPalettePart.prototype.createHTMLElement=function(){
var item=draw2d.AbstractPalettePart.prototype.createHTMLElement.call(this);
item.className="palette_part_switch";
item.innerHTML=draw2d.I18N.PALETTE_OBJECT_SWITCH_LABEL;
item.title=draw2d.I18N.PALETTE_OBJECT_SWITCH_TOOLTIP;
return item;
};
draw2d.SwitchPalettePart.prototype.execute=function(x,y){
editor.getGraphicalViewer().getCommandStack().execute(new draw2d.CommandAddSwitch(this.networkModel,x-10,y-10));
};
