/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.ContextmenuConnection=function(){draw2d.Connection.call(this);this.sourcePort=null;this.targetPort=null;this.lineSegments=[];this.setColor(new draw2d.Color(0,0,115));this.setLineWidth(2);};draw2d.ContextmenuConnection.prototype=new draw2d.Connection();draw2d.ContextmenuConnection.prototype.getContextMenu=function(){var menu=new draw2d.Menu();var _3f2=this;menu.appendMenuItem(new draw2d.MenuItem("Blue",null,function(){_3f2.setColor(new draw2d.Color(0,0,255));}));menu.appendMenuItem(new draw2d.MenuItem("Green",null,function(){_3f2.setColor(new draw2d.Color(0,255,0));}));menu.appendMenuItem(new draw2d.MenuItem("Silver",null,function(){_3f2.setColor(new draw2d.Color(128,128,128));}));menu.appendMenuItem(new draw2d.MenuItem("Black",null,function(){_3f2.setColor(new draw2d.Color(0,0,0));}));var _3f2=this;menu.appendMenuItem(new draw2d.MenuItem("Disconnect",null,function(){var cmd=new draw2d.CommandDelete(_3f2);_3f2.getWorkflow().getCommandStack().execute(cmd);}));return menu;};