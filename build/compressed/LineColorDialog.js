/**
This notice must be untouched at all times.
This is the COMPRESSED version of Draw2D
WebSite: http://www.draw2d.org
Copyright: 2006 Andreas Herz. All rights reserved.
Created: 5.11.2006 by Andreas Herz (Web: http://www.freegroup.de )
LICENSE: LGPL
**/

draw2d.LineColorDialog=function(_b26){draw2d.ColorDialog.call(this);this.figure=_b26;var _b27=_b26.getColor();this.updateH(this.rgb2hex(_b27.getRed(),_b27.getGreen(),_b27.getBlue()));};draw2d.LineColorDialog.prototype=new draw2d.ColorDialog();draw2d.LineColorDialog.prototype.type="draw2d.LineColorDialog";draw2d.LineColorDialog.prototype.onOk=function(){var _b28=this.workflow;draw2d.ColorDialog.prototype.onOk.call(this);if(typeof this.figure.setColor=="function"){_b28.getCommandStack().execute(new draw2d.CommandSetColor(this.figure,this.getSelectedColor()));if(_b28.getCurrentSelection()==this.figure){_b28.setCurrentSelection(this.figure);}}};