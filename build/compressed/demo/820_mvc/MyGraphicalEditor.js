/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.MyGraphicalEditor=function(id,model){this.model=model;draw2d.GraphicalEditor.call(this,id);};draw2d.MyGraphicalEditor.prototype=new draw2d.GraphicalEditor();draw2d.MyGraphicalEditor.prototype.type="draw2d.MyGraphicalEditor";draw2d.MyGraphicalEditor.prototype.initializeGraphicalViewer=function(){this.getGraphicalViewer().setModel(this.model);this.getGraphicalViewer().setEditPartFactory(new draw2d.MyGraphicalEditorFactory());};