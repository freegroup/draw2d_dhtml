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
draw2d.Start=function()
{
  this.outputPort1 = null;
  this.outputPort2 = null;
  draw2d.Node.call(this);
  this.setColor(new draw2d.Color(255,128,255));
  this.setDimension(50,50);
  this.setLineWidth(2);
};

draw2d.Start.prototype = new  draw2d.Node;
draw2d.Start.prototype.type="Start";

draw2d.Start.prototype.setWorkflow=function(/*:draw2d.Workflow*/ workflow)
{
  draw2d.Node.prototype.setWorkflow.call(this,workflow);

  if(workflow!==null)
  {
    this.outputPort1 = new draw2d.OutputPort();
    this.outputPort1.setMaxFanOut(1); // It is only possible to add "1" Connector to this port
    this.outputPort1.setWorkflow(workflow);
    this.outputPort1.setBackgroundColor(new  draw2d.Color(245,115,115));
    this.addPort(this.outputPort1,this.width,this.height/3);

    this.outputPort2 = new draw2d.OutputPort();
    this.outputPort2.setMaxFanOut(1); // It is only possible to add "1" Connector to this port
    this.outputPort2.setWorkflow(workflow);
    this.outputPort2.setBackgroundColor(new  draw2d.Color(245,115,115));
    this.addPort(this.outputPort2,this.width,this.height/3*2);
  }
};

/** 
 * Adjust the ports if the user resize the element
 *
 **/
draw2d.Start.prototype.setDimension=function(/*:int*/ w, /*:int*/ h )
{
  draw2d.Node.prototype.setDimension.call(this,w, h);

  if(this.outputPort1!==null)
  {
    this.outputPort1.setPosition(this.width, this.height/3);
    this.outputPort2.setPosition(this.width, this.height/3*2);
  }
};



/**
 * Callback method for the mouse enter event. Usefull for mouse hover-effects.
 * Sub classes can override this method to implement their own behaviour.
 **/
draw2d.Start.prototype.onMouseEnter=function()
{
  this.setColor(new draw2d.Color(255,0,155));
};


/**
 * Callback method for the mouse leave event. Usefull for mouse hover-effects.
 * 
 **/
draw2d.Start.prototype.onMouseLeave=function()
{
  this.setColor(new draw2d.Color(255,128,255));
};



