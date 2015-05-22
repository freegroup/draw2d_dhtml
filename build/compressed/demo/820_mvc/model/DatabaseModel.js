/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.DatabaseModel=function(){this.tables=new draw2d.ArrayList();this.name="default";};draw2d.DatabaseModel.prototype=new draw2d.AbstractObjectModel();draw2d.DatabaseModel.prototype.type="draw2d.DatabaseModel";draw2d.DatabaseModel.prototype.getModelChildren=function(){return this.tables;};draw2d.DatabaseModel.prototype.getTableModels=function(){return tables;};draw2d.DatabaseModel.prototype.getTableModel=function(_156a){var count=this.tables.getSize();for(var i=0;i<count;i++){var table=this.tables.get(i);if(table.getName()==_156a){return table;}}return null;};draw2d.DatabaseModel.prototype.getDatabaseModel=function(){return this;};draw2d.DatabaseModel.prototype.getPersistentAttributes=function(){var att=draw2d.AbstractObjectModel.prototype.getPersistentAttributes.call(this);att.tables=this.tables;att.name=this.name;return att;};