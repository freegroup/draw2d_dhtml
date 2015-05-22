/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.MountFigure=function(){draw2d.Connection.call(this);this.setRouter(new draw2d.NullConnectionRouter());this.setColor(draw2d.MountFigure.DEFAULT_COLOR);this.orderLabel=new draw2d.Label("1");this.orderLabel.setBorder(new draw2d.LineBorder(1));this.orderLabel.setWordwrap(false);this.orderLabel.setAlpha(0.5);this.addFigure(this.orderLabel,new draw2d.BezierMidpointLocator(this));};draw2d.MountFigure.prototype=new draw2d.Connection();draw2d.MountFigure.prototype.type="draw2d.MountFigure";draw2d.MountFigure.DEFAULT_COLOR=new draw2d.Color(95,95,95);draw2d.MountFigure.prototype.paint=function(){draw2d.Connection.prototype.paint.call(this);try{var _657=this.getModel();if(_657.getOrder()===""){this.orderLabel.setText("Order: - ");}else{this.orderLabel.setText("Order: "+_657.getOrder());}}catch(e){pushErrorStack(e,"draw2d.MountFigure.prototype.paint=function()");}};draw2d.MountFigure.prototype.propertyChange=function(_658){switch(_658.property){case draw2d.MountModel.EVENT_PROPERTY_CHANGED:this.paint();break;case draw2d.MountModel.EVENT_SOURCE_CHANGED:this.refreshSourcePort();break;case draw2d.MountModel.EVENT_TARGET_CHANGED:this.refreshTargetPort();break;default:break;}};draw2d.MountFigure.prototype.createCommand=function(_659){if(_659.getPolicy()===draw2d.EditPolicy.MOVE){return new draw2d.CommandReconnectMount(this.model);}if(_659.getPolicy()===draw2d.EditPolicy.DELETE){if(this.isDeleteable()===true){return new draw2d.CommandDisconnectMount(this.getModel());}return null;}return null;};