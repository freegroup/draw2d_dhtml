/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.CommandMoveLine=function(line,_b51,_b52,endX,endY){draw2d.Command.call(this,"move line");this.line=line;this.startX1=_b51;this.startY1=_b52;this.endX1=endX;this.endY1=endY;};draw2d.CommandMoveLine.prototype=new draw2d.Command();draw2d.CommandMoveLine.prototype.type="draw2d.CommandMoveLine";draw2d.CommandMoveLine.prototype.canExecute=function(){return this.startX1!=this.startX2||this.startY1!=this.startY2||this.endX1!=this.endX2||this.endY1!=this.endY2;};draw2d.CommandMoveLine.prototype.execute=function(){this.startX2=this.line.getStartX();this.startY2=this.line.getStartY();this.endX2=this.line.getEndX();this.endY2=this.line.getEndY();this.redo();};draw2d.CommandMoveLine.prototype.undo=function(){this.line.setStartPoint(this.startX1,this.startY1);this.line.setEndPoint(this.endX1,this.endY1);if(this.line.workflow.getCurrentSelection()==this.line){this.line.workflow.showLineResizeHandles(this.line);}};draw2d.CommandMoveLine.prototype.redo=function(){this.line.setStartPoint(this.startX2,this.startY2);this.line.setEndPoint(this.endX2,this.endY2);if(this.line.workflow.getCurrentSelection()==this.line){this.line.workflow.showLineResizeHandles(this.line);}};