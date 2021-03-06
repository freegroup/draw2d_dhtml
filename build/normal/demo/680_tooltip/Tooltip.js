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
draw2d.Tooltip=function(/*:String*/ msg)
{
  draw2d.Annotation.call(this,msg);
  this.setCanDrag(false);
  this.setFontSize(8);
  this.setSelectable(false); 
  this.setDeleteable(false);
  this.setBorder(new draw2d.LineBorder(1));
};

draw2d.Tooltip.prototype = new  draw2d.Annotation;
draw2d.Tooltip.prototype.type="Tooltip";


draw2d.Tooltip.prototype.createHTMLElement=function()
{
    var item = draw2d.Annotation.prototype.createHTMLElement.call(this);
    item.style.margin="3px";
    item.style.padding="3px";
    item.style.paddingLeft="25px";
	item.style.whiteSpace="nowrap";
	item.style.width="auto";
    item.style.background = "rgb(255,255,128) url(asterisk.png) no-repeat 3px 1px";
    item.style.zIndex=(draw2d.Figure.ZOrderBaseIndex+1);

    return item;
};
