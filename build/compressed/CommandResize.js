/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.CommandResize=function(_131,_132,_133){draw2d.Command.call(this,"resize figure");this.figure=_131;if(_132===undefined){this.oldWidth=_131.getWidth();this.oldHeight=_131.getHeight();}else{this.oldWidth=_132;this.oldHeight=_133;}};draw2d.CommandResize.prototype=new draw2d.Command();draw2d.CommandResize.prototype.type="draw2d.CommandResize";draw2d.CommandResize.prototype.setDimension=function(_134,_135){this.newWidth=_134;this.newHeight=_135;};draw2d.CommandResize.prototype.canExecute=function(){return this.newWidth!=this.oldWidth||this.newHeight!=this.oldHeight;};draw2d.CommandResize.prototype.execute=function(){this.redo();};draw2d.CommandResize.prototype.undo=function(){this.figure.setDimension(this.oldWidth,this.oldHeight);this.figure.workflow.moveResizeHandles(this.figure);};draw2d.CommandResize.prototype.redo=function(){this.figure.setDimension(this.newWidth,this.newHeight);this.figure.workflow.moveResizeHandles(this.figure);};