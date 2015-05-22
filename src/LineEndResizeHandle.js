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

/**
 * TODO: Split the LineEndResizeHandle to ConnectionEndResizeHandle and LineEndResizeHandle!!!!
 *
 * @version @VERSION@
 * @author Andreas Herz
 * @constructor
 * @private
 * @final
 */
draw2d.LineEndResizeHandle=function( /*:draw2d.Workflow*/ workflow)
{
  draw2d.ResizeHandle.call(this,workflow,9);
  this.setDimension(10,10);
  this.setBackgroundColor(new  draw2d.Color(0,255,0));
  this.setZOrder(10000);
};

draw2d.LineEndResizeHandle.prototype = new draw2d.ResizeHandle();
/** @private **/
draw2d.LineEndResizeHandle.prototype.type="draw2d.LineEndResizeHandle";

/**
 * Will be called after a drag and drop action.<br>
 * Sub classes can override this method to implement additional stuff. Don't forget to call
 * the super implementation via <code>Figure.prototype.onDragend.call(this);</code>
 * @private
 * 
 **/
draw2d.LineEndResizeHandle.prototype.onDragend = function()
{
  // A Connection glue at the corresponding port. Reset the position to the origin port
  // if we doesn't drop the ResizeHandle on a other port.
  //
  if(this.workflow.currentSelection instanceof draw2d.Connection)
  {
     if(this.command!==null)
        this.command.cancel();
  }
  //
  else
  {
     // An non draggable resizeHandle doesn't create a move/resize command.
     // This happens if the selected figure has set the "nonResizeable" flag.
     //
     if(this.command!==null)
        this.workflow.getCommandStack().execute(this.command);
  }
  this.command = null;
};

/**
 * Will be called if the drag and drop action beginns. You can return [false] if you
 * want avoid the that the figure can be move.
 *
 *
 * @param {int} x The x position where the mouse has been clicked in the figure
 * @param {int} y The y position where the mouse has been clicked in the figure
 * @type boolean
 **/
draw2d.LineEndResizeHandle.prototype.onDragstart = function(/*:int*/ x, /*:int*/ y)
{
  // This happens if the selected figure has set the "nonResizeable" flag
  // In this case the ResizeHandle can't be dragged. => no resize
  //
  if(!this.canDrag)
    return false;

  this.command = this.workflow.currentSelection.createCommand(new draw2d.EditPolicy(draw2d.EditPolicy.MOVE));

  return this.command!==null;
};

/**
 *
 **/
draw2d.LineEndResizeHandle.prototype.onDrag = function()
{
  var oldX = this.getX()
  var oldY = this.getY();
  draw2d.Rectangle.prototype.onDrag.call(this);
  var diffX = oldX-this.getX();
  var diffY = oldY-this.getY();

  var objPos = this.workflow.currentSelection.getEndPoint();

  var line = this.workflow.currentSelection;
  line.setEndPoint(objPos.x-diffX, objPos.y-diffY);
  line.isMoving = true;
};

/**
 * Resizehandle has ben drop on a InputPort/OutputPort.
 * @private
 **/
draw2d.LineEndResizeHandle.prototype.onDrop = function(/*:draw2d.Port*/ dropTarget)
{
  var line = this.workflow.currentSelection;
  line.isMoving=false;
  if(line instanceof draw2d.Connection)
  {
     this.command.setNewPorts(line.getSource(),dropTarget);
     this.getWorkflow().getCommandStack().execute(this.command);
  }
  this.command = null;
};
