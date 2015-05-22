/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.MyGraphicalEditorFactory=function(){draw2d.EditPartFactory.call(this);};draw2d.MyGraphicalEditorFactory.prototype=new draw2d.EditPartFactory();draw2d.MyGraphicalEditorFactory.prototype.type="draw2d.MyGraphicalEditorFactory";draw2d.MyGraphicalEditorFactory.prototype.createEditPart=function(_5a9){var _5aa;if(_5a9 instanceof draw2d.TableModel){_5aa=new draw2d.TableFigure();}if(_5a9 instanceof draw2d.ForeignKeyModel){_5aa=new draw2d.ForeignKeyFigure();}if(_5aa===null){alert("factory called with unknown model class:"+_5a9.type);}_5aa.setModel(_5a9);return _5aa;};