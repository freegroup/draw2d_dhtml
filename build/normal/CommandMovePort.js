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
 * Base class for the undo redo support in the FreeGroup Draw2D 0.9.31 framework.
 *
 * @version 0.9.31
 * @author Andreas Herz
 * @constructor
 */
draw2d.CommandMovePort=function(/*:draw2d.Line*/ port)
{
   draw2d.Command.call(this,"move port");
   this.port = port;
};

draw2d.CommandMovePort.prototype = new draw2d.Command();
/** @private **/
draw2d.CommandMovePort.prototype.type="draw2d.CommandMovePort";


/**
 * Execute the command the first time.
 * Sup-classes must implement this method.
 **/
draw2d.CommandMovePort.prototype.execute=function()
{
  this.port.setAlpha(1.0);

  // 1.) Restore the old Position of the node
  //
  this.port.setPosition(this.port.originX, this.port.originY);

  // 2.) Remove the bounding line from the canvas
  //
  this.port.parentNode.workflow.hideConnectionLine();
};

/**
 * Undo the command.
 * Sup-classes must implement this method.
 *
 **/
draw2d.CommandMovePort.prototype.undo=function()
{
};

/** 
 * Redo the command after the user has undo this command.
 * Sup-classes must implement this method.
 *
 **/
draw2d.CommandMovePort.prototype.redo=function()
{
};

/**
 * Execute the command the first time
 * 
 **/
draw2d.CommandMovePort.prototype.setPosition=function(/*:int*/ x, /*:int*/ y)
{
};
