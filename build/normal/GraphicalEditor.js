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
 * @since 0.9.16
 * @constructor
 */
draw2d.GraphicalEditor=function(/*:String*/ id)
{
  try
  {
    this.view =  new draw2d.GraphicalViewer(id);

    this.initializeGraphicalViewer();
  }
  catch(e)
  {
     pushErrorStack(e,"draw2d.GraphicalEditor=function(/*:String*/ id)");
  }
};

draw2d.GraphicalEditor.prototype.type="draw2d.GraphicalEditor";

/**
 * Called to configure the graphical viewer before it receives its contents.  This is
 * where the root editpart should be configured. Subclasses should extend or override this
 * method as needed.
 **/
draw2d.GraphicalEditor.prototype.initializeGraphicalViewer=function()
{
};


/**
 * Returns the graphical viewer.
 * @type draw2d.GraphicalViewer
 **/
draw2d.GraphicalEditor.prototype.getGraphicalViewer=function()
{
   return this.view;
};



/**
 * Execute the command and add them to the undo/redo stack
 * @since 0.9.24
 **/
draw2d.GraphicalEditor.prototype.executeCommand=function(/*:draw2d.Command*/ command)
{
  this.view.getCommandStack().execute(command);
};

 
