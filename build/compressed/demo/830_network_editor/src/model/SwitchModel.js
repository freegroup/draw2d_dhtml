/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.SwitchModel=function(id){draw2d.AbstractCloudNodeModel.call(this,id);this.dbid="";this.name=draw2d.Configuration.DEFAULT_SWITCH_NAME;this.representation=new draw2d.RepresentationModel(42,42);};draw2d.SwitchModel.prototype=new draw2d.AbstractCloudNodeModel();draw2d.SwitchModel.prototype.type="draw2d.SwitchModel";draw2d.SwitchModel.prototype.tag="switch";draw2d.SwitchModel.prototype.setName=function(name){var save=this.name;if(save===name){return;}this.name=name;this.firePropertyChange(draw2d.AbstractCloudNodeModel.EVENT_PROPERTY_CHANGED,save,name);};draw2d.SwitchModel.prototype.getName=function(){return this.name;};draw2d.SwitchModel.prototype.setPosition=function(xPos,yPos){xPos=Math.max(0,xPos);yPos=Math.max(0,yPos);var save=this.representation;if(save.x===xPos&&save.y===yPos){return;}this.representation=new draw2d.RepresentationModel(xPos,yPos);this.firePropertyChange(draw2d.AbstractCloudNodeModel.EVENT_POSITION_CHANGED,save,this.representation);};draw2d.SwitchModel.prototype.getPosition=function(){return new draw2d.Point(parseInt(this.representation.x,10),parseInt(this.representation.y,10));};draw2d.SwitchModel.prototype.getPersistentAttributes=function(){var _c4a=draw2d.AbstractCloudNodeModel.prototype.getPersistentAttributes.call(this);_c4a.attributes.id=this.id;if(this.dbid.length>0){_c4a.dbid=this.dbid;}_c4a.name=this.name;_c4a.representation=this.representation;return _c4a;};