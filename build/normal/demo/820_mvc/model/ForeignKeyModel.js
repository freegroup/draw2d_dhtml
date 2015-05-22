/* This notice must be untouched at all times.

FreeGroup Draw2D 0.9.31
The latest version is available at
${draw2d.website}

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

/**
 * @class OneToMany relation between 2 database tables
 * fromTabel <--- toTable
 **/
draw2d.ForeignKeyModel=function( /*:String*/ toTable, /*:String*/ toField, /*:String*/ fromTable, /*:String*/ fromField)
{
   draw2d.AbstractConnectionModel.call(this);

  // ONE side
  this.fromTable = fromTable;
  this.fromField = fromField;

  // MANY side
  this.toTable = toTable;
  this.toField = toField;
};

draw2d.ForeignKeyModel.prototype = new draw2d.AbstractConnectionModel();
/** @private */
draw2d.ForeignKeyModel.prototype.type="draw2d.ForeignKeyModel";


/**
 *
 **/
draw2d.ForeignKeyModel.prototype.getSourceModel=function()
{
   return this.getDatabaseModel().getTableModel(this.toTable);
};

/**
 *
 **/
draw2d.ForeignKeyModel.prototype.getTargetModel=function()
{
   return this.getDatabaseModel().getTableModel(this.fromTable);
};



/**
 *
 **/
draw2d.ForeignKeyModel.prototype.getSourcePortName=function()
{
   return "out_"+this.toField;
};

/**
 *
 **/
draw2d.ForeignKeyModel.prototype.getTargetPortName=function()
{
   return "in_"+this.fromField;
};

/**
 * @type draw2d.DatabaseModel
 **/
draw2d.ForeignKeyModel.prototype.getDatabaseModel=function()
{
   return this.getModelParent().getDatabaseModel();
};


/**
 * Returns all attributes which are relevatn for serialization.
 * 
 * @return The list of persistend attribute.
 **/
draw2d.ForeignKeyModel.prototype.getPersistentAttributes=function()
{
   var att = draw2d.AbstractObjectModel.prototype.getPersistentAttributes.call(this);

   // enrich the base attributes with the class/instance specific properties
   att.fromTable= this.fromTable;
   att.fromField= this.fromField;
   att.toTable  = this.toTable;
   att.toField  = this.toField;

   return att;
};

