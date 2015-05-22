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
 * @class A Node is the base class for all figures which can have {@link draw2d.Port}s. A {@link draw2d.Port} is the 
 * anchor for a {@link draw2d.Connection} line.<br><br><b>Hint:</b> A {@link draw2d.Port} is a green dot which can be draged and droped over another port.<br>
 *
 * @version 0.9.31
 * @author Andreas Herz
 * @constructor
 */
draw2d.Node=function()
{
  /** @private **/
  this.bgColor = null;
  /** @private **/
  this.lineColor = new  draw2d.Color(128,128,255);
  /** @private **/
  this.lineStroke=1;
  /** @private*/
  this.ports = new draw2d.ArrayList();
  draw2d.Figure.call(this);
};

draw2d.Node.prototype = new draw2d.Figure();
/** @private **/
draw2d.Node.prototype.type="draw2d.Node";


/**
 * @private
 **/
draw2d.Node.prototype.dispose=function()
{
  for(var i=0;i<this.ports.getSize();i++)
  {
     this.ports.get(i).dispose();
  }
  this.ports = null;
  draw2d.Figure.prototype.dispose.call(this);
};

/**
 * @private
 **/
draw2d.Node.prototype.createHTMLElement=function()
{
    var item =draw2d.Figure.prototype.createHTMLElement.call(this);
    item.style.width="auto";
    item.style.height="auto";
    item.style.margin="0px";
    item.style.padding="0px";
    if(this.lineColor!==null)
      item.style.border= this.lineStroke+"px solid "+this.lineColor.getHTMLStyle();
    item.style.fontSize="1px";
    if(this.bgColor!==null)
      item.style.backgroundColor=this.bgColor.getHTMLStyle();
    return item;
};

/**
 * @private
 **/
draw2d.Node.prototype.paint=function()
{
  draw2d.Figure.prototype.paint.call(this);

  for(var i=0;i<this.ports.getSize();i++)
  {
     this.ports.get(i).paint();
  }
};

/**
 * Return all ports of the node.
 *
 * @type  draw2d.ArrayList
 **/
draw2d.Node.prototype.getPorts=function()
{
  return this.ports;
};


/**
 * Return all input ports of the node.
 *
 * @since 0.9.18
 * @type  draw2d.ArrayList
 **/
draw2d.Node.prototype.getInputPorts=function()
{
  var result = new draw2d.ArrayList();
  for(var i=0;i<this.ports.getSize();i++)
  {
   var port = this.ports.get(i);
   if(port instanceof draw2d.InputPort)
      result.add(port);
  }
  return result;
};

/**
 * Return all output ports of the node.
 *
 * @since 0.9.18
 * @type  draw2d.ArrayList
 **/
draw2d.Node.prototype.getOutputPorts=function()
{
  var result = new draw2d.ArrayList();
  for(var i=0;i<this.ports.getSize();i++)
  {
   var port = this.ports.get(i);
   if(port instanceof draw2d.OutputPort)
      result.add(port);
  }
  return result;
};

/**
 * Return the port with the corresponding name.
 *
 * @see draw2d.Port#getName
 * @see draw2d.Port#setName
 * @param {String} portName The name of the port to return.
 * @return Returns the port with the hands over name or null.
 * @type draw2d.Port
 **/
draw2d.Node.prototype.getPort= function(/*:String*/ portName)
{
  if(this.ports===null)
    return null;
  for(var i=0;i<this.ports.getSize();i++)
  {
   var port = this.ports.get(i);
   if(port.getName() == portName)
      return port;
  }
};

/**
 * Return the input port with the corresponding name.
 *
 * @see draw2d.Port#getName
 * @see draw2d.Port#setName
 * @param {String} portName The name of the port to return.
 * @return Returns the port with the hands over name or null.
 * @since 0.9.18
 * @type draw2d.InputPort
 **/
draw2d.Node.prototype.getInputPort= function(/*:String*/ portName)
{
  if(this.ports===null)
    return null;
  for(var i=0;i<this.ports.getSize();i++)
  {
   var port = this.ports.get(i);
   if(port.getName() == portName && port instanceof draw2d.InputPort)
      return port;
  }
};

/**
 * Return the output port with the corresponding name.
 *
 * @see draw2d.Port#getName
 * @see draw2d.Port#setName
 * @param {String} portName The name of the port to return.
 * @return Returns the port with the hands over name or null.
 * @since 0.9.18
 * @type draw2d.OutputPort
 **/
