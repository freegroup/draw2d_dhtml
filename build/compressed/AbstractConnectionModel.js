/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.AbstractConnectionModel=function(){draw2d.AbstractObjectModel.call(this);};draw2d.AbstractConnectionModel.prototype=new draw2d.AbstractObjectModel();draw2d.AbstractConnectionModel.prototype.type="draw2d.AbstractConnectionModel";draw2d.AbstractConnectionModel.prototype.getSourceModel=function(){throw "you must override the method [AbstractConnectionModel.prototype.getSourceModel]";};draw2d.AbstractConnectionModel.prototype.getTargetModel=function(){throw "you must override the method [AbstractConnectionModel.prototype.getTargetModel]";};draw2d.AbstractConnectionModel.prototype.getSourcePortName=function(){throw "you must override the method [AbstractConnectionModel.prototype.getSourcePortName]";};draw2d.AbstractConnectionModel.prototype.getTargetPortName=function(){throw "you must override the method [AbstractConnectionModel.prototype.getTargetPortName]";};draw2d.AbstractConnectionModel.prototype.getSourcePortModel=function(){throw "you must override the method [AbstractConnectionModel.prototype.getSourcePortModel]";};draw2d.AbstractConnectionModel.prototype.getTargetPortModel=function(){throw "you must override the method [AbstractConnectionModel.prototype.getTargetPortModel]";};