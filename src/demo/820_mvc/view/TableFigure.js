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
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public
License along with this library; if not, write to the Free Software
Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307 USA,
or see http://www.gnu.org/copyleft/lesser.html
*/
draw2d.TableFigure=function()
{
  this.table = null;
  this.header = null;

  draw2d.Node.call(this);

  this.setResizeable(false);
};

draw2d.TableFigure.prototype = new draw2d.Node();
draw2d.TableFigure.prototype.type="draw2d.TableFigure";


draw2d.TableFigure.prototype.paint=function()
{
   var model = this.getModel();

   this.setPosition(model.getPosition().x, model.getPosition().y);

   this.header.innerHTML = model.getName();
   this.setDimension(this.getWidth(),this.getHeight());

   var fields = this.model.getFieldModels();
   for(var i=0; i<fields.getSize(); i++)
   {
     this.addColumn(fields.get(i).getName(),fields.get(i).getExtendedDescriptionLabel());
   }
};


draw2d.TableFigure.prototype.propertyChange=function(event)
{
  switch(event.property)
  {
    case draw2d.TableModel.EVENT_POSITION_CHANGED:
        this.setPosition(event.newValue.x,event.newValue.y);
        break;
    case draw2d.TableModel.EVENT_FIELD_ADDED:
        this.addColumn(event.newValue.getName(),event.newValue.getExtendedDescriptionLabel());
        break;
    case draw2d.TableModel.EVENT_KEY_ADDED:
        this.refreshConnections();
        break;
    case draw2d.TableModel.EVENT_NAME_CHANGED:
        this.header.innerHTML = model.getName();
        break;
   }
};


/**
 * Returns the Command to perform the specified Request or null.
  *
 * @param {draw2d.EditPolicy} request describes the Command being requested
 * @return null or a Command
 * @type draw2d.Command 
 **/
draw2d.TableFigure.prototype.createCommand=function(/*:draw2d.EditPolicy*/ request)
{
  if(request.getPolicy() == draw2d.EditPolicy.MOVE)
  {
    if(!this.canDrag)
      return null;
    return new draw2d.CommandMoveTable(this.model);
  }

  return null;
};


draw2d.TableFigure.prototype.createHTMLElement=function()
{
 var item = draw2d.Node.prototype.createHTMLElement.call(this);

 item.style.width="100px";
 item.style.height="100px";
 item.style.margin="0px";
 item.style.padding="0px";

 this.table = document.createElement("table");
 this.table.style.fontSize="8pt";
 this.table.style.margin="0px";
 this.table.style.padding="0px";
 this.table.cellPadding ="0";
 this.table.cellSpacing ="0";

 var row=this.table.insertRow(0);
 this.header=row.insertCell(0);
 this.header.innerHTML = "";
 this.header.colSpan="2";
 this.header.style.background ="transparent url(header.png) repeat-x";
 this.header.style.height ="25px";
 this.header.style.paddingLeft ="5px";
 this.header.style.paddingRight ="5px";
 this.disableTextSelection(this.header);
 item.appendChild(this.table);

 return item;
};


/**
 * Returns the calculated width of the figure.
 *
 **/
draw2d.TableFigure.prototype.getWidth=function()
{
  if(this.table===null)
    return 10;
  if(window.getComputedStyle)
    return parseInt(getComputedStyle(this.table,'').getPropertyValue("width"));
  return (this.table.clientWidth);
};

/**
 * Returns the calculated height of the figure.
 *
 **/
draw2d.TableFigure.prototype.getHeight=function()
{
  if(this.table===null)
    return 10;
  if(window.getComputedStyle)
    return parseInt(getComputedStyle(this.table,'').getPropertyValue("height"));
  return (this.table.clientHeight);
};


/**
 * @private
 **/
draw2d.TableFigure.prototype.addColumn=function(/*:String*/ name, /*:String*/ label )
{
   var x=this.table.insertRow(this.table.rows.length);
   var y=x.insertCell(0);
   y.innerHTML=label;
   y.style.backgroundColor="gray";
   y.style.whiteSpace="nowrap";
   y.style.padding="2px";
   this.disableTextSelection(y);
   this.setDimension(this.getWidth(),this.getHeight());

   var port = new draw2d.InputFieldFigure();
   port.setWorkflow(this.workflow);
   port.setName("in_"+name);
   this.addPort(port,-5, y.offsetTop+y.clientHeight/2);
   port.paint();

   var port = new draw2d.OutputFieldFigure();
   port.setWorkflow(this.workflow);
   port.setName("out_"+name);
   this.addPort(port,y.offsetWidth+5, y.offsetTop+y.clientHeight/2);

   // repaint this figure
   port.paint();
};

/**
 * Returns the List of the connection model objects for which this Figure's model is the source. 
 * Callers must not modify the returned List. 
 * Only called if you use the MVC pattern of Draw2D
 *
 * @type draw2d.ArrayList
 * @return the List of model source connections
 * @since 0.9.15
 */
draw2d.TableFigure.prototype.getModelSourceConnections=function()
{
   return this.getModel().getForeignKeyModels();
};

