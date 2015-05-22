/* This notice must be untouched at all times.

Open-jACOB Draw2D
The latest version is available at
http://www.openjacob.org

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
 * @version 0.9.3
 * @author Andreas Herz
 * @constructor
 **/
draw2d.PropertyPanel=function(/*:String*/ contentDivId)
{
   try
   {
     if(!contentDivId)
     {
       return;
     }
     this.html = $(contentDivId);
     this.pages = new Hash();
     this.currentPage=null;
     this.pages.set(draw2d.ServerModel.prototype.type, new draw2d.ServerPropertyPage());
     this.pages.set(draw2d.StorageModel.prototype.type, new draw2d.StoragePropertyPage());
     this.pages.set(draw2d.SwitchModel.prototype.type, new draw2d.SwitchPropertyPage());
     this.pages.set(draw2d.MountModel.prototype.type, new draw2d.MountPropertyPage());
     this.pages.set(draw2d.NicConnectionModel.prototype.type, new draw2d.NicPropertyPage());
     
     this.defaultPage = new draw2d.DefaultPropertyPage();
     this.onSelectionChanged(null,null);
  }
  catch(e)
  {
     pushErrorStack(e,"draw2d.PropertyPanel=function(/*:String*/ contentDivId)");
  }
};

/** @private **/
draw2d.PropertyPanel.prototype.type="draw2d.PropertyPanel";


/**
 * Set the new dimension of the property panel
 **/
draw2d.PropertyPanel.prototype.setDimension=function(/*:int*/ w, /*:int*/ h)
{
  this.html.style.width  = w+"px";
  this.html.style.height = h+"px";
  this.pages.values().each( function (page)
  {
     page.onResize(w,h);
  });
};

/**
 *
 **/
draw2d.PropertyPanel.prototype.onSelectionChanged=function(/*:draw2d.Figure*/ figure, /*:draw2d.AbstractObjectModel*/ model)
{
   try
   {
	   if(this.currentPage!==null)
	   {
	      this.currentPage.deinit();
	      this.html.removeChild(this.currentPage.getHTMLElement());
	      this.currentPage = null;
	   }
	
	   this.html.innerHTML="";
	   if(model!==null)
	   {
	      var page = this.pages.get(model.type);
	      if(page)
	      {
	        this.html.appendChild(page.getHTMLElement());
	        page.init(model);
	        this.currentPage = page;
	      }
	   }
	   else
	   {
	      this.html.appendChild(this.defaultPage.getHTMLElement());
	      this.defaultPage.init(editor.getModel());
	      this.currentPage = this.defaultPage;
	   }
   }
   catch(e)
   {
	   alert(e);
   }
};
