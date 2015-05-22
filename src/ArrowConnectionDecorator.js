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
 *
 * @version @VERSION@
 * @author Andreas Herz
 * @constructor
 */
draw2d.ArrowConnectionDecorator=function(/*:int*/ lenght, /*:int*/ width)
{

  draw2d.ConnectionDecorator.call(this);
  if(lenght === undefined || lenght <1)
    this.lenght = 15;

  if(width ===undefined || width<1)
    this.width  = 10
};

draw2d.ArrowConnectionDecorator.prototype = new draw2d.ConnectionDecorator();
draw2d.ArrowConnectionDecorator.prototype.type="draw2d.ArrowConnectionDecorator";

/**
 * Draw a filled arrow decoration.
 * It's not your work to rotate the arrow. The Draw2D do this for you.
 * <pre>
 *                        ---+ [length , width/2]
 *                 -------   |
 * [3,0]   --------          |
 *     +---                  |==========================
 *         --------          |
 *                 -------   |
 *                        ---+ [lenght ,-width/2]
 * 
 *</pre>
 **/
draw2d.ArrowConnectionDecorator.prototype.paint=function(/*:draw2d.Graphics*/ g)
{
  // draw the background
  //
  if(this.backgroundColor!==null)
  {
     g.setColor(this.backgroundColor);
     //g.fillPolygon([3,20,20,3],[0,5,-5,0]);
     g.fillPolygon([3, this.lenght, this.lenght, 3], [0, (this.width/2), -(this.width/2), 0]);
  }

  // draw the border
  g.setColor(this.color);
  g.setStroke(1);
  // g.drawPolygon([3,20,20,3],[0,5,-5,0]);
  g.drawPolygon([3, this.lenght, this.lenght, 3], [0, (this.width/2), -(this.width/2), 0]);    
};

/**
 * Change the dimension of the arrow
 *
 * @param {int} w The new width of the arrow
 * @param {int} h The new height of the arrow
 * @since 0.9.21
 **/
draw2d.ArrowConnectionDecorator.prototype.setDimension=function(/*:int*/ l, /*:int*/ width)
{
    this.width=w;
    this.lenght=l;
};

