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
 * A factory for creating new EditParts. EditPartViewers can be configured with an EditPartFactory.
 * Whenever an EditPart in that viewer needs to create another EditPart, it can use the Viewer's factory.
 * The factory is also used by the viewer whenever EditPartViewer.setContents(Object)  is called.
 * 
 * @version 0.9.31
 * @author Andreas Herz
 * @constructor
 */
draw2d.EditPartFactory=function()
{
};

draw2d.EditPartFactory.prototype.type="draw2d.EditPartFactory";

/**
 * Creates a new EditPart given the specified context and model.
 * @param {draw2d.EditPart} context - The context in which the EditPart is being created, such as its parent.
 * @param {Object} mode - the model of the EditPart being created
 *
 * @type draw2d.Figure
 **/
draw2d.EditPartFactory.prototype.createEditPart=function( /*:draw2d.AbstractObjectModel*/ model)
{
};

