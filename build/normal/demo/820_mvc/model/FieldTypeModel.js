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
draw2d.FieldTypeModel=function(/*:String*/ name)
{
  draw2d.AbstractObjectModel.call(this);
  this.name = name;

  this.parent = null;
};

draw2d.FieldTypeModel.prototype = new draw2d.AbstractObjectModel();
/** @private */
draw2d.FieldTypeModel.prototype.type="draw2d.FieldTypeModel";

draw2d.FieldTypeModel.prototype.getName=function()
{
   return this.name;
};

/**
 * @type draw2d.DatabaseModel
 **/
draw2d.FieldTypeModel.prototype.getDatabaseModel=function()
{
   return this.getModelParent().getDatabaseModel();
};

/**
 * Returns all attributes which are relevatn for serialization.
 * 
 * @return The list of persistend attribute.
 * @since 0.9.15
 **/
draw2d.FieldTypeModel.prototype.getPersistentAttributes=function()
{
   var att = draw2d.AbstractObjectModel.prototype.getPersistentAttributes.call(this);

   // enrich the base attributes with the class/instance specific properties
   att.name= this.name;

   return att;
};


