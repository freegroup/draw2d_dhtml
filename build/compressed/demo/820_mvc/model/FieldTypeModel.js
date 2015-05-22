/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.FieldTypeModel=function(name){draw2d.AbstractObjectModel.call(this);this.name=name;this.parent=null;};draw2d.FieldTypeModel.prototype=new draw2d.AbstractObjectModel();draw2d.FieldTypeModel.prototype.type="draw2d.FieldTypeModel";draw2d.FieldTypeModel.prototype.getName=function(){return this.name;};draw2d.FieldTypeModel.prototype.getDatabaseModel=function(){return this.getModelParent().getDatabaseModel();};draw2d.FieldTypeModel.prototype.getPersistentAttributes=function(){var att=draw2d.AbstractObjectModel.prototype.getPersistentAttributes.call(this);att.name=this.name;return att;};