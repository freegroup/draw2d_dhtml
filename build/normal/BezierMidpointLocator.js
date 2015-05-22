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
 * @class Controls the location of an draw2d.Figure.
 *
 * @version 0.9.31
 * @author Andreas Herz
 * @since  0.9.23
 * @constructor
 */
draw2d.BezierMidpointLocator=function(/*:draw2d.Connection*/ connection)
{
  draw2d.ConnectionLocator.call(this,connection);
};

draw2d.BezierMidpointLocator.prototype = new  draw2d.ConnectionLocator;
/** @private **/
draw2d.BezierMidpointLocator.prototype.type="draw2d.BezierMidpointLocator";


/**
 * Relocates the given draw2d.Figure
 *
 * @param {draw2d.Figure} target - The figure to relocate
 **/
draw2d.BezierMidpointLocator.prototype.relocate=function(/*:draw2d.Figure*/ target)
{
   var conn = this.getConnection();
   var p = new draw2d.Point();
   var points = conn.getPoints();
   var index = Math.floor((points.getSize() -2) / 2);
   if (points.getSize() <= index+1)
      return; 

   var p1 = points.get(index);
   var p2 = points.get(index + 1);

   p.x = (p2.x - p1.x) / 2 + p1.x +5;
   p.y = (p2.y - p1.y) / 2 + p1.y +5;

   target.setPosition(p.x,p.y);
};
