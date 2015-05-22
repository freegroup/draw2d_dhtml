/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.RepresentationModel=function(x,y){draw2d.AbstractCloudNodeModel.call(this);if(x!==undefined&&x!==null){this.x=parseInt(x,10);}else{this.x=42;}if(y!==undefined&&y!==null){this.y=parseInt(y,10);}else{this.y=42;}};draw2d.RepresentationModel.prototype=new draw2d.AbstractCloudNodeModel();draw2d.RepresentationModel.prototype.type="draw2d.RepresentationModel";draw2d.RepresentationModel.prototype.tag="representation";draw2d.RepresentationModel.prototype.getPersistentAttributes=function(){var _3ba=draw2d.AbstractCloudNodeModel.prototype.getPersistentAttributes.call(this);_3ba.attributes.x=this.x;_3ba.attributes.y=this.y;return _3ba;};