/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.ForeignKeyModel=function(_52b,_52c,_52d,_52e){draw2d.AbstractConnectionModel.call(this);this.fromTable=_52d;this.fromField=_52e;this.toTable=_52b;this.toField=_52c;};draw2d.ForeignKeyModel.prototype=new draw2d.AbstractConnectionModel();draw2d.ForeignKeyModel.prototype.type="draw2d.ForeignKeyModel";draw2d.ForeignKeyModel.prototype.getSourceModel=function(){return this.getDatabaseModel().getTableModel(this.toTable);};draw2d.ForeignKeyModel.prototype.getTargetModel=function(){return this.getDatabaseModel().getTableModel(this.fromTable);};draw2d.ForeignKeyModel.prototype.getSourcePortName=function(){return "out_"+this.toField;};draw2d.ForeignKeyModel.prototype.getTargetPortName=function(){return "in_"+this.fromField;};draw2d.ForeignKeyModel.prototype.getDatabaseModel=function(){return this.getModelParent().getDatabaseModel();};draw2d.ForeignKeyModel.prototype.getPersistentAttributes=function(){var att=draw2d.AbstractObjectModel.prototype.getPersistentAttributes.call(this);att.fromTable=this.fromTable;att.fromField=this.fromField;att.toTable=this.toTable;att.toField=this.toField;return att;};