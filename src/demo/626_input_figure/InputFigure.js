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
draw2d.InputFigure=function()
{
  this.outputPort = null;
  draw2d.Node.call(this);
  this.setDimension(150,50);
  this.setResizeable(false);
  this.setBackgroundColor(new draw2d.Color(100,100,100));
};

draw2d.InputFigure.prototype = new draw2d.Node();
draw2d.InputFigure.prototype.type="InputFigure";

draw2d.InputFigure.prototype.setWorkflow=function(/*:draw2d.Workflow*/ workflow)
{
  draw2d.Node.prototype.setWorkflow.call(this,workflow);

  if(workflow!==null && this.outputPort===null)
  {
    this.outputPort = new draw2d.OutputPort();
    this.outputPort.setWorkflow(workflow);
    this.addPort(this.outputPort,this.width,this.height/2);
  }
};

draw2d.InputFigure.prototype.createHTMLElement=function()
{
    var item = draw2d.Node.prototype.createHTMLElement.call(this);

	this.label = document.createElement("div");
	this.label.innerHTML="Input Field";
	this.label.style.fontSize="12px";
	this.label.style.color="white";
	this.label.style.margin="5px";
	item.appendChild(this.label);
	
	
	this.input = document.createElement('input');
	this.input.style.width="80px";
	this.input.style.marginLeft="5px";
	this.input.style.zIndex=''+draw2d.Figure.ZOrderBaseIndex+1;
	var fnTemp = function(e){
	   // do nothing. Just catch the event and prevent bubbling.
	   // Now the Input element can fetch the focus.
	   e.stopPropagation();
	}
	
	if(this.input.addEventListener){
        this.input.addEventListener("mousedown", fnTemp, false);
    } 
    else if (this.input.attachEvent) {
        this.input.attachEvent("onmousedown", fnTemp);
    } 
    
	item.appendChild(this.input);
	
    return item;
};
