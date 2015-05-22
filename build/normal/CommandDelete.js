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
 * 
 * @version 0.9.31
 * @author Andreas Herz
 * @constructor
 */
draw2d.CommandDelete=function(/*:draw2d.Figure*/ figure)
{
   draw2d.Command.call(this,"delete figure");
   this.parent   = figure.parent; // CompartmentFigure
   this.figure   = figure;
   /** @private */
   this.workflow = figure.workflow;
   /** @private */
   this.connections = null;
   /** @private */
   this.compartmentDeleteCommands = null; 
};

draw2d.CommandDelete.prototype = new draw2d.Command();
/** @private **/
draw2d.CommandDelete.prototype.type="draw2d.CommandDelete";

/**
 * Execute the command the first time
 * 
 **/
draw2d.CommandDelete.prototype.execute=function()
{
   this.redo();
};

/**
 * Undo the command
 *
 **/
draw2d.CommandDelete.prototype.undo=function()
{
    if(this.figure instanceof draw2d.CompartmentFigure)
    {
       for(var i=0; i<this.compartmentDeleteCommands.getSize();i++)
       {
         var deleteCommand = this.compartmentDeleteCommands.get(i);
         // add the figure to the compartment figure
         this.figure.addChild(deleteCommand.figure);
         // add the figure to the workflow
         this.workflow.getCommandStack().undo();
       }
    }
    this.workflow.addFigure(this.figure);
    if(this.figure instanceof draw2d.Connection)
       this.figure.reconnect();

    this.workflow.setCurrentSelection(this.figure);
    if(this.parent!==null)
      this.parent.addChild(this.figure);
    for (var i = 0; i < this.connections.getSize(); ++i)
    {
       this.workflow.addFigure(this.connections.get(i));
       this.connections.get(i).reconnect();
    }
};

/** Redo the command after the user has undo this command
 *
 **/
draw2d.CommandDelete.prototype.redo=function()
{
    // We must delete all children of this figure if this element an
    // compartment figure.
    //
    if(this.figure instanceof draw2d.CompartmentFigure)
    {
      if(this.compartmentDeleteCommands===null)
      {
         this.compartmentDeleteCommands = new draw2d.ArrayList();
         var children = this.figure.getChildren().clone();
         for(var i=0; i<children.getSize();i++)
         {
           var child = children.get(i);
           this.figure.removeChild(child);
           var deleteCommand = new draw2d.CommandDelete(child);
           this.compartmentDeleteCommands.add(deleteCommand);
           this.workflow.getCommandStack().execute(deleteCommand);
         }
      }
      else
      {
         for(var i=0; i<this.compartmentDeleteCommands.getSize();i++)
         {
            this.workflow.redo();
         }
      }
    }

    this.workflow.removeFigure(this.figure);
    this.workflow.setCurrentSelection(null);
    if(this.figure instanceof draw2d.Node && this.connections===null)
    {
      this.connections = new draw2d.ArrayList();
      var ports = this.figure.getPorts();
      for(var i=0; i<ports.getSize(); i++)
      {
        var port = ports.get(i);
        // Do NOT add twice the same connection if it is linking ports from the same node
        for (var c = 0, c_size = port.getConnections().getSize() ; c< c_size ; c++)
        {
            if(!this.connections.contains(port.getConnections().get(c)))
            {
              this.connections.add(port.getConnections().get(c));
            }
        }
      }
    }

   if(this.connections===null)
      this.connections = new draw2d.ArrayList();

    // remove this figure from the parent CompartmentFigure
    //
    if(this.parent!==null)
      this.parent.removeChild(this.figure);

   for (var i = 0; i < this.connections.getSize(); ++i)
   {
      this.workflow.removeFigure(this.connections.get(i));
   }
};
