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
 * @since 0.9.15
 * @constructor
 */
draw2d.GraphicalViewer=function(/*:String*/ id)
{
   try
   {
    draw2d.Workflow.call(this,id);
  
    this.factory = null; //draw2d.EditPartFactory
    this.model   = null; //draw2d.ArrayList<AbstractObjectModel>
    this.initDone= false;
  }
  catch(e)
  {
     pushErrorStack(e,"draw2d.GraphicalViewer=function(/*:String*/ id)");
  }
};


draw2d.GraphicalViewer.prototype = new draw2d.Workflow();
/** @private **/
draw2d.GraphicalViewer.prototype.type="draw2d.GraphicalViewer";


draw2d.GraphicalViewer.prototype.setEditPartFactory=function(/*:draw2d.EditPartFactory*/ factory )
{
   this.factory = factory;
   this.checkInit();
};

draw2d.GraphicalViewer.prototype.setModel=function(/*:draw2d.AbstractObjectModel*/ model )
{
  try
  {
    if(model instanceof draw2d.AbstractObjectModel)
    {
      this.model = model;
      this.checkInit();
      this.model.addPropertyChangeListener(this);
    }
    else
    {
      alert("Invalid model class type:"+model.type);
    }
  }
  catch(e)
  {
      pushErrorStack(e,"draw2d.GraphicalViewer.prototype.setModel=function(/*:draw2d.AbstractObjectModel*/ model )");
  }
};

draw2d.GraphicalViewer.prototype.propertyChange=function( /*:draw2d.PropertyChangeEvent*/ event)
{
  switch(event.property)
  {
    case draw2d.AbstractObjectModel.EVENT_ELEMENT_REMOVED:
        var figure = this.getFigure(event.oldValue.getId())
        this.removeFigure(figure);
        break;
    case draw2d.AbstractObjectModel.EVENT_ELEMENT_ADDED:
        var figure = this.factory.createEditPart(event.newValue);
        figure.setId(event.newValue.getId());
        this.addFigure(figure);
        this.setCurrentSelection(figure);
        break;
   }
};

/**
 *
 * @private
 **/
draw2d.GraphicalViewer.prototype.checkInit=function()
{
    if(this.factory !==null && this.model!==null && this.initDone==false)
    {
      try
      {
          var children = this.model.getModelChildren();
          var count = children.getSize();
          for(var i=0;i<count;i++)
          {
            var child = children.get(i);
            var figure = this.factory.createEditPart(child);
            figure.setId(child.getId());
            this.addFigure(figure);
          }
      }
      catch(e)
      {
          pushErrorStack(e,"draw2d.GraphicalViewer.prototype.checkInit=function()[addFigures]");
      }

      try
      {
        // all figures are added. create now the transistions between these figures
        //
        var figures = this.getDocument().getFigures();
        var count = figures.getSize();
        for(var i=0;i<count;i++)
        {
          var figure = figures.get(i);
          if(figure instanceof draw2d.Node)
          {
            this.refreshConnections(figure);
          }
        }
      }
      catch(e)
      {
          pushErrorStack(e,"draw2d.GraphicalViewer.prototype.checkInit=function()[refreshConnections]");
      }
    }
};

/**
 *
 * @private
 **/
draw2d.GraphicalViewer.prototype.refreshConnections=function(/*:draw2d.Node*/ node )
{
   try
   {
     var required = new draw2d.ArrayList();

     // Create all missing connections
     //
     var modelConnect = node.getModelSourceConnections();

     var count = modelConnect.getSize();
     for(var i=0;i<count;i++)
     {
        var lineModel = modelConnect.get(i);
        required.add(lineModel.getId());
        var lineFigure= this.getLine(lineModel.getId());
        if(lineFigure===null)
        {
           lineFigure = this.factory.createEditPart(lineModel);
           var sourceModel = lineModel.getSourceModel();
           var targetModel = lineModel.getTargetModel();

           var sourceFigure= this.getFigure(sourceModel.getId());
           var targetFigure= this.getFigure(targetModel.getId());

           var sourcePort = sourceFigure.getOutputPort(lineModel.getSourcePortName());
           var targetPort = targetFigure.getInputPort(lineModel.getTargetPortName());

           lineFigure.setTarget(targetPort);
           lineFigure.setSource(sourcePort);
           lineFigure.setId(lineModel.getId());
           this.addFigure(lineFigure);
           this.setCurrentSelection(lineFigure);
        }
     }

     // remove all obsolet connections
     //
     var ports = node.getOutputPorts();
     count = ports.getSize();
     for(var i=0; i< count;i++)
     {
        var connections = ports.get(i).getConnections();
        var conCount = connections.getSize();
        for(var ii=0;ii<conCount;ii++)
        {
           var connection = connections.get(ii);
           if(!required.contains(connection.getId()))
           {
              this.removeFigure(connection);
              required.add(connection.getId());
           }
        }
     }
  }
  catch(e)
  {
      pushErrorStack(e,"draw2d.GraphicalViewer.prototype.refreshConnections=function(/*:draw2d.Node*/ node )");
  }
};
