/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.NetworkCloudGraphicalEditorFactory=function(_99b){this.readonly=_99b;draw2d.EditPartFactory.call(this);};draw2d.NetworkCloudGraphicalEditorFactory.prototype=new draw2d.EditPartFactory();draw2d.NetworkCloudGraphicalEditorFactory.prototype.type="draw2d.NetworkCloudGraphicalEditorFactory";draw2d.NetworkCloudGraphicalEditorFactory.prototype.createEditPart=function(_99c){var _99d=null;if(_99c instanceof draw2d.ServerModel){_99d=new draw2d.ServerFigure();}else{if(_99c instanceof draw2d.StorageModel){_99d=new draw2d.StorageFigure();}else{if(_99c instanceof draw2d.SwitchModel){_99d=new draw2d.SwitchFigure();}else{if(_99c instanceof draw2d.MountModel){_99d=new draw2d.MountFigure();}else{if(_99c instanceof draw2d.NicConnectionModel){_99d=new draw2d.NicConnectionFigure();}}}}}if(_99d===null){throw "factory called with unknown model class:"+_99c.type;}_99d.setModel(_99c);if(this.readonly){_99d.setDeleteable(false);_99d.setCanDrag(false);}return _99d;};