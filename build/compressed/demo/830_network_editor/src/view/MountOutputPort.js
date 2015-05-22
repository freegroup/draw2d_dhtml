/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.MountOutputPort=function(){draw2d.Port.call(this,new draw2d.ImageFigure(""+draw2d.Configuration.IMAGEPATH+"mount_port.png"));this.setDimension(16,16);this.setBackgroundColor(null);this.setName("output");};draw2d.MountOutputPort.prototype=new draw2d.OutputPort();draw2d.MountOutputPort.prototype.type="draw2d.MountOutputPort";draw2d.MountOutputPort.prototype.createCommand=function(_1230){if(_1230.getPolicy()===draw2d.EditPolicy.CONNECT){if(_1230.source.parentNode.id===_1230.target.parentNode.id){return null;}if(_1230.source instanceof draw2d.MountInputPort){var _1231=_1230.source.getParent().getModel();var _1232=_1230.target.getParent().getModel();return new draw2d.CommandConnectMount(_1232,_1231);}return null;}return draw2d.OutputPort.prototype.createCommand.call(this,_1230);};