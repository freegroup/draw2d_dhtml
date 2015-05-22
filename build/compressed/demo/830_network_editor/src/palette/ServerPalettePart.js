/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.ServerPalettePart=function(_555){draw2d.AbstractPalettePart.call(this);this.networkModel=_555;};draw2d.ServerPalettePart.prototype=new draw2d.AbstractPalettePart();draw2d.ServerPalettePart.prototype.type="draw2d.ServerPalettePart";draw2d.ServerPalettePart.prototype.createHTMLElement=function(){var item=draw2d.AbstractPalettePart.prototype.createHTMLElement.call(this);item.className="palette_part_server";item.innerHTML=draw2d.I18N.PALETTE_OBJECT_SERVER_LABEL;item.title=draw2d.I18N.PALETTE_OBJECT_SERVER_TOOLTIP;return item;};draw2d.ServerPalettePart.prototype.execute=function(x,y){editor.getGraphicalViewer().getCommandStack().execute(new draw2d.CommandAddServer(this.networkModel,x-10,y-10));};