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
 * A factory for creating new EditParts. EditPartViewers can be configured with an EditPartFactory.
 * Whenever an EditPart in that viewer needs to create another EditPart, it can use the Viewer's factory.
 * The factory is also used by the viewer whenever EditPartViewer.setContents(Object)  is called.
 * 
 * @version @VERSION@
 * @author Andreas Herz
 * @constructor
 */
draw2d.EditPolicy=function(/*:String*/ policy)
{
  this.policy = policy;
};

draw2d.EditPolicy.DELETE = "DELETE";
draw2d.EditPolicy.MOVE   = "MOVE";
draw2d.EditPolicy.CONNECT= "CONNECT";
draw2d.EditPolicy.RESIZE = "RESIZE";

draw2d.EditPolicy.prototype.type="draw2d.EditPolicy";

/**
 * @type String
 **/
draw2d.EditPolicy.prototype.getPolicy=function()
{
   return this.policy;
};

