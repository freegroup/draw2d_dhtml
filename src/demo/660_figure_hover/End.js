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
draw2d.End=function()
{
  this.inputPort1 = null;
  this.inputPort2 = null;
  draw2d.Node.call(this);
  this.setDimension(50,50);
  this.setBackgroundColor(new draw2d.Color(255,128,255));
};

draw2d.End.prototype = new  draw2d.Node;
draw2d.End.prototype.type="End";

draw2d.End.prototype.setWorkflow=function(/*:draw2d.Workflow*/ workflow)
{
  draw2d.Node.prototype.setWorkflow.call(this,workflow);

  if(workflow!==null)
  {
    // create a new Port element. Ports can be children of "Node" elements.
    // (Inheritance: End->Image->Node->Figure->Object)
    this.inputPort1 = new draw2d.InputPort();
    this.inputPort1.setWorkflow(workflow);
    this.inputPort1.setBackgroundColor(new  draw2d.Color(115,115,245));
    this.addPort(this.inputPort1,0,this.height/3);

    this.inputPort2 = new draw2d.InputPort();
    this.inputPort2.setWorkflow(workflow);
    this.inputPort2.setBackgroundColor(new  draw2d.Color(115,115,245));
    this.addPort(this.inputPort2,0,this.height/3*2);

  }
};


draw2d.End.prototype.setDimension=function(/*:int*/ w, /*:int*/ h )
{
  draw2d.Node.prototype.setDimension.call(this,w, h);

  if(this.inputPort1!==null)
  {
    this.inputPort1.setPosition(0, this.height/3);
    this.inputPort2.setPosition(0, this.height/3*2);
  }
};

/**
 * Callback method for the mouse enter event. Usefull for mouse hover-effects.
 * Sub classes can override this method to implement their own behaviour.
 **/
draw2d.End.prototype.onMouseEnter=function()
{
  this.setBackgroundColor(new draw2d.Color(255,185,255));
};


/**
 * Callback method for the mouse leave event. Usefull for mouse hover-effects.
 * 
 **/
draw2d.End.prototype.onMouseLeave=function()
{
  this.setBackgroundColor(new draw2d.Color(255,128,255));

};

