/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.NicOutputPort=function(){draw2d.Port.call(this,new draw2d.ImageFigure(""+draw2d.Configuration.IMAGEPATH+"nic_port.png"));this.setDimension(16,16);this.setBackgroundColor(null);this.setName("output");};draw2d.NicOutputPort.prototype=new draw2d.OutputPort();draw2d.NicOutputPort.prototype.type="draw2d.NicOutputPort";draw2d.NicOutputPort.prototype.createCommand=function(_1cd){if(_1cd.getPolicy()==draw2d.EditPolicy.CONNECT){if(_1cd.source.parentNode.id==_1cd.target.parentNode.id){return null;}if(_1cd.source instanceof draw2d.NicInputPort){var _1ce=_1cd.source.getParent().getModel();var _1cf=_1cd.target.getParent().getModel();return new draw2d.CommandConnectNic(_1cf,_1ce);}return null;}return draw2d.OutputPort.prototype.createCommand.call(this,_1cd);};