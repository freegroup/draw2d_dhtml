/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.CanvasDocument=function(_121c){this.canvas=_121c;};draw2d.CanvasDocument.prototype.type="draw2d.CanvasDocument";draw2d.CanvasDocument.prototype.getFigures=function(){var _121d=new draw2d.ArrayList();var _121e=this.canvas.figures;var _121f=this.canvas.dialogs;for(var i=0;i<_121e.getSize();i++){var _1221=_121e.get(i);if(_121f.indexOf(_1221)==-1&&_1221.getParent()===null&&!(_1221 instanceof draw2d.WindowFigure)){_121d.add(_1221);}}return _121d;};draw2d.CanvasDocument.prototype.getFigure=function(id){return this.canvas.getFigure(id);};draw2d.CanvasDocument.prototype.getLines=function(){return this.canvas.getLines();};draw2d.CanvasDocument.prototype.getLine=function(id){return this.canvas.getLine(id);};