draw2d.Node.prototype.getOutputPort= function(/*:String*/ portName)
{
  if(this.ports===null)
    return null;
  for(var i=0;i<this.ports.getSize();i++)
  {
   var port = this.ports.get(i);
   if(port.getName() == portName && port instanceof draw2d.OutputPort)
      return port;
  }
};

/**
 * Add a port to this node at the given position.<br>
 *
 * @param {draw2d.Port} port The new port to add.
 * @param {int}  x The x position.
 * @param {int}  y The y position.
 **/
draw2d.Node.prototype.addPort=function(/*:draw2d.Port*/ port, /*:int*/ x, /*:int*/y)
{
  this.ports.add(port);
  port.setOrigin(x,y);
  port.setPosition(x,y);
  port.setParent(this);
  // You can't delete a port with the [DEL] key if a port is a child of a node
  port.setDeleteable(false);

  this.html.appendChild(port.getHTMLElement());
  if(this.workflow!==null)
  {
    this.workflow.registerPort(port);
  }
};

/**
 * Removes a port and all related connections from this node.<br>
 *
 * @param {draw2d.Port} port The port to remove.
 *
 **/
draw2d.Node.prototype.removePort=function(/*:draw2d.Port*/ port)
{
  if(this.ports!==null)
    this.ports.remove(port);
  try
  {
    this.html.removeChild(port.getHTMLElement());
  }
  catch(exc)
  {
    // es kann sein, dass es noch nicht eingeh�ngt wurde
  }
  if(this.workflow!==null)
    this.workflow.unregisterPort(port);

  // remove the related connections of the port too.
  var connections = port.getConnections();
  for (var i = 0; i < connections.getSize(); ++i)
  {
    this.workflow.removeFigure(connections.get(i));
  }
};

/**
 * @private
 **/
draw2d.Node.prototype.setWorkflow= function(/*:draw2d.Workflow*/ workflow)
{
  var oldWorkflow = this.workflow;
  draw2d.Figure.prototype.setWorkflow.call(this,workflow);

  if(oldWorkflow!==null)
  {
      for(var i=0;i<this.ports.getSize();i++)
      {
         oldWorkflow.unregisterPort(this.ports.get(i));
      }
  }

  if(this.workflow!==null)
  {
      for(var i=0;i<this.ports.getSize();i++)
      {
         this.workflow.registerPort(this.ports.get(i));
      }
  }
};

/**
 * Set the background color of the node.
 *
 * @param {draw2d.Color} color
 **/
draw2d.Node.prototype.setBackgroundColor= function(/*:draw2d.Color*/ color)
{
  this.bgColor = color;
  if(this.bgColor!==null)
    this.html.style.backgroundColor=this.bgColor.getHTMLStyle();
  else
    this.html.style.backgroundColor="transparent";
};

/**
 * Get the background color of the node.
 *
 * @type draw2d.Color
 **/
draw2d.Node.prototype.getBackgroundColor= function()
{
  return this.bgColor;
};

/**
 * @see draw2d.Figure#setBorder
 * @deprecated
 **/
draw2d.Node.prototype.setColor= function(/*:draw2d.Color*/ color)
{
  this.lineColor = color;
  if(this.lineColor!==null)
     this.html.style.border= this.lineStroke+"px solid "+this.lineColor.getHTMLStyle();
  else
     this.html.style.border= "0px";
};


/**
 * @see draw2d.Figure#setBorder
 * @deprecated use setBorder instead
 **/
draw2d.Node.prototype.setLineWidth=function(/*:int*/ w)
{
  this.lineStroke=w;
  if(this.lineColor!==null)
     this.html.style.border= this.lineStroke+"px solid "+this.lineColor.getHTMLStyle();
  else
     this.html.style.border= "0px";
};

/**
 * Returns the List of the connection model objects for which this Figure's model is the source. 
 * Callers must not modify the returned List. <br>
 * Only called if you use the MVC pattern of Draw2D<br>
 *
 * @type draw2d.ArrayList
 * @return the List of model source connections
 * @since 0.9.15
 * @abstract
 */
draw2d.Node.prototype.getModelSourceConnections=function()
{
   throw "You must override the method [Node.prototype.getModelSourceConnections]"
};

/**
 * Only called if you use the MVC pattern of Draw2D<br>
 * @since 0.9.15
 * @private
 * @final
 */
draw2d.Node.prototype.refreshConnections=function()
{
   // notify the view that the element has been changed
   if(this.workflow!==null)
      this.workflow.refreshConnections(this);
};
