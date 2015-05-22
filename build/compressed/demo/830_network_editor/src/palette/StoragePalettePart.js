/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.StoragePalettePart=function(_1233){draw2d.AbstractPalettePart.call(this);this.networkModel=_1233;};draw2d.StoragePalettePart.prototype.type="draw2d.StoragePalettePart";draw2d.StoragePalettePart.prototype=new draw2d.AbstractPalettePart();draw2d.StoragePalettePart.prototype.createHTMLElement=function(){var item=draw2d.AbstractPalettePart.prototype.createHTMLElement.call(this);item.className="palette_part_storage";item.innerHTML=draw2d.I18N.PALETTE_OBJECT_STORAGE_LABEL;item.title=draw2d.I18N.PALETTE_OBJECT_STORAGE_TOOLTIP;return item;};draw2d.StoragePalettePart.prototype.execute=function(x,y){editor.getGraphicalViewer().getCommandStack().execute(new draw2d.CommandAddStorage(this.networkModel,x-10,y-10));};