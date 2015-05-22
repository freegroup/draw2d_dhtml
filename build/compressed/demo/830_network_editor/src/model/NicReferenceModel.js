/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.NicReferenceModel=function(_1205){draw2d.AbstractCloudNodeModel.call(this);this.reference=_1205;};draw2d.NicReferenceModel.prototype=new draw2d.AbstractCloudNodeModel();draw2d.NicReferenceModel.prototype.type="draw2d.NicReferenceModel";draw2d.NicReferenceModel.prototype.tag="nic";draw2d.NicReferenceModel.prototype.getPersistentAttributes=function(){var _1206={attributes:{}};_1206.attributes.reference=this.reference;return _1206;};