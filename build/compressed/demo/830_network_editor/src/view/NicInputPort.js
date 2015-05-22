/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.NicInputPort=function(){draw2d.Port.call(this,new draw2d.ImageFigure(""+draw2d.Configuration.IMAGEPATH+"nic_port.png"));this.setDimension(16,16);this.setBackgroundColor(null);this.setName("input");};draw2d.NicInputPort.prototype=new draw2d.InputPort();draw2d.NicInputPort.prototype.type="draw2d.NicInputPort";draw2d.NicInputPort.prototype.createCommand=function(_b6c){if(_b6c.getPolicy()===draw2d.EditPolicy.CONNECT){if(_b6c.source.parentNode.id==_b6c.target.parentNode.id){return null;}if(_b6c.source instanceof draw2d.NicOutputPort){var _b6d=_b6c.source.getParent().getModel();var _b6e=_b6c.target.getParent().getModel();return new draw2d.CommandConnectNic(_b6d,_b6e);}return null;}return draw2d.InputPort.prototype.createCommand.call(this,_b6c);};