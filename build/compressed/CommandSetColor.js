/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.CommandSetColor=function(_65d,_65e){draw2d.Command.call(this,"set color");this.figure=_65d;this.newColor=_65e;this.oldColor=_65d.getColor();};draw2d.CommandSetColor.prototype=new draw2d.Command();draw2d.CommandSetColor.prototype.type="draw2d.CommandSetColor";draw2d.CommandSetColor.prototype.execute=function(){this.redo();};draw2d.CommandSetColor.prototype.undo=function(){this.figure.setColor(this.oldColor);};draw2d.CommandSetColor.prototype.redo=function(){this.figure.setColor(this.newColor);};