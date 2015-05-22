/* This notice must be untouched at all times.

FreeGroup @APPLICATIONNAME@ @VERSION@
The latest version is available at
@APPLICATIONWEBSITE@

Copyright (c) 2006 Andreas Herz. All rights reserved.
Created 5. 11. 2006 by Andreas Herz (Web: http://www.freegroup.de )

LICENSE: LGPL

This library is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License (LGPL) as published by the Free Software Foundation; either
version 2.1 of the License, or (at your option) any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public
License along with this library; if not, write to the Free Software
Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA,
or see http://www.gnu.org/copyleft/lesser.html
*/
draw2d.FieldModel=function(/*:String*/ name)
{
   draw2d.AbstractObjectModel.call(this);

   this.name  = name;
   this.typeModel = new draw2d.FieldTypeModelBoolean(false);
};

draw2d.FieldModel.prototype = new draw2d.AbstractObjectModel();
/** @private */
draw2d.FieldModel.prototype.type="draw2d.FieldModel";

draw2d.FieldModel.DBTYPE_TEXT      = "TEXT";
draw2d.FieldModel.DBTYPE_DOCUMENT  = "DOCUMENT";
draw2d.FieldModel.DBTYPE_INTEGER   = "INTEGER";
draw2d.FieldModel.DBTYPE_LONG      = "LONG";
draw2d.FieldModel.DBTYPE_FLOAT     = "FLOAT";
draw2d.FieldModel.DBTYPE_DOUBLE    = "DOUBLE";
draw2d.FieldModel.DBTYPE_DECIMAL   = "DECIMAL";
draw2d.FieldModel.DBTYPE_DATE      = "DATE";
draw2d.FieldModel.DBTYPE_TIME      = "TIME";
draw2d.FieldModel.DBTYPE_TIMESTAMP = "TIMESTAMP";
draw2d.FieldModel.DBTYPE_LONGTEXT  = "LONGTEXT";
draw2d.FieldModel.DBTYPE_BINARY    = "BINARY";
draw2d.FieldModel.DBTYPE_ENUM      = "ENUM";
draw2d.FieldModel.DBTYPE_BOOLEAN   = "BOOLEAN";



draw2d.FieldModel.prototype.getName=function()
{
  return this.name;
};

draw2d.FieldModel.prototype.getExtendedDescriptionLabel=function()
{
   if(this.getTypeName()== draw2d.FieldModel.DBTYPE_TEXT)
     return this.getName()+" "+this.getTypeName()+"<"+this.getLengthAsString()+">";
   return this.getName()+" "+this.getTypeName();
};


draw2d.FieldModel.prototype.getTypeName=function()
{
  return this.typeModel.getName();
};


draw2d.FieldModel.prototype.setTypeModel=function(/*:draw2d.FieldTypeModel*/ typeModel)
{
  if(!(typeModel instanceof draw2d.FieldTypeModel))
    throw "Invalid parameter type in [FieldModel.prototype.setTypeModel]";

  this.typeModel = typeModel;
  this.typeModel.setModelParent(this);
};

draw2d.FieldModel.prototype.getTypeModel=function()
{
  return this.typeModel;
};

draw2d.FieldModel.prototype.getLengthAsString=function()
{
  var length = "";
  if (draw2d.FieldModel.DBTYPE_TEXT == this.getTypeName())
  {
    length = Integer.toString(this.getTypeModel().getMaxLength());
    if(this.getTypeModel().getFixeLength())
      length = "["+length+"]";
  }
  return length;
};

/**
 * @type draw2d.DatabaseModel
 **/
draw2d.FieldModel.prototype.getDatabaseModel=function()
{
   return this.getModelParent().getDatabaseModel();
};


/**
 * Returns all attributes which are relevatn for serialization.
 * 
 * @return The list of persistend attribute.
 * @since 0.9.15
 **/
draw2d.FieldModel.prototype.getPersistentAttributes=function()
{
   var att = draw2d.AbstractObjectModel.prototype.getPersistentAttributes.call(this);

   // enrich the base attributes with the class/instance specific properties
   att.name= this.name;
   att.typeModel= this.typeModel;

   return att;
};
