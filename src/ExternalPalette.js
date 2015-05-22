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
 * Base class for elements which can be inserted into an external
 * tool palette.<br>
 * Objects of this class can be drag&drop around the hole web page. An event will
 * be fired if the element has been dropped into the canvas.<br>
 * Inherited classes should override the drop event method to implement
 * special behaviour.
 *
 * @version @VERSION@
 * @author Andreas Herz
 * @constructor
 * @since 0.9.18
 */
draw2d.ExternalPalette=function(/*:draw2d.Workflow*/ workflow, /*:String*/ divId)
{
  /** @private **/
  this.html = document.getElementById(divId);
  /** @private **/
  this.workflow = workflow;
  /** @private **/
  this.parts = new draw2d.ArrayList();
};

/** @private **/
draw2d.ExternalPalette.prototype.type="draw2d.ExternalPalette";


/**
 * @private
 * @final
 **/
draw2d.ExternalPalette.prototype.getHTMLElement=function()
{
  return this.html;
};



/**
 *
 **/
draw2d.ExternalPalette.prototype.addPalettePart=function(/*:draw2d.AbstractPalettePart*/ part)
{
  if(!(part instanceof draw2d.AbstractPalettePart))
    throw "parameter is not instanceof [draw2d.AbstractPalettePart]";

  this.parts.add(part);
  this.html.appendChild(part.getHTMLElement());
  part.setEnviroment(this.workflow, this);
};
