/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.NicConnectionFigure=function(){draw2d.Connection.call(this);this.setRouter(new draw2d.FanConnectionRouter());this.setColor(draw2d.MountFigure.DEFAULT_COLOR);};draw2d.NicConnectionFigure.prototype=new draw2d.Connection();draw2d.NicConnectionFigure.prototype.type="draw2d.NicConnectionFigure";draw2d.NicConnectionFigure.DEFAULT_COLOR=new draw2d.Color(164,164,164);draw2d.NicConnectionFigure.prototype.propertyChange=function(_4a5){switch(_4a5.property){case draw2d.MountModel.EVENT_PROPERTY_CHANGED:this.paint();break;case draw2d.MountModel.EVENT_SOURCE_CHANGED:this.refreshSourcePort();break;case draw2d.MountModel.EVENT_TARGET_CHANGED:this.refreshTargetPort();break;default:break;}};draw2d.NicConnectionFigure.prototype.createCommand=function(_4a6){if(_4a6.getPolicy()===draw2d.EditPolicy.MOVE){return new draw2d.CommandReconnectNic(this.model);}if(_4a6.getPolicy()==draw2d.EditPolicy.DELETE){if(this.isDeleteable()===true){return new draw2d.CommandDisconnectNic(this.getModel());}return null;}return null;};