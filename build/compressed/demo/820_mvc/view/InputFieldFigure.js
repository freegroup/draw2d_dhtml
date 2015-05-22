/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.InputFieldFigure=function(){draw2d.InputPort.call(this);};draw2d.InputFieldFigure.prototype=new draw2d.InputPort();draw2d.InputFieldFigure.prototype.type="draw2d.InputFieldFigure";draw2d.InputFieldFigure.prototype.createCommand=function(_3bb){if(_3bb.getPolicy()==draw2d.EditPolicy.CONNECT){if(_3bb.source.parentNode.id==_3bb.target.parentNode.id){return null;}if(_3bb.source instanceof draw2d.OutputPort){return new draw2d.CommandConnect(_3bb.canvas,_3bb.source,_3bb.target);}}return draw2d.InputPort.prototype.createCommand.call(this,_3bb);};