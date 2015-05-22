/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.MountInputPort=function(){draw2d.Port.call(this,new draw2d.ImageFigure(""+draw2d.Configuration.IMAGEPATH+"mount_port.png"));this.setDimension(16,16);this.setBackgroundColor(null);this.setName("input");};draw2d.MountInputPort.prototype=new draw2d.InputPort();draw2d.MountInputPort.prototype.type="draw2d.MountInputPort";draw2d.MountInputPort.prototype.createCommand=function(_b29){if(_b29.getPolicy()===draw2d.EditPolicy.CONNECT){if(_b29.source.parentNode.id===_b29.target.parentNode.id){return null;}if(_b29.source instanceof draw2d.MountOutputPort){var _b2a=_b29.source.getParent().getModel();var _b2b=_b29.target.getParent().getModel();return new draw2d.CommandConnectMount(_b2a,_b2b);}return null;}return draw2d.InputPort.prototype.createCommand.call(this,_b29);};