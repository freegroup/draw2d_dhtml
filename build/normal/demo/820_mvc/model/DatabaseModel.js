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
draw2d.DatabaseModel=function()
{
  this.tables = new draw2d.ArrayList();
  this.name = "default";
};

draw2d.DatabaseModel.prototype = new draw2d.AbstractObjectModel();
draw2d.DatabaseModel.prototype.type="draw2d.DatabaseModel";


/**
 *
 **/
draw2d.DatabaseModel.prototype.getModelChildren=function()
{
   return this.tables;
};

/**
 * @type draw2d.ArrayList
 **/
draw2d.DatabaseModel.prototype.getTableModels=function()
{
   return tables;
};

/**
 * @type draw2d.TableModel
 **/
draw2d.DatabaseModel.prototype.getTableModel=function(/*:String*/ tableName)
{
   var count=this.tables.getSize();
   for(var i=0;i<count;i++)
   {
      var table = this.tables.get(i);
      if(table.getName()==tableName)
         return table;
   }
   return null;
};

/**
 * @type draw2d.DatabaseModel
 **/
draw2d.DatabaseModel.prototype.getDatabaseModel=function()
{
   return this;
};


draw2d.DatabaseModel.prototype.getPersistentAttributes=function()
{
   var att = draw2d.AbstractObjectModel.prototype.getPersistentAttributes.call(this);

   // enrich the base attributes with the class/instance specific properties
   att.tables= this.tables;
   att.name= this.name;

   return att;
};
