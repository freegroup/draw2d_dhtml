/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.NicsModel=function(){draw2d.AbstractCloudNodeModel.call(this);this.nics=new draw2d.ArrayList();};draw2d.NicsModel.prototype=new draw2d.AbstractCloudNodeModel();draw2d.NicsModel.prototype.type="draw2d.NicsModel";draw2d.NicsModel.prototype.tag="nics";draw2d.NicsModel.prototype.addNicModel=function(_128){this.nics.add(_128);this.firePropertyChange(draw2d.AbstractObjectModel.EVENT_ELEMENT_ADDED,null,_128);};draw2d.NicsModel.prototype.removeNicModel=function(_129){if(this.nics.remove(_129)!==null){this.firePropertyChange(draw2d.AbstractObjectModel.EVENT_ELEMENT_REMOVED,_129,null);}};draw2d.NicsModel.prototype.removeNic=function(_12a){for(var i=0;i<this.nics.getSize();i++){var nic=this.nics.get(i);if(nic.getId()===_12a){this.removeNicModel(nic);break;}}};draw2d.NicsModel.prototype.getNicModel=function(_12d){for(var i=0;i<this.nics.getSize();i++){var nic=this.nics.get(i);if(nic.getId()===_12d){return nic;}}return null;};draw2d.NicsModel.prototype.getPersistentAttributes=function(){var _130=draw2d.AbstractCloudNodeModel.prototype.getPersistentAttributes.call(this);_130.attributes.id=this.id;_130.nics=this.nics.asArray();return _130;};